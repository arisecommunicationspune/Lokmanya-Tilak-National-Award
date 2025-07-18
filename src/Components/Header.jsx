/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo/logo.png";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [activeMobileMenu, setActiveMobileMenu] = useState(false);

  const scrollNav = useRef(null);
useEffect(() => {
  const handleScroll = () => {
    if (!scrollNav.current) return;
    const shouldStick = window.scrollY > 100;
    scrollNav.current.classList.toggle("rt-sticky-active", shouldStick);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);


  return (
    <>
      <header
         ref={scrollNav}
      className="site-header home-one-header fixed top-0 w-full z-[999] transition-all duration-300"
      >
        <div className="main-header py-2">
          <div className="container-fluid">
            <div className=" flex items-center justify-between">
              <Link
                to={""}
                className="brand-logo flex-none lg:ml-10 md:w-auto max-w-[337px] "
              >
                <img src={logo} alt="logo" />
              </Link>
              <div className="flex items-center flex-1">
                <div className="flex-1 main-menu relative mr-[74px]">
                  <ul className="menu-active-classNamees">
                    <li>
                      <Link to={"/"}>
                        Home
                      </Link>
                    </li>
                     <li>
                      <Link to={"/history"}>
                        History
                      </Link>
                    </li>
                     <li>
                      <Link to={"/awardees"}>
                        Awardees
                      </Link>
                    </li>
                    
              
                    <li>
                      <Link to={"/events"}>
                        Events
                      </Link>
                    </li>

                      <li>
                      <Link to={"/message"}>
                       Message
                      </Link>
                    </li>
                    
                    <li>
                      <Link to={"/contacts"}>
                        Contacts
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="flex-none flex space-x-[18px]">
                  {/* <div className=" hidden lg:block">
                    <a href="#" className="btn btn-primary py-[15px] px-8">
                      Start Free Trial
                    </a>
                  </div> */}
                  <div className=" block   lg:hidden">
                    <button
                      type="button"
                      className=" text-3xl md:w-[56px] h-10 w-10 md:h-[56px] rounded bg-[#F8F8F8] flex flex-col items-center justify-center
                                        menu-click"
                      onClick={() => setActiveMobileMenu(!activeMobileMenu)}
                    >
                      <iconify-icon
                        icon="cil:hamburger-menu"
                        rotate="180deg"
                      ></iconify-icon>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {activeMobileMenu && (
        <MobileMenu
          activeMenu={activeMobileMenu}
          setActiveMenu={setActiveMobileMenu}
        />
      )}
    </>
  );
};

export default Header;
