import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import About from "../HomeComponents/About";


import Video from "./Video";
import NewsLetter from "../NewsLetter";
import PageBanner from "../PageBanner";
import Platform from "../Platform";
import HistoryDetails from "./HistoryDetails";
import Topics from "../Topics";
import BreadCrumbs from "./BreadCrumbs";

const History = () => {
  return (
    <>
      <Header />
      < BreadCrumbs id="History"/>
      {/* <PageBanner title={"History"} pageTitle='History' /> */}
      {/* <About /> */}
      <HistoryDetails />
      {/* <Platform /> */}
      {/* <CourseBlock /> */}
     
      
      <NewsLetter />
      <Footer />
    </>
  );
};

export default History;
