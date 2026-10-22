import { useEffect, useRef, useState } from 'react'
import { HiArrowRight } from 'react-icons/hi'
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi2'
import { heroSlides, stats } from '../data/siteData'

const SLIDE_DURATION = 6500

export default function Hero() {
  const [active, setActive] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const timerRef = useRef(null)

  useEffect(() => {
    if (!isPaused) {
      startTimer()
    } else {
      clearInterval(timerRef.current)
    }
    return () => clearInterval(timerRef.current)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, isPaused])

  const startTimer = () => {
    clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setActive((i) => (i + 1) % heroSlides.length)
    }, SLIDE_DURATION)
  }

  const goTo = (i) => {
    setActive(i)
    if (!isPaused) startTimer()
  }

  const nextSlide = () => {
    setActive((i) => (i + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setActive((i) => (i - 1 + heroSlides.length) % heroSlides.length)
  }

  const slide = heroSlides[active]

  return (
    <section 
      id="home" 
      className="hero"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="hero__frame blueprint-grid corner-marks">
        <div className="container-inotec hero__kicker-row">
          <span className="hero__kicker">Industrial Air Systems &amp; Calibration</span>
          <span className="hero__kicker-divider" />
          <span className="hero__kicker">IOCL &amp; Indian Railways Registered Partner</span>
          <span className="hero__kicker-divider" />
          <span className="hero__kicker">Est. 2018</span>
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
                    Explore Equipment <HiArrowRight />
                  </a>
                  <a href="#contact" className="btn-inotec btn-outline-light">
                    Request Quotation
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
                  <div className="hero__panel-counter">
                    <span>{String(active + 1).padStart(2, '0')} / {String(heroSlides.length).padStart(2, '0')}</span>
                    <span className="hero__panel-strip-label">{slide.eyebrow}</span>
                  </div>
                  <div className="hero__panel-arrows">
                    <button 
                      type="button" 
                      onClick={prevSlide} 
                      className="hero__arrow-btn" 
                      aria-label="Previous slide"
                    >
                      <HiOutlineChevronLeft size={16} />
                    </button>
                    <button 
                      type="button" 
                      onClick={nextSlide} 
                      className="hero__arrow-btn" 
                      aria-label="Next slide"
                    >
                      <HiOutlineChevronRight size={16} />
                    </button>
                  </div>
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