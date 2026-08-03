import useReveal from '../hooks/useReveal'
import SafeImage from './SafeImage'
import aboutFacility from '../assets/images/about-facility.jpg'

export default function About() {
  const revealRef = useReveal()

  return (
    <section id="about" className="section about">
      <div className="container-inotec about__grid">
        <div className="about__media reveal" ref={revealRef}>
          <div className="about__image corner-marks">
            <SafeImage src={aboutFacility} alt="INOTEC engineering facility and workshop" />
          </div>
          <div className="about__badge">
            <strong>2018</strong>
            <span>Established</span>
          </div>
        </div>

        <div className="about__copy">
          <p className="eyebrow">Who We Are</p>
          <h2 className="section-title">
            Engineering reliable air systems since 2018
          </h2>
          <p className="about__lead">
            INOTEC — Inovative Technologies International Pvt. Ltd. — is ISO 9001:2015
            certified and registered with the Government of India, GeM, and the MSME
            Business Forum. We are one of India&rsquo;s leading manufacturers of tyre
            inflators, air compressors, nitrogen inflators and LED displays.
          </p>
          <p className="section-sub">
            Our engineering expertise and reliable product performance have built a strong
            presence across fuel stations, automotive workshops and industrial clients. We
            deliver complete installation, commissioning, maintenance, repair, AMC support
            and certified calibration to keep every machine running dependably.
          </p>

          <div className="about__pillars">
            <div className="about__pillar">
              <h4>Our Mission</h4>
              <p>Deliver reliable, precision-engineered air solutions and calibration services that meet industry standards.</p>
            </div>
            <div className="about__pillar">
              <h4>Quality Commitment</h4>
              <p>ISO 9001:2015 certified processes ensuring consistent compliance with national and international standards.</p>
            </div>
            <div className="about__pillar">
              <h4>Expert Team</h4>
              <p>Engineers and technicians specialising in air systems, pneumatics, automation and calibration.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
