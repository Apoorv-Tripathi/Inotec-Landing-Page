import { HiOutlinePhone, HiOutlineEnvelope } from 'react-icons/hi2'
import { FaWhatsapp } from 'react-icons/fa'
import { company } from '../data/siteData'

export default function MobileQuickBar() {
  const cleanPhone = company.phones.sales.replace(/[^0-9+]/g, '')
  const whatsappUrl = `https://wa.me/${company.phones.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
    'Hello INOTEC team, I am looking for a quick quotation on industrial equipment.'
  )}`

  return (
    <aside className="mobile-quick-bar" aria-label="Quick contact actions">
      <a href={`tel:${cleanPhone}`} className="mobile-quick-bar__btn call-btn">
        <HiOutlinePhone size={18} />
        <span>Call Sales</span>
      </a>

      <a 
        href={whatsappUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="mobile-quick-bar__btn whatsapp-btn"
      >
        <FaWhatsapp size={19} />
        <span>WhatsApp</span>
      </a>

      <a href="#contact" className="mobile-quick-bar__btn quote-btn">
        <HiOutlineEnvelope size={18} />
        <span>Get Quote</span>
      </a>
    </aside>
  )
}