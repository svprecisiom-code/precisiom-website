import { ArrowRight, Building2, Check, Clock3, Video } from 'lucide-react'
import Reveal from './Reveal'

const POINTS = [
  {
    title: 'Product walkthrough',
    text: 'RaktaBeat\u2019s concept, the sensing approach, and the RPM data path behind it.',
  },
  {
    title: 'Pilot fit',
    text: 'Where the platform could fit in your clinic, health centre, or community programme.',
  },
  {
    title: 'Straight answers',
    text: 'What is in development, what it is designed to do, and what comes next.',
  },
]

export default function BookCta() {
  return (
    <section className="book" id="book" aria-labelledby="book-title">
      <div className="container">
        <Reveal className="book__card">
          <div className="book__main">
            <p className="eyebrow">Book a walkthrough</p>
            <h2 id="book-title">See the platform in twenty minutes.</h2>
            <p className="book__lede">
              A focused conversation for clinics, distributors and investors — ask hard questions, see how the
              pieces connect, and find out whether a pilot makes sense.
            </p>

            <div className="book__actions">
              <a className="button button--primary button--lg" href="#contact">
                Book a 20-minute demo
                <ArrowRight size={18} aria-hidden="true" />
              </a>
              <a className="button button--secondary button--lg" href="#roadmap">
                See the roadmap
              </a>
            </div>

            <ul className="book__meta">
              <li>
                <Clock3 size={16} aria-hidden="true" />
                20 minutes
              </li>
              <li>
                <Video size={16} aria-hidden="true" />
                Online or in person
              </li>
              <li>
                <Building2 size={16} aria-hidden="true" />
                Clinics, partners &amp; investors
              </li>
            </ul>
          </div>

          <div className="book__side">
            <div className="book__side-head">
              <span className="book__side-icon" aria-hidden="true">
                <Clock3 size={20} />
              </span>
              <div>
                <p className="book__side-kicker">What to expect</p>
                <h3>A working session, not a pitch.</h3>
              </div>
            </div>

            <ul className="book__side-list">
              {POINTS.map((point) => (
                <li key={point.title}>
                  <span className="book__tick" aria-hidden="true">
                    <Check size={13} />
                  </span>
                  <span>
                    <strong>{point.title}</strong>
                    {point.text}
                  </span>
                </li>
              ))}
            </ul>

            <p className="book__side-note">
              Bring your questions. If the fit is not there, we will say so.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
