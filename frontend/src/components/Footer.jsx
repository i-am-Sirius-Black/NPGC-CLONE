// import React from "react";

// const Footer = () => {
//   return (
//     <footer className="bg-gray-800 text-white font-thin text-md text-zinc-400 py-6">
//       <div className="container mx-auto text-center">
//         <p>&copy; 2025 National PG College. All rights reserved.</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-gray-300">
      <div className="container mx-auto py-8 px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-semibold pt-2 mb-4">About</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white font-thin text-md text-zinc-400">About Us</a>
            </li>
            <li>
              <a href="#" className="hover:text-white font-thin text-md text-zinc-400">Contact Us</a>
            </li>
            <li>
              <a href="#" className="hover:text-white font-thin text-md text-zinc-400">Privacy Policy</a>
            </li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-lg font-semibold pt-2 mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white font-thin text-md text-zinc-400">Result</a>
            </li>
            <li>
              <a href="#" className="hover:text-white font-thin text-md text-zinc-400">Academic Calendar</a>
            </li>
            <li>
              <a href="#" className="hover:text-white font-thin text-md text-zinc-400">Tender Notice</a>
            </li>
          </ul>
        </div>

        {/* External Links Section */}
        <div>
          <h3 className="text-lg font-semibold pt-2 mb-4">External Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white font-thin text-md text-zinc-400">UGC</a>
            </li>
            <li>
              <a href="#" className="hover:text-white font-thin text-md text-zinc-400">NAAC</a>
            </li>
            <li>
              <a href="#" className="hover:text-white font-thin text-md text-zinc-400">University of Lucknow</a>
            </li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div>
          <h3 className="text-lg font-semibold pt-2 mb-4">Contact Us</h3>
          <ul className="space-y-2">
            <li>Bari Envclave, Kehshav Nagar, Lucknow</li>
            <li>226020, Uttar Pradesh (India)</li>
            <li>
              <a href="tel:05224021304" className="hover:text-white font-thin text-md text-zinc-400">0522 4021304</a>
            </li>
            <li>
              <a href="mailto:support@npgc.in" className="hover:text-white font-thin text-md text-zinc-400">support@npgc.in</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-800 py-3">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-gray-400">
          <p className="text-center md:text-left">
            © 2025 National P.G. College | Website Developed by{" "}
            <a href="https://www.linkedin.com/in/javed-khan-514601171/" className="text-blue-400 hover:underline" target="_blank" rel="noreferrer noopener">
              Javed Khan
            </a>
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white font-thin text-md text-zinc-400">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="hover:text-white font-thin text-md text-zinc-400">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-white font-thin text-md text-zinc-400">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-white font-thin text-md text-zinc-400">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
