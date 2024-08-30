import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Project Management Dashboard",
  description: "Awesome project management tool",
};

export default async function Home() {
  const session = await getServerSession();
  if (session) redirect("/profile");
  return <main></main>;
}
