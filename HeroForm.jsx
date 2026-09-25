import { useState } from 'react';
import { ArrowRight, CheckCircle2, Search, ShieldCheck, Sparkles } from 'lucide-react';

const countries = ['United Kingdom', 'India', 'United Arab Emirates', 'Pakistan', 'Nigeria', 'South Africa', 'Bangladesh', 'United States', 'Australia', 'Canada'];
const destinations = ['France', 'Italy', 'Spain', 'Greece', 'Germany', 'Netherlands', 'Switzerland', 'Portugal', 'Austria', 'Belgium'];

export default function HeroForm({ onNotify }) {
  const [tab, setTab] = useState('visa');
  const [message, setMessage] = useState('');
  const [visa, setVisa] = useState({ nationality: '', destination: '', month: '' });
  const [flight, setFlight] = useState({ from: 'London (LHR)', to: 'Dubai (DXB)', depart: '', returnDate: '', passengers: '1 adult' });
  const submit = (e, type) => {
    e.preventDefault();
    setMessage(type === 'visa'
      ? `Great — we can help with your ${visa.destination || 'Schengen'} visa journey. A specialist will contact you today.`
      : `Flight search request received for ${flight.from || 'your departure'} to ${flight.to || 'your destination'}. We’ll send options shortly.`);
    onNotify?.('Request received — your travel specialist is on it.');
  };
  return (
    <section className="hero-shell" id="top">
      <div className="fh-container hero-content">
        <div className="hero-copy">
          <div className="fh-eyebrow"><Sparkles size={14} style={{ verticalAlign: 'middle', marginRight: 6 }} /> Travel, without the runaround</div>
          <h1>Your next chapter starts with a visa.</h1>
          <p>Personal, practical Schengen visa support for travellers in the UK and Dubai. We make the paperwork clear, the process calmer, and your departure feel closer.</p>
        </div>
        <div className="hero-form" id="flight-search">
          <div className="tab-list" role="tablist" aria-label="Travel services">
            <button className={`tab-button ${tab === 'visa' ? 'active' : ''}`} onClick={() => { setTab('visa'); setMessage(''); }} role="tab" aria-selected={tab === 'visa'} data-testid="tab-schengen-visa">Schengen Visa Application</button>
            <button className={`tab-button ${tab === 'flight' ? 'active' : ''}`} onClick={() => { setTab('flight'); setMessage(''); }} role="tab" aria-selected={tab === 'flight'} data-testid="tab-flight-search">Flight Search</button>
          </div>
          {tab === 'visa' ? <form onSubmit={(e) => submit(e, 'visa')}>
            <div className="form-grid">
              <div className="form-field"><label htmlFor="nationality">I am travelling from</label><input id="nationality" list="nationalities" required value={visa.nationality} onChange={(e) => setVisa({ ...visa, nationality: e.target.value })} placeholder="Choose nationality" data-testid="input-nationality" /><datalist id="nationalities">{countries.map((c) => <option key={c} value={c} />)}</datalist></div>
              <div className="form-field"><label htmlFor="destination">My destination is</label><input id="destination" list="destinations" required value={visa.destination} onChange={(e) => setVisa({ ...visa, destination: e.target.value })} placeholder="Choose country" data-testid="input-destination" /><datalist id="destinations">{destinations.map((c) => <option key={c} value={c} />)}</datalist></div>
              <div className="form-field"><label htmlFor="travel-month">Travel month</label><input id="travel-month" type="month" required value={visa.month} onChange={(e) => setVisa({ ...visa, month: e.target.value })} data-testid="input-travel-month" /></div>
              <button className="form-submit" type="submit" data-testid="button-visa-submit">Check my options <ArrowRight size={16} style={{ verticalAlign: 'middle', marginLeft: 5 }} /></button>
            </div>
          </form> : <form onSubmit={(e) => submit(e, 'flight')}>
            <div className="form-grid">
              <div className="form-field"><label htmlFor="from">From</label><input id="from" required value={flight.from} onChange={(e) => setFlight({ ...flight, from: e.target.value })} placeholder="London (LHR)" data-testid="input-flight-from" /></div>
              <div className="form-field"><label htmlFor="to">To</label><input id="to" required value={flight.to} onChange={(e) => setFlight({ ...flight, to: e.target.value })} placeholder="Dubai (DXB)" data-testid="input-flight-to" /></div>
              <div className="form-field"><label htmlFor="depart">Depart</label><input id="depart" type="date" required value={flight.depart} onChange={(e) => setFlight({ ...flight, depart: e.target.value })} data-testid="input-depart-date" /></div>
              <div className="form-field"><label htmlFor="return-date">Return</label><input id="return-date" type="date" value={flight.returnDate} onChange={(e) => setFlight({ ...flight, returnDate: e.target.value })} data-testid="input-return-date" /></div>
              <div className="form-field"><label htmlFor="passengers">Travellers</label><select id="passengers" value={flight.passengers} onChange={(e) => setFlight({ ...flight, passengers: e.target.value })} data-testid="select-passengers"><option>1 adult</option><option>2 adults</option><option>2 adults, 1 child</option><option>Family of 4</option></select></div>
              <button className="form-submit" type="submit" data-testid="button-flight-submit"><Search size={16} style={{ verticalAlign: 'middle', marginRight: 5 }} /> Find flights</button>
            </div>
          </form>}
          {message && <div className="form-message" role="status" data-testid="status-form-success"><CheckCircle2 size={16} style={{ verticalAlign: 'middle', marginRight: 6 }} />{message}</div>}
        </div>
        <div className="trust-row"><span><ShieldCheck size={16} /> 4.9/5 from 1,200+ travellers</span><span><CheckCircle2 size={16} /> Transparent pricing, no surprises</span><span><CheckCircle2 size={16} /> Human support all the way</span></div>
      </div>
    </section>
  );
}