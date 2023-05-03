import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// core components
import Admin from "layouts/Admin.js";
import RTL from "layouts/RTL.js";
import "semantic-ui-css/semantic.min.css";
import "assets/css/material-dashboard-react.css?v=1.10.0";

//redux-saga
import {Provider} from "react-redux";
import rootReducer from "./rootReducer";
import rootSaga from "./store";
import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware} from "redux";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/admin" component={Admin} />
        <Route path="/rtl" component={RTL} />
        <Redirect from="/" to="/admin/dashboard" />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
