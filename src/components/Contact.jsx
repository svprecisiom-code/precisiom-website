import { useState } from 'react'
import { ArrowRight, Check, Copy, Mail, MapPin, Pencil, Phone, Send } from 'lucide-react'
import { BRAND } from '../data'
import Reveal from './Reveal'

const INTERESTS = [
  'Clinical pilot',
  'Distribution partnership',
  'Investment',
  'Research collaboration',
  'Media & press',
  'General enquiry',
]

const INITIAL = {
  name: '',
  email: '',
  phone: '',
  organization: '',
  interest: '',
  message: '',
  consent: false,
}

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Enter your full name.'
  if (!values.email.trim()) errors.email = 'Enter your email address.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) errors.email = 'Enter a valid email address.'
  const digits = values.phone.replace(/[^\d]/g, '')
  if (values.phone.trim() && (digits.length < 10 || digits.length > 15)) {
    errors.phone = 'Enter a valid mobile number, including the country code.'
  }
  if (!values.interest) errors.interest = 'Select how you would like to work with us.'
  if (!values.consent) errors.consent = 'Please confirm you agree to be contacted.'
  return errors
}

export default function Contact() {
  const [values, setValues] = useState(INITIAL)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)
  const [copied, setCopied] = useState(false)

  const update = (field) => (event) => {
    const value = field === 'consent' ? event.target.checked : event.target.value
    setValues((current) => ({ ...current, [field]: value }))
    if (errors[field]) setErrors((current) => ({ ...current, [field]: undefined }))
  }

  const subject = `PrecisioM enquiry: ${values.interest || 'General enquiry'}`

  const body = [
    `Name: ${values.name.trim()}`,
    `Email: ${values.email.trim()}`,
    ...(values.phone.trim() ? [`Mobile: ${values.phone.trim()}`] : []),
    ...(values.organization.trim() ? [`Organisation: ${values.organization.trim()}`] : []),
    `Interest: ${values.interest}`,
    '',
    values.message.trim() || '(no message added)',
  ].join('\n')

  const mailto = `mailto:${BRAND.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  const gmailCompose = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    BRAND.email,
  )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    const firstError = Object.keys(nextErrors)[0]
    if (firstError) {
      document.getElementById(`contact-${firstError}`)?.focus()
      return
    }
    setSent(true)
    window.location.href = mailto
  }

  const copyMessage = async () => {
    const text = `To: ${BRAND.email}\nSubject: ${subject}\n\n${body}`
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2500)
    } catch {
      setCopied(false)
    }
  }

  const fieldProps = (field) => ({
    id: `contact-${field}`,
    name: field,
    value: values[field],
    onChange: update(field),
    'aria-invalid': errors[field] ? 'true' : undefined,
    'aria-describedby': errors[field] ? `contact-${field}-error` : undefined,
    className: errors[field] ? 'has-error' : undefined,
  })

  return (
    <section className="section contact" id="contact">
      <div className="container contact__grid">
        <Reveal className="contact__intro">
          <p className="eyebrow">Partner with us</p>
          <h2>Bring precision to more homes.</h2>
          <p className="section__lede">
            Whether you are planning a clinical pilot, exploring distribution, or evaluating an investment, write to
            us and we will route it to the right person. Based in Sanquelim, North Goa, we work with clinics, health
            programmes, and partners across Goa and India.
          </p>

          <div className="contact__details">
            <a href={`mailto:${BRAND.email}`}>
              <Mail size={17} aria-hidden="true" />
              {BRAND.email}
            </a>
            <a href={`tel:${BRAND.phoneHref}`}>
              <Phone size={17} aria-hidden="true" />
              {BRAND.phone}
            </a>
            <span>
              <MapPin size={17} aria-hidden="true" />
              {BRAND.address}
            </span>
          </div>
        </Reveal>

        <Reveal className="contact__card" delay={120}>
          {sent ? (
            <div className="contact__sent" role="status">
              <span className="contact__sent-icon">
                <Send size={26} aria-hidden="true" />
              </span>
              <h3>One last click to send</h3>
              <p>
                Your email app should have opened with the message below, addressed to{' '}
                <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a>. Press send there and it reaches our inbox.
              </p>
              <p className="contact__sent-note">
                Mail sent from a desktop app sometimes lands in our spam folder. Opening the same message in Gmail
                sends it from your signed-in account, so it arrives in the inbox directly.
              </p>

              <dl className="contact__summary">
                <div>
                  <dt>To</dt>
                  <dd>{BRAND.email}</dd>
                </div>
                <div>
                  <dt>Subject</dt>
                  <dd>{subject}</dd>
                </div>
                <div>
                  <dt>Message</dt>
                  <dd>{body}</dd>
                </div>
              </dl>

              <div className="contact__sent-actions">
                <a
                  className="button button--primary"
                  href={gmailCompose}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Send in Gmail
                  <ArrowRight size={17} aria-hidden="true" />
                </a>
                <a className="button button--secondary" href={mailto}>
                  Open email app
                </a>
                <button type="button" className="button button--secondary" onClick={copyMessage}>
                  {copied ? <Check size={17} aria-hidden="true" /> : <Copy size={17} aria-hidden="true" />}
                  {copied ? 'Copied' : 'Copy message'}
                </button>
                <button
                  type="button"
                  className="contact__edit"
                  onClick={() => {
                    setSent(false)
                    setCopied(false)
                  }}
                >
                  <Pencil size={15} aria-hidden="true" />
                  Edit the message
                </button>
              </div>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <h3 className="contact-form__title">Tell us what you have in mind.</h3>

              <div className="contact-form__row">
                <div className="field">
                  <label htmlFor="contact-name">
                    Full name <span aria-hidden="true">*</span>
                  </label>
                  <input type="text" autoComplete="name" placeholder="Your name" {...fieldProps('name')} />
                  {errors.name && (
                    <p className="field__error" id="contact-name-error">
                      {errors.name}
                    </p>
                  )}
                </div>
                <div className="field">
                  <label htmlFor="contact-email">
                    Email address <span aria-hidden="true">*</span>
                  </label>
                  <input
                    type="email"
                    autoComplete="email"
                    placeholder="you@organisation.com"
                    {...fieldProps('email')}
                  />
                  {errors.email && (
                    <p className="field__error" id="contact-email-error">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="contact-form__row">
                <div className="field">
                  <label htmlFor="contact-phone">Mobile number</label>
                  <input
                    type="tel"
                    autoComplete="tel"
                    inputMode="tel"
                    placeholder="+91 98765 43210"
                    {...fieldProps('phone')}
                  />
                  {errors.phone && (
                    <p className="field__error" id="contact-phone-error">
                      {errors.phone}
                    </p>
                  )}
                </div>
                <div className="field">
                  <label htmlFor="contact-organization">Organisation</label>
                  <input
                    type="text"
                    autoComplete="organization"
                    placeholder="Clinic or company"
                    {...fieldProps('organization')}
                  />
                </div>
              </div>

              <div className="field">
                <label htmlFor="contact-interest">
                  I&rsquo;m interested in <span aria-hidden="true">*</span>
                </label>
                <select {...fieldProps('interest')}>
                  <option value="">Select an option</option>
                  {INTERESTS.map((interest) => (
                    <option key={interest} value={interest}>
                      {interest}
                    </option>
                  ))}
                </select>
                {errors.interest && (
                  <p className="field__error" id="contact-interest-error">
                    {errors.interest}
                  </p>
                )}
              </div>

              <div className="field">
                <label htmlFor="contact-message">Your message</label>
                <textarea
                  rows="4"
                  placeholder="Tell us about your clinic, programme, or partnership idea."
                  {...fieldProps('message')}
                />
              </div>

              <div className="field field--check">
                <input
                  type="checkbox"
                  id="contact-consent"
                  checked={values.consent}
                  onChange={update('consent')}
                  aria-invalid={errors.consent ? 'true' : undefined}
                  aria-describedby={errors.consent ? 'contact-consent-error' : undefined}
                />
                <label htmlFor="contact-consent">
                  I agree to be contacted about this enquiry. My details will only be used to respond.
                </label>
              </div>
              {errors.consent && (
                <p className="field__error" id="contact-consent-error">
                  {errors.consent}
                </p>
              )}

              <button className="button button--primary button--lg button--block" type="submit">
                Send message
                <ArrowRight size={18} aria-hidden="true" />
              </button>
              <p className="contact-form__foot">
                Opens your email app with this message filled in, addressed to {BRAND.email}. Nothing reaches us
                until you press send.
              </p>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}
