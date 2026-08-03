import { useState } from 'react'
import { HiOutlinePhoto } from 'react-icons/hi2'

/**
 * Drop-in replacement for <img>. If the source fails to load (e.g. a
 * placeholder path before real photos are added), it shows a quiet
 * branded placeholder instead of the browser's broken-image icon.
 */
export default function SafeImage({ src, alt, className = '', loading = 'lazy' }) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div className={`safe-image-fallback ${className}`} role="img" aria-label={alt}>
        <HiOutlinePhoto size={28} />
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={loading}
      onError={() => setFailed(true)}
    />
  )
}
