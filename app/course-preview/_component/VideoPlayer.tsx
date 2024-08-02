"use client";
// import React from 'react'
import ReactPlayer from "react-player";

const VideoPlayer = ({ videoURL }: any) => {
  return (
    <div className="border border-gray-900 rounded-lg p-2 bg-black bg-opacity-20">
      <h2 className="text-gray-600 mb-1"> Course Preview</h2>
      <div className="w-auto">
        <div className="relative w-auto" style={{ paddingTop: "56.25%"}}>
          <ReactPlayer
            url={videoURL}
            controls
            width="100%"
            height="100%"
            style={{ position: "absolute", top: 0, left: 0 }}
          />
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
// "use client";
// import React from "react";
// import ReactPlayer from "react-player";

// const VideoPlayer = ({ videoURL }:any) => {
//   return (
//       <h2 className="text-gray-600 mb-2">Course Preview</h2>
//       <div className="relative pb-56.25 overflow-hidden rounded-lg">
//         <ReactPlayer
//           url={videoURL}
//           width="100%"
//           height="100%"
//           className="absolute top-0 left-0"
//         />
//       </div>
//     </div>
//   );
// };

// export default VideoPlayer;
