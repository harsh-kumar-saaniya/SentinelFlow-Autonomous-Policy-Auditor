import Image from "next/image";
import ContactPage from "./components/Contact";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Hero";
import PolicyFeatures from "./components/PolicyFeatures";
import PolicyIntelligence from "./components/PolicyIntelligence";

export default function Home() {
  return (
    <div className="">
      <Navbar/>
      <HeroSection />
      <PolicyFeatures />
      <PolicyIntelligence/>
      {/* <PolicyStates /> */}
      <ContactPage />
    </div>
  );
}
