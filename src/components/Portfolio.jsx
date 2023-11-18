import React from "react";
import ecompic from "../assets/portfolio/ecom.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import calculator from "../assets/portfolio/calculator.jpeg";
import reactParallax from "../assets/portfolio/todo.jpeg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: ecompic,
      codelink: "https://github.com/shri1211/myEcommerce",
      demolink: "https://my-ecommerce-70ejxdtin-shreenidhis-projects.vercel.app/",
    },
    {
      id: 2,
      src: reactParallax,
      codelink: "https://github.com/shri1211/My-Todo",
      demolink: "https://my-todo-nu-six.vercel.app/",
    },
    {
      id: 3,
      src: calculator,          
      codelink: "https://github.com/shri1211/calculator",
      demolink: "https://shri1211.github.io/calculator/",
      

    },
    {
      id: 4,
      src: reactSmooth,
      codelink: "https://github.com/shri1211/imageSearch_app",
      demolink: "https://shri1211.github.io/imageSearch_app/",
    },
    {
      id: 5,
      src: installNode,
    },
    {
      id: 6,
      src: reactWeather,
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, codelink, demolink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
              <a href={demolink} target="_blank" rel="noopener noreferrer">                
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Demo
                  </button>
                  </a>
                
                <a href={codelink} target="_blank" rel="noopener noreferrer">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
