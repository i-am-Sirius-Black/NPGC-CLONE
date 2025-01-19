import React, { useState, useEffect } from "react";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import XIcon from "@mui/icons-material/X";
import Logo from "../assets/Logo.png";
import { format } from "date-fns";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Header = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const navItems = [
    {
      title: "ABOUT US",
      dropdown: ["College History", "Vision & Mission", "Administration"],
    },
    {
      title: "ACADEMICS",
      dropdown: ["Programs", "Departments", "Faculty"],
    },
    {
      title: "ADMISSION",
      dropdown: ["Admission Process", "Eligibility", "Fee Structure"],
    },
    {
      title: "LIBRARY",
      dropdown: ["E-Resources", "Catalog", "Rules"],
    },
    {
      title: "FACILITIES",
      dropdown: ["Infrastructure", "Hostels", "Sports"],
    },
    {
      title: "STUDENT CORNER",
      dropdown: ["Activities", "Clubs", "Events"],
    },
    { title: "PHOTO GALLERY" },
    { title: "NEWS" },
    { title: "PRESS RELEASE" },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Top Bar */}
      <div className="bg-slate-800 text-zinc-300 p-3">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex gap-4">
            {/* <XIcon className="w-5 h-5" /> */}
            <a
              href="https://github.com/i-am-Sirius-Black"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon className="w-5 h-5" />
            </a>
            {/* <YouTubeIcon className="w-5 h-5" /> */}
            <a
              href="https://www.linkedin.com/in/javed-khan-514601171/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon className="w-5 h-5" />
            </a>
          </div>
          <div className="text-sm">
            {format(currentDate, "EEEE, MMMM d, yyyy")}
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white p-4 py-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <img src={Logo} alt="College Logo" className="h-20" />
          <div className="flex gap-6 text-gray-600">
            <div className="flex items-center gap-2">
              <span>📞</span>
              <div className="text-sm">
                <div>Call us</div>
                <div>6392879794</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span>✉️</span>
              <div>
                <div className="text-sm">Email</div>
                <a
                  href="mailto:khanjaved.sk19@gmail.com"
                  className="text-blue-600 text-sm"
                >
                  Khanjaved.sk19@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-[#6091ba] text-white">
        <div className="max-w-7xl mx-auto">
          <ul className="flex">
            {navItems.map((item, index) => (
              <li key={index} className="group relative">
                <button className="px-4 py-3 text-sm text-zinc-200 hover:bg-[#337ab7] flex items-center">
                  {item.title}
                  {item.dropdown && (
                    <span className="ml-1">
                      <KeyboardArrowDownIcon />
                    </span>
                  )}
                </button>
                {item.dropdown && (
                  <ul className="z-10 absolute hidden group-hover:block bg-white text-gray-800 shadow-lg w-48">
                    {item.dropdown.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          {subItem}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
