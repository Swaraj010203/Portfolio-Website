import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import {FaLinkedin} from "react-icons/fa";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";

function SocialLinks(){
   
    return (
        <div className="  hidden lg:flex flex-col top-[35%] left-0 fixed ">
            <ul>
                <li className="flex justify-between items-center w-40 h-14 px-4 
                 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300  bg-gray-500">
                    <a href="https://www.linkedin.com/in/swaraj-farakate-609190233/"
                    className="flex justify-between items-center w-full text-white rounded-tr-md"
                    target="_blank"
                    rel="noreferrer">
                    {" "}
                    <>
                        LinkedIn <FaLinkedin size={30}/>
                    </>
                    </a>
                </li>
                <li className="flex justify-between items-center w-40 h-14 px-4 
                 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500">
                    <a href="https://github.com/Swaraj010203"
                    className="flex justify-between items-center w-full text-white"
                    target="_blank"
                    rel="noreferrer">
                    {" "}
                    <>
                        GitHub  <FontAwesomeIcon icon={faGithub} size={30} />
                    </>
                    </a>
                </li>
                <li className="flex justify-between items-center w-40 h-14 px-4 
                 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500">
                    <a href="mailto:swarajfarakate1203@gmail.com"
                    className="flex justify-between items-center w-full text-white"
                    target="_blank"
                    rel="noreferrer">
                    {" "}
                    <>
                        E-mail <MailOutlineIcon size={30}/>
                    </>
                    </a>
                </li>
                <li className="flex justify-between items-center w-40 h-14 px-4 
                 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500">
                    <a href="/Swaraj+Resume.pdf" 
                    className="flex justify-between items-center w-full text-white rounded-tr-md"
                    target="_blank"
                    rel="noreferrer"
                    >
                    {" "}
                    <>
                        Resume  <FontAwesomeIcon icon={faFileAlt} size="30"  download-true/>
                    </>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default SocialLinks;