import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";
import Navigation from "./components/Navigation"
import Panel from "./components/Panel"

const routes = [
  {
    path: "/documents",
    component: DocumentsPanel,
  },
  {
    path: "/teams",
    component: TeamsPanel,
  },
]

const nestedRoutes = [
  {
    path: "/documents/teams",
    component: TeamsPanel,
  },
  {
    path: "/teams/documents",
    component: DocumentsPanel,
  },
]

export default function App() {
  return (
    <Router>
      <div className="h-full flex">
        <nav className="h-full w-auto p-16 mr-4 border-r-2 bg-gray-200">
          <Navigation />
        </nav>
        <main className="flex-1 m-6">
          <Switch>
            {routes.map((route, i) => (
              <Route key={i} path={route.path} component={route.component} />
            ))}
          </Switch>
        </main>
        <aside className="flex-1 m-6">
          <Switch>
            {nestedRoutes.map((route, i) => (
              <Route key={i} path={`*${route.path}`} component={route.component} />
            ))}
          </Switch>
        </aside>
      </div>
    </Router>
  );
}

function DocumentsPanel() {
  return (
    <Panel title="DOCUMENTS">
      <Link to="/documents/teams">Teams</Link>
    </Panel>
  )
}

function TeamsPanel() {
  return (
    <Panel title="Teams">
      <Link to="/teams/documents">Documents</Link>
    </Panel>
  )
}