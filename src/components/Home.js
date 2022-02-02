import React from "react";
import LandingPage from "./LandingPage";

const Home = (props) => {
  return(
    <>
      <LandingPage loginFunc={props.loginFunc} />
    </>
  );
};

export default Home;