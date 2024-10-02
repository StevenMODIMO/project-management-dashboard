import Link from "next/link";
import { getServerSession } from "next-auth";

export const metadata = {
  title: "404 - Not Found",
  description: "This page does not exist",
};

export default async function NotFound() {
  const session = await getServerSession();
  return (
    <main className="h-full flex flex-col items-center justify-center">
      <p className="font-bold text-4xl text-[#6EC616]">404</p>
      <h1 className="text-2xl font-semibold text-gray-500">
        Sorry the resource or page your are looking for is not available
      </h1>
      <Link href={session ? "/dashboard" : "/"} className="text-[#6EC616]">
        {session ? "Back to dashboard." : "Navigate to the home page instead."}
      </Link>
    </main>
  );
}   
