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
import Hyperlink from "./components/Hyperlink"
import AccountNavigation from "./components/AccountNavigation"

const resources = [
  {
    id: 'documents',
    component: DocumentsPanel
  },
  {
    id: 'teams',
    component: TeamsPanel
  },
  {
    id: 'issues',
    component: IssuesPanel
  }
]

const routes = resources.map(( resource ) => {
  return {
    path: "/" + resource.id,
    component: resource.component,
  }
})

const nestedRoutes = resources.map(( resource ) => {
  return resources.filter(( nestedResource ) => {
    return resource.id !== nestedResource.id
  }).map(( nestedResource ) => {
    return {
      path: "/" + resource.id + "/" + nestedResource.id,
      component: nestedResource.component
    }
  })
}).flat()

console.log( routes )
console.log( nestedRoutes )

export default function App() {
  return (
    <Router>
      <div className="h-full flex">
        <nav className="h-full flex flex-col justify-between w-auto p-16 mr-4 border-r-2 bg-gray-200">
          <Navigation />
          <AccountNavigation />
        </nav>
        <main className="flex w-full">
          <Switch>
            {routes.map((route, i) => (
              <Route key={i} path={route.path} component={route.component} />
            ))}
            <Route path="/account">
              <Panel title="Account"></Panel>
            </Route>
            <Route path="/">
              <Panel title="Dashboard"></Panel>
            </Route>
          </Switch>

          <Switch>
            {nestedRoutes.map((route, i) => (
              <Route key={i} path={route.path} component={route.component} />
            ))}
          </Switch>
        </main>
      </div>
    </Router>
  );
}

function DocumentsPanel() {
  return (
    <Panel title="DOCUMENTS">
      <ul className="list-disc">
        <li>
          <Hyperlink to="/documents/teams">Teams</Hyperlink>
        </li>
        <li>
          <Hyperlink to="/documents/issues">Issues</Hyperlink>
        </li>
      </ul>
    </Panel>
  )
}

function TeamsPanel() {
  return (
    <Panel title="Teams">
      <ul className="list-disc">
        <li>
          <Hyperlink to="/teams/documents">Documents</Hyperlink>
        </li>
        <li>
          <Hyperlink to="/teams/issues">Issues</Hyperlink>
        </li>
      </ul>
    </Panel>
  )
}

function IssuesPanel() {
  return (
    <Panel title="Issues">
      <ul className="list-disc">
        <li>
          <Hyperlink to="/issues/documents">Documents</Hyperlink>
        </li>
        <li>
          <Hyperlink to="/issues/teams">Teams</Hyperlink>
        </li>
      </ul>
    </Panel>
  )
}