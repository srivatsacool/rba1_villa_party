import React, { useMemo } from 'react';
import { Icon } from '../Icon';
import '../glass.css';

export const InfoBar: React.FC = () => {
    const calendarLink = useMemo(() => {
        const title = encodeURIComponent("Welingkar MBA Villa Party");
        const date = "20251129T190000/20251130T020000";
        const details = encodeURIComponent("An Exclusive Evening of Luxury and Networking at Megastar Villa, Lonavala. Dress Code: Smart Casual.");
        const location = encodeURIComponent("Megastar Villa, Lonavala");
        return `https://www.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${date}&details=${details}&location=${location}`;
    }, []);

    return (
        <div className="sticky top-0 z-50 glass-effect shadow-lg shadow-accent/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <span className="text-white font-bold text-lg">Villa Party</span>
                    </div>
                    <div className="hidden md:flex items-center space-x-6 text-sm">
                        <div className="flex items-center gap-2"><Icon name="calendar" className="text-accent" /><span>Nov 29, 2025</span></div>
                        <div className="flex items-center gap-2"><Icon name="clock" className="text-accent" /><span>7:00 PM onwards</span></div>
                        <div className="flex items-center gap-2"><Icon name="mapPin" className="text-accent" /><span>Megastar Villa, Lonavala</span></div>
                        <a href={calendarLink} target="_blank" rel="noopener noreferrer" className="bg-accent text-background font-semibold px-4 py-2 rounded-md text-xs hover:bg-white transition-colors duration-300 cursor-target">Add to Calendar</a>
                    </div>
                </div>
            </div>
        </div>
    );
};