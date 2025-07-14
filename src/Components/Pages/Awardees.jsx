import React from "react";
import Feature from "../Feature";
import Footer from "../Footer";
import Header from "../Header";
import BreadCrumbs from "./BreadCrumbs";
import Cards from "../Pages/Cards";
import NewsLetter from "../NewsLetter";

const Awardees = () => {
  return (
    <>
      <Header />
      <BreadCrumbs id="Awardees"/>
      {/* <PageBanner title={"Awardees"} pageTitle="Awardees"  /> */}
      <Cards />
       <NewsLetter />
      <Footer />
    </>
  );
};

export default Awardees;
