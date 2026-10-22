import { useState, useEffect } from 'react'
import { HiOutlineMapPin, HiOutlinePhone, HiOutlineEnvelope, HiOutlineClock } from 'react-icons/hi2'
import { FaWhatsapp } from 'react-icons/fa'
import { company, contactSubjects } from '../data/siteData'

const initialForm = { name: '', email: '', phone: '', company: '', subject: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle') // idle | sent

  useEffect(() => {
    const handlePrefill = (e) => {
      if (e.detail?.product) {
        setForm((prev) => ({
          ...prev,
          subject: 'Sales Enquiry',
          message: `Hello INOTEC team, please share quotation, technical data sheet, and availability for: ${e.detail.product}.`,
        }))
      }
    }
    window.addEventListener('prefill-quote', handlePrefill)
    return () => window.removeEventListener('prefill-quote', handlePrefill)
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulated submission with instant user confirmation
    console.log('Contact form submitted:', form)
    setStatus('sent')
    setForm(initialForm)
  }

  const cleanPhone = (p) => p.replace(/[^0-9+]/g, '')
  const whatsappUrl = `https://wa.me/${company.phones.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
    'Hello INOTEC team, I am reaching out from your website regarding an engineering enquiry.'
  )}`

  return (
    <section id="contact" className="section">
      <div className="container-inotec">
        <div className="section-head centered">
          <p className="eyebrow">Contact &amp; Field Support</p>
          <h2 className="section-title">Get in Touch with Our Engineers</h2>
          <p className="section-sub">
            Fast quotes for sales, emergency calibration visits, and AMC service inquiries across India.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <h3>Contact Information</h3>

            <div className="contact-info__row">
              <HiOutlineMapPin size={22} className="contact-icon" />
              <div>
                <strong>Factory &amp; Head Office</strong>
                <address className="contact-address">
                  {company.address.line1}<br />
                  {company.address.line2}<br />
                  {company.address.line3}
                </address>
              </div>
            </div>

            <div className="contact-info__row">
              <HiOutlinePhone size={22} className="contact-icon" />
              <div>
                <strong>Direct Phone Lines</strong>
                <p>
                  Sales:{' '}
                  <a href={`tel:${cleanPhone(company.phones.sales)}`} className="contact-link">
                    {company.phones.sales}
                  </a>
                  <br />
                  Service &amp; AMC:{' '}
                  <a href={`tel:${cleanPhone(company.phones.service)}`} className="contact-link">
                    {company.phones.service}
                  </a>
                  <br />
                  Calibration Lab:{' '}
                  <a href={`tel:${cleanPhone(company.phones.calibration)}`} className="contact-link">
                    {company.phones.calibration}
                  </a>
                </p>
              </div>
            </div>

            <div className="contact-info__row">
              <HiOutlineEnvelope size={22} className="contact-icon" />
              <div>
                <strong>Official Email</strong>
                <p>
                  <a href={`mailto:${company.email}`} className="contact-link">
                    {company.email}
                  </a>
                </p>
              </div>
            </div>

            <div className="contact-whatsapp-card">
              <div className="contact-whatsapp-text">
                <strong>Need an Instant Quotation?</strong>
                <span>Connect directly with our technical sales representative on WhatsApp.</span>
              </div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-inotec btn-whatsapp"
                aria-label="Chat on WhatsApp"
              >
                <FaWhatsapp size={18} /> Chat on WhatsApp
              </a>
            </div>

            <div className="contact-info__hours">
              <div className="contact-info__hours-title">
                <HiOutlineClock size={18} /> Working &amp; Support Hours
              </div>
              {company.hours.map((h) => (
                <div className="contact-info__hours-row" key={h.label}>
                  <span>{h.label}</span>
                  <strong>{h.value}</strong>
                </div>
              ))}
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <h3>Send Us a Technical / Sales Message</h3>
            <p className="contact-form__intro">
              Submit your inquiry below and our regional sales engineer will respond with technical specifications and commercial terms within 24 hours.
            </p>

            <div className="contact-form__row">
              <div className="contact-form__field">
                <label htmlFor="name">Full Name *</label>
                <input id="name" name="name" type="text" required autoComplete="name" placeholder="e.g. Rajesh Kumar" value={form.name} onChange={handleChange} />
              </div>
              <div className="contact-form__field">
                <label htmlFor="email">Email Address *</label>
                <input id="email" name="email" type="email" required autoComplete="email" placeholder="e.g. rajesh@company.com" value={form.email} onChange={handleChange} />
              </div>
            </div>

            <div className="contact-form__row">
              <div className="contact-form__field">
                <label htmlFor="phone">Phone Number *</label>
                <input id="phone" name="phone" type="tel" required autoComplete="tel" placeholder="e.g. +91 98765 43210" value={form.phone} onChange={handleChange} />
              </div>
              <div className="contact-form__field">
                <label htmlFor="companyName">Company / Dealership Name</label>
                <input id="companyName" name="company" type="text" autoComplete="organization" placeholder="e.g. Highway Fuels IOCL" value={form.company} onChange={handleChange} />
              </div>
            </div>

            <div className="contact-form__field">
              <label htmlFor="subject">Inquiry Subject *</label>
              <select id="subject" name="subject" required value={form.subject} onChange={handleChange}>
                <option value="" disabled>Select inquiry type</option>
                {contactSubjects.map((s) => (
                  <option value={s} key={s}>{s}</option>
                ))}
              </select>
            </div>

            <div className="contact-form__field">
              <label htmlFor="message">Requirement Details *</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="Mention equipment model, quantity, fuel outlet / workshop location, or calibration requirement..."
                value={form.message}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="btn-inotec btn-primary">
              Submit Technical Enquiry
            </button>

            {status === 'sent' && (
              <div className="contact-form__success" role="status">
                ✓ Thank you. Your inquiry has been received. Our sales engineer will get in touch with you shortly.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}