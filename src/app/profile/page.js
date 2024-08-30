import { getServerSession } from "next-auth";
import Image from "next/image";

export const metadata = {
  title: "Profile",
  description: "Authenticated user profile page.",
};

export default async function Profile() {
  const session = await getServerSession();
  return (
    <main>
      <header>
        <h1>Welcome @, {session.user?.email}</h1>
        <Image
          src={session.user?.image}
          alt="image"
          width={50}
          height={50}
          className="rounded-full"
        />
        <div>{session.user?.id}</div>
      </header>
    </main>
  );
}
