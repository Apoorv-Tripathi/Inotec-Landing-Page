import { useEffect, useRef, useState } from 'react'
import { HiArrowRight } from 'react-icons/hi'
import { heroSlides, stats } from '../data/siteData'

const SLIDE_DURATION = 6500

export default function Hero() {
  const [active, setActive] = useState(0)
  const timerRef = useRef(null)

  useEffect(() => {
    startTimer()
    return () => clearInterval(timerRef.current)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active])

  const startTimer = () => {
    clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setActive((i) => (i + 1) % heroSlides.length)
    }, SLIDE_DURATION)
  }

  const goTo = (i) => {
    setActive(i)
    startTimer()
  }

  const slide = heroSlides[active]

  return (
    <section id="home" className="hero">
      <div className="hero__frame blueprint-grid corner-marks">
        <div className="container-inotec hero__kicker-row">
          <span className="hero__kicker">Industrial Air Engineering</span>
          <span className="hero__kicker-divider" />
          <span className="hero__kicker">Established 2018</span>
        </div>

        <div className="container-inotec hero__layout">
          <div className="hero__stage">
            <div className="hero__slide" key={slide.id}>
              <div className="hero__copy">
                <p className="eyebrow eyebrow--light">{slide.eyebrow}</p>
                <h1 className="hero__title">{slide.title}</h1>
                <p className="hero__desc">{slide.description}</p>
                <div className="hero__actions">
                  <a href="#products" className="btn-inotec btn-primary">
                    Explore Products <HiArrowRight />
                  </a>
                  <a href="#contact" className="btn-inotec btn-outline-light">
                    Contact Us
                  </a>
                </div>
              </div>

              <div className="hero__panel corner-marks">
                <div
                  className="hero__panel-image"
                  style={{ backgroundImage: `url(${slide.image})` }}
                  role="img"
                  aria-label={slide.imageAlt}
                />
                <div className="hero__panel-strip">
                  <span>{String(active + 1).padStart(2, '0')} / {String(heroSlides.length).padStart(2, '0')}</span>
                  <span className="hero__panel-strip-label">{slide.eyebrow}</span>
                </div>
              </div>
            </div>
          </div>

          <nav className="hero__rail" aria-label="Slide selector">
            {heroSlides.map((s, i) => (
              <button
                key={s.id}
                className={`hero__rail-tick ${active === i ? 'is-active' : ''}`}
                onClick={() => goTo(i)}
                aria-label={`Show slide ${i + 1}: ${s.eyebrow}`}
                aria-current={active === i}
              >
                <span className="hero__rail-num">{String(i + 1).padStart(2, '0')}</span>
                <span className="hero__rail-line" />
              </button>
            ))}
          </nav>
        </div>

        <div className="container-inotec hero__stats">
          {stats.map((stat) => (
            <div className="hero__stat" key={stat.label}>
              <span>{stat.value}{stat.suffix}</span>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
