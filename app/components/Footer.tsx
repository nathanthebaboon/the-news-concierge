export default function Footer() {
  return (
    <footer className="site-footer" aria-label="Footer">
      <div className="container-max">
        <div className="footerGrid">
          {/* Brand */}
          <div className="footerBrand">
            <div className="footerBrandTop">
              <img
                src="/images/footer-logo.png"
                alt="The News Concierge"
                className="footerLogo"
              />
              <div className="footerBrandName">The News Concierge</div>
            </div>
            <p className="footerTagline">
              Making news and insights accessible to your workforce.
            </p>
          </div>

          {/* Quick links */}
          <div className="footerCol">
            <h6 className="footerHead">Quick links</h6>
            <ul className="footerLinks">
              <li><a href="#home">Home</a></li>
              <li><a href="#We-Can-Help">We Can Help</a></li>
              <li><a href="#Our-Team">Our Team</a></li>
              <li><a href="#Benefits">Benefits</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="footerCol">
            <h6 className="footerHead">Company</h6>
            <ul className="footerLinks">
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footerCol">
            <h6 className="footerHead">Newsletter</h6>
            <p className="footerNote">Stay updated with our latest news.</p>

            <form
              className="footerForm"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                className="footerInput"
                type="email"
                placeholder="Enter your email"
                aria-label="Email address"
              />
              <button className="footerBtn" type="submit">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="footerBottom">
          © 2025 The News Concierge. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
