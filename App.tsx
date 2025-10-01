
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Environments from './components/Environments';
import Theme from './components/Theme';
import Roles from './components/Roles';
import Weapons from './components/Weapons';
import Contact from './components/Contact';
import { SectionId } from './types';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SectionId>('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'environments':
        return <Environments />;
      case 'theme':
        return <Theme />;
      case 'roles':
        return <Roles />;
      case 'weapon_sector':
        return <Weapons />;
      case 'contact_us':
        return <Contact />;
      case 'home':
      default:
        return <Home setActiveSection={setActiveSection}/>;
    }
  };

  return (
    <div className="bg-slate-900 text-slate-200 min-h-screen flex flex-col">
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-0" 
           style={{backgroundImage: 'radial-gradient(circle at center, rgba(14, 165, 233, 0.1) 0%, transparent 40%)'}}>
      </div>
      <div className="relative z-10 flex flex-col flex-grow">
        <Header activeSection={activeSection} setActiveSection={setActiveSection} />
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-grow">
          {renderSection()}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
