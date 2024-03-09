import Hero from "@/components/layout/hero";
import Analytics from "@/components/layout/analytics";
import Efficiency from "@/components/layout/efficiency";
import Features from "@/components/layout/features/features";
import Benefits from "@/components/layout/benefits";
import Getstarted from "@/components/layout/getstarted";
import { Urbanist } from "next/font/google";
const urbanist = Urbanist({
  weight: ["200","300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className={`${urbanist.className} flex min-h-screen page-container w-full flex-col items-center justify-between`}>
      <Hero />
      <Analytics/>
      <Efficiency />
      <Features />
      <Benefits />
      <Getstarted />
    </main>
  );
}
