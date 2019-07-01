import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from './Components/Nav'
import AboutUs from './Components/AboutUs'
import ContactUs from './Components/ContactUs'
import Messages from './Components/Messages'
function App() {
  return (
    <BrowserRouter>
    <Nav/>
      <Switch>
        <Route path="/aboutus" component={AboutUs}/>
        <Route path="/contactus" component={ContactUs}/>
        <Route path="/messages" component={Messages}/>     
        </Switch>
    </BrowserRouter>
  );
}

export default App;
