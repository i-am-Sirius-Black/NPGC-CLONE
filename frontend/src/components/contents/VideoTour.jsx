// import React from "react";

// const VideoTour = () => {
//   return (
//     <div className="p-4 border rounded-lg shadow-md bg-white">
//       <h2 className="text-lg font-bold mb-4">College Video Tour</h2>
//       <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
//         <p className="text-gray-500">Video Placeholder</p>
//       </div>
//     </div>
//   );
// };

// export default VideoTour;

import React from "react";
import YoutubeImage from "../../assets/Youtube.jpg";

const VideoTour = () => {
  return (
    <section className="bg-gray-50 mb-8">
      <h1 className="text-2xl font-thin leading-11 mt-0 text-blue-900 mb-4">
        <span className="border-t-2 border-blue-400 py-1 px-3 inline-block">
          College Video Tour
        </span>
      </h1>
      <div className="px-4 pb-4">
        <div className="w-full h-48 bg-gray-200 flex items-center justify-center rounded-md shadow-sm">
          {/* <p className="text-gray-500">Video Placeholder</p> */}
          <a href="https://www.youtube.com/watch?v=rfborsYe6uU" target="_blank" rel="noopener noreferrer">
          <img src={YoutubeImage} alt="Collage Tour" loading="lazy" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default VideoTour;
