import { galleryImages } from '../data/siteData'
import useReveal from '../hooks/useReveal'
import SafeImage from './SafeImage'

function GalleryItem({ img, index }) {
  const ref = useReveal()
  return (
    <div className={`gallery__item gallery__item--${(index % 3) + 1} reveal`} ref={ref}>
      <SafeImage src={img.src} alt={img.alt} />
    </div>
  )
}

export default function Gallery() {
  return (
    <section className="section">
      <div className="container-inotec">
        <div className="section-head centered">
          <p className="eyebrow">Client Gallery</p>
          <h2 className="section-title">Machines, installations &amp; people</h2>
        </div>

        <div className="gallery">
          {galleryImages.map((img, i) => (
            <GalleryItem img={img} index={i} key={img.src} />
          ))}
        </div>
      </div>
    </section>
  )
}
