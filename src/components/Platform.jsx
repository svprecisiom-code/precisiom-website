import { ArrowRight, Building2, CloudCog, Cpu, Info, ScanLine } from 'lucide-react'
import { PLATFORM } from '../data'
import Reveal from './Reveal'

const ICONS = { ScanLine, CloudCog, Cpu, Building2 }

export default function Platform() {
  return (
    <section className="section platform" id="platform">
      <div className="container">
        <Reveal className="platform__head">
          <p className="eyebrow">The RPM platform</p>
          <h2>From any monitor to the right clinician.</h2>
          <p className="section__lede">
            RaktaBeat is the device people touch. Behind it, we are building a remote patient monitoring platform
            that captures readings from the equipment already in use, moves them through a clean data path, and puts
            them in front of the people who can act.
          </p>
        </Reveal>

        <div className="platform__pillars">
          {PLATFORM.pillars.map((pillar, index) => {
            const Icon = ICONS[pillar.icon]
            return (
              <Reveal className="platform-card" key={pillar.title} delay={index * 70}>
                <div className="platform-card__top">
                  <span className="platform-card__icon">
                    <Icon size={22} aria-hidden="true" />
                  </span>
                  <span className="platform-card__tag">{pillar.tag}</span>
                </div>
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
              </Reveal>
            )
          })}
        </div>

        <Reveal className="platform__phases" delay={100}>
          <div className="platform__phases-head">
            <p className="eyebrow eyebrow--light">Build sequence</p>
            <h3>Two phases, one direction.</h3>
            <p>
              Start with the capture layer that can work on day one, then add the dedicated edge device and
              offline-first triage.
            </p>
          </div>

          <div className="platform__phase-grid">
            {PLATFORM.phases.map((phase) => (
              <div
                className={`phase ${phase.status === 'Current focus' ? 'phase--current' : ''}`}
                key={phase.period}
              >
                <div className="phase__top">
                  <span className="phase__period">{phase.period}</span>
                  <span className="phase__status">{phase.status}</span>
                </div>
                <h4>{phase.title}</h4>
                <ul>
                  {phase.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="platform__footer">
            <p className="platform__note">
              <Info size={16} aria-hidden="true" />
              {PLATFORM.note}
            </p>
            <a className="platform__cta" href="#contact">
              Discuss a pilot
              <ArrowRight size={16} aria-hidden="true" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
