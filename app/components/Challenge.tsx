export default function Challenge() {
  return (
    <section className="section section--tight" id="about">
      <div className="container-max">
        {/* Heading */}
        <div className="challengeHead">
          <h2 className="challengeTitle">The Challenge</h2>
          <p className="challengeSub">
            Businesses today face unprecedented change and risks <br />
            of disruption
          </p>
        </div>

        {/* Cards */}
        <div className="challengeStack">
          <div className="challengeCard">
            <div className="challengeText">
              <h3 className="challengeCardTitle">Rising Political Risks</h3>
              <p className="challengeCardDesc">
                Navigate through complex geopolitical landscapes affecting your business.
              </p>
            </div>

            <div className="challengeMedia">
              <img
                src="/images/Rectangle.jpeg"
                alt="Rising Political Risks"
                className="challengeImg"
              />
            </div>
          </div>

          <div className="challengeCard">
            <div className="challengeText">
              <h3 className="challengeCardTitle">Rapid Tech Advances</h3>
              <p className="challengeCardDesc">
                Keep up with the latest technological innovations and their impact.
              </p>
            </div>

            <div className="challengeMedia">
              <img
                src="/images/Rectangle2 (1).jpeg"
                alt="Rapid Tech Advances"
                className="challengeImg"
              />
            </div>
          </div>

          <div className="challengeCard">
            <div className="challengeText">
              <h3 className="challengeCardTitle">Market Volatility</h3>
              <p className="challengeCardDesc">
                Stay informed about market trends and economic shifts.
              </p>
            </div>

            <div className="challengeMedia">
              <img
                src="/images/Rectangle2.jpeg"
                alt="Market Volatility"
                className="challengeImg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
