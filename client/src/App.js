import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Home, UserAdd, UserEdit } from './pages'
function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/users/create" component={UserAdd} />
          <Route path="/users/:id/edit" component={UserEdit} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
