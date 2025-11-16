import React from 'react';
import { Section } from '../Section';
import { Icon } from '../Icon';
import { IMPORTANT_INFO } from '../../constants';
import '../glass.css';

export const InfoSection: React.FC = () => (
    <Section id="info">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Event Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {IMPORTANT_INFO.map((info, index) => (
                <div key={index} className="flex items-start gap-4 p-6 glass-effect rounded-lg cursor-target">
                    <Icon name={info.icon} className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                    <div>
                        <h3 className="text-xl font-bold mb-1">{info.title}</h3>
                        <p className="text-secondary">{info.details}</p>
                    </div>
                </div>
            ))}
        </div>
    </Section>
);