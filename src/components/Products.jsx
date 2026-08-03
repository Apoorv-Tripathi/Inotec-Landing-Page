import { HiOutlineDocumentArrowDown, HiOutlineArrowRight } from 'react-icons/hi2'
import { products } from '../data/siteData'
import useReveal from '../hooks/useReveal'
import SafeImage from './SafeImage'

function ProductCard({ product, index }) {
  const ref = useReveal()
  return (
    <article className="product-card reveal" ref={ref} style={{ transitionDelay: `${index * 80}ms` }}>
      <div className="product-card__media">
        <SafeImage src={product.image} alt={`${product.name} ${product.model}`} />
      </div>
      <div className="product-card__body">
        <h3>{product.name}</h3>
        <p className="product-card__desc">{product.description}</p>

        <dl className="product-card__specs">
          {product.specs.map((spec) => (
            <div key={spec.label}>
              <dt>{spec.label}</dt>
              <dd>{spec.value}</dd>
            </div>
          ))}
        </dl>

        <div className="product-card__actions">
          <a href="#contact" className="btn-inotec btn-primary btn-sm">
            <HiOutlineDocumentArrowDown /> Brochure
          </a>
          <a href="#contact" className="btn-inotec btn-outline-navy btn-sm">
            Get Quote <HiOutlineArrowRight />
          </a>
        </div>
      </div>
    </article>
  )
}

export default function Products() {
  return (
    <section id="products" className="section">
      <div className="container-inotec">
        <div className="section-head centered">
          <p className="eyebrow">Our Products</p>
          <h2 className="section-title">Industrial-grade equipment</h2>
          <p className="section-sub">Engineered for reliability and performance.</p>
        </div>

        <div className="product-grid">
          {products.map((product, i) => (
            <ProductCard product={product} index={i} key={product.id} />
          ))}
        </div>
      </div>
    </section>
  )
}
