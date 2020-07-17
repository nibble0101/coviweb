import React, { useContext } from "react";
import Header from "./header/Header";
import Main from "./main/Main";
import Footer from "./footer/Footer";
import Loader from "./loader/Loader";
import { context } from "./store";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const { data } = useContext(context);
  return (
    <React.Fragment>
      <Router>
        <Header />
        {!data && <Loader />}
        {data && <Main />}
        {data && <Footer />}
      </Router>
    </React.Fragment>
  );
}

export default App;
