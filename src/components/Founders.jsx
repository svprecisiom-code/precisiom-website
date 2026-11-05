import { MapPin } from 'lucide-react'
import { BRAND } from '../data'
import Reveal from './Reveal'

export default function Founders() {
  return (
    <section className="section company" id="company">
      <div className="container company__grid">
        <Reveal className="company__intro">
          <p className="eyebrow">Company</p>
          <h2>Built in Goa, for India.</h2>
          <p className="section__lede">
            PrecisioM MedTech Pvt Ltd is a Goa-based MedTech startup building connected devices for precision care.
            RaktaBeat is our first product — with a pipeline that extends into injection safety, liver diagnostics,
            and breast screening research.
          </p>
          <p className="company__body">
            Our work starts with a simple belief: a measurement is only useful if it is accurate, understood, and
            acted on. That belief shapes the device, the guidance, and the way readings move from a home to a care
            team.
          </p>

          <div className="company__location">
            <MapPin size={17} aria-hidden="true" />
            <span>Sanquelim, North Goa · Goa, India</span>
          </div>

          <div className="company__mission">
            <img src="/brand/precisiom-mark-light.png" alt="" width="320" height="125" loading="lazy" />
            <div>
              <strong>{BRAND.stamp}</strong>
              <span>{BRAND.tagline}</span>
            </div>
          </div>
        </Reveal>

        <div className="founders">
          <Reveal className="founders__head">
            <p className="eyebrow">Founding team</p>
            <h3>Two disciplines. One purpose.</h3>
            <p className="founders__lede">
              Founder-led. Device engineering and clinical practice sit in the same team, on the same product.
            </p>
          </Reveal>

          <Reveal className="founder-card founder-card--discipline">
            <span className="founder-card__role">Device engineering</span>
            <h3>Hardware that survives Indian homes.</h3>
            <p>
              Sensor selection, firmware and Bluetooth connectivity for a wrist device a family can use every day —
              without a clinic around the corner.
            </p>
            <ul className="founder-card__tags">
              <li>Sensor design</li>
              <li>Firmware</li>
              <li>BLE connectivity</li>
            </ul>
          </Reveal>

          <Reveal className="founder-card founder-card--discipline" delay={90}>
            <span className="founder-card__role">Clinical practice</span>
            <h3>Alerts that match how care actually runs.</h3>
            <p>
              Frontline experience in primary care and community programmes, shaping the thresholds, the escalation
              and the hand-off to PHC and CHC teams.
            </p>
            <ul className="founder-card__tags">
              <li>Primary care</li>
              <li>Escalation</li>
              <li>PHC &amp; CHC workflows</li>
            </ul>
          </Reveal>

          <Reveal className="founders__note" delay={180}>
            <p className="eyebrow">Registered office</p>
            <p>{BRAND.address}</p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
