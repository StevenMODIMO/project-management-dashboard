"use client";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { FaFacebook, FaDiscord } from "react-icons/fa";
import { footerLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-[#76E309] m-2 rounded-md text-">
      <section className="flex flex-col gap-3 p-4">
        <div className="text-sm grid grid-cols-2 w-fit">
          {footerLinks.map(({ id, title, route }) => {
            return <div key={id}>{title}</div>;
          })}
        </div>
        <section className="flex gap-4">
          <p className="text-sm">Follow Us</p>
          <div className="flex gap-2">
            <div className="flex gap-1 items-center">
              <FaGithub className="text-xl" />
            </div>
            <div className="flex gap-1 items-center">
              <FaFacebook className="text-xl" />
            </div>
            <div className="flex gap-1 items-center">
              <FaXTwitter className="text-xl" />
            </div>
            <div className="flex gap-1 items-center">
              <FaDiscord className="text-xl" />
            </div>
          </div>
        </section>
        <p className="text-sm">&copy; 2024, Project Management Dashboard</p>
      </section>
    </footer>
  );
}
