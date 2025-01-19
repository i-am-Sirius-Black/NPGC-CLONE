// import React from "react";

// const VisionMission = () => {
//   return (
//     <div className="p-4 border rounded-lg shadow-md bg-white">
//       <h2 className="text-lg font-bold mb-4">Vision & Mission</h2>
//       <p className="text-gray-700 text-sm">
//         The motto of the college is maritum ethicus i.e. merit with ethics...
//       </p>
//     </div>
//   );
// };

// export default VisionMission;

import React from "react";

const VisionMission = () => {
  return (
    <section className="bg-gray-50 mb-8">
      <h1 className="text-2xl font-thin leading-11 mt-0 text-blue-900 mb-4">
        <span className="border-t-2 border-blue-400 py-1 px-3 inline-block">
          Vision & Mission
        </span>
      </h1>
      <div className="px-4 pb-4">
        <p className="text-gray-700 text-sm">
          The motto of the college is <strong>maritum ethicus</strong> i.e. merit with ethics...
        </p>
      </div>
    </section>
  );
};

export default VisionMission;
