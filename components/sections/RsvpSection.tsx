import React, { useState } from 'react';
import { Section } from '../Section';
import { Icon } from '../Icon';
import '../glass.css';

export const RsvpSection: React.FC = () => {
  return (
    <Section id="rsvp">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        Join The Party
      </h2>
      <p className="text-center text-secondary mb-12">
        Scan the QR code to join the WhatsApp group for updates.
      </p>
      <div className="max-w-sm mx-auto glass-effect p-8 rounded-lg">
        <img
          src="assests\WhatsApp_QR.jpg"
          alt="WhatsApp QR Code"
          className="w-full h-full object-contain"
        />
      </div>
    </Section>
  );
};