import "normalize.css";
import * as React from "react";
import "react-app-polyfill/ie11";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import { DevTool, DevToolsProvider } from "../.";

const App = () => {
  return (
    <BrowserRouter>
      <DevToolsProvider>
        <div>
          <h1>Outside of Switch</h1>
          <Link to="/">No Dev Tools</Link>
          <Link to="/one-dev-tool">One Dev Tool</Link>
          <Link to="/two-dev-tools">Two Dev Tools</Link>
          <Link to="/nested-dev-tools">Nested Dev Tools</Link>
        </div>
        <Switch>
          <Route exact path="/one-dev-tool">
            <DevTool>
              <p>I am DevTool One</p>
            </DevTool>
            <div>
              <h2>One Dev Tool</h2>
            </div>
          </Route>
          <Route exact path="/two-dev-tools">
            <DevTool>
              <p>I am DevTool One</p>
            </DevTool>
            <DevTool>
              <p>I am DevTool Two</p>
            </DevTool>
            <div>
              <h2>Two Dev Tool</h2>
            </div>
          </Route>
          <Route path="/nested-dev-tools">
            <div>
              <h2>Nested Dev Tools</h2>
            </div>
            <Link to="/nested-dev-tools/">No Nested Dev Tools</Link>
            <Link to="/nested-dev-tools/one-dev-tool">One Nested Dev Tool</Link>
            <Link to="/nested-dev-tools/two-dev-tools">Two Nested Dev Tools</Link>
            <DevTool>
              <p>I am not a nested DevTool</p>
            </DevTool>
            <Switch>
              <Route exact path="/nested-dev-tools/one-dev-tool">
                <DevTool>
                  <p>I am Nested DevTool One</p>
                </DevTool>
                <div>
                  <h3>One Nested Dev Tool</h3>
                </div>
              </Route>
              <Route exact path="/nested-dev-tools/two-dev-tools">
                <DevTool>
                  <p>I am Nested DevTool One</p>
                </DevTool>
                <DevTool>
                  <p>I am Nested DevTool Two</p>
                </DevTool>
                <div>
                  <h3>Two Nested Dev Tools</h3>
                </div>
              </Route>
              <Route path="/nested-dev-tools">
                <div>
                  <h3>No Nested Dev Tools</h3>
                </div>
              </Route>
            </Switch>
          </Route>
          <Route>
            <div>
              <h2>No Dev Tools</h2>
            </div>
          </Route>
        </Switch>
      </DevToolsProvider>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
