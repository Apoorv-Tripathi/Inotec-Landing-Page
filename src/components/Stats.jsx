import { useEffect, useRef, useState } from 'react'
import { stats } from '../data/siteData'

function Counter({ value, suffix }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const duration = 1400
          const startTime = performance.now()

          const tick = (now) => {
            const progress = Math.min((now - startTime) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.round(eased * value))
            if (progress < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
          observer.disconnect()
        }
      },
      { threshold: 0.4 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [value])

  return (
    <span ref={ref} className="stat__value">
      {count}
      {suffix}
    </span>
  )
}

export default function Stats() {
  return (
    <section className="section-dark stats-section blueprint-grid">
      <div className="container-inotec stats-grid">
        {stats.map((stat) => (
          <div className="stat" key={stat.label}>
            <Counter value={stat.value} suffix={stat.suffix} />
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
