import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from "./Cart";
import Login from './Login';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login/>
          </Route>
          <Route exact path="/">
          <Header/>
          <Home/>
          </Route>

          <Route path="/cart" >
            <Header/>
            <Cart/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
