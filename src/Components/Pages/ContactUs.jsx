import React from "react";
import { call, mail, map } from "../../constant/images";
import ContactForm from "../ContactForm";
import Footer from "../Footer";
import Header from "../Header";
import NewsLetter from "../NewsLetter";
import BreadCrumbs from "./BreadCrumbs";

const ContactUs = () => {
  return (
    <>
      <Header />
     <BreadCrumbs id="Contact"/>

      <div class="nav-tab-wrapper tabs  section-padding">
        <div class="container">
          <div class=" grid grid-cols-12 gap-[30px]">
            <div class="xl:col-span-5 lg:col-span-6 col-span-12 ">
              {/* <div class="mini-title">Contact Us</div> */}
              <h4 class="column-title ">
                Get In Touch 
              </h4>
              <div>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered.
              </div>
              <ul class=" list-item space-y-6 pt-8">
                <li class="flex">
                  <div class="flex-none mr-6">
                    <div class="">
                      <img src={mail} alt="" class="" />
                    </div>
                  </div>
                  <div class="flex-1">
                    <h4 class=" lg:text-xl text-lg mb-1">Email-Us :</h4>
                    <div style={{ overflowWrap: 'anywhere'}}>contact@lokmanyatilaknationalaward.com</div>
                  </div>
                </li>
                {/* <li class="flex">
                  <div class="flex-none mr-6">
                    <div class="">
                      <img src={call} alt="" class="" />
                    </div>
                  </div>
                  <div class="flex-1">
                    <h4 class=" lg:text-xl text-lg mb-1">Call Us:</h4>
                    <div>+88012 2910 1781, +88019 6128 1689</div>
                  </div>
                </li> */}
                <li class="flex">
                  <div class="flex-none mr-6">
                    <div class="">
                      <img src={map} alt="" class="" />
                    </div>
                  </div>
                  <div class="flex-1">
                    <h4 class="lg:text-xl text-lg mb-1">Office :</h4>
                    <div>Kesari Wada, Narayan Peth, Pune - 411030</div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="xl:col-span-7 lg:col-span-6 col-span-12">
              <div class="bg-white shadow-box7 p-8 rounded-md">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
      <NewsLetter />
      <Footer />
    </>
  );
};

export default ContactUs;
