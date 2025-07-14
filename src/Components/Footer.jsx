import React from "react";
import footerLogo from "../assets/images/logo/logo.png";

const Footer = () => {
  const updatedDate = new Date().getFullYear();

  
  return (
   <footer className=" bg-cover bg-center bg-no-repeat">
  <div className=" container">
    <div className="grid grid-cols-1 gap-7 place-items-center">
      <div className="py-20 single-footer text-center">
        <div className="max-w-[400px] mx-auto">
          <a href="#" className="mb-6 inline-block">
           <img src={footerLogo} alt="Footer Logo" className="lg-h-[120px] sm-h-[80px] w-full" />

          </a>
          <p className="text-black text-center max-w-[1112px] mx-auto ">
            Lorem ipsum amet, consectetur adipiscing elit. Suspendis varius enim eros elementum tristique. Duis cursus. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio, fugiat consectetur odit error non perferendis facilis dolore quos! Quae sit, suscipit perspiciatis accusantium in ut aperiam voluptas laudantium error. Nihil.
          </p>
          <ul className="flex justify-center space-x-4 pt-8">
            <li>
              <a
                href="#"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-black bg-opacity-[0.08] text-2xl text-black hover:bg-brown hover:text-white"
              >
                <iconify-icon icon="bxl:facebook"></iconify-icon>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-black bg-opacity-[0.08] text-2xl text-black transition hover:bg-brown hover:text-white"
              >
                <iconify-icon icon="bxl:twitter"></iconify-icon>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-black bg-opacity-[0.08] text-2xl text-black transition hover:bg-brown hover:text-white"
              >
                <iconify-icon icon="bxl:linkedin"></iconify-icon>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-black bg-opacity-[0.08] text-2xl text-black transition hover:bg-brown hover:text-white"
              >
                <iconify-icon icon="bxl:instagram"></iconify-icon>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div className="container-fluid footer-pd text-center text-base text-white bg-brown">
  &copy; {updatedDate} All Rights Reserved With Lokamanya Tilak National Award. | 
  Design & Developed by   <a 
    href="https://arisecommunications.co/" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="underline underline-offset-4 ml-1"
  >
    Arise Communications.
  </a>
</div>

</footer>

  );
};

export default Footer;