import { Nav } from "@/components/navbar/nav";
import { SearchBar } from "@/components/search/SearchBar";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/toggle-mode";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen">
      <section className="flex flex-col items-center justify-center text-center h-full">
        <h1 className="text-4xl font-bold">
          Apex Legends Stats Tracker
        </h1>
        <div className="flex gap-6 mt-16 w-full justify-center">
          <SearchBar />
        </div>
      </section>
    </main>
  );
}
