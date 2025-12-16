export default function Coverage() {
  return (
    <section className="section" aria-label="Coverage and Flexibility">
      <div className="container-max">
        <h2 className="covTitle">
          We can <span>cover any topic</span>, refine it to your employees’{" "}
          <span>preferences</span> and <span>allow you to change</span> it at any time
        </h2>

        <p className="covSub">
          Our machine learning models will learn what your employees
          <br />
          are interested in and tailor the articles even more to them
        </p>
      </div>

      {/* light blue capability strip */}
      <div className="covStrip">
        <div className="container-max">
          <ul className="covGrid">
            <li className="covItem">
              <img src="/images/rectangle-28.png" alt="" />
              <span>Any Industry</span>
            </li>
            <li className="covItem">
              <img src="/images/rectangle-29.png" alt="" />
              <span>Any Country</span>
            </li>
            <li className="covItem">
              <img src="/images/rectangle-30.png" alt="" />
              <span>Any PESTEL Factor</span>
            </li>
            <li className="covItem">
              <img src="/images/rectangle-31.png" alt="" />
              <span>Any Company</span>
            </li>
            <li className="covItem">
              <img src="/images/rectangle-32.png" alt="" />
              <span>Any Keyword</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
