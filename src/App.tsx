import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { Doctors } from './pages/Doctors';
import { PatientJourney } from './pages/PatientJourney';
import { Contact } from './pages/Contact';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col selection:bg-brand-accent/30">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/patient-journey" element={<PatientJourney />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
