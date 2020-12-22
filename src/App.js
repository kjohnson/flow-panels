import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navigation from "./components/Navigation"
import Panel from "./components/Panel"
import AccountNavigation from "./components/AccountNavigation"
import UserPanel from "./components/Panels/User"
import DocumentPanel from "./components/Panels/Document"
import IssuePanel from "./components/Panels/Issue"

const resources = [
  {
    id: 'document',
    component: DocumentPanel
  },
  {
    id: 'user',
    component: UserPanel
  },
  {
    id: 'issue',
    component: IssuePanel
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