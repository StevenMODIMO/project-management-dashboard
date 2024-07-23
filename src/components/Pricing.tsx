"use client";
import { useState } from "react";
import Link from "next/link";
import { pricing } from "@/lib/data";
import Image from "next/image";
import background from "@/assets/pricing-background.png";
import { FaDollarSign } from "react-icons/fa";

export default function Pricing() {
  const [billing, setBilling] = useState("monthly");
  return (
    <main>
      <h1 className="font-bold text-center text-sm">
        Simple, transparent pricing that grows with you. Try any plan free for
        30 days.
      </h1>
      <div className="m-3 flex justify-center gap-2 p-2 rounded shadow-md w-fit mx-auto">
        <button
          className={`${
            billing === "monthly"
              ? "bg-[#76E309] text-white rounded-md p-1 text-sm"
              : "p-1 text-sm"
          }`}
        >
          Monthly billing
        </button>
        <button
          className={`${
            billing === "annually"
              ? "bg-[#76E309] text-white p-1 rounded-md text-sm"
              : "p-1 text-sm"
          }`}
        >
          Annual billing
        </button>
      </div>
      <section className="p-2 flex flex-col items-center gap-3">
        {pricing.map(({ id, title, description, price, features }) => {
          return (
            <div key={id} className="shadow-md rounded p-2 w-[80%]">
              <h1 className="text-xl font-bold">{title}</h1>
              <h2 className="text-sm text-[#76E309]">{description}</h2>
              <div className="flex justify-center">
                <FaDollarSign className="text-[#76E309]" />
                <h3 className="text-3xl font-bold text-[#76E309]">{price}</h3>
              </div>
              <div className="m-3 flex justify-center">
                <Link
                  href="/signup"
                  className="bg-[#76E309] rounded-md text-white p-3"
                >
                  Get started
                </Link>
              </div>
              <div>
                {features.map(({ id, feature }) => {
                  return (
                    <div key={id}>
                      <h4>{feature}</h4>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </section>
      <div className="m-3 flex justify-center">
        <Link href="/signup" className="bg-[#76E309] rounded-md text-white p-3">
          Get started
        </Link>
      </div>
    </main>
  );
}
