"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCamera, FaGithub, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaXTwitter, FaRegCircleUser } from "react-icons/fa6";
import { PiInfoThin } from "react-icons/pi";
import {
  MdErrorOutline,
  MdOutlineKey,
  MdOutlineMailOutline,
  MdDriveFileRenameOutline
} from "react-icons/md";
import { FaHourglassStart } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignupForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState(null); // Changed from "" to null
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [imagePreview, setImagePreview] = useState("");
  const [inputKey, setInputKey] = useState(Date.now()); // Use key for input reset
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    formData.append("name", name);
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
      setName("");
      setEmail("");
      setPassword("");
      setImage(null);
      setImagePreview("");
      setLoading(false);
      setInputKey(Date.now()); // Update key to force re-render of input
    } else {
      setName("");
      setEmail("");
      setPassword("");
      setImage(null);
      setImagePreview("");
      setError(null);
      setLoading(false);
      await signIn("credentials", {
        email,
        password,
        redirect: false,
        callbackUrl: "http://localhost:3000/dashboard",
      });
      router.push("/dashboard");
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview("");
    }
  };

  return (
    <main className="flex">
      <div className="bg-[#6EC616] h-screen w-[50%]"></div>
      <form
        onFocus={() => setError(null)}
        onSubmit={handleSubmit}
        className="w-fit h-fit mx-auto mt-[3%] flex flex-col gap-3 p-4 shadow-md rounded-md"
      >
        <header className="text-2xl font-bold text-gray-500 flex items-center gap-2">
          <FaHourglassStart />
          <h1>Get started now.</h1>
        </header>
        <label
          htmlFor="name"
          className="text-gray-500 text-sm mt-3 flex gap-2 justify-between"
        >
          <div className="flex items-center gap-2">
            <MdDriveFileRenameOutline />
            Name
          </div>
        </label>
        <input
          id="name"
          className="outline-none shadow-md p-2 w-96 rounded-md text-gray-500"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Jane Doe"
        />
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
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
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
        <section className="flex gap-2">
          <div className="text-gray-500 text-sm flex items-center gap-2">
            <FaRegCircleUser />
            Display Image (optional)
          </div>
          <label
            htmlFor="avatar"
            className={
              imagePreview
                ? ""
                : "w-12 h-12 rounded-full bg-[#6EC616] cursor-pointer flex items-center justify-center"
            }
          >
            {imagePreview ? (
              <div>
                <img
                  src={imagePreview}
                  alt="Preview"
                  width={30}
                  height={30}
                  className="rounded-full object-cover"
                />
              </div>
            ) : (
              <FaCamera className="text-white" />
            )}
          </label>
        </section>
        <input
          key={inputKey} // Force re-render on error
          id="avatar"
          type="file"
          onChange={handleImageChange}
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
            <h4 className="text-sm">Or continue with</h4>
            <div className="flex gap-3 mt-2">
              <FcGoogle className="text-4xl shadow-md p-2 rounded-md" />
              <FaGithub className="text-4xl shadow-md p-2 rounded-md" />
              <FaXTwitter className="text-4xl shadow-md p-2 rounded-md" />
            </div>
          </header>
        </section>
        <div className="flex gap-2 text-sm text-gray-500 mt-2">
          <h4>Already have an account ?</h4>
          <Link href="/login" className="text-[#6EC616]">
            Sign in instead
          </Link>
        </div>
      </form>
      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
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
