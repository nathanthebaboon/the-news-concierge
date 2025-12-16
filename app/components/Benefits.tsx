export default function Benefits() {
  return (
    <section className="section" id="Benefits" aria-label="Early Adopter Benefits">
      <div className="container-max">
        <div className="benHead">
          <h2 className="benTitle">
            Early Adopter <span>Benefits</span>
          </h2>
          <p className="benSub">Be an early adopter to secure the best service and privileges</p>
        </div>

        <div className="benGrid">
          {/* Left list */}
          <ul className="benList">
            <li className="benItem">Dedicated Service</li>
            <li className="benItem">Feature Development</li>
            <li className="benItem">Lifetime Discount</li>
            <li className="benItem">Free Trial</li>
          </ul>

          {/* Right image */}
          <div className="benImgWrap">
            <img
              src="/images/adopter-Benefits.jpeg"
              alt="Early adopter benefits"
              className="benImg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
