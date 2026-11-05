import { ArrowUp, Mail, MapPin, Phone } from 'lucide-react'
import { BRAND, FOOTER_COLUMNS } from '../data'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <Logo light />
            <p>Connected measurement and diagnostic tools, built in India for precision care.</p>
            <div className="footer__contact">
              <a href={`mailto:${BRAND.email}`}>
                <Mail size={16} aria-hidden="true" />
                {BRAND.email}
              </a>
              <a href={`tel:${BRAND.phoneHref}`}>
                <Phone size={16} aria-hidden="true" />
                {BRAND.phone}
              </a>
              <span>
                <MapPin size={16} aria-hidden="true" />
                Sanquelim, North Goa — 403505, India
              </span>
            </div>
          </div>

          <nav className="footer__cols" aria-label="Footer">
            {FOOTER_COLUMNS.map((column) => (
              <div key={column.title}>
                <h3>{column.title}</h3>
                <ul>
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href}>
                        {link.href.startsWith('mailto:') ? (
                          <>
                            {link.label.split('@')[0]}@<wbr />
                            {link.label.split('@')[1]}
                          </>
                        ) : (
                          link.label
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} {BRAND.legal}. All rights reserved.</p>
          <p className="footer__disclaimer">
            RaktaBeat is in development and not yet available for sale. Design targets, timelines, and financial
            paths on this site are planning statements, not guarantees. RaktaBeat supports — but does not replace —
            consultation with a qualified clinician.
          </p>
          <a className="footer__top-link" href="#top">
            Back to top
            <ArrowUp size={15} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  )
}
