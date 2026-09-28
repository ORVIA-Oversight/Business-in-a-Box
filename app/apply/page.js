'use client';
import Link from 'next/link';
import { useState } from 'react';

const options = [
  ['idea','I have a business idea','I want help turning an idea into a viable operating business.'],
  ['existing','I already run a business','I want a better operating system around an existing company.'],
  ['venture','I want to operate an ORVIA venture','I want to lead an ORVIA-developed opportunity.'],
  ['explore','I want to explore opportunities','I am open to the right business opportunity.'],
];

export default function Apply(){
  const [route,setRoute]=useState('idea');
  const [submitted,setSubmitted]=useState(false);
  if(submitted) return <main className="applyPage"><div className="applyShell success"><div className="successMark">✓</div><div className="eyebrow"><span></span> APPLICATION CAPTURED</div><h1>That&apos;s the starting point.</h1><p>This prototype demonstrates the intended journey. In production, the application would create a controlled record for IRIS to summarise before human commercial review.</p><Link className="primary" href="/">Return to site ↗</Link></div></main>
  return <main className="applyPage"><header className="simpleHead"><Link href="/" className="back">← ORVIA Business in a Box</Link><span>APPLICATION / DISCOVERY</span></header><div className="applyShell"><div className="eyebrow"><span></span> START YOUR ROUTE</div><h1>Tell us where you&apos;re starting.</h1><p className="lead">There is no automatic approval or rejection. This gives the commercial team enough context to prepare a useful first conversation.</p>
  <div className="choiceGrid">{options.map(([id,title,text])=><button key={id} className={route===id?'choice active':'choice'} onClick={()=>setRoute(id)}><span className="radio"></span><strong>{title}</strong><small>{text}</small></button>)}</div>
  <form onSubmit={(e)=>{e.preventDefault();setSubmitted(true)}} className="applyForm">
    <label><span>Your name</span><input required placeholder="Full name"/></label>
    <label><span>Email</span><input required type="email" placeholder="you@example.co.uk"/></label>
    <label><span>Location</span><input required placeholder="Town / region"/></label>
    <label><span>Current role or business</span><input placeholder="What do you do today?"/></label>
    <label className="wide"><span>What are you trying to build or change?</span><textarea required rows="5" placeholder="Give us the useful version — sector, idea, customers, what is already in place, and where you are stuck."></textarea></label>
    <label><span>Time available</span><select defaultValue=""><option value="" disabled>Select</option><option>Under 10 hours/week</option><option>10–20 hours/week</option><option>20–35 hours/week</option><option>Full-time focus</option></select></label>
    <label><span>Capital position</span><select defaultValue=""><option value="" disabled>Select</option><option>Bootstrapping / minimal capital</option><option>Under £5,000</option><option>£5,000–£20,000</option><option>£20,000+</option><option>Prefer to discuss</option></select></label>
    <label className="wide check"><input type="checkbox" required/><span>I understand Business in a Box is a licensed operating model and does not guarantee revenue, profit or commercial success.</span></label>
    <button className="primary submit" type="submit">SUBMIT FOR HUMAN REVIEW ↗</button>
  </form></div></main>
}
