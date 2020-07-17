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
        <Main />
        {data && <Footer />}
      </Router>
      {/* <Header />
      {!data && <Loader />}
      <Main />
      {data && <Footer />} */}
    </React.Fragment>
  );
}

export default App;
