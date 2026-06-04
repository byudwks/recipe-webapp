import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
const Header = () => {
  return (
    <header className="bg-light-neutral-0 backdrop-blur-md shadow-xs sticky top-0 z-50 border-b border-light-neutral-200">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* logo */}
        <Link
          to="#"
          className="flex items-center space-x-3 hover:opacity-80 transition-all duration-300">
          <img src="/image/logo.svg" alt="Logo" className="h-10 w-23" />
        </Link>

        <nav className="hidden md:flex space-x-8 items-center">
          <Link
            to="/"
            className=" relative text-gray-neutral-600 pb-1 transition-all hover:text-primary duration-300 group">
            Home
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            to="/recipes"
            className=" relative text-gray-neutral-600 pb-1 transition-all hover:text-primary duration-300 group">
            Recipes
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            to="/about"
            className=" relative text-gray-neutral-600 pb-1 transition-all hover:text-primary duration-300 group">
            About
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </nav>

        <Link
          to="/recipes"
          className="hidden md:block bg-secondary text-light-neutral-0 px-8 py-3 rounded-xl hover:bg-primary transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105">
          Broswer Recipes
        </Link>
        <button className="md:hidden p-2 text-gray-600 hover:text-gray-800 transition-all">
          <Menu />
        </button>
      </div>

      {/* mobile menu */}
      <div className="md:hidden bg-light-neutral-100 border-t border-light-neutral-200 shadwo-sm">
        <nav className="flex flex-col space-y-1 p-3 font-nunito">
          <Link
            to="/"
            className="text-gray-700 hover:text-primary transition-all text-left borfer-b border-transparent hover:bg-primary pb-1">
            Home
          </Link>
          <Link
            to="/recipes"
            className="text-gray-700 hover:text-primary transition-all text-left borfer-b border-transparent hover:bg-primary pb-1">
            Recipes
          </Link>
          <Link
            to="/about"
            className="text-gray-700 hover:text-primary transition-all text-left borfer-b border-transparent hover:bg-primary pb-1">
            About
          </Link>
          <Link
            to="/recipes"
            className=" md:block bg-secondary text-light-neutral-0 px-3 py-2 rounded-xl hover:bg-primary transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 text-center">
            Broswer Recipes
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
