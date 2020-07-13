import React, {useContext} from "react";
import Header from "./header/Header";
import Main from "./main/Main";
import Footer from "./footer/Footer";
import Loader from "./loader/Loader";
import {context} from "./store";

function App() {
  const {data} = useContext(context);
  return (
    <React.Fragment>
      <Header />
      {!data && <Loader />}
      <Main />
      {data && <Footer />}
    </React.Fragment>
  );
}

export default App;
