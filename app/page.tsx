import Hero from "@/components/Hero";
import { Navbar } from "@/components/ui/Navbar";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex flex-col justify-center items-center overflow-hidden mx-auto">
      <div className="max-w-7xl w-full">
        <Navbar navItems={navItems} />
        <Hero />
      </div>
    </main>
  );
}
