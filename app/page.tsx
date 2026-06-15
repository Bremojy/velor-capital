import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Philosophy from "@/components/Philosophy";
import Research from "@/components/Research";
import Credibility from "@/components/Creadibility";
import Cta from "@/components/Cta";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Velor Capital invests in financial markets and strategic business opportunities with a focus on long-term value creation.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Stats />
      <Philosophy />
      <Research />
      <Credibility />
      <Cta />
    </>
  );
}