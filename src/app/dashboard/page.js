import Link from "next/link";
import RecentWork from "@/components/RecentWork";

export default function Dashboard() {
  return (
    <main className="w-[90%] mx-auto">
      <header className="text-2xl text-gray-600 font-bold p-3 border-b">
        <h1>Your Work</h1>
      </header>
      <section>
        <header className="text-gray-500 p-3 flex justify-between">
          <h2>Recent Projects</h2>
          <Link href="/dashboard/projects" className="text-[#6EC616]">
            View all projects
          </Link>
        </header>
      </section>
      <RecentWork />
    </main>
  );
}
