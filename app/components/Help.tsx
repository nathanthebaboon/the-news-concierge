export default function Help() {
  return (
    <section className="section" id="We-Can-Help">
      <div className="container-max">
        <div className="helpHead">
          <h2 className="helpTitle">How We Can Helps You</h2>
          <p className="helpSub">
            The News Concierge helps your managers and employees
            <br />
            stay ahead of the curve.
          </p>
        </div>
      </div>

      {/* Full-width image band */}
      <div
        className="helpBand"
        style={{ backgroundImage: "url('/images/bg-img.jpeg')" }}
      >
        <div className="container-max">
          <div className="helpPills">
            <div className="helpPill">
              <span className="helpDot" />
              <span>Keep up with the rapid technological advancements.</span>
            </div>

            <div className="helpPill">
              <span className="helpDot" />
              <span>Stay abreast of the latest industry and market shifts.</span>
            </div>

            <div className="helpPill">
              <span className="helpDot" />
              <span>Equip your workforce with critical knowledge.</span>
            </div>

            <div className="helpPill">
              <span className="helpDot" />
              <span>Get instant updates on your competitors.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
