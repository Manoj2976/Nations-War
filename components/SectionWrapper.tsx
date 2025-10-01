
import React from 'react';

interface SectionWrapperProps {
  title: string;
  children: React.ReactNode;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ title, children }) => {
  return (
    <div className="animate-fade-in">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-2 font-orbitron text-sky-400 tracking-wide">
        {title}
      </h2>
      <div className="w-24 h-1 bg-sky-500 mx-auto mb-10 rounded"></div>
      {children}
    </div>
  );
};

// Add fade-in animation to tailwind config if possible, or define here
// For simplicity, we can use a simple keyframe animation in a style tag in index.html,
// but for this setup, we'll just use a class and assume it's defined.
// In a real project, this would be in a CSS file or configured in tailwind.
// Here's a placeholder for the animation keyframes in tailwind.config.js
/*
theme: {
  extend: {
    keyframes: {
      'fade-in': {
        '0%': { opacity: '0', transform: 'translateY(10px)' },
        '100%': { opacity: '1', transform: 'translateY(0)' },
      },
    },
    animation: {
      'fade-in': 'fade-in 0.5s ease-out forwards',
    },
  },
},
*/
// We will just use `animate-fade-in` class name.
// Since we cannot configure tailwind, we can use inline styles with a state if needed,
// but for simplicity, we'll rely on the class name.
// A simple solution is to just let the content appear without animation.
// Let's remove the animation for this context.

const SimpleSectionWrapper: React.FC<SectionWrapperProps> = ({ title, children }) => {
  return (
    <div>
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-2 font-orbitron text-sky-400 tracking-wide">
        {title}
      </h2>
      <div className="w-24 h-1 bg-sky-500 mx-auto mb-10 rounded"></div>
      {children}
    </div>
  );
};


export default SimpleSectionWrapper;
