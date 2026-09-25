import { useMemo, useState } from 'react';
import { Search, ArrowUpRight } from 'lucide-react';

const countries = ['Austria', 'Belgium', 'Bulgaria', 'Croatia', 'Czechia', 'Denmark', 'Estonia', 'Finland', 'France', 'Germany', 'Greece', 'Hungary', 'Iceland', 'Italy', 'Latvia', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Malta', 'Netherlands', 'Norway', 'Poland', 'Portugal', 'Romania', 'Slovakia', 'Slovenia', 'Spain', 'Sweden', 'Switzerland'];
const code = (name) => name === 'Czechia' ? 'CZ' : name.slice(0, 2).toUpperCase();

export default function CountryGrid() {
  const [query, setQuery] = useState('');
  const filtered = useMemo(() => countries.filter((country) => country.toLowerCase().includes(query.toLowerCase())), [query]);
  return <section className="fh-section" id="countries">
    <div className="fh-container">
      <div className="fh-section-head"><div><div className="fh-eyebrow">One visa, 29 possibilities</div><h2>Where will you begin?</h2></div><p>From first coffees in Paris to long lunches in Lisbon, we support applications for every Schengen destination.</p></div>
      <div className="country-tools"><div className="search-box"><Search size={17} /><input type="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search a country…" aria-label="Search Schengen countries" data-testid="input-country-search" /></div><span style={{ color: 'hsl(var(--muted-foreground))', fontSize: '.8rem' }}>{filtered.length} destinations</span></div>
      <div className="country-grid">{filtered.map((country) => <article className="country-card" key={country} data-testid={`card-country-${country.toLowerCase()}`}><span className="flag">{code(country)}</span><div><strong>{country}</strong><small>Schengen visa</small></div><ArrowUpRight size={15} style={{ marginLeft: 'auto', color: 'hsl(var(--secondary))' }} /></article>)}</div>
      {!filtered.length && <p style={{ color: 'hsl(var(--muted-foreground))', padding: '24px 0' }} data-testid="text-no-countries">No countries match that search. Try another name.</p>}
    </div>
  </section>;
}