import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import heroImage from "../Assets/hero.png.jpg";
import { Link } from "react-scroll";

function Home(){
    return (
        <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
           <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center px-4 h-full md:flex-row">
                <div className="flex flex-col justify-center h-full">
                    <h2 className="text-4xl sm:text-7xl font-bold text-white">I'm a Mern Stack DeVeloper</h2>
                    <p className=" text-gray-500 py-4 max-w-md">As a fresher with knowledge of MERN stack development, databases, and data structures and algorithms (DSA).
                     </p>

                     <div>
                     <Link
                        to="portfolio"
                            smooth
                            duration={500} className=" group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-b from-cyan-500 to-blue-500 cursor-pointer">
                            Projects
                            <span className="group-hover:rotate-90 duration-300">
                                <FontAwesomeIcon icon={faArrowRight} size={25}
                                className=" ml-1"/>
                            </span>
                        </Link>
                     </div>   
                </div>
                <div>
                    <img src={heroImage} alt="My profile" className="rounded-2xl mx-auto w-2/3 md:w-full"/>
                </div>
            </div> 
        </div>
    );
}

export default Home;