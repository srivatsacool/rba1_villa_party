import React from 'react';
import { Section } from '../Section';
import { GALLERY_IMAGES } from '../../constants';
import '../glass.css';

export const GallerySection: React.FC = () => (
  <Section id="gallery" className="glass-effect">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Explore The Villa</h2>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {GALLERY_IMAGES.map(image => (
        <div key={image.id} className={`${image.span} overflow-hidden rounded-lg group cursor-target`}>
          <img src={image.src} alt={image.alt} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 filter hover:grayscale" />
        </div>
      ))}
    </div>
  </Section>
);