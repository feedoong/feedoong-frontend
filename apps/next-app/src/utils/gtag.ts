interface GtagWindow extends Window {
  gtag: typeof gtag
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  ;(window as GtagWindow).gtag(
    'config',
    process.env.NEXT_PUBLIC_GA_TRACKING_ID as string,
    { page_path: url }
  )
}
