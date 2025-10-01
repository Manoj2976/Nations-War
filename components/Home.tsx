import React from 'react';
import { SectionId } from '../types';
import { NAVIGATION_ITEMS } from '../constants';

interface HomeProps {
  setActiveSection: (section: SectionId) => void;
}

const Home: React.FC<HomeProps> = ({ setActiveSection }) => {
  const navButtonClasses = "w-full sm:w-64 px-8 py-6 bg-slate-800/50 border border-slate-700 rounded-lg text-lg font-orbitron text-slate-200 hover:bg-sky-500 hover:text-white hover:border-sky-500 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-sky-500/30";

  return (
    <div className="flex flex-col items-center justify-center text-center py-8 px-4">
      
      <h1 className="text-4xl md:text-5xl font-bold font-orbitron tracking-wider text-sky-400 drop-shadow-lg">
        NATIONS AT WAR
      </h1>
      <p className="text-lg md:text-xl font-semibold text-slate-300 mt-2 mb-10">
        # The Role-Playing Multiplayer Game
      </p>

      <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-center max-w-7xl mx-auto mb-16">
        <div className="md:col-span-3">
          <img 
            src="https://picsum.photos/seed/teampic/800/450" 
            alt="A team of soldiers in a futuristic setting" 
            className="rounded-lg shadow-2xl shadow-sky-900/50 border-4 border-slate-700 object-cover w-full"
          />
        </div>
        <div className="md:col-span-2 text-left bg-slate-800/50 p-6 rounded-lg border border-slate-700 h-full flex flex-col justify-center">
            <h2 className="text-2xl font-orbitron text-sky-400 mb-3">Game Background</h2>
            <p className="text-slate-300 leading-relaxed">
              In a world torn by conflict, two dominant nations vie for control over the last remaining resources. As an elite operative, you must choose your allegiance and fight for your nation's survival through desolate ruins, high-tech bases, and lands of mystical duality.
            </p>
        </div>
      </div>

      <div className="flex flex-col items-center gap-6 w-full max-w-5xl">
        <div className="flex flex-col sm:flex-row justify-center gap-6 w-full">
            {NAVIGATION_ITEMS.slice(0, 3).map(item => (
                <button key={item.id} onClick={() => setActiveSection(item.id)} className={navButtonClasses}>
                    {item.label}
                </button>
            ))}
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-6 w-full">
            {NAVIGATION_ITEMS.slice(3, 5).map(item => (
                <button key={item.id} onClick={() => setActiveSection(item.id)} className={navButtonClasses}>
                    {item.label}
                </button>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;