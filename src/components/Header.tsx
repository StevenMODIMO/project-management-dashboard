"use client";
import { FaBars } from "react-icons/fa6";
import logo from "../assets/icon.png";
import { navLinks } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <nav>
      <header>
        <Link href="/">
          <Image src={logo} alt="logo" width={60} height={60} />
        </Link>
        <FaBars />
      </header>
      <div>
        {navLinks.map(({ id, title, route }) => {
          return (
            <Link href={route} key={id}>
              {title}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
