import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[100vh] py-16 text-center">
      <Logo className="w-16 h-16 mb-8" />
      <h1 className="mb-4 font-black text-black text-7xl md:text-9xl dark:text-white font-schibsted">
        404
      </h1>
      <h2 className="mb-2 text-2xl font-bold text-black md:text-4xl dark:text-white">
        This page could not be found.
      </h2>
      <p className="max-w-md mb-8 text-lg text-gray-600 dark:text-gray-300">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>
      <Link href="/">
        <Button className="px-10 py-8 text-lg text-white transition-colors bg-black border-2 rounded-full hover:bg-transparent hover:text-black">
          Go back home
        </Button>
      </Link>
    </div>
  );
}
