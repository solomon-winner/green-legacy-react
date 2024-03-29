import React from "react";
import Counter from "./Count";

const MapData = () => {
  return (
    <div>
      <div className="flex flex-row w-screen mb-10">
        <div className="flex flex-col justify-center items-center w-full md:w-1/4 p-10">
          <h1 className="text-lg md:text-base text-blue-gray-600 mb-10">
            TREE SEEDLINGS PLANTED ACROSS ETHIOPIA (IN BILLION)
          </h1>
          <p className="text-lg md:text-base text-blue-gray-600 mb-10">
            5.9 BILLION | 2020
          </p>
          <p className="flex flex-row text-3xl sm:text-5xl font-extrabold text-green-400 mb-10">
            <Counter targetNumber={5} delay={50} />
            Billion
          </p>
        </div>
        <div className=" h-72 bg-gray-200 w-0.5 hidden sm:block"></div>
        <div className="flex flex-col justify-center items-center w-full md:w-1/4 p-10">
          <h1 className="text-lg md:text-base text-blue-gray-600 mb-10">
            LAND RECEIVED POST-PLANTING CARE NATIONWIDE
          </h1>
          <p className="text-lg md:text-base text-blue-gray-600 mb-10">
            1.18 MILLION HECTARE | 2020
          </p>
          <p className="flex flex-row text-3xl sm:text-5xl font-extrabold text-green-400 mb-10">
            <Counter targetNumber={1} delay={50} />
            Billion
          </p>
        </div>
        <div className=" h-72 bg-gray-200 w-0.5 hidden sm:block"></div>
        <div className="flex flex-col justify-center items-center w-full md:w-1/4 p-10">
          <h1 className="text-lg md:text-base text-blue-gray-600 mb-10">
            SEEDLINGS PLANTED TO REPLACE DEAD AND DYING PLANTS
          </h1>
          <p className="text-lg md:text-base text-blue-gray-600 mb-10">
            17.34 MILLION BY 2020
          </p>
          <p className="flex flex-row text-3xl sm:text-5xl font-extrabold text-green-400 mb-10">
            <Counter targetNumber={17} delay={50} />
            Billion
          </p>
        </div>
        <div className=" h-72 bg-gray-200 w-0.5 hidden sm:block"></div>
        <div className="flex flex-col justify-center items-center w-full md:w-1/4 p-10">
          <h1 className="text-lg md:text-base text-blue-gray-600 mb-10">
            PLANTING SITES UTILIZED FOR TREE PLANTING
          </h1>
          <p className="text-lg md:text-base text-blue-gray-600 mb-10">
            1.2 MILLION HECTARE BY 2020
          </p>
          <p className="flex flex-row text-3xl sm:text-5xl font-extrabold text-green-400 mb-10">
            <Counter targetNumber={1} delay={50} />
            Billion
          </p>
        </div>
      </div>
      <div className="flex flex-row mb-6">
        <div className="w-1/2">
        <h1 className="text-xl sm:text-5xl font-extrabold w-1/2 ml-6">Green Initiative Degraded sites Map Database</h1>
        </div>
    
        <p className="w-1/2">
          The Green Legacy Initiative (GLI) is one of the initiatives which was
          introduced in June 2019 with the goal of creating a green and
          climate-resilient Ethiopia. The goal was to plant 20 billion seedlings
          over the course of four years. According to the Ethiopian government
          by rallying more than 20 million residents nationwide, Ethiopia has
          succeeded in planting 25 billion seedlings by the end of the fourth
          year. The Initiative's aim to tackle numerous goals that can be seen
          as a very creative feature overall. This initiative has positive
          effects on a variety of interconnected goals, including environmental
          protection, the restoration of overused and damaged natural resources,
          such as surface soil and water, and stopping desertification.
        </p>
      </div>
    </div>
  );
};

export default MapData;
