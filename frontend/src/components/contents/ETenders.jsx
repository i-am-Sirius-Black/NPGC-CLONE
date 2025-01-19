import React from "react";
import { data } from "../../data";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
const ETenders = ({tenders}) => {
    // Use tenders prop if available, otherwise fall back to data.tenders
    const tendersToDisplay = tenders.length > 0 ? tenders : data.tenders;
  return (
    <section className="bg-gray-50 mb-8">
      <h1 className="text-2xl font-light leading-11 mt-0 text-blue-900 mb-4">
        <span className="border-t-2 border-blue-400 py-1 px-3 inline-block">
          e-Tender Notices
        </span>
      </h1>
      <div className="px-4 pb-4">
        {tendersToDisplay.map((tender, index) => (
          <p key={tender._id} className="text-gray-700 text-sm mb-2">
            <a
              href={tender.url}
              className="text-blue-400 transition duration-400 ease-in-out hover:underline flex items-center"
            >
            <ArrowRightIcon className="mr-2" />
            {tender.title}
            </a>
          </p>
        ))}
      </div>
    </section>
  );
};

export default ETenders;
