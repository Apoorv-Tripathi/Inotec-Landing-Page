import { whatWeDo } from '../data/siteData'
import Icon from './IconRegistry'
import useReveal from '../hooks/useReveal'

function Card({ item, index }) {
  const ref = useReveal()
  return (
    <div className="wwd__card reveal" ref={ref} style={{ transitionDelay: `${index * 60}ms` }}>
      <div className="wwd__icon">
        <Icon name={item.icon} />
      </div>
      <h4>{item.title}</h4>
      <p>{item.description}</p>
    </div>
  )
}

export default function WhatWeDo() {
  return (
    <section id="services" className="section section-alt">
      <div className="container-inotec">
        <div className="section-head centered">
          <p className="eyebrow">What We Do</p>
          <h2 className="section-title">Engineering capability, end to end</h2>
          <p className="section-sub">
            From manufacturing to long-term maintenance, INOTEC covers every stage of your
            equipment&rsquo;s working life.
          </p>
        </div>

        <div className="wwd__grid">
          {whatWeDo.map((item, i) => (
            <Card item={item} index={i} key={item.title} />
          ))}
        </div>
      </div>
    </section>
  )
}
