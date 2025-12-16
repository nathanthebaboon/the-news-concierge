export default function Prepared() {
  return (
    <section className="section" aria-label="Prepared section">
      <div className="container-max">
        <div className="preparedGrid">
          {/* LEFT */}
          <div className="preparedLeft">
            <h2 className="preparedTitle">
              Do Not Feel Prepared.
              <br />
              Feel Prepared.
            </h2>
            <p className="preparedSub">
              But according to Accenture, most managers and employees are not prepared for this.
            </p>

            <div className="preparedImgWrap">
              <img
                src="/images/laptop.jpeg"
                alt="Laptop"
                className="preparedImg"
              />
            </div>
          </div>

          {/* RIGHT */}
          <div className="preparedRight">
            <div className="preparedToggle">
              <span className="dot" />
              <span className="toggleText">Do Not Feel Prepared</span>
              <span className="toggleSep">•</span>
              <span className="toggleText muted">Feel Prepared</span>
            </div>

            <div className="bars">
              {/* BAR 1 */}
              <div className="barRow">
                <div className="barTrack">
                  <div className="barFill" style={{ width: '64%' }} />
                  <div className="barBubble" style={{ left: '64%' }}>
                    64%
                  </div>
                </div>
                <div className="barEnd">
                  <span className="endPill">36%</span>
                </div>
              </div>

              {/* BAR 2 */}
              <div className="barRow">
                <div className="barTrack">
                  <div className="barFill" style={{ width: '54%' }} />
                  <div className="barBubble" style={{ left: '54%' }}>
                    54%
                  </div>
                </div>
                <div className="barEnd">
                  <span className="endPill">46%</span>
                </div>
              </div>
            </div>

            {/* (optional) if you want your old “range image” removed, don’t render it */}
          </div>
        </div>
      </div>
    </section>
  );
}
