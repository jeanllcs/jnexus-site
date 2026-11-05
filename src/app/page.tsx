import type React from "react";
import { LanguageProvider } from "@/i18n/LanguageContext";
import { Navbar } from "@/components/navigation/Navbar";
import { Hero } from "@/components/hero/Hero";
import { AboutSection } from "@/components/about/AboutSection";
import { ServicesSection } from "@/components/services/ServicesSection";
import { ProcessSection } from "@/components/process/ProcessSection";
import { ServiceRequestForm } from "@/components/request-form/ServiceRequestForm";
import { Footer } from "@/components/footer/Footer";

export default function HomePage(): React.JSX.Element {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col bg-apple-canvas text-apple-ink">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <AboutSection />
          <ServicesSection />
          <ProcessSection />
          <ServiceRequestForm />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
