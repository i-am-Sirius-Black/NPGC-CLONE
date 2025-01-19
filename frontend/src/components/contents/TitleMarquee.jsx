import React from "react";

const TitleMarquee = () => {
  return (
    // <div className="bg-gray-200 py-2">
    //   <marquee behaviour="Alternate" className="text-lg font-semibold text-green-600">
    //     National P.G. College has adopted NEP-2020 and is now NEP Compliant.
    //   </marquee>
    // </div>
    <div className="bg-white pt-5 mb-0 pb-0">
            <marquee behavior="Alternate" className="text-lg text-[#556b2f]">National P.G. College has adopted NEP-2020 and is now NEP Compliant.</marquee>
    </div>
  );
};

export default TitleMarquee;
