"use client";
import { GoTasklist, GoPeople, GoProject } from "react-icons/go";
import { SiSimpleanalytics } from "react-icons/si";
import { features } from "@/lib/data";
import { FaCircle } from "react-icons/fa";
import Link from "next/link";

export default function Features() {
  return (
    <main className="flex flex-col gap-4 p-4">
      {features.map(({ id, title, features }) => {
        return (
          <main
            key={id}
            className="p-4 gap-4 border border-[#76E309] rounded"
          >
            {title === "Task management" ? (
              <GoTasklist className="text-3xl text-[#76E309]" />
            ) : title === "Collaboration tools" ? (
              <GoPeople className="text-3xl text-[#76E309]" />
            ) : title === "Project planning" ? (
              <GoProject className="text-3xl text-[#76E309]" />
            ) : title == "Reporting and Analytics" ? (
              <SiSimpleanalytics className="text-3xl text-[#76E309]" />
            ) : (
              ""
            )}
            <h1 className="text-lg font-bold my-2">{title}</h1>
            <ul className="flex flex-col gap-3">
              {features.map(({ id, feature }) => (
                <li key={id} className="text-xs flex">
                  {feature}
                </li>
              ))}
            </ul>
          </main>
        );
      })}
    </main>
  );
}
