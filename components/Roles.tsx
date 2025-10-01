import React from 'react';
import { ROLES_DATA } from '../constants';
import SectionWrapper from './SectionWrapper';
import { Role } from '../types';

const RoleCard: React.FC<{ role: Role }> = ({ role }) => (
  <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 text-center transform hover:-translate-y-2 transition-transform duration-300 shadow-lg hover:shadow-sky-500/20">
    <h3 className="text-2xl font-bold font-orbitron text-sky-400">{role.name}</h3>
    <p className="text-slate-400 mt-1">{role.subtitle}</p>
  </div>
);

const Roles: React.FC = () => {
  const twoPlayerCombinations: [Role, Role][] = [];
  if (ROLES_DATA.length >= 2) {
    for (let i = 0; i < ROLES_DATA.length; i++) {
      for (let j = i + 1; j < ROLES_DATA.length; j++) {
        twoPlayerCombinations.push([ROLES_DATA[i], ROLES_DATA[j]]);
      }
    }
  }

  return (
    <SectionWrapper title="Player Roles">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {ROLES_DATA.map((role, index) => (
          <RoleCard key={index} role={role} />
        ))}
      </div>
      <div className="mt-16">
        <h3 className="text-2xl sm:text-3xl font-bold text-center mb-2 font-orbitron text-sky-400 tracking-wide">
            Team Composition
        </h3>
        <div className="w-20 h-1 bg-sky-500 mx-auto mb-8 rounded"></div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto text-slate-300">
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                <h4 className="font-orbitron text-xl text-white text-center mb-4">
                    <span className="font-bold text-sky-400">2 Player</span> Mode
                </h4>
                <p className="text-center text-slate-400 mb-6">All role combinations are available for tactical duos:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                    {twoPlayerCombinations.map((combo, index) => (
                        <div key={index} className="bg-slate-700/50 p-2 rounded-md text-center">
                           <span className="font-medium">{combo[0].name}</span>
                           <span className="mx-2 text-sky-500 font-bold">&</span>
                           <span className="font-medium">{combo[1].name}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 flex flex-col justify-center">
                 <h4 className="font-orbitron text-xl text-white text-center mb-4">
                    <span className="font-bold text-sky-400">4 Player</span> Mode
                </h4>
                <p className="text-center text-slate-400">
                    A full squad utilizes all four specialists for maximum strategic depth, combining offense, reconnaissance, and support.
                </p>
            </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Roles;
