export const BRAND = {
  name: 'PrecisioM',
  legal: 'PrecisioM MedTech Pvt Ltd',
  product: 'RaktaBeat',
  tagline: 'Delivering Precision in Every Measurement',
  stamp: 'Built in India for Precision Care.',
  email: 'info.precisiom@gmail.com',
  phone: '+91 97640 02906',
  phoneHref: '+919764002906',
  address: 'House No. 4/2852/45, 2nd Floor, Krishna Kunj, Sanquelim, North Goa — 403505, Goa, India',
}

export const NAV_LINKS = [
  { label: 'RaktaBeat', href: '#product', sub: 'Connected BP monitor' },
  { label: 'Platform', href: '#platform', sub: 'Remote monitoring' },
  { label: 'Roadmap', href: '#roadmap', sub: '2026 → 2031' },
  { label: 'Company', href: '#company', sub: 'Founders & story' },
  { label: 'Investors', href: '#investors', sub: 'Briefing & milestones' },
]

export const STATS = [
  {
    value: 30,
    suffix: '%',
    label: 'of Indian adults live with hypertension',
    detail: 'A common condition that depends on regular, reliable measurement.',
  },
  {
    prefix: '<',
    value: 20,
    suffix: '%',
    label: 'of rural adults get regular BP screening',
    detail: 'Access to routine screening remains uneven across India.',
  },
  {
    display: '90–95%',
    label: 'of BP monitors are imported',
    detail: 'Few are integrated with Indian digital health systems.',
  },
]

export const PROBLEMS = [
  {
    icon: 'Move',
    title: 'Measurement depends on the user',
    text: 'Cuff placement, posture, and stillness decide the result. Most devices leave the user to guess whether they got it right.',
  },
  {
    icon: 'Volume2',
    title: 'No clear confirmation',
    text: 'A number appears on screen — but did the measurement succeed? Visual and audible feedback is rare.',
  },
  {
    icon: 'CalendarClock',
    title: 'Adherence goes unmeasured',
    text: 'Readings are missed, forgotten, or written down and lost. There is no gentle system of record.',
  },
  {
    icon: 'CloudOff',
    title: 'Data stops at the device',
    text: 'Without connectivity, a reading never reaches the clinician or family member who could act on it.',
  },
]

export const CAPABILITIES = [
  {
    icon: 'Crosshair',
    title: 'Accuracy by design',
    tag: 'ISO 81060-2 target',
    text: 'A dedicated pressure-sensing system built around the ISO 81060-2 accuracy standard for non-invasive blood pressure monitors.',
  },
  {
    icon: 'AudioLines',
    title: 'Guided in your language',
    tag: 'Multilingual voice',
    text: 'Spoken prompts and simple visual cues guide cuff placement and a successful reading — no manual required.',
  },
  {
    icon: 'Bluetooth',
    title: 'Connected from day one',
    tag: 'BLE 5.0',
    text: 'Bluetooth 5.0 links RaktaBeat to the companion app, with a cloud path for sharing readings with a care team.',
  },
  {
    icon: 'CircleDot',
    title: 'One button. No guesswork.',
    tag: 'Single action',
    text: 'Press once to start. RaktaBeat handles inflation, measurement, and feedback automatically.',
  },
  {
    icon: 'ShieldAlert',
    title: 'Safety built in',
    tag: 'Lockout + alerts',
    text: 'Lockout features and tamper alerts protect measurement integrity and flag misuse.',
  },
  {
    icon: 'BatteryCharging',
    title: 'Power that fits the home',
    tag: 'AA or USB-C',
    text: 'Runs on AA batteries for reach and convenience, with USB-C as a rechargeable option.',
  },
]

export const PLATFORM = {
  pillars: [
    {
      icon: 'ScanLine',
      title: 'Works with the monitors already there',
      tag: 'Any monitor',
      text: 'A smartphone camera can read the display of existing BP monitors, so a clinic does not have to replace working equipment before it can capture structured readings.',
    },
    {
      icon: 'CloudCog',
      title: 'One clean path for every reading',
      tag: 'Cloud pipeline',
      text: 'Captured values move through a data-processing hub into a patient registry, with profiling that turns scattered numbers into a history a clinician can follow.',
    },
    {
      icon: 'Cpu',
      title: 'Edge intelligence, even offline',
      tag: 'Phase 2 · Q3 2027',
      text: 'A dedicated edge device carries the measurement, buffers readings when the network drops, and can flag urgent values locally before anything syncs.',
    },
    {
      icon: 'Building2',
      title: 'Built for public health workflows',
      tag: 'ABDM / ABHA',
      text: 'Records are designed around ABDM and ABHA, so PHC and CHC teams can follow a patient across visits without re-entering the same data.',
    },
  ],
  phases: [
    {
      period: 'Phase 1',
      status: 'Current focus',
      title: 'Capture and connect',
      items: [
        'OCR model for legacy monitor displays',
        'Smartphone capture flow for field use',
        'Cloud ingestion and patient registry mapping',
        'PHC profiling and routine follow-up paths',
      ],
    },
    {
      period: 'Phase 2 · Q3 2027',
      status: 'Planned',
      title: 'Edge device and offline triage',
      items: [
        'Microcontroller-based edge hardware',
        'Secure BLE firmware with local buffering',
        'Offline-first emergency alert pathway',
        'ABDM / ABHA record alignment at scale',
      ],
    },
  ],
  note: 'The remote patient monitoring platform is in development. Phase 1 capabilities are being built and validated; Phase 2 targets are planned for Q3 2027. This is not a live clinical service.',
}

export const ROADMAP = [
  {
    period: '2026–27',
    title: 'RaktaBeat',
    tag: 'Core product',
    status: 'In development',
    text: 'Engineering, validation, and pilot readiness for the connected blood pressure monitor.',
  },
  {
    period: '2028–30',
    title: 'Intelligent auto-injector',
    tag: 'Pipeline',
    status: 'Planned',
    text: 'A connected auto-injector system designed to make self-administration safer and simpler.',
  },
  {
    period: '2028–31',
    title: 'SWE fatty liver diagnostics',
    tag: 'Research',
    status: 'Research stage',
    text: 'Shear-wave elastography research for non-invasive liver assessment.',
  },
  {
    period: '2028–31',
    title: 'Non-invasive breast cancer diagnosis',
    tag: 'Research',
    status: 'Research stage',
    text: 'A non-invasive diagnostic device for breast cancer screening.',
  },
]

export const MARKET_HIGHLIGHTS = [
  {
    title: 'A large, growing need',
    text: 'Hypertension affects 30% of Indian adults, while regular rural screening remains below 20%.',
  },
  {
    title: 'Low penetration',
    text: 'Home BP monitoring is still early in India, with most devices imported and disconnected from local health systems.',
  },
  {
    title: 'India-first pricing',
    text: 'An affordable device and care model designed for Indian households, clinics, and community programs.',
  },
  {
    title: 'Capital-efficient plan',
    text: 'The business is planned around disciplined validation milestones, with capital released against each one.',
  },
  {
    title: 'A path to scale',
    text: 'A plan to scale to a ₹100 crore enterprise, built on a repeatable device and diagnostics model.',
  },
  {
    title: 'A wider platform',
    text: 'Room to expand from blood pressure into continuous glucose monitoring, liver scanning, and breast scanning.',
  },
]

export const FOOTER_COLUMNS = [
  {
    title: 'RaktaBeat',
    links: [
      { label: 'Product overview', href: '#product' },
      { label: 'How it works', href: '#platform' },
      { label: 'Roadmap', href: '#roadmap' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Founders', href: '#company' },
      { label: 'Why invest', href: '#investors' },
      { label: 'Partner with us', href: '#contact' },
      { label: 'Back to top', href: '#top' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { label: 'info.precisiom@gmail.com', href: 'mailto:info.precisiom@gmail.com' },
      { label: '+91 97640 02906', href: 'tel:+919764002906' },
      { label: 'Sanquelim, North Goa', href: '#contact' },
    ],
  },
]

/* ---------- Hero (homepage) ---------- */

export const HERO_CONFIG = {
  // Stage badges are off by default and stay text-only when enabled.
  showStageBadge: false,
}

const HERO_STEPS_BASE = [
  {
    title: 'Reading taken',
    text: 'On a Bluetooth device, or a photo of an older device’s screen.',
    tags: ['Photo reading', 'Bluetooth devices'],
  },
  {
    title: 'Phone checks it',
    text: 'The patient confirms; each value is compared with their limit.',
    tags: [],
  },
]

export const HERO_STATES = {
  out: {
    id: 'out',
    label: 'Out of range',
    steps: [
      ...HERO_STEPS_BASE,
      { title: 'Out of range', text: 'Sample: BP 182/124, SpO₂ 90%.', tags: [] },
      { title: 'Alert goes out', text: 'SMS and call to family; the CHC is notified.', tags: ['SMS and call alerts'] },
      {
        title: 'Care network',
        text: 'CHC refers to PHC. ABHA record updated; complex cases go to the medical college.',
        tags: ['ABHA link', 'PHC dashboard'],
      },
    ],
    vitals: [
      { label: 'BP', value: '182/124', unit: 'mmHg', status: 'Out of range' },
      { label: 'SpO₂', value: '90', unit: '%', status: 'Out of range' },
      { label: 'Temp', value: '36.8', unit: '°C', status: 'In range' },
      { label: 'Pulse', value: '88', unit: 'bpm', status: 'In range' },
    ],
  },
  in: {
    id: 'in',
    label: 'All in range',
    steps: [
      ...HERO_STEPS_BASE,
      { title: 'All in range', text: 'Sample: BP 124/80, SpO₂ 97%, 36.8 °C.', tags: [] },
      { title: 'Saved to history', text: 'No alert. The readings join the patient’s trend.', tags: [] },
      {
        title: 'Area profile',
        text: 'The PHC sees hypertension patterns across its area.',
        tags: ['ABHA link', 'PHC dashboard'],
      },
    ],
    vitals: [
      { label: 'BP', value: '124/80', unit: 'mmHg', status: 'In range' },
      { label: 'SpO₂', value: '97', unit: '%', status: 'In range' },
      { label: 'Temp', value: '36.8', unit: '°C', status: 'In range' },
      { label: 'Pulse', value: '76', unit: 'bpm', status: 'In range' },
    ],
  },
}
