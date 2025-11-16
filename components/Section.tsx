import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const Section: React.FC<SectionProps> = ({ children, className = '', id }) => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
  return (
    <section ref={ref} id={id} className={`w-full max-w-7xl mx-auto py-16 px-6 md:py-24 md:px-8 ${className}`}>
      <div className={`scroll-animate ${isVisible ? 'visible' : ''}`}>
        {children}
      </div>
    </section>
  );
};
