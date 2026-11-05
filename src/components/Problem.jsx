import { CalendarClock, CloudOff, Move, Volume2 } from 'lucide-react'
import { PROBLEMS } from '../data'
import Reveal from './Reveal'

const ICONS = { Move, Volume2, CalendarClock, CloudOff }

export default function Problem() {
  return (
    <section className="section problem" id="why">
      <div className="container problem__inner">
        <Reveal className="problem__lead">
          <p className="eyebrow">The problem</p>
          <h2>Hypertension is common. Reliable measurement isn&rsquo;t.</h2>
          <p className="section__lede">
            Home monitoring only works when the device is accurate, the user is guided, and the reading reaches
            someone who can act on it. In Goa and across India, too often, none of the three are true.
          </p>
          <div className="problem__callout">
            <strong>90–95%</strong>
            <span>
              of BP monitors used in India are imported — and most are not integrated with Indian digital health
              systems.
            </span>
          </div>
        </Reveal>

        <div className="problem__cards">
          {PROBLEMS.map((item, index) => {
            const Icon = ICONS[item.icon]
            return (
              <Reveal className="problem-card" key={item.title} delay={(index % 2) * 90}>
                <span className="problem-card__icon">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
