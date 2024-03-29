import React, { useEffect, useState } from "react";
import { FaAngleRight } from "react-icons/fa6";
const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { src: "./image/pexels-photo.jpg", text: "SEEDS OF HOPE" },
    { src: "./image/abiy.png", text: "ROTTING FOR TOMORROW" },
    {
      src: "./image/350-million-trees-planted-record-green-legacy-ethiopia-1-5d41517494324__700.jpg",
      text: "FROM ROOTS TO COMMUNITES",
    },
    { src: "./image/slide1.jpg", text: "BALANCING ACT: ETHIOPIA'S COMMITMENT" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-full "  style={{ height: "calc(100vh + 150px)" }}>
      <div className="flex flex-col justify-center items-end absolute top-1/2 right-0 sm:right-5 z-10 sm:mr-14">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-4 h-4 rounded-full border bottom-4 ${
              currentIndex === index ? "bg-white" : "bg-transparent"
            } mb-2`}
          />
        ))}
      </div>
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full ${
            currentIndex === index ? "opacity-100 z-5" : "opacity-0 z-0"
          } transition-opacity duration-500`}
          style={{ height: "calc(100vh + 150px)" }}
        >
          <div className="h-full w-full object-cover flex flex-col text-white">
            <img
              src={image.src}
              alt={`image ${index + 1}`}
              className="h-full w-full object-cover"
            />
            <div className="absolute top-1/3 ml-2 sm:ml-32 z-10">
              <h1
                className={`w-full sm:w-11/12 text-3xl sm:text-8xl font-extrabold transition-opacity duration-500 mb-10 ${
                  currentIndex === index ? "opacity-100" : "opacity-0"
                }`}
              >
                {image.text}
              </h1>
              <button
                className={`flex flex-row items-center border rounded-2xl bg-transparent hover:bg-green-400 hover:text-black text-white font-bold py-2 sm:py-4 px-4 sm:px-6 mt-2 sm:mt-4 transition-transform duration-500 ${
                  currentIndex === index
                    ? "transform translate-x-0"
                    : "transform -translate-x-full"
                }`}
              >
                <span className="mr-2 sm:mr-4">Find Out More</span>
                <FaAngleRight className="h-4 sm:h-6 w-4 sm:w-6 text-white"/>
                
              </button>
            </div>
          </div>
        </div>
      ))}
      <div className="hidden md:flex absolute top-full left-0 w-full p-4 bg-opacity-50 ">
        <div
          className={`flex border p-8 ${
            currentIndex === 0
              ? "bg-white text-black"
              : "bg-transparent text-white"
          }`}
          onClick={() => setCurrentIndex(0)}
        >
          <h1 className="text-lg font-bold  mr-4">01</h1>
          <h1 className="text-xl font-bold ">Green Legacy Ethiopia Unveiled</h1>
        </div>
        <div
          className={`flex border p-8 ${
            currentIndex === 1
              ? "bg-white text-black"
              : "bg-transparent text-white"
          }`}
          onClick={() => setCurrentIndex(1)}
        >
          <h1 className="text-lg font-bold  mr-4">02</h1>
          <h1 className="text-xl font-bold ">
            Reforesting Ethiopia's Horizons
          </h1>
        </div>
        <div
          className={`flex border p-8 ${
            currentIndex === 2
              ? "bg-white text-black"
              : "bg-transparent text-white"
          }`}
          onClick={() => setCurrentIndex(2)}
        >
          <h1 className="text-lg font-bold  mr-4">03</h1>
          <h1 className="text-xl font-bold ">
            Empowering Ethiopian Communities
          </h1>
        </div>
        <div
          className={`flex border p-8 ${
            currentIndex === 3
              ? "bg-white text-black"
              : "bg-transparent text-white"
          }`}
          onClick={() => setCurrentIndex(3)}
        >
          <h1 className="text-lg font-bold mr-4">04</h1>
          <h1 className="text-xl font-bold ">
            Carbon Neutrality: Ethiopia's Pledge
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Slider;
