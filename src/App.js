import React from "react";
import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import Layout from "./components/Layout"
import { routes, resourceRoutes, relatedRoutes } from "./app/routes"

export default function App() {
  return (
    <Router>
      <Layout>
        <Switch>
            {resourceRoutes}
            {routes}
          </Switch>

          <Switch>
            {relatedRoutes}
          </Switch>
      </Layout>
    </Router>
  );
}