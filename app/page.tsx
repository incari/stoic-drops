import { Header } from "./components/header/Header";
import { BenefitsSection } from "./components/landing/Benefits";
import { CallToAction } from "./components/landing/CallToAction";
import { Footer } from "./components/landing/Footer";
import { Hero } from "./components/landing/Hero";
import { PatternInterruption } from "./components/landing/PatternInterruption";
import { SampleIssue } from "./components/landing/SampleIssue";
import { TestimonialsSection } from "./components/landing/TestimonialsSection";
import Head from "next/head";

export default function HomePage() {
  return (
    <main>
      <Head>
        <title>Stoic Drops</title>
      </Head>
      <Header />

      <Hero />
      <BenefitsSection />
      <PatternInterruption />
      <SampleIssue />
      <TestimonialsSection />
      <CallToAction />
      <Footer />
    </main>
  );
}
