import { useLayoutEffect } from 'react'
import { useLocation } from 'wouter'

if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual'
}

export default function ScrollToTop() {
  const [location] = useLocation()
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [location])
  return null
}
