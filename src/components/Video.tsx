"use client"
import { motion } from "framer-motion";

interface VideoProps {
  setShowVideo: React.Dispatch<React.SetStateAction<boolean>>;
}

const Video: React.FC<VideoProps> = ({ setShowVideo }) => {
  return (
    <motion.main
      onClick={() => setShowVideo(false)}
      className="h-[500px] w-[500px] mx-auto bg-black/70 absolute rounded"
      initial={{ y: -2000, opacity: 0.8 }}
      animate={{ y: 0, opacity: 1 }}
    ></motion.main>
  );
};

export default Video;
