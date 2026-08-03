import { HiOutlineShieldCheck } from 'react-icons/hi2'
import { certifications } from '../data/siteData'
import useReveal from '../hooks/useReveal'

function Cert({ cert, index }) {
  const ref = useReveal()
  return (
    <div className="cert-card reveal" ref={ref} style={{ transitionDelay: `${index * 50}ms` }}>
      {cert.logo ? (
        <img src={cert.logo} alt={`${cert.name} badge`} className="cert-card__logo" />
      ) : (
        <HiOutlineShieldCheck size={26} />
      )}
      <h4>{cert.name}</h4>
      <p>{cert.description}</p>
    </div>
  )
}

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="container-inotec">
        <div className="section-head centered">
          <p className="eyebrow">Certifications &amp; Awards</p>
          <h2 className="section-title">Accredited and independently verified</h2>
        </div>

        <div className="cert-grid">
          {certifications.map((cert, i) => (
            <Cert cert={cert} index={i} key={cert.name} />
          ))}
        </div>
      </div>
    </section>
  )
}
