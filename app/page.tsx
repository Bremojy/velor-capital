import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import WhyVelor from "@/components/WhyVelor";
import Services from "@/components/Services";
import InvestmentProcess from "@/components/InvestmentProcess";
import FeaturedResearch from "@/components/FeaturedResearch";
import Credibility from "@/components/Creadibility";
import CorePrinciples from "@/components/CorePrinciples";
import Cta from "@/components/Cta";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Velor Capital",
  description:
    "Research-driven investment firm focused on disciplined capital allocation, risk management, and long-term wealth creation.",
};

export default function Home() {
  return (
    <main className="bg-white">

      <Hero />

      <Stats />

      <WhyVelor />

      <Services />

      <InvestmentProcess />

      <FeaturedResearch />

      <Credibility />

      <CorePrinciples />

      <Cta />

    </main>
  );
}