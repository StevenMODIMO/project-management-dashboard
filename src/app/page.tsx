import Link from "next/link";
import Image from "next/image";
import VideoButton from "@/components/VideoButton";
import calendar from "@/assets/calendar.png";

export default function Home() {
  return (
    <main>
      <h1 className="text-3xl p-3">Project Management Dashboard</h1>
      <p className="text-lg px-3 py-1">
        Used by the world’s largest companies, PMD Streamlines your project
        management <span className="font-bold">process</span> with our intuitive
        and efficient <span className="font-bold">dashboard.</span>
      </p>
      <section className="flex gap-4 justify-center m-3">
        <Link href="/signup" className="bg-[#76E309] rounded-md text-white p-3">
          Get started
        </Link>
        <VideoButton />
      </section>
      <Image src={calendar} alt="calendar" width={500} height={500} />
    </main>
  );
}
