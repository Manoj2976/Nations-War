
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900/50 mt-auto border-t border-slate-700/50 py-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-400 text-sm">
        <p>&copy; {new Date().getFullYear()} Nations at War. Developed by Manoj & Prasad.</p>
      </div>
    </footer>
  );
};

export default Footer;
