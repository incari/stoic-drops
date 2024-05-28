"use client";
import Head from "next/head";
import { Header } from "../components/header/Header";
import { BenefitsSection } from "../components/landing/Benefits";
import { PatternInterruption } from "../components/landing/PatternInterruption";
import { MultipleIssues } from "../components/landing/MultipleIssues";
import { TestimonialsSection } from "../components/landing/TestimonialsSection";
import { CallToAction } from "../components/landing/CallToAction";
import { Footer } from "../components/landing/Footer";
import { HeroBasic } from "../components/landing/HeroBasic";

export default function Home() {
  return (
    <main>
      <Head>
        <title>✨ Stoic Drops</title>
      </Head>
      <Header />
      <HeroBasic />
      <BenefitsSection />
      <PatternInterruption />
      <MultipleIssues />
      <TestimonialsSection />
      <CallToAction />
      <Footer />
    </main>
  );
}
