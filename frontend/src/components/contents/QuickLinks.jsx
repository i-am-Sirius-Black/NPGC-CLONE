import React from "react";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { data } from "../../data";
const QuickLinks = ({links}) => {
      const linksToDisplay = links.length > 0 ? links : data.quickLinks;
  return (
    <section className="bg-gray-50 mb-8">
      <h1 className="text-2xl font-light leading-11 mt-0 text-blue-900 mb-4">
        <span className="border-t-2 border-blue-400 py-1 px-3 inline-block">
          Quick Links
        </span>
      </h1>
      <div className="px-4 pb-4">
        {linksToDisplay.map((link) => (
          <p className="text-gray-700 text-sm mb-2" key={link._id}>
            <a
              href={link.url}
              className="text-blue-400 transition duration-400 ease-in-out hover:underline flex items-center"
            >
              {/* <i className="mr-2 fa fa-link"></i>
              {link.title} */}
              <ArrowRightIcon className="mr-2" />
              {link.title}
            </a>
          </p>
        ))}
      </div>
    </section>
  );
};

export default QuickLinks;
