import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Hobbies from "./views/Hobbies/Hobbies";
import Personal from "./views/Personal/Personal";

const App = () => {
  return (
    <Router>
      <Header />
      <Route path="/personal" component={Personal} />
      <Route path="/hobbies" component={Hobbies} />
    </Router>
  );
};

export default App;
