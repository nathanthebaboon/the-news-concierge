export default function Academic() {
  return (
    <section className="section" id="Our-Team" aria-label="Our Team Academic background">
      <div className="container-max">
        <div className="acadHead">
          <h2 className="acadTitle">Our Team Academic background</h2>
          <p className="acadSub">
            Our team has a rigorous academic background to provide you with expert-driven
            <br />
            insights
          </p>
        </div>
      </div>

      {/* Full-width light strip with moving logos */}
      <section className="logo-belt acadBelt">
        <div className="belt-track">
          <div className="belt">
            <img src="/images/university-of-cambridge-seeklogo 1.png" alt="University of Cambridge" />
            <img src="/images/university-college-london-ucl-seeklogo 1.png" alt="UCL" />
            <img src="/images/3-1.png" alt="Logo 3" />
            <img src="/images/2-1.png" alt="Logo 4" />
            <img src="/images/Untitled design (24) 1.png" alt="Logo 5" />
            <img src="/images/1-1.png" alt="Logo 6" />
          </div>
        </div>
      </section>
    </section>
  );
}
