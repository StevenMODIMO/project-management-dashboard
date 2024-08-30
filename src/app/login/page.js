import LoginForm from "@/components/LoginForm";

export const metadata = {
  title: "Log In",
  description: "Sign in route for users with account.",
};

export default function Login() {
  return (
    <main>
      <LoginForm />
    </main>
  );
}
