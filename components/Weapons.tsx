
import React from 'react';
import { WEAPONS_DATA } from '../constants';
import SectionWrapper from './SectionWrapper';
import { WeaponProgression } from '../types';

const ArrowRightIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);


const WeaponCard: React.FC<{ item: WeaponProgression }> = ({ item }) => (
  <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 shadow-lg w-full">
    <h3 className="text-2xl font-bold font-orbitron text-sky-400 mb-4">{item.environment}</h3>
    <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-2 text-slate-300">
      {item.progression.map((weapon, index) => (
        <React.Fragment key={index}>
          <div className="bg-slate-700 px-3 py-1 rounded text-center">{weapon}</div>
          {index < item.progression.length - 1 && (
            <ArrowRightIcon className="w-6 h-6 text-sky-500 mx-auto sm:mx-0" />
          )}
        </React.Fragment>
      ))}
    </div>
  </div>
);

const Weapons: React.FC = () => {
  return (
    <SectionWrapper title="Weapon Sector">
      <div className="flex flex-col items-center space-y-8 max-w-4xl mx-auto">
        {WEAPONS_DATA.map((item, index) => (
          <WeaponCard key={index} item={item} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Weapons;
