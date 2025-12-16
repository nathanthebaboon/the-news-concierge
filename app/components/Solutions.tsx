export default function Solutions() {
  return (
    <section className="section" id="solutions" aria-label="Departmental Solutions">
      <div className="container-max">
        <div className="solHead">
          <h2 className="solTitle">Departmental Solutions</h2>
          <p className="solSub">
            We can deliver customised solutions for your different departments according to their needs
            <br />
            HR Insights Market Insights Ops Insights Tech Insights Finance Insights
          </p>
        </div>

        <div className="solGridTop">
          <div className="solPill">
            <span className="solIcon" aria-hidden="true">🏛️</span>
            <span>Market Insights</span>
          </div>
          <div className="solPill">
            <span className="solIcon" aria-hidden="true">📰</span>
            <span>Latest News</span>
          </div>
          <div className="solPill">
            <span className="solIcon" aria-hidden="true">🔎</span>
            <span>Deep Analysis</span>
          </div>
        </div>

        <div className="solGridBottom">
          <div className="solPill">
            <span className="solIcon" aria-hidden="true">🤖</span>
            <span>AI Chatbots</span>
          </div>
          <div className="solPill">
            <span className="solIcon" aria-hidden="true">📊</span>
            <span>Dashboard</span>
          </div>
        </div>
      </div>
    </section>
  );
}
