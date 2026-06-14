import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { RouteTransition } from './components/RouteTransition';
import { NewsTicker } from './components/NewsTicker';

// Pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Downloads } from './pages/Downloads';
import { Gallery } from './pages/Gallery';
import { Contact } from './pages/Contact';

import './App.css';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <RouteTransition>
          <div className="flex flex-col min-h-screen w-full">
            <Navbar />
            {/* Global News Ticker immediately below Navbar */}
            <NewsTicker />
            
            <main className="flex-grow w-full">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                {/* Legacy route fallback */}
                <Route path="/board-members" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/downloads" element={<Downloads />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
            <Footer />
            <WhatsAppButton />
          </div>
        </RouteTransition>
      </Router>
    </HelmetProvider>
  );
}

export default App;
