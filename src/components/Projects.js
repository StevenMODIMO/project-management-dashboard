"use client";
import { useState, useEffect } from "react";
import { IoIosArrowDown, IoMdSearch } from "react-icons/io";
import CreateProject from "./CreateProject";
import { AnimatePresence } from "framer-motion";

export default function MyProjects() {
  const [modal, setModal] = useState(false);
  return (
    <main>
      <header className="flex justify-between p-3">
        <form className="flex gap-2">
          <lable
            className="flex items-center gap-1 shadow-md rounded-md p-2"
            htmlFor="search"
          >
            <input
              id="search"
              className="outline-none text-gray-500"
              placeholder="Search projects"
            />
            <IoMdSearch className="text-gray-500" />
          </lable>
          <label
            className="flex items-center gap-1 shadow-md rounded-md p-2"
            htmlFor="category"
          >
            <input
              id="category"
              className="outline-none text-gray-500"
              placeholder="Filter by category"
            />
            <IoIosArrowDown className="text-gray-500" />
          </label>
        </form>
        <button
          onClick={() => setModal(true)}
          className="bg-[#6EC616] p-1 text-white rounded-md text-sm"
        >
          New project
        </button>
      </header>
      <AnimatePresence>
        {modal && <CreateProject setModal={setModal} />}
      </AnimatePresence>
      <section></section>
    </main>
  );
}
