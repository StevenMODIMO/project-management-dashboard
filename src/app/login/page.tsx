import type { Metadata } from "next"
import LoginForm from "@/components/LoginForm";

export const metadata: Metadata = {
  title: 'Login',
  description: 'Login for existing accounts'
}

export default function Login() {
  return <main>
    <LoginForm />
  </main>;
}