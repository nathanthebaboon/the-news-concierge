export default function Demo() {
  return (
    <section className="section" id="contact" aria-label="Demo sections">
      <div className="container-max">
        {/* Row 1 */}
        <div className="demoRow">
          <div className="demoText">
            <h2 className="demoTitle">
              Try out our demo at <br />
              <a
                className="demoLink"
                href="https://mail.google.com/mail/?view=cm&fs=1&to=info@brieflyinsights.com"
                target="_blank"
                rel="noreferrer"
              >
                brieflyinsights.com
              </a>
            </h2>
          </div>

          <div className="demoMedia">
            <div className="demoBlob demoBlob--right" />
            <img
              src="/images/laptop-mobile.png"
              alt="Demo on laptop and mobile"
              className="demoImg demoImg--right"
            />
          </div>
        </div>

        {/* Center logo */}
        <div className="demoCenterBrand">
          <img src="/images/logo.png" alt="The News Concierge logo" className="demoBrandLogo" />
          <div className="demoBrandText">The News Concierge</div>
        </div>

        {/* Row 2 */}
        <div className="demoRow demoRow--reverse">
          <div className="demoMedia">
            <div className="demoBlob demoBlob--left" />
            <img
              src="/images/left-laptop-mobile.png"
              alt="News Concierge on laptop and mobile"
              className="demoImg demoImg--left"
            />
          </div>

          <div className="demoText demoText--right">
            <h2 className="demoTitle">
              Stay ahead of the <span className="demoAccent">curve</span> with The <br />
              <span className="demoAccent">News Concierge</span>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
