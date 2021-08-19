import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Route, Router, Switch } from "react-router-dom";

import App from "./src/App";

const appRouting = (
  <Router>
    <Switch>
      <Route path="/" component={App} />
    </Switch>
  </Router>
);

ReactDOM.render(appRouting, document.getElementById("root"));
