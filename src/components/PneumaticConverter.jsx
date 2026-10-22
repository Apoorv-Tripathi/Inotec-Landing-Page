import { useState } from 'react'
import { HiOutlineCalculator, HiOutlineArrowPath } from 'react-icons/hi2'

export default function PneumaticConverter() {
  const [psi, setPsi] = useState('32')

  const numPsi = parseFloat(psi) || 0
  const bar = (numPsi * 0.0689476).toFixed(2)
  const kpa = (numPsi * 6.89476).toFixed(1)
  const kgcm2 = (numPsi * 0.070307).toFixed(2)

  const handlePsiChange = (val) => {
    // Only allow positive numbers and single decimal
    const clean = val.replace(/[^0-9.]/g, '')
    setPsi(clean)
  }

  const handleBarChange = (val) => {
    const clean = val.replace(/[^0-9.]/g, '')
    const n = parseFloat(clean)
    if (!isNaN(n)) {
      setPsi((n * 14.5038).toFixed(1))
    } else {
      setPsi('')
    }
  }

  const handleKpaChange = (val) => {
    const clean = val.replace(/[^0-9.]/g, '')
    const n = parseFloat(clean)
    if (!isNaN(n)) {
      setPsi((n * 0.145038).toFixed(1))
    } else {
      setPsi('')
    }
  }

  const handleKgChange = (val) => {
    const clean = val.replace(/[^0-9.]/g, '')
    const n = parseFloat(clean)
    if (!isNaN(n)) {
      setPsi((n * 14.2233).toFixed(1))
    } else {
      setPsi('')
    }
  }

  const presets = [
    { label: '32 PSI (Standard Car)', val: '32' },
    { label: '36 PSI (Loaded SUV / MPV)', val: '36' },
    { label: '100 PSI (Commercial Bus)', val: '100' },
    { label: '120 PSI (Heavy Truck / Trailer)', val: '120' },
  ]

  return (
    <div className="pneumatic-converter corner-marks">
      <div className="pneumatic-converter__header">
        <div className="pneumatic-converter__title-wrap">
          <span className="pneumatic-converter__badge">
            <HiOutlineCalculator size={15} /> Workshop Utility
          </span>
          <h4 className="pneumatic-converter__title">Pneumatic Pressure Unit Converter</h4>
          <p className="pneumatic-converter__sub">
            Instant bidirectional conversion across Indian, European, and American pneumatic standards.
          </p>
        </div>
        <button 
          type="button" 
          onClick={() => setPsi('32')} 
          className="pneumatic-converter__reset-btn"
          title="Reset to 32 PSI"
        >
          <HiOutlineArrowPath size={14} /> Reset
        </button>
      </div>

      <div className="pneumatic-converter__grid">
        <div className="converter-card is-active">
          <label htmlFor="unit-psi">PSI (Pounds / Sq. Inch)</label>
          <div className="converter-card__input-wrap">
            <input 
              id="unit-psi" 
              type="text" 
              inputMode="decimal"
              value={psi} 
              onChange={(e) => handlePsiChange(e.target.value)} 
              placeholder="32"
            />
            <span className="converter-card__unit">PSI</span>
          </div>
          <span className="converter-card__hint">Standard Indian Fuel Station Unit</span>
        </div>

        <div className="converter-card">
          <label htmlFor="unit-bar">BAR (Metric Atmospheric)</label>
          <div className="converter-card__input-wrap">
            <input 
              id="unit-bar" 
              type="text" 
              inputMode="decimal"
              value={bar} 
              onChange={(e) => handleBarChange(e.target.value)} 
              placeholder="2.21"
            />
            <span className="converter-card__unit">BAR</span>
          </div>
          <span className="converter-card__hint">European OEM Tyre Standard</span>
        </div>

        <div className="converter-card">
          <label htmlFor="unit-kpa">kPa (Kilopascal)</label>
          <div className="converter-card__input-wrap">
            <input 
              id="unit-kpa" 
              type="text" 
              inputMode="decimal"
              value={kpa} 
              onChange={(e) => handleKpaChange(e.target.value)} 
              placeholder="220.6"
            />
            <span className="converter-card__unit">kPa</span>
          </div>
          <span className="converter-card__hint">SI Metric Measurement Unit</span>
        </div>

        <div className="converter-card">
          <label htmlFor="unit-kgcm2">kg/cm² (Kilogram / cm²)</label>
          <div className="converter-card__input-wrap">
            <input 
              id="unit-kgcm2" 
              type="text" 
              inputMode="decimal"
              value={kgcm2} 
              onChange={(e) => handleKgChange(e.target.value)} 
              placeholder="2.25"
            />
            <span className="converter-card__unit">kg/cm²</span>
          </div>
          <span className="converter-card__hint">Traditional Industrial Workshop Gauge</span>
        </div>
      </div>

      <div className="pneumatic-converter__presets">
        <span className="pneumatic-converter__preset-label">Quick Fleet Standards:</span>
        <div className="pneumatic-converter__preset-chips">
          {presets.map((p) => (
            <button
              type="button"
              key={p.val}
              className={`preset-chip ${psi === p.val ? 'is-selected' : ''}`}
              onClick={() => setPsi(p.val)}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
