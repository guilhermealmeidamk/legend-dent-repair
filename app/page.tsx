import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Process from "@/components/Process";
import Services from "@/components/Services";
import BeforeAfter from "@/components/BeforeAfter";
import WhyPdr from "@/components/WhyPdr";
import About from "@/components/About";
import Reviews from "@/components/Reviews";
import ServiceArea from "@/components/ServiceArea";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import { faqJsonLd } from "@/lib/seo";
import { faqItems } from "@/lib/faq";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqItems)) }}
      />
      <Header />
      <main className="flex-1">
        <Hero />
        <TrustBar />
        <Process />
        <Services />
        <BeforeAfter />
        <WhyPdr />
        <About />
        <Reviews />
        <ServiceArea />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
