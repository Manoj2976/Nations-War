
import React from 'react';
import { ENVIRONMENTS_DATA } from '../constants';
import SectionWrapper from './SectionWrapper';
import { Environment } from '../types';

const EnvironmentCard: React.FC<{ environment: Environment }> = ({ environment }) => (
  <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 text-center transform hover:-translate-y-2 transition-transform duration-300 shadow-lg hover:shadow-sky-500/20">
    <h3 className="text-2xl font-bold font-orbitron text-sky-400">{environment.name}</h3>
    <p className="text-slate-400 mt-1 mb-3 italic">{environment.subtitle}</p>
    <p className="text-slate-300">{environment.details}</p>
  </div>
);

const Environments: React.FC = () => {
  return (
    <SectionWrapper title="Environments">
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {ENVIRONMENTS_DATA.map((env, index) => (
          <EnvironmentCard key={index} environment={env} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Environments;
