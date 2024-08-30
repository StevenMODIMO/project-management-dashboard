"use client";
import { useState } from "react";
import { signIn } from 'next-auth/react'
import { motion, AnimatePresence } from "framer-motion";
import { FaCamera, FaGithub, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaXTwitter, FaRegCircleUser } from "react-icons/fa6";
import { PiInfoThin } from "react-icons/pi";
import {
  MdErrorOutline,
  MdOutlineKey,
  MdOutlineMailOutline,
} from "react-icons/md";
import { FaHourglassStart } from "react-icons/fa";

export default function SignupForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    formData.append("image", image);
    formData.append("email", email);
    formData.append("password", password);

    const response = await fetch("/api/auth/signup", {
      method: "POST",
      body: formData,
    });

    const json = await response.json();

    if (json.error) {
      setError(json.error);
      setEmail("");
      setImage("");
      setPassword("");
      setLoading(false);
    } else {
      setEmail("");
      setImage("");
      setPassword("");
      setError(null);
      setLoading(false);
    }
  };
  return (
    <main className="flex">
      <div className="bg-[#6EC616] h-screen w-[50%]"></div>
      <form
        onFocus={() => setError(null)}
        onSubmit={handleSubmit}
        className="w-fit h-fit mx-auto mt-[7%] flex flex-col gap-3 p-4 shadow-md rounded-md"
      >
        <header className="text-2xl font-bold text-gray-500 flex items-center gap-2">
          <FaHourglassStart />
          <h1>Get started now.</h1>
        </header>
        <label
          htmlFor="email"
          className="text-gray-500 text-sm mt-3 flex gap-2 justify-between"
        >
          <div className="flex items-center gap-2">
            <MdOutlineMailOutline />
            Email
          </div>
          <section className="relative">
            <PiInfoThin
              onMouseEnter={() => setShowInfo(true)}
              onMouseLeave={() => setShowInfo(false)}
            />
            <AnimatePresence>
              {showInfo && (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0.5 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0.5 }}
                  className="p-1 text-center text-xs w-32 rounded-md text-white bg-[#6EC616] absolute top-2 left-6"
                >
                  This is the email address associated with your PMD account.
                </motion.div>
              )}
            </AnimatePresence>
          </section>
        </label>
        <input
          id="email"
          className="outline-none shadow-md p-2 w-96 rounded-md text-gray-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="example@gmail.com"
        />
        <label
          htmlFor="password"
          className="text-gray-500 text-sm flex justify-between"
        >
          <div className="flex items-center gap-2">
            <MdOutlineKey />
            Password
          </div>
          {!showPassword ? (
            <FaRegEye onClick={() => setShowPassword(true)} />
          ) : (
            <FaRegEyeSlash onClick={() => setShowPassword(false)} />
          )}
        </label>
        <input
          id="password"
          className="outline-none shadow-md p-2 w-96 rounded-md text-gray-500"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="#$%Hunvho1234"
        />
        <div className="text-gray-500 text-sm flex items-center gap-2">
          <FaRegCircleUser />
          Display Image (optional)
        </div>
        <label
          htmlFor="avatar"
          className="w-12 h-12 rounded-full bg-[#6EC616] cursor-pointer flex items-center justify-center"
        >
          <FaCamera className="text-white" />
        </label>
        <input
          id="avatar"
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          className="hidden"
        />
        <button className="bg-[#6EC616] w-36 text-white p-2 rounded-md">
          {loading ? (
            <div className="animate-spin h-6 w-6 mx-auto text-center border-4 border-dotted border-white rounded-full"></div>
          ) : (
            "Create account"
          )}
        </button>
        <section>
          <header className="text-gray-500 cursor-pointer">
            <h4 className="">Or continue with</h4>
            <div className="flex gap-3 mt-2">
              <FcGoogle className="text-4xl shadow-md p-2 rounded-md" />
              <FaGithub className="text-4xl shadow-md p-2 rounded-md" />
              <FaXTwitter className="text-4xl shadow-md p-2 rounded-md" />
            </div>
          </header>
        </section>
      </form>
      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ scale: 0.7, opacity: 0.7 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit={{ scale: 0.7, opacity: 0.7 }}
            className="cursor-pointer bg-[#a8e66b] p-2 rounded-md text-white absolute right-4 top-4 w-fit flex justify-center items-center gap-2"
          >
            <MdErrorOutline className="text-2xl" />
            <h3>{error}</h3>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
