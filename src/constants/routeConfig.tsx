import { lazy } from "react";

const Home = lazy(() => import("@views/Home"));

interface IRoute {
  path: string;
  component: React.ReactNode;
}

const routeConfig: IRoute[] = [{ path: "/", component: <Home /> }];

export default routeConfig;
