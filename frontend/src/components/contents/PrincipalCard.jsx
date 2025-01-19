import React from "react";
import principalImage from "../../assets/Principal.jpg";
import javed from "../../assets/javed.jpg";

const PrincipalCard = () => {
  return (
    <div className="relative bg-gray-100 overflow-hidden mb-8">
      <h1 className="text-xl font-light leading-11 mt-0 text-gray-800 font-sans mb-2.5">
        <span className="border-t-2 border-blue-400 inline-block py-1 px-4">
          From Developer's Desk
        </span>
      </h1>

      <div className="px-4 pb-4">
        <div className="relative">
          <div className="relative w-full overflow-hidden">
            <div className="relative block transform transition-transform duration-300 ease-in-out">
              <img 
                src={javed} 
                alt="Prof. Devendra Kumar Singh, Principal, National P.G. College" 
                className="block w-full h-auto align-middle" 
              />
            </div>
          </div>
        </div>

        <p className="text-gray-600 text-sm text-justify mb-2.5">
          <span className="font-bold">Mr. Javed Khan</span>
          <br />
          Web Developer
          <br />
          <a 
            href="https://www.linkedin.com/in/javed-khan-514601171/" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-500 transition duration-300 ease-in-out no-underline"
          >
            Read More
          </a>
        </p>
      </div>
    </div>

  );
};

export default PrincipalCard;



