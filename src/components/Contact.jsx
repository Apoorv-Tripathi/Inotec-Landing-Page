import { useState } from 'react'
import { HiOutlineMapPin, HiOutlinePhone, HiOutlineEnvelope, HiOutlineClock } from 'react-icons/hi2'
import { company, contactSubjects } from '../data/siteData'

const initialForm = { name: '', email: '', phone: '', company: '', subject: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle') // idle | sent

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: wire this up to your backend / email service (e.g. POST to an API route).
    console.log('Contact form submitted:', form)
    setStatus('sent')
    setForm(initialForm)
  }

  return (
    <section id="contact" className="section">
      <div className="container-inotec">
        <div className="section-head centered">
          <p className="eyebrow">Contact Us</p>
          <h2 className="section-title">Get in touch</h2>
          <p className="section-sub">Our technical team is ready to assist you.</p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <h3>Contact Information</h3>

            <div className="contact-info__row">
              <HiOutlineMapPin size={22} />
              <div>
                <strong>Address</strong>
                <p>
                  {company.address.line1}<br />
                  {company.address.line2}<br />
                  {company.address.line3}
                </p>
              </div>
            </div>

            <div className="contact-info__row">
              <HiOutlinePhone size={22} />
              <div>
                <strong>Phone</strong>
                <p>
                  Sales: {company.phones.sales}<br />
                  Service: {company.phones.service}<br />
                  Calibration: {company.phones.calibration}
                </p>
              </div>
            </div>

            <div className="contact-info__row">
              <HiOutlineEnvelope size={22} />
              <div>
                <strong>Email</strong>
                <p>{company.email}</p>
              </div>
            </div>

            <div className="contact-info__hours">
              <div className="contact-info__hours-title">
                <HiOutlineClock size={18} /> Business Hours
              </div>
              {company.hours.map((h) => (
                <div className="contact-info__hours-row" key={h.label}>
                  <span>{h.label}</span>
                  <span>{h.value}</span>
                </div>
              ))}
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <h3>Send us a Message</h3>

            <div className="contact-form__row">
              <div className="contact-form__field">
                <label htmlFor="name">Name *</label>
                <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} />
              </div>
              <div className="contact-form__field">
                <label htmlFor="email">Email *</label>
                <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} />
              </div>
            </div>

            <div className="contact-form__row">
              <div className="contact-form__field">
                <label htmlFor="phone">Phone *</label>
                <input id="phone" name="phone" type="tel" required value={form.phone} onChange={handleChange} />
              </div>
              <div className="contact-form__field">
                <label htmlFor="companyName">Company</label>
                <input id="companyName" name="company" type="text" value={form.company} onChange={handleChange} />
              </div>
            </div>

            <div className="contact-form__field">
              <label htmlFor="subject">Subject *</label>
              <select id="subject" name="subject" required value={form.subject} onChange={handleChange}>
                <option value="" disabled>Select a subject</option>
                {contactSubjects.map((s) => (
                  <option value={s} key={s}>{s}</option>
                ))}
              </select>
            </div>

            <div className="contact-form__field">
              <label htmlFor="message">Message *</label>
              <textarea id="message" name="message" rows={5} required value={form.message} onChange={handleChange} />
            </div>

            <button type="submit" className="btn-inotec btn-primary">Send Message</button>

            {status === 'sent' && (
              <p className="contact-form__success" role="status">
                Message sent. Our team will get back to you shortly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
