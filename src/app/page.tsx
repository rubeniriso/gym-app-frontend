import { auth } from "@/auth";
import Image from "next/image";
import Dashboard from "./dashboard/page";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import SignInCard from "@/components/ui/signin/SignInCard";

export default async function Home() {
  const session = await auth();
  return (
    <div className="flex min-h-screen w-full flex-row p-24">
      {session ? (
        <Dashboard />
      ) : (
        <div className="flex flex-row w-[50%] gap-10 justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold text-wrap">
              Check out our exercise selection!
            </h1>
            <Link
              className={buttonVariants({ variant: "outline" })}
              href={"/exercises"}
            >
              Go
            </Link>
          </div>
          <SignInCard />
        </div>
      )}
    </div>
  );
}
