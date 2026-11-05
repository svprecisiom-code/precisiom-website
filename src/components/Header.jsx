import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { NAV_LINKS } from '../data'
import Logo from './Logo'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.body.classList.add('menu-open')
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.classList.remove('menu-open')
    }
  }, [open])

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="header__bar">
        <Logo className="header__logo" />

        <nav className="header__nav" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header__actions">
          <a className="header__status" href="#roadmap">
            <span className="header__status-dot" aria-hidden="true" />
            In development
          </a>
          <a className="header__cta" href="#contact">
            Partner with us
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
          <button
            className="header__toggle"
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="mobile-menu" id="mobile-menu">
          <nav aria-label="Mobile">
            <div className="mobile-menu__grid">
              {NAV_LINKS.map((link) => (
                <a
                  className="mobile-menu__tile"
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                >
                  <span>{link.label}</span>
                  <span className="mobile-menu__sub">{link.sub}</span>
                </a>
              ))}
            </div>
            <a className="button button--primary button--block" href="#contact" onClick={() => setOpen(false)}>
              Partner with us
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
