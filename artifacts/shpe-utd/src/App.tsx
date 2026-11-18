import { lazy, Suspense } from "react";
import { LazyMotion, domAnimation, MotionConfig } from "framer-motion";
import { Switch, Route, Router as WouterRouter } from "wouter";
import NotFound from "@/pages/not-found";
import { Layout } from "@/components/layout";
import ScrollToTop from "@/components/ScrollToTop";
import Home from "@/pages/home";
const Board = lazy(() => import("@/pages/board"));
const Events = lazy(() => import("@/pages/events"));
const Sponsors = lazy(() => import("@/pages/sponsors"));
const About = lazy(() => import("@/pages/about"));
const Resources = lazy(() => import("@/pages/resources"));
const Join = lazy(() => import("@/pages/join"));
const ZeroToLaunch = lazy(() => import("@/pages/zero-to-launch"));
const CodePathTip = lazy(() => import("@/pages/codepath-tip"));
const ColorStackMini = lazy(() => import("@/pages/colorstack-mini"));

function Router() {
  return (
    <Layout>
      <ScrollToTop />
      <Suspense
        fallback={<div className="chapter-route-loading" aria-hidden="true" />}
      >
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/board" component={Board} />
          <Route path="/events" component={Events} />
          <Route path="/sponsors" component={Sponsors} />
          <Route path="/about" component={About} />
          <Route path="/resources" component={Resources} />
          <Route path="/zero-to-launch" component={ZeroToLaunch} />
          <Route path="/codepath-tip" component={CodePathTip} />
          <Route path="/colorstack-mini" component={ColorStackMini} />
          <Route path="/join" component={Join} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </Layout>
  );
}

function App() {
  return (
    <LazyMotion features={domAnimation} strict>
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
        <MotionConfig
          reducedMotion="user"
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <Router />
        </MotionConfig>
      </WouterRouter>
    </LazyMotion>
  );
}

export default App;
