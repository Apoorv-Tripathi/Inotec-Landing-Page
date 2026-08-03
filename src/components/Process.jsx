import { process } from '../data/siteData'
import useReveal from '../hooks/useReveal'

function Step({ item, index, isLast }) {
  const ref = useReveal()
  return (
    <div className="process__step reveal" ref={ref} style={{ transitionDelay: `${index * 60}ms` }}>
      <div className="process__marker">{item.step}</div>
      <h4>{item.title}</h4>
      <p>{item.description}</p>
      {!isLast && <span className="process__connector" aria-hidden="true" />}
    </div>
  )
}

export default function Process() {
  return (
    <section className="section section-alt">
      <div className="container-inotec">
        <div className="section-head centered">
          <p className="eyebrow">Working Process</p>
          <h2 className="section-title">From consultation to long-term care</h2>
        </div>

        <div className="process__track">
          {process.map((item, i) => (
            <Step item={item} index={i} isLast={i === process.length - 1} key={item.step} />
          ))}
        </div>
      </div>
    </section>
  )
}
