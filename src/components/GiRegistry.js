import React, { useEffect, useState } from "react";
import { FaAngleRight } from "react-icons/fa6";
import Counter from "./Count";
const GiRegistry = () => {
  return (
    <div className="w-full p-4 sm:p-8 md:p-12 lg:p-20" >
    <div className="flex flex-col sm:flex-row h-auto sm:h-screen">
      <div className="flex flex-col w-full sm:w-1/2 mt-4 sm:mt-0 ml-0 sm:ml-24 mr-0 sm:mr-10">
        <h1 className="text-3xl sm:text-5xl font-extrabold w-full sm:w-2/3 mb-4 sm:mb-8 text-blue-gray-800">
          Green Initiative Registry- Cultivating Sustainability, Inspiring Change
        </h1>
        <p className="text-base sm:text-lg text-blue-gray-600">
          Welcome to the Green Initiative Registry, a transformative platform
          dedicated to the Green Legacy Initiative (GLI) and the Restoration
          of Degraded Landscapes in Ethiopia. As stewards of our environment,
          we are on a mission to build a climate-resilient and carbon-neutral
          middle-income economy. Join us on this journey towards a greener,
          more sustainable Ethiopia.
        </p>
        <div className="flex justify-center my-4 sm:my-6">
          <button
            className={`flex flex-row justify-center items-center border rounded-2xl bg-transparent hover:bg-black hover:text-white font-bold py-2 sm:py-4 px-4 sm:px-6`}
          >
            <span className="mr-2 sm:mr-4">Find Out More</span>
            <FaAngleRight className="h-4 w-4 text-gray-400" />
          </button>
        </div>
        <div className="flex flex-col sm:flex-row w-full justify-center">
          <div className="w-44 mb-4 sm:mb-0 sm:mr-10">
            <p className="flex flex-row text-3xl sm:text-5xl font-extrabold text-green-400"><Counter targetNumber={57} delay={50} />+</p>
            
            <p className="text-base sm:text-lg">Projects Completed in last 5 Years</p>
          </div>
          <div className="h-28 bg-gray-600 w-0.5 hidden sm:block"></div>
          <div className="w-44 md:ml-10">
            <p className="flex flex-row text-3xl sm:text-5xl font-extrabold text-green-400"><Counter targetNumber={7} delay={50} />Billion</p>
            <p className="text-base sm:text-lg">Trees Planted in 2023</p>
          </div>
        </div>
      </div>
      <div className="w-full sm:w-1/2 mt-4 sm:mt-0">
        <img src="./image/home1.jpg" className="h-64 sm:h-full w-full object-cover" alt="Green Initiative" />
      </div>
    </div>
  </div>
  );
};

export default GiRegistry;
