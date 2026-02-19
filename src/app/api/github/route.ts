import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const GITHUB_API = "https://api.github.com";

export type GitHubActivity = {
  user: { login: string; publicRepos: number; contributions: number };
  recentCommits: { repo: string; message: string; date: string; url: string }[];
};

function authHeaders(): HeadersInit {
  const token = process.env.GITHUB_TOKEN;
  const headers: HeadersInit = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
  };
  if (token) {
    (headers as Record<string, string>)["Authorization"] = `Bearer ${token}`;
  }
  return headers;
}

export async function GET() {
  const username = process.env.GITHUB_USERNAME || "pavan20250";
  const headers = authHeaders();
  const fetchOpts = { headers, cache: "no-store" as RequestCache };

  try {
    const userRes = await fetch(`${GITHUB_API}/users/${username}`, fetchOpts);
    if (!userRes.ok) {
      return NextResponse.json(
        { error: "GitHub user not found", status: userRes.status },
        { status: userRes.status }
      );
    }
    const user = await userRes.json();

    const recentCommits: GitHubActivity["recentCommits"] = [];
    const reposRes = await fetch(
      `${GITHUB_API}/users/${username}/repos?sort=updated&per_page=10&type=owner`,
      fetchOpts
    );

    if (!reposRes.ok) {
      return NextResponse.json({
        user: {
          login: user.login,
          publicRepos: user.public_repos ?? 0,
          contributions: 0,
        },
        recentCommits: [],
      });
    }

    let repos: { name: string; full_name: string }[] = [];
    try {
      repos = await reposRes.json();
    } catch {
      // ignore
    }
    if (!Array.isArray(repos)) repos = [];

    let contributions = 0;
    const token = process.env.GITHUB_TOKEN;
    if (token) {
      const to = new Date();
      const from = new Date(to);
      from.setFullYear(from.getFullYear() - 1);
      const graphqlRes = await fetch(`${GITHUB_API}/graphql`, {
        method: "POST",
        headers: {
          ...(headers as Record<string, string>),
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: `query($login: String!, $from: DateTime!, $to: DateTime!) {
            user(login: $login) {
              contributionsCollection(from: $from, to: $to) {
                contributionCalendar { totalContributions }
              }
            }
          }`,
          variables: {
            login: username,
            from: from.toISOString(),
            to: to.toISOString(),
          },
        }),
        cache: "no-store",
      });
      if (graphqlRes.ok) {
        try {
          const json = (await graphqlRes.json()) as {
            data?: { user?: { contributionsCollection?: { contributionCalendar?: { totalContributions: number } } } };
          };
          contributions =
            json?.data?.user?.contributionsCollection?.contributionCalendar?.totalContributions ?? 0;
        } catch {
          // ignore
        }
      }
    }

    const seenShas = new Set<string>();
    for (const repo of repos) {
      if (recentCommits.length >= 3) break; // limit to last 3 commits
      const commitsRes = await fetch(
        `${GITHUB_API}/repos/${repo.full_name}/commits?per_page=3`,
        fetchOpts
      );
      if (!commitsRes.ok) continue; // 409 = empty repo, 404 = no access
      let commits: unknown[] = [];
      try {
        commits = await commitsRes.json();
      } catch {
        continue;
      }
      if (!Array.isArray(commits)) continue;
      for (const raw of commits) {
        const c = raw as {
          sha?: string;
          html_url?: string;
          commit?: {
            message?: string;
            author?: { date?: string };
            committer?: { date?: string };
          };
        };
        if (recentCommits.length >= 3) break;
        const sha = c?.sha ?? "";
        if (!sha || seenShas.has(sha)) continue;
        seenShas.add(sha);
        const msg = c?.commit?.message ?? "";
        const dateStr = c?.commit?.author?.date ?? c?.commit?.committer?.date ?? "";
        recentCommits.push({
          repo: repo.name,
          message: String(msg).split("\n")[0].trim().slice(0, 56),
          date: dateStr.slice(0, 10),
          url: c?.html_url ?? "#",
        });
      }
    }

    const data: GitHubActivity = {
      user: {
        login: user.login,
        publicRepos: user.public_repos ?? 0,
        contributions,
      },
      recentCommits,
    };

    return NextResponse.json(data);
  } catch (e) {
    console.error("GitHub API error:", e);
    return NextResponse.json(
      { error: "Failed to fetch GitHub activity" },
      { status: 500 }
    );
  }
}
