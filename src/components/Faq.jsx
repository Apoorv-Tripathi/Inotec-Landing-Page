import { useState } from 'react'
import { HiOutlineChevronDown, HiOutlineQuestionMarkCircle, HiOutlinePhone } from 'react-icons/hi2'
import { FaWhatsapp } from 'react-icons/fa'
import { faqs, company } from '../data/siteData'
import useReveal from '../hooks/useReveal'

export default function Faq() {
  const [openId, setOpenId] = useState('faq-1')
  const ref = useReveal()

  const toggleFaq = (id) => {
    setOpenId((prev) => (prev === id ? null : id))
  }

  const cleanPhone = company.phones.sales.replace(/[^0-9+]/g, '')
  const whatsappUrl = `https://wa.me/${company.phones.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
    'Hello INOTEC technical team, I have a question regarding equipment specifications and calibration.'
  )}`

  return (
    <section id="faq" className="section section-alt">
      <div className="container-inotec">
        <div className="section-head centered">
          <p className="eyebrow">Technical &amp; Operational FAQ</p>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-sub">
            Practical answers regarding Legal Metrology compliance, calibration cycles, AMC support, and power requirements.
          </p>
        </div>

        <div className="faq-wrapper reveal" ref={ref}>
          <div className="faq-accordion" role="region" aria-label="Technical FAQs">
            {faqs.map((faq, index) => {
              const isOpen = openId === faq.id
              return (
                <div className={`faq-item ${isOpen ? 'is-open' : ''}`} key={faq.id}>
                  <button
                    type="button"
                    className="faq-question"
                    onClick={() => toggleFaq(faq.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${faq.id}`}
                    id={`faq-btn-${faq.id}`}
                  >
                    <div className="faq-question__left">
                      <span className="faq-question__index">0{index + 1}</span>
                      <div className="faq-question__text-wrap">
                        <span className="faq-question__category">{faq.category}</span>
                        <span className="faq-question__title">{faq.question}</span>
                      </div>
                    </div>
                    <span className="faq-question__icon" aria-hidden="true">
                      <HiOutlineChevronDown size={20} />
                    </span>
                  </button>

                  <div
                    id={`faq-answer-${faq.id}`}
                    role="region"
                    aria-labelledby={`faq-btn-${faq.id}`}
                    className="faq-answer"
                    hidden={!isOpen}
                  >
                    <div className="faq-answer__inner">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="faq-help-box corner-marks">
            <div className="faq-help-box__content">
              <h4>Still have a technical or tender specification inquiry?</h4>
              <p>
                Our engineering team in Kanpur is available Monday through Saturday to review site requirements, tender BOQs, or custom compressor sizing.
              </p>
            </div>
            <div className="faq-help-box__actions">
              <a href={`tel:${cleanPhone}`} className="btn-inotec btn-outline-navy btn-sm">
                <HiOutlinePhone size={16} /> Call Engineering: {company.phones.sales}
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-inotec btn-whatsapp btn-sm"
              >
                <FaWhatsapp size={16} /> WhatsApp Sales Engineer
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
