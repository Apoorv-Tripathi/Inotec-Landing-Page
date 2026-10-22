import { useEffect, useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import { HiOutlinePhone, HiOutlineShieldCheck } from 'react-icons/hi2'
import { FaWhatsapp } from 'react-icons/fa'
import { navLinks, company } from '../data/siteData'
import logo from '../assets/logo.png'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLinkClick = () => setOpen(false)

  const cleanSalesPhone = company.phones.sales.replace(/[^0-9+]/g, '')
  const whatsappUrl = `https://wa.me/${company.phones.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
    'Hello INOTEC, I would like to inquire about industrial air equipment and services.'
  )}`

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      {/* Top Utility Bar */}
      <div className="navbar__top-bar">
        <div className="container-inotec navbar__top-inner">
          <div className="navbar__top-trust">
            <span className="navbar__trust-tag">
              <HiOutlineShieldCheck size={14} /> ISO 9001:2015 Certified
            </span>
            <span className="navbar__trust-divider">·</span>
            <span className="navbar__trust-tag">NABL Accredited Lab</span>
            <span className="navbar__trust-divider">·</span>
            <span className="navbar__trust-tag">IOCL &amp; Railways Partner</span>
          </div>

          <div className="navbar__top-contact">
            <a href={`tel:${cleanSalesPhone}`} className="navbar__top-phone">
              <HiOutlinePhone size={13} /> Sales: <strong>{company.phones.sales}</strong>
            </a>
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="navbar__top-wa"
              aria-label="Direct WhatsApp Chat"
            >
              <FaWhatsapp size={14} /> WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="container-inotec navbar__inner">
        <a href="#home" className="navbar__brand" onClick={handleLinkClick} aria-label="INOTEC — Home">
          <img src={logo} alt="INOTEC — Inovative Technologies International Pvt. Ltd." className="navbar__logo" />
        </a>

        <nav className={`navbar__links ${open ? 'is-open' : ''}`}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={handleLinkClick}>
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn-inotec btn-primary btn-sm navbar__cta" onClick={handleLinkClick}>
            Get Quotation
          </a>
        </nav>

        <button
          className="navbar__toggle"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <HiX size={26} /> : <HiMenu size={26} />}
        </button>
      </div>
    </header>
  )
}