import React from "react";

function About(){
    return(
        <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        I am a dedicated MERN (MongoDB, Express, React, Node.js) stack developer with a strong passion for creating robust and dynamic web applications. My experience includes working with modern front-end technologies like React to create engaging user interfaces and utilizing back-end technologies with Node.js and Express for server-side development.What sets me apart is my proficiency in Data Structures and Algorithms (DSA), which allows me to tackle complex problems efficiently and optimize the performance of the applications I build. My DSA skills help me solve challenges, enhance application functionality, and ensure scalability.
        </p>

        <br />

        <p className="text-xl">
        I am committed to staying up-to-date with the latest trends and technologies in web development, and I'm always eager to take on new and exciting projects that allow me to apply my expertise. My goal is to contribute to the success of projects by delivering high-quality, well-structured, and maintainable code."
        </p>
      </div>
    </div>
    );
}

export default About;