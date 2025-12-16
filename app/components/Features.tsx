export default function Features() {
  return (
    <section className="section" id="features" aria-label="Core Features">
      <div className="container-max">
        <div className="coreHead">
          <h2 className="coreTitle">Core Features</h2>
          <p className="coreSub">
            We have a range of features designed to provide your team both
            <br />
            the breadth and depth of insights
          </p>
        </div>
      </div>

      {/* Full-width gradient panel */}
      <div className="corePanel">
        <div className="container-max">
          <div className="coreGrid">
            <div className="coreItem">
              <div className="coreNum">01</div>
              <div className="coreText">
                <div className="coreName">News Summaries</div>
                <div className="coreDesc">Summaries of key news events and articles</div>
              </div>
            </div>

            <div className="coreItem">
              <div className="coreNum">02</div>
              <div className="coreText">
                <div className="coreName">AI-Powered Chatbots</div>
                <div className="coreDesc">Chatbots to improve accessibility and depth</div>
              </div>
            </div>

            <div className="coreItem">
              <div className="coreNum">03</div>
              <div className="coreText">
                <div className="coreName">News Analysis</div>
                <div className="coreDesc">In-depth commentaries on latest developments</div>
              </div>
            </div>

            <div className="coreItem">
              <div className="coreNum">04</div>
              <div className="coreText">
                <div className="coreName">Employee Dashboard</div>
                <div className="coreDesc">To track your employees&apos; progress and interests</div>
              </div>
            </div>

            {/* last row centered */}
            <div className="coreItem coreItemCenter">
              <div className="coreNum">05</div>
              <div className="coreText">
                <div className="coreName">Internal Forums</div>
                <div className="coreDesc">Strictly internal forums for unified direction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
