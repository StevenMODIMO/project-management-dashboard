"use client";

import { navLinks } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import logo from "@/app/assets/icon.png";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const hideLinks = pathname === "/signup" || pathname === "/login";

  return (
    <>
      {!hideLinks && (
        <main className="flex justify-between p-8">
          <header>
            <Link href="/">
              <Image src={logo} alt="logo" width={80} height={80} />
            </Link>
          </header>
          <nav className="flex gap-2">
            {navLinks.map(({ id, title, route }) => {
              return (
                <div key={id}>
                  <Link href={route}>{title}</Link>
                </div>
              );
            })}
          </nav>
        </main>
      )}
    </>
  );
}
