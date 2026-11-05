import { useEffect, useState } from 'react'
import { ArrowDown, Award } from 'lucide-react'
import { HERO_CONFIG, HERO_STATES } from '../data'
import { NET_ICONS } from './netIcons'

const VISUALS = [
  { id: 'pulse', label: 'Pulse' },
  { id: 'network', label: 'Network' },
]

const CYCLE = [
  { visual: 'pulse', state: 'out' },
  { visual: 'network', state: 'out' },
  { visual: 'pulse', state: 'in' },
  { visual: 'network', state: 'in' },
]

const AUTO_ADVANCE_MS = 5200

const ECG_PATH =
  'M0 215H110l14-10 14 20 16-110 18 170 14-70H250l14-10 14 20 16-110 18 170 14-70H400l14-10 14 20 16-110 18 170 14-70H560'

const NET_PATHS = [
  'M50 200L170 200',
  'M170 200Q230 140 300 80',
  'M170 200Q230 260 300 320',
  'M300 320Q380 320 430 200',
  'M430 200Q480 140 540 110',
  'M430 200Q490 260 540 290',
]

const NET_OK_PATH = 'M170 200L430 200'

const NET_NODES = [
  { label: 'Home', x: 50, y: 200, icon: 'home' },
  { label: 'Phone', x: 170, y: 200, icon: 'phone' },
  { label: 'Family', x: 300, y: 80, icon: 'family' },
  { label: 'CHC', x: 300, y: 320, icon: 'chc' },
  { label: 'PHC', x: 430, y: 200, icon: 'phc' },
  { label: 'ABHA', x: 540, y: 110, icon: 'abha' },
  { label: 'Medical college', x: 540, y: 290, icon: 'college' },
]

function getReading(state) {
  const bp = state.vitals.find((vital) => vital.label === 'BP')
  const spo2 = state.vitals.find((vital) => vital.label === 'SpO₂')
  const [systolic, diastolic] = bp.value.split('/')
  return { bp, spo2, systolic, diastolic }
}

function PulseStage({ state, out }) {
  const color = out ? 'var(--hero-alert)' : 'var(--hero-ok)'
  const { bp, spo2, systolic, diastolic } = getReading(state)

  return (
    <div className={`stage stage--${out ? 'hi' : 'ok'}`} aria-hidden="true">
      <svg className="stage__svg" viewBox="0 0 560 400" focusable="false">
        <circle cx="430" cy="110" r="150" fill="var(--hero-acc)" opacity="0.07" />
        <circle cx="110" cy="310" r="110" fill="var(--hero-acc)" opacity="0.06" />

        <path
          className="stage__draw"
          pathLength="1"
          d={ECG_PATH}
          fill="none"
          stroke={color}
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="548" cy="215" r="7" fill={color} />
        <circle className="stage__rip" cx="548" cy="215" r="7" fill="none" stroke={color} strokeWidth="3" />

        <g transform="translate(30 262)">
          <rect width="150" height="112" rx="16" fill="var(--hero-card)" stroke="var(--hero-line)" strokeWidth="2" />
          <rect x="14" y="14" width="122" height="62" rx="8" fill="#dfe34a" />
          <text x="126" y="42" textAnchor="end" fontSize="24" fontWeight="700" fill="#33411a">
            {systolic}
          </text>
          <text x="126" y="68" textAnchor="end" fontSize="24" fontWeight="700" fill="#33411a">
            {diastolic}
          </text>
          <circle cx="75" cy="95" r="8" fill={color} />
        </g>
      </svg>

      <div className="stage__card stage__card--bp">
        <small>Blood pressure</small>
        <b key={bp.value}>{bp.value}</b>
        <i key={out ? 'hi' : 'ok'}>{out ? 'High' : 'Normal'}</i>
      </div>

      <div className="stage__card stage__card--spo2">
        <small>SpO₂</small>
        <b key={spo2.value}>{spo2.value}%</b>
        <i key={out ? 'low' : 'ok'}>{out ? 'Low' : 'Normal'}</i>
      </div>
    </div>
  )
}

function NetworkStage({ out }) {
  const color = out ? 'var(--hero-alert)' : 'var(--hero-ok)'
  const routes = out
    ? NET_PATHS.map((path, index) => ({
        path,
        delay: [0, 1.2, 1.2, 2.4, 3.6, 3.6][index],
        alert: index === 1 || index === 2,
      }))
    : [
        { path: NET_PATHS[0], delay: 0, alert: false },
        { path: NET_OK_PATH, delay: 1.4, alert: false },
      ]

  return (
    <div className={`stage stage--network net--${out ? 'hi' : 'ok'}`} aria-hidden="true">
      <svg className="stage__svg" viewBox="0 0 600 400" focusable="false">
        <g fill="none" strokeWidth="2.5" strokeLinecap="round">
          {out ? (
            NET_PATHS.map((path, index) => (
              <path
                key={path}
                d={path}
                stroke={index === 1 || index === 2 ? 'var(--hero-alert)' : 'var(--hero-acc)'}
                opacity="0.6"
              />
            ))
          ) : (
            <>
              <path d={NET_PATHS[0]} stroke="var(--hero-acc)" opacity="0.6" />
              <path d={NET_OK_PATH} stroke="var(--hero-ok)" strokeDasharray="6 8" />
              <path d={NET_PATHS[4]} stroke="var(--hero-acc)" opacity="0.3" />
              <path d={NET_PATHS[5]} stroke="var(--hero-acc)" opacity="0.3" />
            </>
          )}
        </g>

        <g>
          {routes.map((route) => (
            <circle
              key={`${route.path}-${route.delay}`}
              className="net__packet"
              r="5"
              fill={route.alert ? 'var(--hero-alert)' : '#fff'}
            >
              <animateMotion dur="2.4s" begin={`${route.delay}s`} repeatCount="indefinite" path={route.path} />
            </circle>
          ))}
        </g>

        {NET_NODES.map((node, index) => {
          const on = out || index === 0 || index === 1 || index === 4
          const isAlert = out && index === 2
          return (
            <g key={node.label} opacity={on ? 1 : 0.34}>
              <circle
                cx={node.x}
                cy={node.y}
                r="20"
                fill="var(--hero-card)"
                stroke={isAlert ? 'var(--hero-alert)' : 'var(--hero-acc)'}
                strokeWidth="2.5"
              />
              {isAlert && (
                <circle
                  className="stage__rip"
                  cx={node.x}
                  cy={node.y}
                  r="20"
                  fill="none"
                  stroke="var(--hero-alert)"
                  strokeWidth="2"
                />
              )}
              <g
                transform={`translate(${node.x - 10.4} ${node.y - 10.4}) scale(0.87)`}
                fill={isAlert ? 'var(--hero-alert)' : 'var(--hero-acc)'}
              >
                <path d={NET_ICONS[node.icon]} />
              </g>
              <text x={node.x} y={node.y + 41} textAnchor="middle" fontSize="15" fill="var(--hero-mut)">
                {node.label}
              </text>
            </g>
          )
        })}

        <text x="300" y="46" textAnchor="middle" fontSize="15" fontWeight="700" fill={color}>
          {out ? 'SMS + call' : 'Profile and monitoring'}
        </text>
      </svg>
    </div>
  )
}

export default function Hero() {
  const [step, setStep] = useState(0)
  const current = CYCLE[step]
  const visual = current.visual
  const stateId = current.state
  const state = HERO_STATES[stateId]
  const out = stateId === 'out'
  const visualIndex = VISUALS.findIndex((option) => option.id === visual)
  const visualLabel = VISUALS[visualIndex].label

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined
    const timer = window.setTimeout(() => setStep((value) => (value + 1) % CYCLE.length), AUTO_ADVANCE_MS)
    return () => window.clearTimeout(timer)
  }, [step])

  const selectVisual = (id) => {
    const sameState = CYCLE.findIndex((entry) => entry.visual === id && entry.state === stateId)
    const fallback = CYCLE.findIndex((entry) => entry.visual === id)
    setStep(sameState >= 0 ? sameState : fallback)
  }

  return (
    <section className="hero-v2" id="top">
      <div className="container hero-v2__inner">
        <div className="hero-v2__main">
          <div className="hero-v2__copy">
            {HERO_CONFIG.showStageBadge && <p className="hero-v2__badge">Pilot in development</p>}

            <h1>Your Complete Health Line to Family and Clinic.</h1>
            <p className="hero-v2__sub">
              Connected blood pressure monitoring for homes, PHCs, and CHCs — built in Goa for India's primary care
              network.
            </p>

            <div className="hero-v2__actions">
              <a className="hero-btn hero-btn--primary" href="#platform">
                See how it works
                <ArrowDown size={18} aria-hidden="true" />
              </a>
              <a className="hero-btn hero-btn--secondary" href="#contact">
                Talk to us
              </a>
            </div>

            <p className="hero-v2__recognition">
              <Award size={18} strokeWidth={2.2} aria-hidden="true" />
              <span>
                Recognised by the Startup &amp; IT Promotion Cell, Goa as a Start-up under the Goa Start-up Policy 2021
              </span>
            </p>
          </div>

          <div className={`stage-slot stage-slot--${visual}`} key={step}>
            {visual === 'pulse' && <PulseStage state={state} out={out} />}
            {visual === 'network' && <NetworkStage out={out} />}
          </div>
        </div>

        <div className="hero-v2__controls">
          <p className="hero-v2__readout">
            <span className={`hero-v2__state-dot hero-v2__state-dot--${out ? 'alert' : 'ok'}`} aria-hidden="true" />
            <span className="hero-v2__state-text">{state.label}</span>
          </p>

          <div className="hero-v2__switch">
            <div className="hero-v2__styles" role="group" aria-label="Illustration style">
              <span
                className="hero-v2__styles-thumb"
                style={{
                  width: `calc((100% - 6px) / ${VISUALS.length})`,
                  transform: `translateX(${visualIndex * 100}%)`,
                }}
                aria-hidden="true"
              />
              {VISUALS.map((option) => (
                <button
                  key={option.id}
                  type="button"
                  aria-pressed={visual === option.id}
                  onClick={() => selectVisual(option.id)}
                >
                  {option.label}
                </button>
              ))}
            </div>
            <span className="hero-v2__auto-bar" key={step} aria-hidden="true">
              <i />
            </span>
          </div>
        </div>

        <p className="sr-only" role="status">
          {state.label} reading, {visualLabel} illustration
        </p>

        <ol className="flow" key={stateId} aria-label={`Five-step flow: ${state.label}`}>
          {state.steps.map((stepItem, index) => {
            const tone = index < 2 ? '' : out ? ' flow__step--alert' : ' flow__step--ok'
            return (
              <li className={`flow__step${tone}`} style={{ '--i': index }} key={stepItem.title}>
                <span className="flow__num" aria-hidden="true">
                  {index + 1}
                </span>
                <p className="flow__title">{stepItem.title}</p>
                <p className="flow__text">{stepItem.text}</p>
                {stepItem.tags.length > 0 && (
                  <p className="flow__tags">
                    {stepItem.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </p>
                )}
              </li>
            )
          })}
        </ol>
        <p className="hero-v2__sub hero-v2__foot">Remote patient monitoring for PHCs and CHCs. Patients take vitals at home; family and the care team are alerted only when something is out of range.</p>

        <p className="hero-v2__note">Sample data. Not a diagnosis.</p>
      </div>
    </section>
  )
}
