import React from "react";
import { Switch, Router, Route, Prompt } from "react-router-dom";
import { createBrowserHistory } from "history";
import { ConfigProvider, Spin } from "antd";
import Layout from "../components/Layout";
// import menuConfig from "./menuConfig";

// 组件懒加载
const Home = React.lazy(() => import("../pages/Home"));
const Test = React.lazy(() => import("../pages/Test"));
const Redux = React.lazy(() => import("../pages/Demo/Redux"));

const TicTacToe = React.lazy(() => import("../pages/TicTacToe"));
const ReactDemo = React.lazy(() => import("../pages/reactDemo"));

// 组件加载优化
const SuspenseComponent = (Component) => (props) => (
  <React.Suspense fallback={<Spin />}>
    <Component {...props}>{props.children}</Component>
  </React.Suspense>
);

const Index = () => {
  function routeChangeHandler(location) {
    console.log("loading...", location);
  }
  const history = createBrowserHistory();
  // const redirectUrl = "/home";

  return (
    <ConfigProvider>
      <Router history={history}>
        <Prompt message={(location) => routeChangeHandler(location)} />
        <Layout>
          <Switch>
            {/* <Redirect to={redirectUrl} /> */}

            <Route component={SuspenseComponent(Home)} path="/home"></Route>
            <Route component={SuspenseComponent(Test)} path="/test"></Route>
            <Route
              component={SuspenseComponent(Redux)}
              path="/demo/redux"
            ></Route>
            <Route
              component={SuspenseComponent(TicTacToe)}
              path="/ticTacToe"
            ></Route>
            <Route
              component={SuspenseComponent(ReactDemo)}
              path="/reactDemo"
            ></Route>
          </Switch>
        </Layout>
      </Router>
    </ConfigProvider>
  );
};
export default Index;
