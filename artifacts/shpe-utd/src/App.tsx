import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import { Layout } from "@/components/layout";
import ScrollToTop from "@/components/ScrollToTop";
import Home from "@/pages/home";
import Board from "@/pages/board";
import Events from "@/pages/events";
import Sponsors from "@/pages/sponsors";
import About from "@/pages/about";
import Resources from "@/pages/resources";
import Join from "@/pages/join";
import ZeroToLaunch from "@/pages/zero-to-launch";
import CodePathTip from "@/pages/codepath-tip";
import MiniColorStack from "@/pages/mini-colorstack";

const queryClient = new QueryClient();

function Router() {
  return (
    <Layout>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/board" component={Board} />
        <Route path="/events" component={Events} />
        <Route path="/sponsors" component={Sponsors} />
        <Route path="/about" component={About} />
        <Route path="/resources" component={Resources} />
        <Route path="/zero-to-launch" component={ZeroToLaunch} />
        <Route path="/codepath-tip" component={CodePathTip} />
        <Route path="/mini-colorstack" component={MiniColorStack} />
        <Route path="/join" component={Join} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
