import React, {useContext} from "react";
import Header from "./header/Header";
import Main from "./main/Main";
import Footer from "./footer/Footer";
import {context} from "./store";

function App() {
  const {data} = useContext(context);
  return (
    <React.Fragment>
      <Header />
      <Main />
      {data && <Footer />}
    </React.Fragment>
  );
}

export default App;
