import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        In my  front-end development journey, I've built a solid foundation in HTML, CSS, and JavaScript. I've learned how to create visually appealing and interactive web interfaces, ensuring responsiveness across different devices. Additionally, I've delved into frameworks like React and embraced version control with Git and GitHub for collaborative coding. 
        </p>

        <br />

        <p className="text-xl">
        Accessibility and performance optimization have become integral to my work, and I've gained familiarity with tools like Webpack and Gulp for streamlining development workflows. With a strong foundation and a growing skill set, I'm eager to continue my journey in front-end development, tackling more complex projects and contributing to user-friendly web experiences.
        </p>
      </div>
    </div>
  );
};

export default About;
