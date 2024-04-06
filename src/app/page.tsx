import { auth } from "@/auth";
import Image from "next/image";
import Dashboard from "./(with-navbar)/dashboard/page";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import SignInCard from "@/components/ui/signin/SignInCard";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth();
  return (
    <div className="flex min-h-screen w-full justify-center items-center flex-col">
      {session ? (
        redirect("/dashboard")
      ) : (
        <div className="flex w-full text-balance justify-between px-[30%]">
          <div className="w-[50%] flex flex-col">
            <h1 className="text-4xl font-bold text-wrap">
              Check out our exercise selection!
            </h1>
            <Link
              className={buttonVariants({ variant: "outline" })}
              href={"/exercises"}
            >
              <p>Go</p>
            </Link>
          </div>
          <div>
            <SignInCard />
          </div>
        </div>
      )}
    </div>
  );
}
