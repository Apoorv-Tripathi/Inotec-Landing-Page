import { HiOutlineCheckCircle } from 'react-icons/hi2'
import { whyChooseUs } from '../data/siteData'
import useReveal from '../hooks/useReveal'

function Reason({ item, index }) {
  const ref = useReveal()
  return (
    <div className="reason reveal" ref={ref} style={{ transitionDelay: `${index * 50}ms` }}>
      <HiOutlineCheckCircle className="reason__icon" />
      <div>
        <h4>{item.title}</h4>
        <p>{item.description}</p>
      </div>
    </div>
  )
}

export default function WhyChooseUs() {
  return (
    <section className="section section-alt">
      <div className="container-inotec">
        <div className="section-head centered">
          <p className="eyebrow">Why Choose INOTEC</p>
          <h2 className="section-title">Reasons clients stay with us</h2>
        </div>

        <div className="reason-grid">
          {whyChooseUs.map((item, i) => (
            <Reason item={item} index={i} key={item.title} />
          ))}
        </div>
      </div>
    </section>
  )
}
