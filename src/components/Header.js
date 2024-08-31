"use client";

import { navLinks } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import logo from "@/app/assets/icon.png";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";

export default function Header() {
  const pathname = usePathname();
  const { data, status } = useSession();
  const isAuth = status === "authenticated";
  const hideLinks = pathname === "/signup" || pathname === "/login";
  const filteredLinks = isAuth
    ? navLinks.filter((link) => link.route === "/dashboard")
    : navLinks;

  return (
    <>
      {!hideLinks && (
        <main className="flex justify-between p-4 cursor-pointer text-gray-500 shadow rounded-b-md">
          <header>
            <Link href="/">
              <Image src={logo} alt="logo" width={80} height={80} />
            </Link>
          </header>
          <nav className="flex gap-2 items-center">
            {filteredLinks.map(({ id, title, route }) => {
              return (
                <div key={id}>
                  <Link href={route}>{title}</Link>
                </div>
              );
            })}
            {isAuth && (
              <main className='flex gap-2 items-center'>
                <div onClick={() => signOut()}>Logout</div>
                <Image
                  src={data.user?.image}
                  alt="profile_avatar"
                  width={30}
                  height={30}
                  className="rounded-full"
                />
              </main>
            )}
          </nav>
        </main>
      )}
    </>
  );
}
