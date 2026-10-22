import { useState } from 'react'
import { 
  HiOutlineShieldCheck, 
  HiOutlineClipboardDocumentCheck, 
  HiOutlineCheck,
  HiOutlineDocumentCheck,
  HiOutlineBuildingOffice2
} from 'react-icons/hi2'
import { certifications, procurementDetails } from '../data/siteData'
import useReveal from '../hooks/useReveal'

function Cert({ cert, index }) {
  const ref = useReveal()
  return (
    <div className="cert-card reveal" ref={ref} style={{ transitionDelay: `${index * 50}ms` }}>
      {cert.logo ? (
        <img src={cert.logo} alt={`${cert.name} badge`} className="cert-card__logo" />
      ) : (
        <HiOutlineShieldCheck size={26} />
      )}
      <h4>{cert.name}</h4>
      <p>{cert.description}</p>
    </div>
  )
}

export default function Certifications() {
  const [copied, setCopied] = useState(false)

  const handleCopyProcurement = () => {
    const text = `INOTEC VENDOR & TENDER COMPLIANCE DATA:
Legal Entity: ${procurementDetails.legalName}
Brand Name: ${procurementDetails.brandName}
MSME Registration: ${procurementDetails.udyamRegistration} (${procurementDetails.msmeType})
Quality Standard: ${procurementDetails.qualityStandard}
Metrology Lab: ${procurementDetails.calibrationAccreditation}
Government e-Marketplace: ${procurementDetails.gemStatus}
Registered Works & Facility: ${procurementDetails.factoryAddress}
Technical Contact: ${procurementDetails.phoneHotline} | ${procurementDetails.email}`

    navigator.clipboard.writeText(text).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 3500)
    })
  }

  return (
    <section id="certifications" className="section">
      <div className="container-inotec">
        <div className="section-head centered">
          <p className="eyebrow">Certifications &amp; Credentials</p>
          <h2 className="section-title">Accredited and Independently Verified</h2>
          <p className="section-sub">
            Meeting stringent national quality, metrology, and government procurement benchmarks.
          </p>
        </div>

        <div className="cert-grid">
          {certifications.map((cert, i) => (
            <Cert cert={cert} index={i} key={cert.name} />
          ))}
        </div>

        {/* Procurement & Tender Verification Box */}
        <div className="compliance-box corner-marks">
          <div className="compliance-box__header">
            <div className="compliance-box__title-group">
              <span className="compliance-box__kicker">
                <HiOutlineDocumentCheck size={16} /> Tender &amp; Vendor Procurement Desk
              </span>
              <h3>Government &amp; PSU Tender Compliance Summary</h3>
              <p>
                Essential statutory and metrology credentials required for issuing Purchase Orders (PO), GeM bids, and PSU tender participation.
              </p>
            </div>

            <button
              type="button"
              className={`compliance-copy-btn ${copied ? 'is-copied' : ''}`}
              onClick={handleCopyProcurement}
              aria-label="Copy legal vendor details to clipboard for procurement documentation"
            >
              {copied ? (
                <>
                  <HiOutlineCheck size={18} /> Copied to Clipboard!
                </>
              ) : (
                <>
                  <HiOutlineClipboardDocumentCheck size={18} /> Copy Vendor Details for Tender
                </>
              )}
            </button>
          </div>

          <div className="compliance-box__grid">
            <div className="compliance-item">
              <span className="compliance-item__label">Registered Corporate Entity</span>
              <strong className="compliance-item__value">{procurementDetails.legalName}</strong>
              <span className="compliance-item__sub">Brand: {procurementDetails.brandName} &middot; Est. {procurementDetails.founded}</span>
            </div>

            <div className="compliance-item">
              <span className="compliance-item__label">Ministry of MSME / Udyam</span>
              <strong className="compliance-item__value">{procurementDetails.udyamRegistration}</strong>
              <span className="compliance-item__sub">{procurementDetails.msmeType}</span>
            </div>

            <div className="compliance-item">
              <span className="compliance-item__label">Quality Management Standard</span>
              <strong className="compliance-item__value">{procurementDetails.qualityStandard}</strong>
              <span className="compliance-item__sub">Scope: Design, Assembly &amp; Service of Air Systems</span>
            </div>

            <div className="compliance-item">
              <span className="compliance-item__label">Metrology &amp; Calibration Lab</span>
              <strong className="compliance-item__value">ISO/IEC 17025 Accredited</strong>
              <span className="compliance-item__sub">NABL Accredited Traceability</span>
            </div>

            <div className="compliance-item">
              <span className="compliance-item__label">Government e-Marketplace (GeM)</span>
              <strong className="compliance-item__value">Approved OEM &amp; Vendor</strong>
              <span className="compliance-item__sub">Direct PSU &amp; Railways Procurement</span>
            </div>

            <div className="compliance-item">
              <span className="compliance-item__label">Registered Works &amp; Laboratory</span>
              <strong className="compliance-item__value">Kanpur, Uttar Pradesh</strong>
              <span className="compliance-item__sub">PIN 208022 &middot; Factory &amp; Calibration Centre</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
