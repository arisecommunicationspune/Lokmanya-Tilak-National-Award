import React, { useEffect } from "react";
import Header from "../Header";
import About from "../HomeComponents/About";
import Banner from "../Pages/Banner";
import Brands from "../HomeComponents/Brands";
import AboutDetail from "../Pages/AboutDetail";
import Footer from "../Footer";
import Team from "../Team";
import Newsletter from "../NewsLetter";

function Home() {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, []);
  return (
    <>
      <Header />
      <Banner />
      {/* <Brands /> */}
      <About />
      <AboutDetail />
      <Team/>
      {/* <Event /> */}
      <Newsletter />
      <Footer />
    </>
  );
}

export default Home;
