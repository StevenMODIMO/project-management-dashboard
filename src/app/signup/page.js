import SignupForm from "@/components/SignupForm";

export const metadata = {
  title: "Signup",
  description: "Sign up page for new users.",
};

export default function Signup() {
  return (
    <main>
      <SignupForm />
    </main>
  );
}
