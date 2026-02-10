import PolicyIntelligence from './components/PolicyIntelligence';
import PolicyStats from './components/PolicyStats';
import PolicyFeatures from './components/PolicyFeatures';

export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      {/* Aapka Hero Section yahan aa sakta hai */}
      <PolicyIntelligence />
      <PolicyStats />
      <PolicyFeatures />
    </main>
  );
}