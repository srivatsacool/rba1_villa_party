import React from 'react';
import { Icon } from '../Icon';
import '../glass.css';

export const Footer: React.FC = () => (
    <footer className="glass-effect py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-8 text-center text-secondary">
            <h3 className="text-xl font-bold text-white mb-2">Samriddhi Corp</h3>
            <p className="mb-4">Crafting Unforgettable Experiences</p>
            <div className="flex justify-center gap-6 mb-6">
                <a href="#" className="hover:text-accent transition-colors cursor-target"><Icon name="twitter" /></a>
                <a href="#" className="hover:text-accent transition-colors cursor-target"><Icon name="instagram" /></a>
                <a href="#" className="hover:text-accent transition-colors cursor-target"><Icon name="facebook" /></a>
            </div>
            <p className="text-sm">&copy; {new Date().getFullYear()} Samriddhi Corp. All Rights Reserved.</p>
            <p className="text-xs mt-1">
                <a href="#" className="hover:text-white cursor-target">Privacy Policy</a> | <a href="#" className="hover:text-white cursor-target">Terms of Service</a>
            </p>
        </div>
    </footer>
);