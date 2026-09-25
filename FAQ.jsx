import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  ['How early should I apply for a Schengen visa?', 'We recommend starting 6–8 weeks before your intended travel date. Some consulates allow applications up to 6 months ahead, so earlier is often better — especially for summer and school holidays.'],
  ['Do you guarantee a visa approval?', 'No honest agency can guarantee a decision made by a consulate. What we can guarantee is careful preparation, clear advice, and support that helps you submit the strongest, most complete application possible.'],
  ['Can you help if I have been refused before?', 'Yes. We can review the previous refusal, explain what may have gone wrong, and help you build a more considered application. We will always give you a realistic view before you spend anything.'],
  ['Do you support applications from Dubai?', 'Absolutely. Our Dubai team supports UAE residents with document preparation, appointment guidance, insurance and practical application questions for all 29 Schengen destinations.'],
  ['What happens after I choose a package?', 'A specialist will contact you to understand your trip, confirm the right package and send a simple checklist. You will have a real point of contact throughout your application.'],
];
export default function FAQ() {
  const [open, setOpen] = useState(0);
  return <section className="fh-section soft-section" id="faqs"><div className="fh-container"><div className="fh-section-head"><div><div className="fh-eyebrow">Questions, answered properly</div><h2>Nothing left to guess.</h2></div><p>Still unsure? Ask us directly. We’d rather give you a clear answer than a sales pitch.</p></div><div className="faq-list">{faqs.map(([question, answer], index) => <div className="faq-item" key={question}><button className="faq-question" onClick={() => setOpen(open === index ? -1 : index)} aria-expanded={open === index} data-testid={`button-faq-${index}`}><span>{question}</span><ChevronDown size={19} style={{ transform: open === index ? 'rotate(180deg)' : 'none', transition: 'transform .2s' }} /></button>{open === index && <div className="faq-answer" role="region" data-testid={`answer-faq-${index}`}>{answer}</div>}</div>)}</div></div></section>;
}