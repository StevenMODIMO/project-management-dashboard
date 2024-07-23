import type { Metadata } from "next"
import Link from "next/link";
import VideoButton from "@/components/VideoButton";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";

export default function Home() {
  return (
    <main>
      <h1 className="text-4xl p-3 mt-2 font-bold">
        Project Management Dashboard
      </h1>
      <p className="text-2xl px-3 py-1 mt-4">
        Used by the world’s largest companies,{" "}
        <span className="text-[#76E309]">PMD</span> Streamlines your project
        management <span className="font-bold">process</span> with our intuitive
        and efficient <span className="font-bold">dashboard.</span>
      </p>
      <section className="flex gap-4 justify-center mx-3 mt-10">
        <Link href="/signup" className="bg-[#76E309] rounded-md text-white p-3">
          Get started
        </Link>
        <VideoButton />
      </section>
      <h1 className="text-2xl p-3 mt-8 font-bold">Features</h1>
      <Features />
      <h1 className="text-2xl p-3 mt-8 font-bold">Pricing</h1>
      <Pricing />
    </main>
  );
}
