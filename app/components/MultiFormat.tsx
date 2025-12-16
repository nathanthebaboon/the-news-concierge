export default function MultiFormat() {
  return (
    <section className="section" aria-label="Multi-Format Content">
      <div className="container-max">
        <div className="mfHead">
          <h2 className="mfTitle">
            Multi-Format <span>Content</span>
          </h2>
          <p className="mfSub">
            We offer multi-formats to improve accessibility and cater
            <br />
            to a wide range of learning styles
          </p>

        <div className="mfGrid">
          <div className="mfCard">
            <img src="/images/media-img-1.png" alt="Short Texts" className="mfImg" />
            <div className="mfPill">Short Texts</div>
          </div>

          <div className="mfCard">
            <img src="/images/media-img-2.png" alt="Long Articles" className="mfImg" />
            <div className="mfPill mfPillGray">Long Articles</div>
          </div>

          <div className="mfCard">
            <img src="/images/media-img-3.png" alt="Audio / Podcasts" className="mfImg" />
            <div className="mfPill">Audio / Podcasts</div>
          </div>

          <div className="mfCard">
            <img src="/images/media-img-4.png" alt="Videos / Shorts" className="mfImg" />
            <div className="mfPill mfPillDark">Videos / Shorts</div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}
