import { getServerSession } from "next-auth";

export const metadata = {
  title: "Profile",
  description: "Authenticated user profile page.",
};

export default async function Profile() {
  return (
    <main>
      <header>
        <h1>Welcome</h1>
      </header>
    </main>
  );
}
