import { HiOutlineChatBubbleBottomCenterText } from 'react-icons/hi2'
import { testimonials } from '../data/siteData'
import useReveal from '../hooks/useReveal'

function TestimonialCard({ item, index }) {
  const ref = useReveal()
  return (
    <div className="testimonial reveal" ref={ref} style={{ transitionDelay: `${index * 60}ms` }}>
      <HiOutlineChatBubbleBottomCenterText className="testimonial__icon" />
      <p className="testimonial__quote">&ldquo;{item.quote}&rdquo;</p>
      <div className="testimonial__author">
        <strong>{item.name}</strong>
        <span>{item.role}</span>
      </div>
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="section section-alt">
      <div className="container-inotec">
        <div className="section-head centered">
          <p className="eyebrow">Testimonials</p>
          <h2 className="section-title">What clients say</h2>
        </div>

        <div className="testimonial-grid">
          {testimonials.map((item, i) => (
            <TestimonialCard item={item} index={i} key={item.name} />
          ))}
        </div>
      </div>
    </section>
  )
}
