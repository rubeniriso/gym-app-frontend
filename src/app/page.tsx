import { auth } from "@/auth";
import Image from "next/image";

export default async function Home() {
  const session = await auth();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {session ? <h1>Logged in bruv</h1> : <h1>Public page</h1>}
    </main>
  );
}
