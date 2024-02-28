export const GA_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || ""

export const pageView = (path: string) => {
  window.gtag("config", GA_ID, {
    page_path: path
  })
}