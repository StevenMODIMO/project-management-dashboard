"use client";
import { useState } from "react";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import Video from "./Video";

const VideoButton: React.FC = () => {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <div
      onClick={() => setShowVideo(true)}
      className="bg-[#76E309] flex gap-1 px-4 items-center justify-center rounded-md text-white"
    >
      <MdOutlineSlowMotionVideo />
      <p>Watch video</p>
      {showVideo && <Video setShowVideo={setShowVideo} />}
    </div>
  );
};

export default VideoButton;
