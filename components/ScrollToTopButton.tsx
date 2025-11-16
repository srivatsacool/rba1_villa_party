import React, { useState, useEffect } from 'react';
import { Icon } from './Icon';
import './ScrollToTopButton.css';

export const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <button
      className={`scroll-to-top-button glass-effect ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
    >
      <Icon name="arrowUp" className="w-8 h-8" />
    </button>
  );
};