import { site } from '../../data/site.js'

function ContactSection() {
  const socialLinks = [
    { label: 'LinkedIn', href: site.contact.linkedin, icon: 'linkedin' },
    { label: 'GitHub', href: site.contact.github, icon: 'github' },
    { label: 'Email', href: `mailto:${site.contact.email}`, icon: 'email' },
  ]

  return (
    <section className="home-section" id="contact">
      <div className="wrap">
        <div className="contact-editorial">
          <div className="contact-copy">
            <p className="section-label contact-kicker">CONTACT</p>
            <h2 className="contact-title">Let’s connect</h2>
            <p className="contact-quote">“Let’s turn ideas into something meaningful.”</p>

            <div className="contact-actions">
              <div className="contact-links" aria-label="Social links">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    className="contact-social"
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                    aria-label={link.label}
                  >
                    <span className="contact-social-icon" aria-hidden="true">
                      {link.icon === 'linkedin' && (
                        <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
                          <path d="M6.94 8.5A1.56 1.56 0 1 1 6.9 5.36a1.56 1.56 0 0 1 .04 3.14ZM5.5 9.71h2.8v8.78H5.5V9.71Zm4.66 0h2.68v1.2h.04c.37-.7 1.28-1.44 2.62-1.44 2.8 0 3.31 1.84 3.31 4.23v5.79h-2.8v-5.41c0-1.29-.03-2.94-1.79-2.94-1.8 0-2.08 1.4-2.08 2.84v5.51H10.16V9.71Z" />
                        </svg>
                      )}
                      {link.icon === 'github' && (
                        <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
                          <path d="M12 2.2a10 10 0 0 0-3.16 19.48c.5.09.68-.22.68-.49v-1.72c-2.76.6-3.34-1.33-3.34-1.33-.45-1.14-1.1-1.45-1.1-1.45-.9-.62.07-.6.07-.6 1 .07 1.54 1.04 1.54 1.04.88 1.5 2.31 1.07 2.88.82.09-.64.35-1.07.62-1.31-2.2-.25-4.52-1.1-4.52-4.9 0-1.08.38-1.96 1.02-2.65-.1-.26-.44-1.3.1-2.7 0 0 .83-.27 2.72 1.02A9.31 9.31 0 0 1 12 6.83c.84 0 1.69.12 2.49.35 1.88-1.29 2.7-1.02 2.7-1.02.55 1.4.2 2.44.1 2.7.64.69 1.02 1.57 1.02 2.65 0 3.81-2.33 4.65-4.54 4.89.36.31.68.92.68 1.86v2.76c0 .27.18.59.69.49A10 10 0 0 0 12 2.2Z" />
                        </svg>
                      )}
                      {link.icon === 'email' && (
                        <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
                          <path d="M3.5 6.75A2.25 2.25 0 0 1 5.75 4.5h12.5a2.25 2.25 0 0 1 2.25 2.25v10.5A2.25 2.25 0 0 1 18.25 19.5H5.75A2.25 2.25 0 0 1 3.5 17.25V6.75Zm2.1-.75 7.4 5.7 7.4-5.7H5.6Zm13.15 2.06-6.58 5.06a1.25 1.25 0 0 1-1.34 0L5.25 8.06v9.19c0 .38.31.69.69.69h12.12c.38 0 .69-.31.69-.69V8.06Z" />
                        </svg>
                      )}
                    </span>
                    <span>{link.label}</span>
                  </a>
                ))}
              </div>

              <a className="contact-cta" href={`mailto:${site.contact.email}`}>
                Send a message <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          <div className="contact-art" aria-hidden="true">
            <img className="contact-art-image" src="/images/contact.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
