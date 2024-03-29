import React, { useState } from "react";

const Projects = () => {
    const [hoveredProject, setHoveredProject] = useState(null);

    const handleMouseEnter = (project) => setHoveredProject(project);
    const handleMouseLeave = () => setHoveredProject(null);

    const proj = [
        {
            name: "Project 1",
            img: "./image/planting2.png",
        },
        {
            name: "Project 2",
            img: "./image/planting3.png",
        },
        {
            name: "Project 3",
            img: "./image/planting.png",
        },
        {
            name: "Project 4",
            img: "./image/planting2.png",
        },
    ]
    return (
    <div className="w-screen h-screen bg-gray-200 p-4">
      <h1 className="text-4xl font-extrabold text-blue-gray-800 ml-10">
        Projects
      </h1>
      <div
        className="flex flex-col md:flex-row w-screen"
        style={{ height: "calc(100vh - 60px)" }}
      >
              {proj.map((project, index) => (
                 <div
                      key={index}
                      className="flex flex-col justify-center w-full md:w-1/4 p-10 hover:bg-cover"
                      style={{
                          backgroundImage: hoveredProject === project.name ? `url(${project.img})` : "none",
                          backgroundPosition: hoveredProject === project.name ? "center center" : "right center",
                          transition: "background-position 0.5s ease-in-out",
                      }}
                      onMouseEnter={() => handleMouseEnter(project.name)}
                      onMouseLeave={handleMouseLeave}
                 >
                      <h1 className="text-lg font-semibold">{project.name}</h1>
                      <hr className="w-full bg-gray-400 h-0.5" />
                      <p className="text-3xl font-bold">Ethiopia Reforest360</p>
                 </div>
              ))}
      </div>
    </div>
 );
};

export default Projects;