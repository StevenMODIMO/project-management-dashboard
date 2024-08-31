import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import LoginForm from "@/components/LoginForm";

export const metadata = {
  title: "Log In",
  description: "Sign in route for users with account.",
};

export default async function Login() {
  const session = await getServerSession();
  if (session) redirect("/dashboard");

  return (
    <main>
      <LoginForm />
    </main>
  );
}
