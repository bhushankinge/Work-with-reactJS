import React from "react";
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./ReactMenu/Home";
import Services from "./ReactMenu/Services";
import Contact from "./ReactMenu/Contact";
import About from "./ReactMenu/About";
import Navbar from "./ReactMenu/Navbar";
import { Switch, Route, Redirect } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/services" component={Services} />
        <Redirect to="/" />
        <Home />
      </Switch>
    </>
  );
};

export default App;
