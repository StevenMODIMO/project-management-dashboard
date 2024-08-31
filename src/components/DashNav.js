"use client";
import Link from "next/link";
import { dashboardLinks } from "@/lib/data";

export default function DashNav() {
  return (
    <main>
      <nav className="flex items-center gap-4 p-3">
        {dashboardLinks.map(({ id, title, route }) => {
          return (
            <main key={id} className="text-gray-500 text-sm font-bold">
              <Link href={route}>{title}</Link>
            </main>
          );
        })}
        <button className="bg-[#6EC616] p-1 rounded text-white">Create</button>
      </nav>
    </main>
  );
}
