"use client";
import { FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import logo from "@/assets/icon.png";
import { navLinks } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);
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
            className="text-3xl md:hidden"
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            <FaTimes />
          </motion.div>
        )}
      </header>
      <AnimatePresence>
        {toggleMenu && (
          <motion.div
            initial={{ opacity: 0.8, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0.8, x: -200 }}
            className="flex flex-col gap-1 p-4 sm:hidden"
          >
            {navLinks.map(({ id, title, route }) => (
              <Link href={route} key={id} onClick={() => setToggleMenu(false)}>
                {title}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <div className="hidden md:flex flex-row justify-center gap-3 p-5 text-sm">
        {navLinks.map(({ id, title, route }) => (
          <Link href={route} key={id} onClick={() => setToggleMenu(false)}>
            {title}
          </Link>
        ))}
      </div>
    </nav>
  );
}
