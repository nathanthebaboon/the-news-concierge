export default function Pricing() {
  return (
    <section className="section" id="pricing" aria-label="Pricing and Personalisation">
      <div className="container-max">
        <div className="priceHead">
          <h2 className="priceTitle">
            Pricing & <span>Persocnalisation</span>
          </h2>
          <p className="priceSub">
            Our pricing is fully flexible to cater to your specific needs
            <br />
            with low overheads
          </p>
        </div>

        <div className="priceSteps">
          <div className="priceStep priceStep1">
            <div className="priceNum">01</div>
            <div className="pricePill">Per Employee Subscription</div>
          </div>

          <div className="priceStep priceStep2">
            <div className="priceNum">02</div>
            <div className="pricePill pricePillDark">Single Corporate Subscription</div>
          </div>

          <div className="priceStep priceStep3">
            <div className="priceNum">03</div>
            <div className="pricePill pricePillDark">One-Time Software Purchase</div>
          </div>
        </div>
      </div>
    </section>
  );
}
