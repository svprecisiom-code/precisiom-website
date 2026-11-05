import { useEffect, useRef, useState } from 'react'
import { STATS } from '../data'

function Counter({ value, decimals = 0, suffix = '', prefix = '' }) {
  const ref = useRef(null)
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplay(value)
      return
    }
    let frame = 0
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        const start = performance.now()
        const duration = 1500
        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1)
          const eased = 1 - (1 - progress) ** 3
          setDisplay(value * eased)
          if (progress < 1) frame = requestAnimationFrame(tick)
        }
        frame = requestAnimationFrame(tick)
      },
      { threshold: 0.4 },
    )
    observer.observe(el)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [value])

  const formatted = decimals > 0 ? display.toFixed(decimals) : Math.round(display).toLocaleString('en-US')

  return (
    <span ref={ref}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  )
}

export default function Metrics() {
  return (
    <section className="metrics" aria-labelledby="metrics-title">
      <div className="container metrics__inner">
        <div className="metrics__head">
          <p className="eyebrow eyebrow--light">The gap</p>
          <h2 id="metrics-title">Hypertension care starts with a measurement.</h2>
        </div>

        <div className="metrics__grid">
          {STATS.map((stat) => (
            <div className="metric" key={stat.label}>
              <span className="metric__value">
                {stat.display ? (
                  stat.display
                ) : (
                  <Counter value={stat.value} decimals={stat.decimals} suffix={stat.suffix} prefix={stat.prefix} />
                )}
              </span>
              <span className="metric__label">{stat.label}</span>
              <span className="metric__detail">{stat.detail}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="container">
        <p className="metrics__source">
          Figures from PrecisioM&rsquo;s market review. Public-health estimates vary by source and survey year.
        </p>
      </div>
    </section>
  )
}
