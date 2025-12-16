'use client';

export default function HeroInner() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="main-container">
      <h1 className="concierge">
        The <span>News</span> Concierge
      </h1>
      <p className="mian-text">
        Ensure your workforce stays ahead of the curve with customised news and insights.
      </p>
      <button type="button" className="btn" onClick={() => scrollTo('#contact')}>
        Get Started
      </button>
    </div>
  );
}
