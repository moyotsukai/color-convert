import { useEffect } from 'react'
import { useRouter } from "next/router"
import { GA_ID, pageView } from './../lib/gtag'

export const usePageView = () => {
  const router = useRouter()

  useEffect(() => {
    if (!GA_ID) { return }

    const handleRouteChange = (path: string) => {
      pageView(path)
    }
    router.events.on("routeChangeComplete", handleRouteChange)

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange)
    }
  }, [router.events])

}