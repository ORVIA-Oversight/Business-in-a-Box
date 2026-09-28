import Link from 'next/link';

const systemItems = [
  ['Brand', 'Identity, positioning and approved messaging.'],
  ['Web', 'Premium websites, landing pages and conversion journeys.'],
  ['Social', 'Campaign planning, publishing orchestration and analytics.'],
  ['Voice', 'Lead capture, enquiries, bookings and follow-up.'],
  ['CRM', 'Customers, opportunities, notes and follow-ups.'],
  ['Sales', 'Leads, pipeline, quotes, conversion and revenue.'],
  ['Finance', 'Management information, margin and cash visibility.'],
  ['Documents', 'Controlled templates, records and business evidence.'],
  ['AI Team', 'Specialist support coordinated through IRIS.'],
  ['Analytics', 'Signals, performance and decision-ready reporting.'],
  ['Growth', 'SEO, campaigns, partnerships and commercial improvement.'],
  ['Assurance', 'VITA challenge, human approval and VERA verification.'],
];

const routes = [
  { n: '01', title: 'I have a business idea', text: 'Turn an idea into an operating proposition with the right commercial, digital and governance foundations.' },
  { n: '02', title: 'I already run a business', text: 'Replace disconnected tools and admin with a joined-up operating landscape built around your existing company.' },
  { n: '03', title: 'Operate an ORVIA venture', text: 'Take the lead on an ORVIA-developed commercial concept under a defined licence and operating model.' },
  { n: '04', title: 'Explore opportunities', text: 'Review ventures as they become available, with role, commitment and commercial structure made clear.' },
];

const stages = [
  ['0–30', 'ESTABLISH', 'Entity, licence, insurance, brand, website, CRM, AI team, reporting and integrations.'],
  ['31–60', 'LAUNCH', 'Open acquisition, launch campaigns, run the sales pipeline and test the customer journey.'],
  ['61–90', 'PROVE', 'Review revenue, leads, margin, workload, customer experience and system performance.'],
];

const agents = [
  ['IRIS', 'Conducts the work', 'Maintains context, routes work and assigns specialist agents.'],
  ['HIVE', 'Keeps the evidence', 'Maintains records, provenance, versions and controlled business evidence.'],
  ['VITA', 'Challenges the operation', 'Finds gaps, weaknesses and blind spots before they become expensive.'],
  ['VERA', 'Verifies the result', 'Checks that agreed actions happened and whether they actually worked.'],
];

const ventures = [
  ['Lavender North', 'Curated art & creative commerce', 'Founding pilot'],
  ['Saddle & Sage', 'Lifestyle venture concept', 'Development'],
  ['Santumm88', 'Independent venture brand', 'Concept'],
];

function Mark() {
  return (
    <div className="mark" aria-label="ORVIA Business in a Box">
      <span className="orb">O</span>
      <span className="brandText"><strong>ORVIA</strong><small>BUSINESS IN A BOX</small></span>
    </div>
  );
}

function Arrow() { return <span aria-hidden="true">↗</span>; }

export default function Home() {
  return (
    <main>
      <header className="navWrap">
        <nav className="nav shell">
          <Link href="/" className="logoLink"><Mark /></Link>
          <div className="navLinks">
            <a href="#how">How it works</a>
            <a href="#inside">What&apos;s in the box</a>
            <a href="#ventures">Ventures</a>
            <a href="#licensing">Licensing</a>
          </div>
          <Link className="navCta" href="/apply">Build my business <Arrow /></Link>
        </nav>
      </header>

      <section className="hero shell">
        <div className="heroCopy">
          <div className="eyebrow"><span></span> ORVIA BUSINESS IN A BOX</div>
          <h1>Your business.<br/><em>Our operating system.</em></h1>
          <p className="heroLead">Launch a genuine business with the operating landscape already around it. ORVIA provides the licensed systems, technology, brand infrastructure, workflows, AI support and growth tools. <strong>You lead the business.</strong></p>
          <div className="heroActions">
            <Link href="/apply" className="primary">BUILD MY BUSINESS <Arrow /></Link>
            <a href="#ventures" className="secondary">EXPLORE A BUSINESS OPPORTUNITY</a>
          </div>
          <div className="trustRow">
            <span>Human-led</span><i></i><span>Evidence-aware</span><i></i><span>Licensed infrastructure</span><i></i><span>Built to grow</span>
          </div>
        </div>

        <div className="heroVisual" aria-label="Operator at the centre of the ORVIA operating landscape">
          <div className="gridGlow"></div>
          <div className="operatorCard">
            <div className="personIcon">JM</div>
            <p>THE OPERATOR</p>
            <strong>Leads the business</strong>
          </div>
          <div className="orbit orbit1"><b>BRAND</b></div>
          <div className="orbit orbit2"><b>WEB</b></div>
          <div className="orbit orbit3"><b>SALES</b></div>
          <div className="orbit orbit4"><b>VOICE</b></div>
          <div className="orbit orbit5"><b>FINANCE</b></div>
          <div className="orbit orbit6"><b>AI TEAM</b></div>
          <div className="engineStrip"><span>ORVIA OPERATING LAYER</span><b>IRIS · HIVE · VITA · VERA</b></div>
        </div>
      </section>

      <section className="proofBand">
        <div className="shell proofGrid">
          <p>Not a course.</p><p>Not a template pack.</p><p>Not a franchise.</p><p>Not autonomous AI.</p><strong>A real business, with a serious operating system behind it.</strong>
        </div>
      </section>

      <section id="how" className="section shell">
        <div className="sectionIntro split">
          <div><div className="eyebrow"><span></span> CHOOSE YOUR ROUTE</div><h2>Start where you are.</h2></div>
          <p>Business in a Box is designed for more than one type of operator. The first decision is simply which route fits your starting point.</p>
        </div>
        <div className="routeGrid">
          {routes.map((r) => <article key={r.n} className="routeCard"><span>{r.n}</span><h3>{r.title}</h3><p>{r.text}</p><Link href="/apply">Start this route <Arrow /></Link></article>)}
        </div>
      </section>

      <section id="inside" className="section darkSection">
        <div className="shell">
          <div className="sectionIntro split lightText">
            <div><div className="eyebrow gold"><span></span> THE OPERATING LANDSCAPE</div><h2>Everything around the operator.</h2></div>
            <p>You spend more time on customers, leadership, delivery and relationships. ORVIA provides the joined-up infrastructure around the work.</p>
          </div>
          <div className="systemGrid">
            {systemItems.map(([title,text], i) => <article className="systemCard" key={title}><div className="miniIcon">{String(i+1).padStart(2,'0')}</div><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section shell">
        <div className="sectionIntro split">
          <div><div className="eyebrow"><span></span> 30 / 60 / 90</div><h2>Establish. Launch. Prove.</h2></div>
          <p>No vague “business support”. The early journey is structured around clear stages, evidence and review gates.</p>
        </div>
        <div className="timeline">
          {stages.map(([day,title,text]) => <article key={day}><div className="day">DAYS {day}</div><h3>{title}</h3><p>{text}</p><div className="line"></div></article>)}
        </div>
        <div className="decisionPanel"><div><small>90-DAY REVIEW</small><h3>GO. REWORK. STOP.</h3></div><p>The evidence comes back into the operating model so the next decision is based on what actually happened — not optimism.</p></div>
      </section>

      <section className="section pale">
        <div className="shell workspaceGrid">
          <div>
            <div className="eyebrow"><span></span> OPERATOR WORKSPACE</div>
            <h2>Your business team, in one place.</h2>
            <p className="lead">Operators do not need ORVIA&apos;s internal Command environment. They get a simple branded workspace focused on today&apos;s work, customers, sales, marketing, finance and approvals.</p>
            <Link href="/operator" className="textLink">View workspace concept <Arrow /></Link>
          </div>
          <div className="dashboardMock">
            <div className="dashTop"><span className="dots">● ● ●</span><strong>SADDLE &amp; SAGE</strong><span>Operator</span></div>
            <div className="dashBody">
              <aside><b>Today</b><span>Customers</span><span>Sales</span><span>Work</span><span>Marketing</span><span>Finance</span><span>AI Team</span></aside>
              <div className="dashContent"><small>GOOD MORNING</small><h3>Ask your business team</h3><div className="askBox">What needs my attention today? <b>→</b></div><div className="stats"><div><small>NEW LEADS</small><b>12</b></div><div><small>APPROVALS</small><b>4</b></div><div><small>FOLLOW-UPS</small><b>7</b></div></div><div className="worklist"><span><i></i>Website enquiry — quotation ready</span><span><i></i>Campaign creative — approval needed</span><span><i></i>Finance summary — weekly report prepared</span></div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section shell">
        <div className="sectionIntro split"><div><div className="eyebrow"><span></span> AI, WITH AUTHORITY LEFT IN THE RIGHT PLACE</div><h2>A team that prepares. Humans decide.</h2></div><p>IRIS coordinates specialist capability, but consequential judgement and accountability stay with authorised people.</p></div>
        <div className="agentGrid">{agents.map(([name,role,text]) => <article key={name}><div className={`agentBadge ${name.toLowerCase()}`}>{name[0]}</div><small>{name}</small><h3>{role}</h3><p>{text}</p></article>)}</div>
      </section>

      <section id="ventures" className="section ventures">
        <div className="shell">
          <div className="sectionIntro split lightText"><div><div className="eyebrow gold"><span></span> OUR VENTURES</div><h2>Independent brands.<br/>One operating engine.</h2></div><p>Business in a Box can sit beneath genuine venture identities, each with its own operator, market, customers and commercial model.</p></div>
          <div className="ventureGrid">{ventures.map(([name,sector,status],i)=><article key={name}><div className={`ventureArt v${i+1}`}><span>{name.split(' ').map(w=>w[0]).join('')}</span></div><small>{status}</small><h3>{name}</h3><p>{sector}</p><span className="powered">Operating landscape by ORVIA</span></article>)}</div>
        </div>
      </section>

      <section id="licensing" className="section shell ownership">
        <div className="sectionIntro split"><div><div className="eyebrow"><span></span> A CLEAN COMMERCIAL LINE</div><h2>You own the business.<br/>ORVIA owns the reusable engine.</h2></div><p>The licence defines exactly what is yours, what is licensed, what services are provided, how data is handled and what happens if the relationship ends.</p></div>
        <div className="ownershipGrid"><article><span className="who">THE OPERATOR</span><h3>Owns & leads</h3><ul><li>Operating company</li><li>Customer relationships</li><li>Trading activity</li><li>Local relationships</li><li>Service delivery</li><li>Business growth</li></ul></article><article className="orviaOwn"><span className="who">ORVIA</span><h3>Owns & licenses</h3><ul><li>Reusable operating architecture</li><li>Shared source code</li><li>AI-agent architecture</li><li>Reusable workflows & templates</li><li>Governance & assurance methods</li><li>Central platform improvements</li></ul></article></div>
      </section>

      <section className="section trustSection">
        <div className="shell trustGrid"><div><div className="eyebrow"><span></span> BUILT WITH BOUNDARIES</div><h2>Support without false promises.</h2></div><div className="boundaryList"><p><b>01</b> No guaranteed revenue or profit.</p><p><b>02</b> AI does not make final legal, financial, clinical or regulated decisions.</p><p><b>03</b> Each venture remains responsible for its own statutory obligations.</p><p><b>04</b> Data is segregated with controlled access, audit history and provenance.</p><p><b>05</b> Professional advisers remain responsible for regulated advice.</p></div></div>
      </section>

      <section className="finalCta shell">
        <div><div className="eyebrow gold"><span></span> READY TO BUILD?</div><h2>You run the business.<br/><em>We build and improve the system around it.</em></h2></div>
        <div><p>Tell us where you are starting from. We&apos;ll use that to shape the right discovery route — not auto-approve or auto-reject you.</p><Link href="/apply" className="primary goldBtn">BUILD MY BUSINESS <Arrow /></Link></div>
      </section>

      <footer><div className="shell footerGrid"><Mark/><div><strong>Explore</strong><a href="#how">How it works</a><a href="#inside">Operating landscape</a><a href="#ventures">Ventures</a></div><div><strong>Access</strong><Link href="/apply">Apply</Link><Link href="/operator">Operator workspace</Link></div><div><strong>ORVIA Oversight Ltd</strong><span>Licensed business infrastructure</span><span>Human-led. Evidence-aware.</span></div></div><div className="shell legal">© 2026 ORVIA Oversight Ltd. Business in a Box is a licensed operating model, not a franchise or guarantee of commercial success.</div></footer>
    </main>
  );
}
