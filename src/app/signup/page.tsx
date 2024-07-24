import type { Metadata } from "next";
import SignupForm from "@/components/SignupForm";

export const metadata: Metadata = {
  title: "Signup",
  description: "Account creation for new users.",
};

export default function Signup() {
  return (
    <main>
      <SignupForm />
    </main>
  );
}
