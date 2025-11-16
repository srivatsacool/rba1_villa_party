import React, { useState } from 'react';
import { Section } from '../Section';
import { Icon } from '../Icon';
import { CULINARY_MENU } from '../../constants';
import { MenuCategory, MenuItem } from '../../types';
import '../glass.css';

const AccordionItem: React.FC<{ category: MenuCategory, isOpen: boolean, onClick: () => void }> = ({ category, isOpen, onClick }) => {
    const getTypeColor = (type: MenuItem['type']) => {
        switch(type) {
            case 'veg': return 'border-green-500';
            case 'non-veg': return 'border-red-500';
            default: return 'border-blue-500';
        }
    };

    return (
        <div className="border-b border-secondary/20">
            <button onClick={onClick} className="w-full flex justify-between items-center py-5 text-left cursor-target">
                <span className="text-xl font-semibold">{category.title}</span>
                <Icon name="chevronDown" className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                <div className="overflow-hidden">
                    <div className="pb-5 grid grid-cols-1 md:grid-cols-2 gap-4">
                        {category.items.map((item, index) => (
                            <div key={index} className={`p-4 border-l-4 ${getTypeColor(item.type)} glass-effect rounded-r-md`}>
                                <h4 className="font-bold">{item.name}</h4>
                                <p className="text-sm text-secondary">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export const CulinarySection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section id="menu">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Food Menu</h2>
      <div className="max-w-3xl mx-auto">
        {CULINARY_MENU.map((category, index) => (
          <AccordionItem key={index} category={category} isOpen={openIndex === index} onClick={() => handleToggle(index)} />
        ))}
      </div>
    </Section>
  );
};