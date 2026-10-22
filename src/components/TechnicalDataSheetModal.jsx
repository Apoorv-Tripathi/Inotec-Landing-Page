import { useEffect } from 'react'
import { 
  HiXMark, 
  HiOutlinePrinter, 
  HiOutlineArrowRight, 
  HiOutlineBolt, 
  HiOutlineWrenchScrewdriver,
  HiOutlineScale,
  HiOutlineShieldCheck
} from 'react-icons/hi2'
import { FaWhatsapp } from 'react-icons/fa'
import { company } from '../data/siteData'

export default function TechnicalDataSheetModal({ product, onClose, onQuote }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose])

  if (!product) return null

  const t = product.technicalSheet || {}
  const whatsappUrl = `https://wa.me/${company.phones.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
    `Hello INOTEC, I am reviewing the Technical Data Sheet for ${product.name} (${product.model}). Please provide detailed pricing, availability, and installation support.`
  )}`

  return (
    <div 
      className="tds-modal-backdrop" 
      onClick={onClose} 
      role="dialog" 
      aria-modal="true" 
      aria-labelledby="tds-modal-title"
    >
      <div className="tds-modal" onClick={(e) => e.stopPropagation()}>
        <header className="tds-modal__header">
          <div>
            <div className="tds-modal__subhead">
              <span className="tds-modal__tag">{product.categoryLabel || 'Industrial Equipment'}</span>
              <span className="tds-modal__doc-id">DOC: TDS-{product.model}-REV4</span>
            </div>
            <h2 id="tds-modal-title" className="tds-modal__title">
              {product.name} <span className="tds-modal__model">[{product.model}]</span>
            </h2>
          </div>
          <button 
            type="button" 
            className="tds-modal__close-btn" 
            onClick={onClose} 
            aria-label="Close Technical Data Sheet"
          >
            <HiXMark size={24} />
          </button>
        </header>

        <div className="tds-modal__content">
          <div className="tds-modal__overview">
            <div className="tds-modal__image">
              <img src={product.image} alt={`${product.name} ${product.model}`} />
            </div>
            <div className="tds-modal__meta">
              <p className="tds-modal__desc">{product.description}</p>
              <div className="tds-modal__quick-specs">
                {product.specs.slice(0, 4).map((s) => (
                  <div className="tds-modal__quick-spec" key={s.label}>
                    <span className="tds-modal__quick-label">{s.label}</span>
                    <strong className="tds-modal__quick-val">{s.value}</strong>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="tds-modal__section">
            <h3 className="tds-modal__section-heading">
              <HiOutlineScale size={18} /> Metrology &amp; Pressure Parameters
            </h3>
            <table className="tds-table">
              <tbody>
                {t.operatingPressure && (
                  <tr>
                    <th>Operating Pressure Range</th>
                    <td>{t.operatingPressure}</td>
                  </tr>
                )}
                {t.accuracy && (
                  <tr>
                    <th>Accuracy &amp; Repeatability</th>
                    <td>{t.accuracy}</td>
                  </tr>
                )}
                {t.sensor && (
                  <tr>
                    <th>Pressure Sensor Technology</th>
                    <td>{t.sensor}</td>
                  </tr>
                )}
                {t.nitrogenPurity && (
                  <tr>
                    <th>Nitrogen Purity Level</th>
                    <td>{t.nitrogenPurity}</td>
                  </tr>
                )}
                {t.nitrogenOutput && (
                  <tr>
                    <th>Nitrogen Delivery Output</th>
                    <td>{t.nitrogenOutput}</td>
                  </tr>
                )}
                {t.displacement && (
                  <tr>
                    <th>Free Air Delivery (FAD)</th>
                    <td>{t.displacement}</td>
                  </tr>
                )}
                {t.inletPressure && (
                  <tr>
                    <th>Inlet Supply Requirements</th>
                    <td>{t.inletPressure}</td>
                  </tr>
                )}
                {t.metrologyStandard && (
                  <tr>
                    <th>Metrology Compliance</th>
                    <td>{t.metrologyStandard}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="tds-modal__section">
            <h3 className="tds-modal__section-heading">
              <HiOutlineBolt size={18} /> Electrical &amp; Operational Environment
            </h3>
            <table className="tds-table">
              <tbody>
                {t.electrical && (
                  <tr>
                    <th>Supply Voltage / Power</th>
                    <td>{t.electrical}</td>
                  </tr>
                )}
                {t.motorRating && (
                  <tr>
                    <th>Motor Rating &amp; Construction</th>
                    <td>{t.motorRating}</td>
                  </tr>
                )}
                {t.protectionClass && (
                  <tr>
                    <th>Ingress Protection (IP)</th>
                    <td>{t.protectionClass}</td>
                  </tr>
                )}
                {t.operatingTemp && (
                  <tr>
                    <th>Operating Temperature Range</th>
                    <td>{t.operatingTemp}</td>
                  </tr>
                )}
                {t.noiseLevel && (
                  <tr>
                    <th>Acoustic Noise Rating</th>
                    <td>{t.noiseLevel}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="tds-modal__section">
            <h3 className="tds-modal__section-heading">
              <HiOutlineWrenchScrewdriver size={18} /> Mechanical, Plumbing &amp; Enclosure
            </h3>
            <table className="tds-table">
              <tbody>
                {t.enclosure && (
                  <tr>
                    <th>Cabinet Fabrication &amp; Coating</th>
                    <td>{t.enclosure}</td>
                  </tr>
                )}
                {t.inletFittings && (
                  <tr>
                    <th>Pneumatic Inlet Fitting</th>
                    <td>{t.inletFittings}</td>
                  </tr>
                )}
                {t.hoseSpecification && (
                  <tr>
                    <th>Discharge Hose &amp; Chuck</th>
                    <td>{t.hoseSpecification}</td>
                  </tr>
                )}
                {t.tankVolume && (
                  <tr>
                    <th>Air Receiver Tank Testing</th>
                    <td>{t.tankVolume}</td>
                  </tr>
                )}
                {t.safetyValves && (
                  <tr>
                    <th>Safety Relief Mechanism</th>
                    <td>{t.safetyValves}</td>
                  </tr>
                )}
                {t.warranty && (
                  <tr>
                    <th>OEM Warranty &amp; AMC Scope</th>
                    <td>{t.warranty}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        <footer className="tds-modal__footer">
          <div className="tds-modal__footer-note">
            <HiOutlineShieldCheck size={18} />
            <span>Specifications certified under ISO 9001:2015 quality standards.</span>
          </div>

          <div className="tds-modal__actions">
            <button 
              type="button" 
              onClick={() => window.print()} 
              className="btn-inotec btn-outline-navy btn-sm"
              title="Print technical specification document"
            >
              <HiOutlinePrinter size={16} /> Print Sheet
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-inotec btn-whatsapp btn-sm"
              aria-label="Ask engineer on WhatsApp"
            >
              <FaWhatsapp size={16} /> Ask on WhatsApp
            </a>

            <button 
              type="button" 
              onClick={() => {
                onClose()
                onQuote(product)
              }} 
              className="btn-inotec btn-primary btn-sm"
            >
              Request Quotation <HiOutlineArrowRight size={16} />
            </button>
          </div>
        </footer>
      </div>
    </div>
  )
}
