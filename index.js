import React from "react";
import { ReactDOM } from "react";
import { BrouseRouter as Route, Router, Switch } from "react-router-dom";

import App from "./src/App";

const appRouting = (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
    </Switch>
  </Router>
);

ReactDOM.render(appRouting, document.getElementById('root'));