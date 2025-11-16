import React from 'react';
import { Icon } from './Icon';
import './FloatingButton.css';

export const FloatingButton: React.FC = () => (
  <a href="#rsvp" className="floating-button glass-effect">
    <Icon name="mail" className="w-8 h-8" />
  </a>
);