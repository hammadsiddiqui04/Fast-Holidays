import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const reviews = [
  { name: 'Nadia A.', city: 'London', text: 'I was nervous about getting my first Schengen visa. Fast Holidays checked every page with me and made the whole thing feel manageable. France here I come.', initials: 'NA' },
  { name: 'Omar K.', city: 'Dubai', text: 'Clear answers, no jargon, no disappearing act. They helped our family prepare everything properly and kept us updated throughout.', initials: 'OK' },
  { name: 'Sana R.', city: 'Manchester', text: 'The best part was having a real person to ask. My documents were reviewed quickly and my appointment went smoothly.', initials: 'SR' },
  { name: 'Marcus D.', city: 'Birmingham', text: 'Professional without being cold. The checklist was excellent and the team spotted a small detail I would have missed.', initials: 'MD' },
  { name: 'Leila H.', city: 'Abu Dhabi', text: 'We had a tight timeline and Fast Holidays gave us a sensible plan on day one. I would happily recommend them.', initials: 'LH' },
];
function Stars() { return <div className="stars" aria-label="5 stars">{[1, 2, 3, 4, 5].map((i) => <Star key={i} size={14} fill="currentColor" />)}</div>; }
export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const visible = [reviews[index], reviews[(index + 1) % reviews.length]];
  return <section className="fh-section" id="reviews"><div className="fh-container"><div className="fh-section-head"><div><div className="fh-eyebrow">Real words, real journeys</div><h2>People remember how you made it feel.</h2></div><p>Our Google Reviews are full of the details that matter: clarity, patience, and a team that answers.</p></div><div className="review-grid"><div className="review-intro"><div><Quote size={29} color="#72d7c0" /><h3>Excellent<br />on Google.</h3><Stars /></div><div><strong>4.9 / 5</strong><div style={{ color: 'rgba(255,255,255,.62)', fontSize: '.78rem', marginTop: 4 }}>Based on 1,200+ reviews</div><div className="slider-controls"><button className="icon-button" onClick={() => setIndex((index - 1 + reviews.length) % reviews.length)} aria-label="Previous review" data-testid="button-previous-review"><ChevronLeft size={18} /></button><button className="icon-button" onClick={() => setIndex((index + 1) % reviews.length)} aria-label="Next review" data-testid="button-next-review"><ChevronRight size={18} /></button></div></div></div>{visible.map((review) => <article className="review-card" key={review.name} data-testid={`review-${review.initials}`}><Stars /><p>“{review.text}”</p><div className="review-author"><span className="avatar">{review.initials}</span><div><strong>{review.name}</strong><small>{review.city} · Google review</small></div></div></article>)}</div></div></section>;
}