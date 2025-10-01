
import React from 'react';
import { THEME_DATA } from '../constants';
import SectionWrapper from './SectionWrapper';
import { ThemeItem } from '../types';

const ThemeCard: React.FC<{ item: ThemeItem }> = ({ item }) => (
  <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 shadow-lg">
    <h3 className="text-3xl font-bold font-orbitron text-center text-sky-400 mb-4">{item.name}</h3>
    <p className="text-slate-300 text-center leading-relaxed">{item.description}</p>
  </div>
);

const Theme: React.FC = () => {
  return (
    <SectionWrapper title="Game Theme">
      <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
        {THEME_DATA.map((item, index) => (
          <ThemeCard key={index} item={item} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Theme;
