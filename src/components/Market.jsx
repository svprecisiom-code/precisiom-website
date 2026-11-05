import { ArrowRight, Award } from 'lucide-react'
import { MARKET_HIGHLIGHTS } from '../data'
import Reveal from './Reveal'

export default function Market() {
  return (
    <section className="section market" id="investors">
      <div className="container">
        <div className="market__top">
          <Reveal className="market__lead">
            <p className="eyebrow eyebrow--light">Investor &amp; partner briefing</p>
            <h2>A large need. A lean path to scale.</h2>
            <p className="section__lede">
              Hypertension care is moving from hospitals into homes. PrecisioM is building an India-first device
              business around that shift — with disciplined milestones and a wider diagnostic pipeline.
            </p>
            <a className="button button--light button--lg" href="#contact">
              Request the investor brief
              <ArrowRight size={18} aria-hidden="true" />
            </a>
          </Reveal>

          <Reveal className="market__stats" delay={100}>
            <p className="market__recognition">
              <Award size={17} aria-hidden="true" />
              <span>
                Recognised by the Startup &amp; IT Promotion Cell, Goa as a Start-up under the Goa Start-up Policy 2021
              </span>
            </p>
            <div>
              <strong>MoU signed</strong>
              <span>
                with{' '}
                <a href="https://pccegoa.edu.in" target="_blank" rel="noreferrer noopener">
                  Padre Conceição College of Engineering
                </a>
              </span>
            </div>
            <div>
              <strong>4</strong>
              <span>products in the pipeline</span>
            </div>
          </Reveal>
        </div>

        <div className="market__grid">
          {MARKET_HIGHLIGHTS.map((item, index) => (
            <Reveal className="market-card" key={item.title} delay={(index % 3) * 70}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </Reveal>
          ))}
        </div>

        <p className="market__disclaimer">
          Forward-looking statements reflect current planning assumptions and are not forecasts or guarantees of
          financial performance. Investment and valuation figures are internal targets requiring validation.
        </p>
      </div>
    </section>
  )
}
