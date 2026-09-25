import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroForm from '@/components/HeroForm';
import CountryGrid from '@/components/CountryGrid';
import PricingPackages from '@/components/PricingPackages';
import StatsSection from '@/components/StatsSection';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import './index.css';

function FastHolidaysPage() {
  const [notice, setNotice] = useState('');

  useEffect(() => {
    document.title = 'Fast Holidays | Clear Schengen visa support';
    let description = document.querySelector('meta[name="description"]');
    if (!description) {
      description = document.createElement('meta');
      description.setAttribute('name', 'description');
      document.head.appendChild(description);
    }
    description.setAttribute('content', 'Personal, practical Schengen visa support and flight search for travellers in the UK and Dubai.');
  }, []);

  const notify = (message: string) => {
    setNotice(message);
    window.setTimeout(() => setNotice(''), 4200);
  };

  return <div>
    <Navbar onNotify={notify} />
    <main>
      <HeroForm onNotify={notify} />
      <CountryGrid />
      <PricingPackages onNotify={notify} />
      <StatsSection />
      <Testimonials />
      <FAQ />
    </main>
    <Footer onNotify={notify} />
    {notice && <div className="toast-note" role="status" data-testid="status-global-notice">{notice}</div>}
  </div>;
}

export default function App() {
  return <FastHolidaysPage />;
}