import { useState, useEffect } from 'react'
import { HiOutlineMagnifyingGlassPlus, HiXMark } from 'react-icons/hi2'
import { galleryImages } from '../data/siteData'
import useReveal from '../hooks/useReveal'
import SafeImage from './SafeImage'

function GalleryItem({ img, index, onSelect }) {
  const ref = useReveal()
  return (
    <div 
      className={`gallery__item gallery__item--${(index % 3) + 1} reveal`} 
      ref={ref}
      onClick={() => onSelect(img)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onSelect(img) }}
      aria-label={`Enlarge: ${img.alt}`}
    >
      <div className="gallery__image-wrap">
        <SafeImage src={img.src} alt={img.alt} />
        <div className="gallery__overlay">
          <HiOutlineMagnifyingGlassPlus size={24} />
          <span>{img.alt}</span>
        </div>
      </div>
    </div>
  )
}

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState(null)

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedImg(null)
    }
    if (selectedImg) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedImg])

  return (
    <section className="section">
      <div className="container-inotec">
        <div className="section-head centered">
          <p className="eyebrow">On-Site Installations &amp; Facilities</p>
          <h2 className="section-title">Machines, Installations &amp; Field Work</h2>
          <p className="section-sub">
            Real photography from IOCL retail outlets, client workshops, manufacturing lines, and calibration labs.
          </p>
        </div>

        <div className="gallery">
          {galleryImages.map((img, i) => (
            <GalleryItem img={img} index={i} key={img.src} onSelect={setSelectedImg} />
          ))}
        </div>
      </div>

      {selectedImg && (
        <div 
          className="gallery-lightbox" 
          onClick={() => setSelectedImg(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged installation view"
        >
          <div className="gallery-lightbox__inner" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImg.src} alt={selectedImg.alt} className="gallery-lightbox__img" />
            <div className="gallery-lightbox__caption">
              <span>{selectedImg.alt}</span>
              <button 
                type="button" 
                className="gallery-lightbox__close" 
                onClick={() => setSelectedImg(null)}
                aria-label="Close image preview"
              >
                <HiXMark size={22} />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}