import React, { createContext, useState } from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Dashbord from "./Components/Dhashbord/Dashbord/Dashbord";
import Home from "./Components/Home/Home/Home";
import PrivetRoute from './Components/PrivetRoute/PrivetRoute';
import Login from './Components/Login/Login'
import OrderPlace from "./Components/OrderPlace/OrderPlace";
import Admin from "./Components/Dhashbord/Addmin/Addmin";
import Review from "./Components/Dhashbord/userDashbord/Review/Review";

export const userContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <PrivetRoute path="/dashbord">
            <Dashbord></Dashbord>
          </PrivetRoute>
          <PrivetRoute path="/orderPlace/:servicekey">
            <OrderPlace></OrderPlace>
          </PrivetRoute>
          <PrivetRoute path="/admin">
            <Admin></Admin>
          </PrivetRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/review">
            <Review></Review>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <h2>Not Found!</h2>
          </Route>
        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
