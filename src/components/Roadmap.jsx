import { ROADMAP } from '../data'
import Reveal from './Reveal'

export default function Roadmap() {
  return (
    <section className="section roadmap" id="roadmap">
      <div className="container">
        <Reveal className="section__head">
          <p className="eyebrow">Roadmap</p>
          <h2>One platform. A pipeline of firsts.</h2>
          <p className="section__lede">
            RaktaBeat is the first step in a longer plan: connected measurement and diagnostic tools designed for
            Indian homes, built with research and clinical partners.
          </p>
        </Reveal>

        <div className="roadmap__track">
          {ROADMAP.map((item, index) => (
            <Reveal className="roadmap-card" key={item.title} delay={index * 70}>
              <div className="roadmap-card__top">
                <span className="roadmap-card__period">{item.period}</span>
                <span className={`chip ${item.status === 'In development' ? 'chip--live' : 'chip--soft'}`}>
                  {item.status}
                </span>
              </div>
              <span className="roadmap-card__tag">{item.tag}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </Reveal>
          ))}
        </div>

        <p className="roadmap__note">
          Dates reflect current planning horizons and may change as validation and partnerships progress.
        </p>
      </div>
    </section>
  )
}
