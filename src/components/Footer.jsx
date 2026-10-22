import { HiOutlineGlobeAlt } from 'react-icons/hi2'
import { company } from '../data/siteData'
import logo from '../assets/logo.png'
import isoLogo from '../assets/certs/iso.png'
import emblemLogo from '../assets/certs/emblem.png'
import gemLogo from '../assets/certs/gem.png'
import msmeLogo from '../assets/certs/msme.png'
import nablLogo from '../assets/certs/nabl.png'

const trustBadges = [
  { src: isoLogo, alt: 'ISO 9001:2015 Certified' },
  { src: emblemLogo, alt: 'Udyam Registered — Government of India' },
  { src: gemLogo, alt: 'Government e-Marketplace registered' },
  { src: msmeLogo, alt: 'MSME Business Forum registered' },
  { src: nablLogo, alt: 'NABL Accredited' },
]

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Services', href: '#services' },
  { label: 'Technical FAQ', href: '#faq' },
]

const serviceLinks = [
  { label: 'AMC', href: '#services' },
  { label: 'Calibration', href: '#certifications' },
  { label: 'Installation', href: '#services' },
  { label: 'Support', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="footer blueprint-grid">
      <div className="container-inotec footer__grid">
        <div className="footer__about">
          <a href="#home" className="footer__brand-mark">
            <img src={logo} alt="INOTEC — Inovative Technologies International Pvt. Ltd." />
          </a>
          <p>
            {company.fullName}, trading as INOTEC, was established in {company.founded}. It is
            one of India&rsquo;s leading manufacturers and service providers of tyre inflators,
            compressors, nitrogen inflators, LED displays and other innovative products.
          </p>
          <div className="footer__certs">
            <span className="footer__cert-pill">ISO 9001:2015 Certified</span>
            <span className="footer__cert-pill footer__cert-pill--accent">NABL Accredited</span>
          </div>
          <div className="footer__registrations">
            <strong>Certifications &amp; Registrations</strong>
            <div className="footer__badges">
              {trustBadges.map((badge) => (
                <img key={badge.alt} src={badge.src} alt={badge.alt} title={badge.alt} />
              ))}
            </div>
          </div>
        </div>

        <div className="footer__col">
          <h5>Quick Links</h5>
          <ul>
            {quickLinks.map((l) => (
              <li key={l.label}><a href={l.href}>{l.label}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h5>Services</h5>
          <ul>
            {serviceLinks.map((l) => (
              <li key={l.label}><a href={l.href}>{l.label}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h5>Contact Info</h5>
          <ul className="footer__contact">
            <li>{company.address.line1}, {company.address.line2}, {company.address.line3}</li>
            <li>{company.phones.sales} · {company.phones.service}</li>
            <li>{company.email}</li>
            <li><HiOutlineGlobeAlt /> {company.website}</li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom container-inotec">
        <p>&copy; {new Date().getFullYear()} {company.fullName} ({company.shortLegal}). All rights reserved.</p>
        <div className="footer__legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Sitemap</a>
        </div>
      </div>
    </footer>
  )
}
