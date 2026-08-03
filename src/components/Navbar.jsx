import { useEffect, useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import { navLinks } from '../data/siteData'
import logo from '../assets/logo.png'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLinkClick = () => setOpen(false)

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
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
            Contact Us
          </a>
        </nav>

        <button
          className="navbar__toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </div>
    </header>
  )
}
