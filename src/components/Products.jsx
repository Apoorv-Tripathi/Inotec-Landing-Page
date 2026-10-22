import { useState } from 'react'
import { HiOutlineArrowRight, HiOutlineCheckBadge, HiOutlineDocumentText } from 'react-icons/hi2'
import { FaWhatsapp } from 'react-icons/fa'
import { products, productCategories, company } from '../data/siteData'
import useReveal from '../hooks/useReveal'
import SafeImage from './SafeImage'
import TechnicalDataSheetModal from './TechnicalDataSheetModal'
import PneumaticConverter from './PneumaticConverter'

function ProductCard({ product, index, onQuoteClick, onOpenTds }) {
  const ref = useReveal()

  const whatsappMessage = encodeURIComponent(
    `Hello INOTEC, I would like to enquire about the ${product.name} (${product.model}). Please share technical brochure, price, and warranty details.`
  )
  const whatsappUrl = `https://wa.me/${company.phones.whatsapp.replace(/[^0-9]/g, '')}?text=${whatsappMessage}`

  return (
    <article className="product-card reveal" ref={ref} style={{ transitionDelay: `${index * 80}ms` }}>
      <div className="product-card__media">
        <SafeImage src={product.image} alt={`${product.name} ${product.model}`} />
        {product.badge && (
          <span className="product-card__badge">
            <HiOutlineCheckBadge size={14} /> {product.badge}
          </span>
        )}
        <div className="product-card__model-tag">{product.model}</div>
      </div>
      
      <div className="product-card__body">
        <div className="product-card__header">
          <span className="product-card__category">{product.categoryLabel || 'Industrial Air Equipment'}</span>
          <h3>{product.name}</h3>
        </div>

        <p className="product-card__desc">{product.description}</p>

        <div className="product-card__specs-header">Key Specifications</div>
        <dl className="product-card__specs">
          {product.specs.slice(0, 5).map((spec) => (
            <div key={spec.label}>
              <dt>{spec.label}</dt>
              <dd>{spec.value}</dd>
            </div>
          ))}
        </dl>

        <button 
          type="button" 
          className="product-card__tds-btn"
          onClick={() => onOpenTds(product)}
          aria-label={`View full technical data sheet for ${product.name}`}
        >
          <HiOutlineDocumentText size={16} /> View Full Technical Data Sheet (TDS)
        </button>

        <div className="product-card__actions">
          <button 
            type="button" 
            onClick={() => onQuoteClick(product)} 
            className="btn-inotec btn-primary btn-sm"
            aria-label={`Request quotation for ${product.name} ${product.model}`}
          >
            Get Quote <HiOutlineArrowRight />
          </button>
          
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-inotec btn-whatsapp btn-sm"
            aria-label={`Inquire about ${product.name} on WhatsApp`}
            title="Instant WhatsApp Inquiry"
          >
            <FaWhatsapp size={16} /> WhatsApp
          </a>
        </div>
      </div>
    </article>
  )
}

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedTdsProduct, setSelectedTdsProduct] = useState(null)

  const handleQuoteClick = (product) => {
    const target = document.getElementById('contact')
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
      window.dispatchEvent(
        new CustomEvent('prefill-quote', {
          detail: {
            product: `${product.model} — ${product.name}`,
          },
        })
      )
    }
  }

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter((p) => p.category === activeCategory)

  return (
    <section id="products" className="section">
      <div className="container-inotec">
        <div className="section-head centered">
          <p className="eyebrow">Our Flagship Products</p>
          <h2 className="section-title">Precision-Engineered Air Systems</h2>
          <p className="section-sub">
            Built for heavy-duty petrol retail outlets, automotive workshops, and continuous industrial operations.
          </p>

          <div className="product-category-tabs" role="tablist" aria-label="Product categories">
            {productCategories.map((cat) => {
              const count = cat.id === 'all' 
                ? products.length 
                : products.filter((p) => p.category === cat.id).length
              return (
                <button
                  type="button"
                  role="tab"
                  key={cat.id}
                  aria-selected={activeCategory === cat.id}
                  className={`product-category-btn ${activeCategory === cat.id ? 'is-active' : ''}`}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  <span>{cat.label}</span>
                  <span className="product-category-count">{count}</span>
                </button>
              )
            })}
          </div>
        </div>

        <div className="product-grid">
          {filteredProducts.map((product, i) => (
            <ProductCard 
              product={product} 
              index={i} 
              key={product.id} 
              onQuoteClick={handleQuoteClick}
              onOpenTds={setSelectedTdsProduct}
            />
          ))}
        </div>

        <PneumaticConverter />
        
        <div className="products-banner corner-marks">
          <div className="products-banner__content">
            <h4>Need Custom Engineering or Bulk Equipment Supply?</h4>
            <p>
              We provide turnkey installation, site assessment, custom pipe plumbing, and Annual Maintenance Contracts (AMC) for multi-location fuel stations and workshops.
            </p>
          </div>
          <a href="#contact" className="btn-inotec btn-outline-light">
            Consult Our Technical Team
          </a>
        </div>
      </div>

      {selectedTdsProduct && (
        <TechnicalDataSheetModal 
          product={selectedTdsProduct} 
          onClose={() => setSelectedTdsProduct(null)} 
          onQuote={handleQuoteClick}
        />
      )}
    </section>
  )
}
