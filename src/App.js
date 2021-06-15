import "./App.css";
import UserList from "./components/UserList";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Detail from "./components/Detail";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={UserList} exact />
          <Route
            path="/profile/:id"
            exact
            render={(props) => <Detail {...props} />}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;