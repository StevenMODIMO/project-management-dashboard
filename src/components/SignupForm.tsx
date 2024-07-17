"use client";
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function SignupForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <AnimatePresence>
      <motion.form
        initial={{ x: -1200 }}
        animate={{ x: 0 }}
        transition={{ ease: "easeInOut" }}
        exit={{ x: -1200 }}
        className="shadow-lg border border-[#76E309] rounded h-[90%] p-2 mx-3 mt-12 flex flex-col gap-4"
      >
        <h1 className="font-bold text-xl">Get started</h1>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-[#76E309] rounded p-2 outline-none"
          placeholder="janedoe@gmail.com"
        />
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-[#76E309] rounded p-2 outline-none"
          placeholder="Jane&#$*&WWWgy"
        />
        <button className="bg-[#76E309] rounded p-1 w-fit text-white">
          Create account
        </button>
        <section className="flex gap-3 p-2">
          <div className="flex items-center justify-center gap-1 p-1 rounded border border-[#76E309]">
            <FcGoogle />
            <p>Google</p>
          </div>
          <div className="flex items-center justify-center gap-1 p-1 rounded border border-[#76E309]">
            <FaXTwitter />
            <p>Twitter</p>
          </div>
          <div className="flex items-center justify-center gap-1 p-1 rounded border border-[#76E309]">
            <FaGithub />
            <p>Github</p>
          </div>
        </section>
        <Link href="/signup" className="text-sm p-2 text-[#76E309] font-bold">
          Log in to continue
        </Link>
      </motion.form>
    </AnimatePresence>
  );
}
