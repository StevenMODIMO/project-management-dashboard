import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import SignupForm from "@/components/SignupForm";

export const metadata = {
  title: "Signup",
  description: "Sign up page for new users.",
};

export default async function Signup() {
  const session = await getServerSession();
  if (session) redirect("/profile");
  return (
    <main>
      <SignupForm />
    </main>
  );
}
