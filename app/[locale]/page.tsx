"use client";
import Head from "next/head";
import { Header } from "../components/header/Header";
import { BenefitsSection } from "../components/landing/Benefits";
import { Hero } from "../components/landing/Hero";
import { PatternInterruption } from "../components/landing/PatternInterruption";
import { SampleIssue } from "../components/landing/SampleIssue";
import { TestimonialsSection } from "../components/landing/TestimonialsSection";
import { CallToAction } from "../components/landing/CallToAction";
import { Footer } from "../components/landing/Footer";

export default function Home() {
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