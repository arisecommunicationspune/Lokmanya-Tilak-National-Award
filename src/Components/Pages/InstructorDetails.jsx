import React from "react";

import Footer from "../Footer";
import Header from "../Header";
import PageBanner from "../PageBanner";

const InstructorDetails = () => {
  return (
    <>
      <Header />
      <PageBanner
        title={"About Instructor"}
        pageTitle={"Team Member"}
        num={1}
      />
      
      <Footer />
    </>
  );
};

export default InstructorDetails;
