const publications = [
  {
    number: '01',
    title: 'ConsentSync',
    fullTitle: 'ConsentSync: A Smart Privacy Dashboard for Digital Consent and Data Control.',
    description: 'Making digital privacy easier to understand, manage, and control through a smart privacy dashboard.',
    tags: ['Privacy', 'NLP', 'Machine Learning'],
    image: '/images/consentsync-publication.png',
    illustration: 'privacy',
    illustrationLabel: 'Privacy dashboard with consent settings and a security shield',
    url: 'https://ieeexplore.ieee.org/document/11394374',
  },
  {
    number: '02',
    title: 'Predictive Analysis for Industrial Equipment',
    fullTitle: 'Predictive Analysis Development Using Machine Learning for Industrial Equipments',
    description: 'Using machine learning to predict equipment failures and support proactive industrial maintenance.',
    tags: ['Data Analytics', 'Predictive Maintenance', 'Machine Learning'],
    image: '/images/predictive-maintenance-publication.png',
    illustration: 'industrial',
    illustrationLabel: 'Industrial motor monitored by a predictive maintenance chart',
    url: 'https://ieeexplore.ieee.org/document/11020528',
  },
  {
    number: '03',
    title: 'Cancer Classification in Genomic Data',
    fullTitle: 'Enhancing Cancer Classification in Genomic Data: A Hybrid Approach Using Principal Component Analysis and Machine Learning Techniques',
    description: 'Combining PCA and machine learning to explore better ways of classifying cancer from genomic data.',
    tags: ['Genomics', 'PCA', 'Machine Learning'],
    image: '/images/genomic-classification-publication.png',
    illustration: 'genomics',
    illustrationLabel: 'DNA helix beside genomic analysis and classification charts',
    url: 'https://ieeexplore.ieee.org/document/10915244',
  },
]

function PublicationIllustration({ type, label }) {
  return (
    <div className={`publication-art publication-art--${type}`} role="img" aria-label={label}>
      <svg viewBox="0 0 360 170" aria-hidden="true">
        {type === 'privacy' ? (
          <g fill="none" strokeLinecap="round" strokeLinejoin="round">
            <rect x="42" y="22" width="190" height="126" rx="8" fill="var(--ivory)" stroke="var(--forest)" strokeWidth="2" />
            <path d="M42 45h190" stroke="var(--sage)" strokeWidth="2" />
            <circle cx="56" cy="34" r="3" fill="var(--clay)" stroke="none" />
            <circle cx="67" cy="34" r="3" fill="var(--sage)" stroke="none" />
            <circle cx="78" cy="34" r="3" fill="var(--sage)" stroke="none" />
            <path d="M136 58 163 69v22c0 20-12 32-27 39-15-7-27-19-27-39V69z" fill="var(--sage)" opacity="0.34" stroke="var(--forest)" strokeWidth="2" />
            <path d="m124 91 9 9 17-20" stroke="var(--clay)" strokeWidth="4" />
            <rect x="246" y="52" width="82" height="91" rx="5" fill="var(--white)" stroke="var(--sand)" strokeWidth="2" />
            <path d="M259 70h9m8 0h38M259 91h9m8 0h38M259 112h9m8 0h31" stroke="var(--sage)" strokeWidth="2" />
            <path d="m260 68 3 3 5-6m-8 23 3 3 5-6m-8 23 3 3 5-6" stroke="var(--forest)" strokeWidth="1.5" />
            <path d="M278 22v10m-5-5h10" stroke="var(--clay)" strokeWidth="2" />
          </g>
        ) : null}
        {type === 'industrial' ? (
          <g fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M31 140h298" stroke="var(--sage)" strokeWidth="3" />
            <rect x="42" y="77" width="130" height="55" rx="9" fill="var(--sage)" opacity="0.27" stroke="var(--forest)" strokeWidth="2" />
            <circle cx="72" cy="104" r="27" fill="var(--ivory)" stroke="var(--forest)" strokeWidth="5" />
            <circle cx="72" cy="104" r="10" fill="var(--sage)" stroke="var(--forest)" strokeWidth="2" />
            <path d="M98 84h48v39H98zM105 91v25m9-25v25m9-25v25m9-25v25" stroke="var(--forest)" strokeWidth="2" />
            <rect x="158" y="89" width="36" height="43" rx="4" fill="var(--sage)" opacity="0.35" stroke="var(--forest)" strokeWidth="2" />
            <rect x="166" y="97" width="20" height="13" rx="2" fill="var(--ivory)" stroke="var(--forest)" strokeWidth="1.5" />
            <circle cx="176" cy="120" r="3" fill="var(--clay)" stroke="none" />
            <rect x="207" y="31" width="119" height="83" rx="5" fill="var(--white)" stroke="var(--forest)" strokeWidth="2" />
            <path d="M220 99V48m0 51h93" stroke="var(--sand)" strokeWidth="1.5" />
            <path d="m229 88 20-17 17 7 20-24 17 8" stroke="var(--sage)" strokeWidth="3" />
            <circle cx="266" cy="78" r="3" fill="var(--clay)" stroke="none" />
            <circle cx="286" cy="54" r="3" fill="var(--clay)" stroke="none" />
            <path d="M266 24v-7m-5 2 5-6 5 6" stroke="var(--clay)" strokeWidth="2" />
          </g>
        ) : null}
        {type === 'genomics' ? (
          <g fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M42 22c88 22 0 48 88 70s0 46 88 70M218 22c-88 22 0 48-88 70s0 46-88 70" stroke="var(--forest)" strokeWidth="7" />
            <path d="M67 33h126M55 55h150M55 77h150M55 99h150M55 121h150M67 143h126" stroke="var(--clay)" strokeWidth="3" opacity="0.8" />
            <rect x="242" y="31" width="89" height="105" rx="5" fill="var(--white)" stroke="var(--sage)" strokeWidth="2" />
            <path d="M253 117V54m0 63h66" stroke="var(--sand)" strokeWidth="1.5" />
            <circle cx="267" cy="94" r="4" fill="var(--sage)" stroke="none" />
            <circle cx="277" cy="73" r="4" fill="var(--clay)" stroke="none" />
            <circle cx="286" cy="103" r="4" fill="var(--sage)" stroke="none" />
            <circle cx="297" cy="65" r="4" fill="var(--clay)" stroke="none" />
            <circle cx="307" cy="86" r="4" fill="var(--sage)" stroke="none" />
            <path d="m262 125 11-5 11 2 11-14 13 4" stroke="var(--forest)" strokeWidth="2" />
            <circle cx="188" cy="100" r="17" fill="var(--ivory)" stroke="var(--clay)" strokeWidth="3" />
            <path d="m201 113 13 13" stroke="var(--clay)" strokeWidth="5" />
          </g>
        ) : null}
      </svg>
    </div>
  )
}

function PublicationsSection() {
  return (
    <section className="home-section publications-section" id="publications">
      <div className="wrap">
        <header className="publications-heading">
          <p className="kicker section-label">Publications</p>
          <h2 className="display publications-title">Ideas Worth Publishing</h2>
          <p className="publications-subtitle">
            Exploring ideas at the intersection of technology, data, and real-world problems.
          </p>
        </header>

        <ol className="publication-grid">
          {publications.map((publication) => (
            <li className="publication-card" key={publication.number}>
              <span className="publication-number">{publication.number}</span>
              {publication.image ? (
                <img
                  className="publication-image"
                  src={publication.image}
                  alt={publication.illustrationLabel}
                />
              ) : (
                <PublicationIllustration
                  type={publication.illustration}
                  label={publication.illustrationLabel}
                />
              )}
              <h3 className="publication-title">{publication.title}</h3>
              {publication.fullTitle !== publication.title ? (
                <details className="publication-full-title">
                  <summary>Complete paper title</summary>
                  <p>{publication.fullTitle}</p>
                </details>
              ) : null}
              <p className="publication-description">{publication.description}</p>
              <ul className="publication-tags" aria-label="Research topics">
                {publication.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              <a
                className="publication-link"
                href={publication.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Read the Paper <span aria-hidden="true">↗</span>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default PublicationsSection