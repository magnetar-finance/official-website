import Hero from '../components/Hero';
import Products from '../components/Products';
import HowItWorks from '../components/HowItWorks';
import Roadmap from '../components/Roadmap';
import Community from '../components/Community';
import CallToAction from '../components/CallToAction';

export default function Home() {
  return (
    <main>
      <Hero />
      <Products />
      <HowItWorks />
      <Roadmap />
      <Community />
      <CallToAction />
    </main>
  );
}
