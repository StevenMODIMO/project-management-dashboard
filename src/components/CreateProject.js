"use client";
import Image from "next/image";
import { useState } from "react";
import Backdrop from "./Backdrop";
import { CgAsterisk } from "react-icons/cg";
import { RiAttachment2 } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";

// animation variables to control the transition, entering and exiisting of the animated element.
const dropIn = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 300,
    },
  },
  exit: {
    scale: 0,
    opacity: 0,
  },
};

export default function CreateProject({ setModal }) {
  const [projectName, setProjectName] = useState("");
  const [projectImage, setProjectImage] = useState("");
  const [preview, setPreview] = useState("");
  const [isDragging, setIsDragging] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("projectName", projectName);
    formData.append("projectImage", projectImage);

    const response = await fetch("/api/projects", {
      method: "POST",
      body: formData,
    });

    const json = await response.json();
  };

  const handleImage = (e) => {
    e.preventDefault();
    const file = e.target.files ? e.target.files[0] : e.dataTransfer.files[0];
    if (file) {
      setProjectImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    handleImage(e);
  };

  return (
    <Backdrop setModal={setModal}>
      <motion.main
        onClick={(e) => e.stopPropagation()}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="w-[50%] mx-auto bg-white h-[60%] p-4 rounded-md"
      >
        <header className="flex flex-col gap-3">
          <h1 className="text-gray-700 font-bold text-2xl">
            Add project details
          </h1>
          <h2 className="text-sm text-gray-500">
            Explore what's possible when you collaborate with your team. Edit
            project details anytime in project settings.
          </h2>
          <div className="flex gap-2 items-center text-xs text-gray-400 font-bold">
            <p>Required fields are marked with an asterisk</p>
            <CgAsterisk className="text-[#6EC616]" />
          </div>
        </header>
        <section>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-6">
            <label
              htmlFor="name"
              className="flex items-center gap-2 text-sm text-gray-500"
            >
              Project name <CgAsterisk className="text-[#6EC616]" />
            </label>
            <input
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              className="outline-none border border-[#6EC616] p-2 rounded-md w-[50%]"
              placeholder="Ecommerce web app"
            />
            <label
              htmlFor="avatar"
              className={`cursor-pointer flex gap-2 justify-center items-center border-2 ${
                isDragging ? "border-solid" : "border-dotted"
              } border-[#6EC616] rounded-md p-2 text-sm text-gray-500 w-[50%] ${
                isDragging ? "bg-green-100" : ""
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <RiAttachment2 />
              {isDragging ? "Drop image here" : "Project thumbnail (optional)"}
            </label>
            <input
              id="avatar"
              type="file"
              className="hidden"
              onChange={handleImage}
            />
            <footer className="flex gap-8 justify-end items-center p-2">
              <AnimatePresence>
                {projectName && (
                  <motion.section
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{
                      duration: 0.1,
                      type: "spring",
                      damping: 25,
                      stiffness: 300,
                    }}
                    className="shadow rounded-md p-2 flex items-center gap-2"
                  >
                    {preview && (
                      <Image
                        src={preview}
                        alt="preview"
                        width={30}
                        height={30}
                        className="rounded-full"
                      />
                    )}
                    <div className="text-gray-600 font-bold">{projectName}</div>
                  </motion.section>
                )}
              </AnimatePresence>
              <div
                onClick={() => setModal(false)}
                className="cursor-pointer border-2 border-[#6EC616] text-[#6EC616] w-fit p-1 rounded-md text-sm"
              >
                Cancel
              </div>
              <button className="bg-[#6EC616] p-1 text-white rounded-md text-sm">
                Create
              </button>
            </footer>
          </form>
        </section>
      </motion.main>
    </Backdrop>
  );
}
