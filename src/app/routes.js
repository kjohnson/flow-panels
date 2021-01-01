import React from "react";
import {
  Route,
} from "react-router-dom";
import resources from "./resources"
import Panel from "../components/Panel"
  
const routes = [
  {
    path: "/account",
    component: <Panel title="Account"></Panel>,
  },
  {
    path: "/",
    component: <Panel title="Dashboard"></Panel>,
  },
].map((route, i) => (
  <Route key={i} path={route.path} component={route.component} />
))

  const resourceRoutes = resources.map(( resource ) => {
    const { id, title, component: Component } = resource
    return {
      path: "/" + id,
      component: () => <Panel title={title}><Component /></Panel>
    }
  }).map((route, i) => (
    <Route key={i} path={route.path} component={route.component} />
  ))
  
  const relatedRoutes = resources.map(( resource ) => {
    return resources.filter(( relationship ) => {
      return resource.id !== relationship.id
    }).map(( relationship ) => {
      const { title, component: NestedComponent } = relationship;
      return {
        path: "/" + resource.id + "/" + relationship.id,
        component: () => <Panel title={title} back={'/' + resource.id} expand={'/' + relationship.id}><NestedComponent /></Panel>
      }
    })
  }).flat().map((route, i) => (
    <Route key={i} path={route.path} component={route.component} />
  ))

export {
    routes,
    resourceRoutes,
    relatedRoutes,
}