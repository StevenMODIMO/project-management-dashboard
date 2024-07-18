"use client";
import { GoTasklist, GoPeople, GoProject } from "react-icons/go";
import { SiSimpleanalytics } from "react-icons/si";
import { features } from "@/lib/data";
import { FaCircle } from "react-icons/fa";

export default function Features() {
  return (
    <main className="flex flex-col gap-4 p-4">
      {features.map(({ id, title, features }) => {
        return (
          <main key={id} className="p-4 gap-4 shadow-lg rounded">
            {title === "Task management" ? (
              <GoTasklist className="text-3xl" />
            ) : title === "Collaboration tools" ? (
              <GoPeople className="text-3xl" />
            ) : title === "Project planning" ? (
              <GoProject className="text-3xl" />
            ) : title == "Reporting and Analytics" ? (
              <SiSimpleanalytics className="text-3xl" />
            ) : (
              ""
            )}
            <h1 className="text-lg font-bold">{title}</h1>
            <ul>
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
