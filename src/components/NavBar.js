import React, { useRef, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiArrowDropDownLine } from "react-icons/ri";
const NavBar = () => {
  const [currentPage, setCurrentPage] = useState("Home");
  
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setCurrentPage("Project");
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setCurrentPage("");
    }, 200); // Adjust this value as needed
  };
  return (
    <div className="flex flex-row absolute top-0 left-0 p-8 sm:p-8 w-full z-10 justify-between">
        <div>
      <img src="./image/glilogo.jpg" alt="Logo" className="h-12 w-12" />
      </div>
      <div className="flex items-center">
      <nav className="text-white flex-grow hidden sm:block">
        <ul className="flex flex-row gap-10 font-semibold">
          <li
            className={`hover:text-green-400 ${
              currentPage === "Home" ? "text-green-400" : ""
            }`}
            onClick={() => setCurrentPage("Home")}
          >
            Home
          </li>
          <li
            className={`hover:text-green-400 ${
              currentPage === "GIRegistry" ? "text-green-400" : ""
            }`}
            onClick={() => setCurrentPage("GIRegistry")}
          >
            GIRegistry
          </li>
          <li
            className={`relative flex ${
              currentPage === "Project" ? "text-green-400" : ""
            }`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Project
            <RiArrowDropDownLine className="w-6 h-6 text-white hover:text-green-400"/>
            
            <ul
              className={`absolute left-0 top-full mt-1 bg-white border border-green-400 border-t-4 rounded-md p-6 w-48 ${
                currentPage === "Project" ? "block" : "hidden"
              }`}
            >
              <li>
                <a
                  href="#"
                  className=" text-sm text-black font-medium hover:text-green-400"
                >
                  Project 1
                </a>
              </li>
              {/* Add more list items as needed */}
            </ul>
          </li>

          <li
            className={`hover:text-green-400 ${
              currentPage === "Contact Us" ? "text-green-400" : ""
            }`}
            onClick={() => setCurrentPage("Contact Us")}
          >
            Contact Us
          </li>
        </ul>
      </nav>
      </div>
      <div className="flex items-center">
      <a className="text-white w-28 mr-4 hidden sm:block hover:text-green-400">
          + 251 485 0700
        </a>
        <IoIosSearch className="w-6 h-6 mr-8 text-white hover:text-green-400"/>
        <RxHamburgerMenu className="w-10 h-10 mr-2 sm:mr-4 text-white hover:text-green-400"/>
      </div>
    </div>
  );
};

export default NavBar;
