import { BRAND } from '../data'

export default function Logo({ light = false, className = '' }) {
  return (
    <a className={`logo ${className}`.trim()} href="#top">
      <img
        className="logo__img"
        src={light ? '/brand/precisiom-logo-light.webp' : '/brand/precisiom-logo.webp'}
        alt={`${BRAND.legal} — home`}
        width="320"
        height="174"
      />
    </a>
  )
}
