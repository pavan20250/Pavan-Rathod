"use client";
import { useEffect, useRef } from 'react';

const VisitorTracker = () => {
  const hasTracked = useRef(false);
  const lastTrackTime = useRef(0);
  const TRACKING_COOLDOWN = 5 * 60 * 1000; // 5 minutes between tracking attempts

  useEffect(() => {
    const trackVisitor = async () => {
      const now = Date.now();
      
      // Prevent tracking if we've already tracked this session or too recently
      if (hasTracked.current || (now - lastTrackTime.current) < TRACKING_COOLDOWN) {
        return;
      }
      
      hasTracked.current = true;
      lastTrackTime.current = now;
      try {
        // Get visitor information
        const userAgent = navigator.userAgent;
        const referrer = document.referrer;
        const timestamp = new Date().toISOString();
        const page = window.location.pathname;
        
        // Get IP and detailed location information
        let ip = 'Unknown';
        let country = 'Unknown';
        let city = 'Unknown';
        let region = 'Unknown';
        let timezone = 'Unknown';
        let isp = 'Unknown';
        let latitude = 'Unknown';
        let longitude = 'Unknown';
        
        try {
          // Try multiple geolocation services for better accuracy
          const services = [
            'https://ipapi.co/json/',
            'https://ipinfo.io/json',
            'https://api.ipgeolocation.io/ipgeo?apiKey=free'
          ];
          
          for (const service of services) {
            try {
              const controller = new AbortController();
              const timeoutId = setTimeout(() => controller.abort(), 5000);
              
              const response = await fetch(service, { 
                signal: controller.signal 
              });
              clearTimeout(timeoutId);
              const data = await response.json();
              
              if (service.includes('ipapi.co')) {
                ip = data.ip || ip;
                country = data.country_name || country;
                city = data.city || city;
                region = data.region || region;
                timezone = data.timezone || timezone;
                isp = data.org || isp;
                latitude = data.latitude || latitude;
                longitude = data.longitude || longitude;
              } else if (service.includes('ipinfo.io')) {
                ip = data.ip || ip;
                country = data.country || country;
                city = data.city || city;
                region = data.region || region;
                timezone = data.timezone || timezone;
                isp = data.org || isp;
                if (data.loc) {
                  const [lat, lon] = data.loc.split(',');
                  latitude = lat || latitude;
                  longitude = lon || longitude;
                }
              } else if (service.includes('ipgeolocation.io')) {
                ip = data.ip || ip;
                country = data.country_name || country;
                city = data.city || city;
                region = data.state_prov || region;
                timezone = data.time_zone?.name || timezone;
                isp = data.isp || isp;
                latitude = data.latitude || latitude;
                longitude = data.longitude || longitude;
              }
              
              // If we got good data, break out of the loop
              if (ip !== 'Unknown' && country !== 'Unknown') {
                break;
              }
            } catch (error) {
              if (error instanceof Error && error.name === 'AbortError') {
                console.log(`Service ${service} timed out, trying next...`);
              } else {
                console.log(`Service ${service} failed, trying next...`);
              }
              continue;
            }
          }
        } catch {
          console.log('Could not fetch IP/location data from any service');
        }
        
        // Parse user agent for device info
        const getDeviceInfo = (userAgent: string) => {
          const browser = userAgent.includes('Chrome') ? 'Chrome' :
                         userAgent.includes('Firefox') ? 'Firefox' :
                         userAgent.includes('Safari') ? 'Safari' :
                         userAgent.includes('Edge') ? 'Edge' : 'Unknown';
          
          const os = userAgent.includes('Windows') ? 'Windows' :
                    userAgent.includes('Mac') ? 'macOS' :
                    userAgent.includes('Linux') ? 'Linux' :
                    userAgent.includes('Android') ? 'Android' :
                    userAgent.includes('iOS') ? 'iOS' : 'Unknown';
          
          const device = userAgent.includes('Mobile') ? 'Mobile' :
                        userAgent.includes('Tablet') ? 'Tablet' : 'Desktop';
          
          return { browser, os, device };
        };
        
        const { browser, os, device } = getDeviceInfo(userAgent);
        
        // Send visitor data to API
        await fetch('/api/visitor', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            userAgent,
            referrer,
            timestamp,
            page,
            ip,
            country,
            city,
            region,
            timezone,
            isp,
            latitude,
            longitude,
            browser,
            os,
            device,
          }),
        });
        
      } catch (error) {
        console.log('Visitor tracking failed:', error);
      }
    };
    
    // Track visitor only on initial page load
    trackVisitor();
    
    // No additional tracking for navigation changes to reduce email spam
  }, [TRACKING_COOLDOWN]);
  
  return null; // This component doesn't render anything
};

export default VisitorTracker;
