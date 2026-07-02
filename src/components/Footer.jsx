import React from "react";
import { RiInstagramLine, RiTwitterLine, RiYoutubeLine } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-light-neutral-100 py-6 font-nunito border-t border-light-neutral-200">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="text-center md:text-left">
            <img src="/image/logo.svg" alt="Logo" className="h-10 w-23" />
          </div>
          <div className="flex items-center justify-center space-x-1">
            &copy; {new Date().getFullYear()}
            <span className="text-primary font-bold "> VoidFunct </span> All
            rights reserved.
          </div>
          <div className="flex items-center justify-center md:justify-end space-x-4">
            <a
              href=""
              className="w-12 h-12 bg-primary rounded-full flex items-center justify-center hover:bg-primary-20 transition-all duration-300 hover:scale-110">
              <RiInstagramLine className="h-5 w-5 text-center text-white" />
            </a>
            <a
              href=""
              className="w-12 h-12 bg-primary rounded-full flex items-center justify-center hover:bg-primary-20 transition-all duration-300 hover:scale-110">
              <RiTwitterLine className="h-5 w-5 text-center text-white" />
            </a>
            <a
              href=""
              className="w-12 h-12 bg-primary rounded-full flex items-center justify-center hover:bg-primary-20 transition-all duration-300 hover:scale-110">
              <RiYoutubeLine className="h-5 w-5 text-center text-white" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
