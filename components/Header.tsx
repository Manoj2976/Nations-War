
import React from 'react';
import { SectionId, NavItem } from '../types';
import { NAVIGATION_ITEMS } from '../constants';

interface HeaderProps {
  activeSection: SectionId;
  setActiveSection: (section: SectionId) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, setActiveSection }) => {
  return (
    <header className="bg-slate-900/50 backdrop-blur-sm sticky top-0 z-20 border-b border-slate-700/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div 
            className="text-2xl md:text-3xl font-bold tracking-wider text-sky-400 cursor-pointer"
            onClick={() => setActiveSection('home')}
          >
            Nations<span className="text-slate-300">@</span>War
          </div>
          <nav className="hidden md:flex items-center space-x-2">
            {NAVIGATION_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  activeSection === item.id
                    ? 'bg-sky-500 text-white shadow-lg'
                    : 'text-slate-300 hover:bg-slate-700 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
          <div className="md:hidden">
            {/* Mobile menu button can be added here */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
