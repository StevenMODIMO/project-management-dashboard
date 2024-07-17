"use client";
import { FaBars, FaGithub, FaXTwitter } from "react-icons/fa6";
import { FaTimes, FaFacebook, FaDiscord } from "react-icons/fa";
import logo from "@/assets/icon.png";
import { navLinks } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleMenuClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <nav className="p-2 md:flex justify-between">
      <header className="flex justify-between items-center">
        <Link href="/" onClick={() => setToggleMenu(false)}>
          <Image src={logo} alt="logo" width={80} height={80} />
        </Link>
        {!toggleMenu ? (
          <motion.div
            key="bars"
            initial={{ opacity: 0, rotate: -45 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 0.3 }}
            className="text-3xl md:hidden"
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            <FaBars />
          </motion.div>
        ) : (
          <motion.div
            key="times"
            initial={{ opacity: 0, rotate: 45 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 0.3 }}
            className="text-3xl z-10 md:hidden"
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            <FaTimes />
          </motion.div>
        )}
      </header>
      <AnimatePresence>
        {toggleMenu && (
          <motion.div
            initial={{ opacity: 0.8, x: -1200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0.8, x: -1200 }}
            transition={{ ease: "easeInOut" }}
            className="fixed left-0 top-0 w-full h-full bg-gray-100/40 sm:hidden"
            onClick={() => setToggleMenu(false)}
          >
            <div
              className="bg-white flex flex-col gap-5 p-4 w-[50%] h-full"
              onClick={handleMenuClick}
            >
              <Link href="/" onClick={() => setToggleMenu(false)}>
                <Image src={logo} alt="logo" width={80} height={80} />
              </Link>
              {navLinks.map(({ id, title, route }) => (
                <Link
                  href={route}
                  key={id}
                  onClick={() => setToggleMenu(false)}
                  className={`${
                    route === "login"
                      ? "bg-[#76E309] p-1 rounded-md text-white w-fit"
                      : ""
                  }`}
                >
                  {title}
                </Link>
              ))}
              <p className="text-lg">Follow Us:</p>
              <div className="flex flex-col gap-3">
                <div className="flex gap-1 items-center">
                  <FaGithub className="text-xl" />
                  <p className="text-sm">Github</p>
                </div>
                <div className="flex gap-1 items-center">
                  <FaFacebook className="text-xl" />
                  <p className="text-sm">Facebook</p>
                </div>
                <div className="flex gap-1 items-center">
                  <FaXTwitter className="text-xl" />
                  <p className="text-sm">twitter</p>
                </div>
                <div className="flex gap-1 items-center">
                  <FaDiscord className="text-xl" />
                  <p className="text-sm">Discord</p>
                </div>
              </div>
              <footer className="text-center">&copy; 2024, PMD</footer>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="hidden md:flex flex-row justify-center gap-3 p-5 text-sm">
        {navLinks.map(({ id, title, route }) => (
          <Link
            href={route}
            key={id}
            onClick={() => setToggleMenu(false)}
            className={`${
              route === "login"
                ? "bg-[#76E309] p-1 rounded-md text-white w-fit"
                : ""
            }`}
          >
            {title}
          </Link>
        ))}
      </div>
    </nav>
  );
}
