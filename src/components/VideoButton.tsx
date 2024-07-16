"use client";
import { MdOutlineSlowMotionVideo } from "react-icons/md";

export default function VideoButton() {
  return (
    <div className="bg-[#76E309] flex gap-1 px-4 items-center justify-center rounded-md text-white">
      <MdOutlineSlowMotionVideo />
      <p>Watch video</p>
    </div>
  );
}

