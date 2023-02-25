import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from "./Cart";
import Login from './Login';
import { useEffect } from "react";
import {auth} from "./firebase";
import { useStateValue } from "./StateProvider";
function App() {
  const[{},dispatch] = useStateValue();
  useEffect(()=> {
    auth.onAuthStateChanged(authUser => {
      //console.log("Current User:" ,authUser);
      if(authUser) {
        dispatch({
          type:'SET_USER',
          user:authUser
        })
      }
      else{
        dispatch({
          type:'SET_USER',
          user:null
        })
      }
    })
  },[])
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
