"use client";

import i18n from "../i18n";
import { I18nextProvider } from "react-i18next";
import Head from "next/head";
import { Header } from "./components/header/Header";
import { BenefitsSection } from "./components/landing/Benefits";
import { CallToAction } from "./components/landing/CallToAction";
import { Footer } from "./components/landing/Footer";
import { Hero } from "./components/landing/Hero";
import { PatternInterruption } from "./components/landing/PatternInterruption";
import { SampleIssue } from "./components/landing/SampleIssue";
import { TestimonialsSection } from "./components/landing/TestimonialsSection";

export default function HomePage() {
  return (
    <main>
      <Head>
        <title>Stoic Drops</title>
      </Head>
      <I18nextProvider i18n={i18n}>
        <Header />

        <Hero />
        <BenefitsSection />
        <PatternInterruption />
        <SampleIssue />
        <TestimonialsSection />
        <CallToAction />
        <Footer />
      </I18nextProvider>
    </main>
  );
}
