import {
  ArrowRight,
  AudioLines,
  BatteryCharging,
  Bluetooth,
  Check,
  CircleDot,
  Crosshair,
  History,
  Info,
  ShieldAlert,
  Stethoscope,
  Watch,
} from 'lucide-react'
import { CAPABILITIES } from '../data'
import Reveal from './Reveal'

const ICONS = { Crosshair, AudioLines, Bluetooth, CircleDot, ShieldAlert, BatteryCharging }

const CONNECT_STEPS = [
  {
    icon: 'Watch',
    title: 'Measure',
    text: 'A guided reading is taken on the device — the result is shown and spoken.',
  },
  {
    icon: 'Bluetooth',
    title: 'Sync',
    text: 'The reading reaches the phone app over a BLE link (design target).',
  },
  {
    icon: 'History',
    title: 'Record',
    text: 'It is stored with time and date in a longitudinal history on the platform.',
  },
  {
    icon: 'Stethoscope',
    title: 'Review',
    text: 'A PHC or CHC dashboard separates routine readings from the ones to act on.',
  },
]

const CONNECT_ICONS = { Watch, Bluetooth, History, Stethoscope }

export default function Product() {
  return (
    <section className="section product" id="product">
      <div className="container">
        <Reveal className="section__head section__head--center">
          <p className="eyebrow">RaktaBeat™</p>
          <h2>A blood pressure monitor designed around the person using it.</h2>
          <p className="section__lede">
            Affordable, connected, and built for guided self-measurement — RaktaBeat brings clinical-grade
            design intent to homes, clinics, and community health programmes.
          </p>
        </Reveal>

        <Reveal className="product__banner">
          <div className="product__frame">
            <img
              src="/media/raktabeat-wrist.webp"
              alt="RaktaBeat wearable blood pressure concept render on a wrist, with a phone showing the reading"
              width="1280"
              height="672"
              loading="lazy"
            />
            <span className="product__frame-label">Wearable concept</span>
            <div className="product__frame-note">
              <strong>One device.</strong>
              <span>Every reading.</span>
            </div>
          </div>
          <ul className="product__chips" aria-label="RaktaBeat design targets">
            <li>ISO 81060-2 target</li>
            <li>BLE 5.0</li>
            <li>AA / USB-C</li>
          </ul>
        </Reveal>

        <div className="product__grid">
          <Reveal className="product__copy" delay={60}>
            <p className="eyebrow">Why RaktaBeat</p>
            <h3>Measurement made simpler. Records made useful.</h3>
            <p>
              A reading only matters if it is taken correctly and can be acted on. RaktaBeat combines guided measurement, clear feedback, and connected records in one affordable device.</p>
            <ul className="check-list">
              <li>
                <Check size={17} aria-hidden="true" />
                Spoken and visual guidance before and after every reading
              </li>
              <li>
                <Check size={17} aria-hidden="true" />
                One-button operation with automatic inflation
              </li>
              <li>
                <Check size={17} aria-hidden="true" />
                Readings stored with time and date, ready to share
              </li>
              <li>
                <Check size={17} aria-hidden="true" />
                Designed for affordability and reach across India
              </li>
            </ul>
            <a className="text-link" href="#platform">
              How RaktaBeat works
              <ArrowRight size={16} aria-hidden="true" />
            </a>
          </Reveal>

          <Reveal className="product__connect" delay={120}>
            <p className="eyebrow eyebrow--light">How it connects</p>
            <h3>From the wrist to the clinician&rsquo;s screen.</h3>
            <p className="product__connect-lede">
              RaktaBeat is designed to hand every reading to the PrecisioM RPM platform — the same system that
              receives data from the monitors already in use — so a reading reaches the people who can act on it
              instead of stopping at the device.
            </p>
            <ol className="connect">
              {CONNECT_STEPS.map((step) => {
                const Icon = CONNECT_ICONS[step.icon]
                return (
                  <li className="connect__step" key={step.title}>
                    <span className="connect__icon" aria-hidden="true">
                      <Icon size={17} />
                    </span>
                    <div>
                      <strong>{step.title}</strong>
                      <span>{step.text}</span>
                    </div>
                  </li>
                )
              })}
            </ol>
            <p className="product__connect-note">
              <Info size={15} aria-hidden="true" />
              The RPM platform is in development. This is the intended connection path, not a live clinical service.
            </p>
            <a className="product__connect-cta" href="#platform">
              See the RPM platform
              <ArrowRight size={15} aria-hidden="true" />
            </a>
          </Reveal>
        </div>

        <Reveal className="capabilities__head">
          <h3>Built for everyday use, not ideal conditions.</h3>
          <p>
            Every design decision starts with the realities of a home, a rural clinic, or a community health
            worker&rsquo;s bag.
          </p>
        </Reveal>

        <div className="capabilities">
          {CAPABILITIES.map((item, index) => {
            const Icon = ICONS[item.icon]
            return (
              <Reveal className="capability" key={item.title} delay={(index % 3) * 80}>
                <div className="capability__top">
                  <span className="capability__icon">
                    <Icon size={22} aria-hidden="true" />
                  </span>
                  <span className="chip chip--soft">{item.tag}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
