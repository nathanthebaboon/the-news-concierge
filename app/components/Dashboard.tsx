export default function Dashboard() {
  return (
    <section className="section" aria-label="TNC Dashboard">
      <div className="container-max">
        <div className="dashHead">
          <h2 className="dashTitle">
            TNC <span>Dashboard</span>
          </h2>
          <p className="dashSub">
            Take charge of your employees’ learning through the
            <br />
            TNC Dashboard
          </p>
        </div>

        <div className="dashGrid">
          <div className="dashBox">Topics</div>
          <div className="dashBox">Features</div>
          <div className="dashBox">Formats</div>
          <div className="dashBox">Audience</div>
        </div>

        <p className="dashBottom">See what your employees are...</p>
      </div>
    </section>
  );
}
