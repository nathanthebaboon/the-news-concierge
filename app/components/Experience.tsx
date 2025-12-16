export default function Experience() {
  return (
    <section className="section" aria-label="Industry Experience">
      <div className="container-max">
        <div className="expGrid">
          {/* Left gradient card */}
          <div className="expCard">
            <h2 className="expTitle">Our team Industry Experience</h2>
            <p className="expSub">
              Our team has a rigorous academic background to provide you with expert-driven insights.
            </p>
          </div>

          {/* Right bullet list */}
          <div className="expListWrap">
            <ul className="expList">
              <li className="expItem">HR</li>
              <li className="expItem">Ops</li>
              <li className="expItem">Marketing</li>
              <li className="expItem">Tech</li>
              <li className="expItem">Finance</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Logo belt strip */}
      <section className="logo-belt expBelt" aria-label="Industry logos">
        <div className="belt-track">
          <div className="belt">
            <img src="/images/Untitled design (25) 1.png" alt="Logo 1" />
            <img src="/images/sennheiser-seeklogo 1 (1).png" alt="Sennheiser" />
            <img src="/images/harman-seeklogo 1 (1).png" alt="Harman" />
            <img src="/images/bosch-seeklogo 1.png" alt="Bosch" />
          </div>
        </div>
      </section>
    </section>
  );
}
