import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Personal from "./views/Personal/Personal";

const App = () => {
  return (
    <Router>
      <Header />
      <Route path="/" component={Personal} />
    </Router>
  );
};

export default App;
