import React from 'react';
import { Section } from '../Section';
import { Icon } from '../Icon';
import { AMENITIES } from '../../constants';
import '../glass.css';

export const AmenitiesSection: React.FC = () => (
  <Section id="amenities">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Villa Amenities & Games</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {AMENITIES.map((amenity, index) => (
        <div key={index} className="group glass-effect p-8 rounded-lg text-center transform hover:-translate-y-2 transition-transform duration-300 cursor-target">
          <Icon name={amenity.icon} className="w-12 h-12 mx-auto text-accent mb-4 transition-transform duration-300 group-hover:scale-110" />
          <h3 className="text-xl font-bold mb-2">{amenity.name}</h3>
          <p className="text-secondary">{amenity.description}</p>
        </div>
      ))}
    </div>
  </Section>
);