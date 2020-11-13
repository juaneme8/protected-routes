import React from "react";
import "./styles.css";
import { Route, Switch } from "react-router-dom";
import { LandingPage } from "./LandingPage";
import { Dashboard } from "./Dashboard";
import { ProtectedRoute } from "./ProtectedRoute";

export default function App() {
  return (
    <div className="App">
      <h1>App Component</h1>

      <Switch>
        <Route path="/" exact component={LandingPage} />
        <ProtectedRoute path="/dashboard" component={Dashboard} />
        <Route path="*" component={() => "404 ERROR"} />
      </Switch>
    </div>
  );
}
