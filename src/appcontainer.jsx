import React from "react";
// import config from "config";

import { Route, BrowserRouter as Router } from "react-router-dom";
import Header from "./components/header";
import Home from "./components/home";
import Footer from "./components/footer";

const AppContainer = function () {
  return (
    // <Router basename={`${config.publicPath}`}>
    <Router basename="/react">
      <>
        <Route render={(props) => <Header {...props} />} />
        
          {/* home */}
          <Route exact path="/home" component={Home} />
        

        <Route render={(props) => <Footer {...props} />} />
      </>
    </Router>
  );
};

export default AppContainer;
