"use client";
import { motion } from "framer-motion";

// Backdrop that displays a pale dark backgroud for modals and other pop ups.
export default function Backdrop({ children, setModal }) {
  return (
    <motion.main
      onClick={() => setModal(false)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex items-center justify-center bg-[rgb(0,0,0,0.4)] absolute top-0 left-0 h-full w-full"
    >
      {children}
    </motion.main>
  );
}
