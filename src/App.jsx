import AppShowcase from "./components/AppShowcase";
import BackToTop from "./components/BackToTop";
import CTA from "./components/CTA";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import GamesSection from "./components/GamesSection";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Navbar from "./components/Navbar";
import PlatformOverview from "./components/PlatformOverview";
import ResponsibleGaming from "./components/ResponsibleGaming";
import RewardsSection from "./components/RewardsSection";
import SEOContent from "./components/SEOContent";
import SeoHead from "./components/SeoHead";
import StatsSection from "./components/StatsSection";

export default function App() {
  return (
    <>
      <SeoHead />
      <Navbar />
      <main>
        <Hero />
        <PlatformOverview />
        <AppShowcase />
        <GamesSection />
        <HowItWorks />
        <StatsSection />
        <RewardsSection />
        <ResponsibleGaming />
        <SEOContent />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
