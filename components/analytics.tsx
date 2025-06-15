'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: object) => void
  }
}

export default function Analytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID

    if (!GA_TRACKING_ID) return

    const url = pathname + searchParams.toString()

    // Track page views
    window.gtag?.('config', GA_TRACKING_ID, {
      page_path: url,
    })
  }, [pathname, searchParams])

  // Only render in production
  if (process.env.NODE_ENV !== 'production') {
    return null
  }

  const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID

  if (!GA_TRACKING_ID) {
    return null
  }

  return (
    <>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  )
} 