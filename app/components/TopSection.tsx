'use client';

import HeroInner from './HeroInner';
import HeroSlider from './HeroSlider';

export default function TopSection() {
  return (
    <section className="hero-Section" id="home">
      {/* hero content stays constrained */}
      <div className="container-max">
        <HeroInner />
      </div>

      {/* slider is FULL WIDTH */}
      <HeroSlider />
    </section>
  );
}
