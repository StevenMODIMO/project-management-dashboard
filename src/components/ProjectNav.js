"use client";
import { dashboardLinks } from "@/lib/data";
import Link from "next/link";
import { MdOutlineViewModule } from "react-icons/md";
import { FaRegUser, FaTasks } from "react-icons/fa";
import { AiOutlineIssuesClose } from "react-icons/ai";
import { SlGraph } from "react-icons/sl";
import { CiTimer } from "react-icons/ci";
import { ImHistory } from "react-icons/im";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

import { useState } from "react";

export default function ProjectNav() {
  const [showLinks, setShowLinks] = useState(true);
  const pathname = usePathname();
  return (
    <>
      {pathname === "/dashboard" ? (
        <div></div>
      ) : (
        <main className="w-[20%] border-r">
          <header
            className="flex gap-2 text-lg items-center text-gray-500 p-3 cursor-pointer"
            onClick={() => setShowLinks(!showLinks)}
          >
            {showLinks ? (
              <IoIosArrowDown className="text-xl text-[#6EC616]" />
            ) : (
              <IoIosArrowForward className="text-xl text-[#6EC616]" />
            )}
            <h1>PLANNING</h1>
          </header>
          <AnimatePresence>
            {showLinks && (
              <motion.nav
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                className="flex flex-col gap-4 pl-12"
              >
                {dashboardLinks.map(({ id, title, route }) => {
                  return (
                    <main key={id} className="flex gap-2 items-center">
                      {title === "Overview" ? (
                        <MdOutlineViewModule className="text-xl text-[#6EC616]" />
                      ) : title === "Tasks" ? (
                        <FaTasks className="text-xl text-[#6EC616]" />
                      ) : title === "Issues" ? (
                        <AiOutlineIssuesClose className="text-xl text-[#6EC616]" />
                      ) : title == "Reports and Analytics" ? (
                        <SlGraph className="text-xl text-[#6EC616]" />
                      ) : title === "Timeline and Milestones" ? (
                        <CiTimer className="text-xl text-[#6EC616]" />
                      ) : title === "Backlogs" ? (
                        <ImHistory className="text-xl text-[#6EC616]" />
                      ) : title === "Profile" ? (
                        <FaRegUser className="text-xl text-[#6EC616]" />
                      ) : (
                        ""
                      )}
                      <Link href={route} className="text-gray-500 text-sm">
                        {title}
                      </Link>
                    </main>
                  );
                })}
              </motion.nav>
            )}
          </AnimatePresence>
        </main>
      )}
    </>
  );
}
