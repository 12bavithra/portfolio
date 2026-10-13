import { useEffect, useState } from 'react'
import { certifications } from '../../data/certifications.js'

function CertificationsSection() {
  const [activeCertificate, setActiveCertificate] = useState(null)

  useEffect(() => {
    if (!activeCertificate) {
      return undefined
    }

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setActiveCertificate(null)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activeCertificate])

  return (
    <section className="home-section" id="certifications">
      <div className="wrap">
        <div className="cert-heading">
          <div>
            <h2 className="kicker section-label">Certifications</h2>
            <p className="cert-handwritten">Small steps, new perspectives</p>
          </div>
          <p className="cert-heading-note">A few things learned along the way.</p>
        </div>
        <ul className="cert-gallery">
          {certifications.map((item) => (
            <li className="cert-item" key={item.title}>
              <button
                type="button"
                className="cert-preview cert-preview-button"
                onClick={() => setActiveCertificate(item)}
                aria-label={`Open certificate: ${item.title}`}
              >
                <img
                  className="cert-preview-document"
                  src={item.preview}
                  alt={`${item.title} certificate`}
                />
              </button>
              <div className="cert-caption">
                <p className="cert-title">{item.title}</p>
                <p className="cert-meta">
                  {[item.issuer, item.date].filter(Boolean).join(' · ')}
                </p>
                <button
                  type="button"
                  className="cert-open"
                  onClick={() => setActiveCertificate(item)}
                >
                  View certificate <span aria-hidden="true">↗</span>
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {activeCertificate ? (
        <div className="cert-modal-backdrop" onClick={() => setActiveCertificate(null)}>
          <div
            className="cert-modal"
            role="dialog"
            aria-modal="true"
            aria-label={activeCertificate.title}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="cert-modal-close"
              aria-label="Close certificate"
              onClick={() => setActiveCertificate(null)}
            >
              ×
            </button>
            <div className="cert-modal-header">
              <p className="cert-modal-label">Certificate</p>
              <h3>{activeCertificate.title}</h3>
            </div>
            <div className="cert-modal-frame">
              <embed
                className="cert-modal-document"
                src={activeCertificate.file}
                type="application/pdf"
                title={activeCertificate.title}
              />
            </div>
          </div>
        </div>
      ) : null}
    </section>
  )
}

export default CertificationsSection
