'use client';

export default function Header() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-white">
        <div className="container-max">
          <div className="d-flex align-items-center justify-content-between">
            <a className="navbar-brand" href="#home" style={{ width: '25%' }}>
              <img src="/images/logo.png" className="logo" alt="Logo" />
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#features">
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#solutions">
                    Solutions
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#pricing">
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about">
                    About
                  </a>
                </li>
              </ul>
            </div>

            <div className="header-btn">
              <button type="button" className="btn header-btn" onClick={() => scrollTo('#contact')}>
                Try Demo
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
