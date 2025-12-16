'use client';

import { useSliders } from './hooks/useSliders';

import Header from './components/Header';
import TopSection from './components/TopSection';
import Challenge from './components/Challenge';
import Prepared from './components/Prepared';
import Help from './components/Help';
import Customization from './components/Customisation';
import Features from './components/Features';
import Solutions from './components/Solutions';
import Platforms from './components/Platforms';
import Academic from './components/Academic';
import Experience from './components/Experience';
import Benefits from './components/Benefits';
import Demo from './components/Demo';
import Dashboard from './components/Dashboard';
import MultiFormat from './components/MultiFormat';
import Pricing from './components/Pricing';
import Coverage from './components/Coverage';
import Footer from './components/Footer';

export default function Page() {
  useSliders();

  return (
    <div className="page">
      <Header />
      <TopSection />
      <Challenge />
      <Prepared />
      <Help />
      <Customization />
      <Features />
      <Solutions />
      <Platforms />
      <Academic />
      <Experience />
      <Benefits />
      <Demo />
      <Dashboard />
      <MultiFormat />
      <Pricing />
      <Coverage />
      <Footer />
    </div>
  );
}
