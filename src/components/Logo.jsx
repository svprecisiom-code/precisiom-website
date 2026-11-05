import { BRAND } from '../data'

export default function Logo({ light = false, className = '' }) {
  return (
    <a className={`logo ${className}`.trim()} href="#top">
      <img
        className="logo__img"
        src={light ? '/brand/precisiom-logo-light.png' : '/brand/precisiom-logo.png'}
        alt={`${BRAND.legal} — home`}
        width="440"
        height="239"
      />
    </a>
  )
}
