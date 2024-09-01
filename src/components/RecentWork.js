"use client";
import Link from "next/link";
import { tabs } from "@/lib/data";
import { PiTrashSimpleLight } from "react-icons/pi";

export default function RecentWork() {
  return (
    <main>
      <header className="border-b flex gap-5 text-gray text-sm mt-20 text-gray-500 cursor-pointer">
        {tabs.map(({ id, title }) => {
          return (
            <main key={id}>
              <h2>{title}</h2>
            </main>
          );
        })}
      </header>
      <section className='flex flex-col gap-4 items-center p-3'>
        <PiTrashSimpleLight className='text-9xl text-[#6EC616]' />
        <h3 className="text-gray-600 font-bold text-2xl">
          You haven't worked on anything yet
        </h3>
        <p className="text-gray-500 w-[60%] text-center mx-auto">
          On this page, you’ll find your recently worked on issues. Get started
          by finding the project your team is working on.
        </p>
        <Link
          href="/dashboard/projects"
          className="bg-[#6EC616] rounded p-1 text-white text-sm"
        >
          View Projects
        </Link>
      </section>
    </main>
  );
}
