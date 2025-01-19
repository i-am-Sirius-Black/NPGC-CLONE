import React from "react";
import Alumni from "../assets/Resources/Alumni.png";
import Courses from "../assets/Resources/Courses.png";
import Cvfs from "../assets/Resources/cvfs.png";
import Datesheet from "../assets/Resources/Datesheet.png";
import ExaminationForm from "../assets/Resources/ExaminationForm.png";
import NAAC from "../assets/Resources/NAAC.png";
import Nirf from "../assets/Resources/Nirf.png";
import Result from "../assets/Resources/Result.png";

const resources = [
  { src: Nirf, label: "NIRF", link: "https://www.npgc.in/assets/MiscPDF/NIRF_2024.pdf"},
  { src: NAAC, label: "NAAC", link: "http://naac.gov.in/index.php/en/"},
  { src: Courses, label: "Courses", link: "https://www.npgc.in/Academics-CoursesUG.aspx"},
  { src: ExaminationForm, label: "Examination Form", link:"https://exam.npgc.in/" },
  { src: Datesheet, label: "Examination Datesheet", link:"https://www.npgc.in/StudentSupport-Datesheet.aspx" },
  { src: Result, label: "Examination Result", link:"https://result.npgc.in/" },
  { src: Alumni, label: "Alumni Registration", link:"https://docs.google.com/forms/d/e/1FAIpQLSdD7Hpmkl9so-m5SQYDxxyyDcvHZUzdaPs3NM1BsXBWzTjVhQ/viewform?usp=send_form" },
  { src: Cvfs, label: "Centre for Vocational and Futuristic Studies", link:"https://www.npgc.in/Academics-CVFS.aspx"},
];

// const Resources = () => {
//   return (
//    <div className="container mx-auto">
//      {/* <div className="flex flex-wrap justify-around items-center gap-8 bg-white py-12 px-4"> */}
//      <div className="grid grid-cols-6 gap-y-2 gap-x-4 justify-items-center bg-white py-8 px-4">
//       {resources.map((link, index) => (
//         <a
//           key={index}
//           href={link.link}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-center w-32"
//         >
//           <img
//             src={link.src}
//             alt={link.label}
//             className="w-36 h-36 mx-auto mb-2 opacity-70 hover:scale-105 transition-transform duration-200"
//           />
//         </a>
//       ))}
//     </div>
//    </div>
//   );
// };

// export default Resources;


const Resources = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-y-4 gap-x-4 justify-items-center bg-white py-6 sm:py-8">
        {resources.map((link, index) => (
          <a
            key={index}
            href={link.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-center w-20 sm:w-32"
          >
            <img
              src={link.src}
              alt={link.label}
              className="w-20 h-20 sm:w-28 sm:h-28 lg:w-36 lg:h-36 mx-auto mb-2 opacity-70 hover:scale-105 transition-transform duration-200"
            />
            <p className="text-xs sm:text-sm">{link.label}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Resources;
