import { readFile } from 'fs/promises'
import { join } from 'path'
import { ImageResponse } from 'next/og'

export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

export default async function Icon() {
  const imagePath = join(process.cwd(), 'public', 'gimini_pavan.png')
  const buffer = await readFile(imagePath)
  const dataUrl = `data:image/png;base64,${buffer.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '100%',
          borderRadius: '20%',
          overflow: 'hidden',
        }}
      >
        <img
          src={dataUrl}
          width={32}
          height={32}
          style={{ objectFit: 'cover', borderRadius: '20%' }}
          alt=""
        />
      </div>
    ),
    { ...size }
  )
}
