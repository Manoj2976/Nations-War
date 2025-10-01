
import React from 'react';
import { DEVELOPERS_DATA } from '../constants';
import SectionWrapper from './SectionWrapper';
import { Developer } from '../types';

const DeveloperCard: React.FC<{ dev: Developer }> = ({ dev }) => (
  <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 shadow-lg flex flex-col sm:flex-row items-center text-center sm:text-left space-y-4 sm:space-y-0 sm:space-x-6">
    <img src={dev.imageUrl} alt={dev.name} className="w-24 h-24 rounded-full border-4 border-sky-500"/>
    <div>
      <h3 className="text-2xl font-bold font-orbitron text-white">{dev.name}</h3>
      <p className="text-slate-400">ID: {dev.id}</p>
      {dev.email && <p className="text-sky-400 break-all">{dev.email}</p>}
      {dev.phone && <p className="text-sky-400">{dev.phone}</p>}
    </div>
  </div>
);

const Contact: React.FC = () => {
  return (
    <SectionWrapper title="The Developers">
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {DEVELOPERS_DATA.map((dev, index) => (
          <DeveloperCard key={index} dev={dev} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Contact;
