import React from 'react';
import { IconName } from '../types';

interface IconProps {
  name: IconName;
  className?: string;
}

// FIX: Use React.JSX.Element to explicitly scope JSX to the React import, resolving the "Cannot find namespace 'JSX'" error.
const ICONS: Record<IconName, React.JSX.Element> = {
  calendar: <path d="M8 2v4m8-4v4M3.5 20.5h17A1.5 1.5 0 0 0 22 19V6.5a1.5 1.5 0 0 0-1.5-1.5h-17A1.5 1.5 0 0 0 2 6.5V19a1.5 1.5 0 0 0 1.5 1.5Z" />,
  clock: <path d="M12 21a9 9 0 1 0-9-9 9 9 0 0 0 9 9Zm0-15v6l4.5 3" />,
  mapPin: <><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><path d="M12 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" /></>,
  shirt: <><path d="m6 2 4 4 2-4 2 4 4-4v18H6Z" /><path d="M14 14.5a2.5 2.5 0 0 0-4 0" /></>,
  arrowRight: <path d="M5 12h14m-7-7 7 7-7 7" />,
  chevronDown: <path d="m6 9 6 6 6-6" />,
  martini: <path d="M8 22h8M12 11v11M19 3l-7 8-7-8Z" />,
  music: <><path d="M9 18V5l12-2v13M9 18a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" /><path d="M21 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" /></>,
  swimmingPool: <><path d="M20 16.2c-1 .4-2.2.6-3.4.6-2.4 0-4.6-.9-6.2-2.5-1.8-1.7-3.1-4.2-2.7-6.8.2-1.3.7-2.5 1.5-3.5" /><path d="M12 20a8 8 0 0 0 8-8" /><path d="M8 11.2a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4Z" /><path d="M5 14.2a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4Z" /><path d="M11 5.2a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4Z" /></>,
  utensils: <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2M7 2v20M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Z" />,
  phone: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />,
  bus: <><path d="M8 6v6m7-6v6m-7-10h7m-9 4h11a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2Z" /><path d="M18 18h2a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2h-1M4 18h-2a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h1" /><path d="M10 18h4" /></>,
  mail: <><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></>,
  twitter: <path d="M22 4s-.7 2.1-2 3.4c1.6 1.4 3.3 4.9 3.3 4.9-6.1-1.4-12.1-4.1-12.1-4.1-1.7 2.7.5 5.3.5 5.3-1.4 0-2.8-.8-2.8-.8.7 2.3 2.5 4.1 4.5 4.5-2.1.7-4.1 1-4.1 1 1.5 2.5 4.1 4.1 7.1 3.5 4.6 2.5 10.1 0 10.1 0-3.3-2.7-3.3-3.3-3.3-3.3.5-1.4 1.1-2.1 1.1-2.1Z" />,
  instagram: <><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></>,
  facebook: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />,
  users: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></>,
  bed: <path d="M2 3h20v12H2zm2 5h16M2 15h20v3H2z" />,
  kitchen: <path d="M2 3h20v18H2zm5 5v8m5-8v8m5-8v8" />,
  sofa: <path d="M2 8h20v8H2zm2 0v-3a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v3" />,
  bath: <path d="M4 4h16v16H4zm2 4h12m-12 4h12m-12 4h12" />,
  balcony: <path d="M4 4h16v2H4zm0 14h16v2H4zm2-12h2v10H6zm10 0h2v10h-2z" />,
  terrace: <path d="M4 4h16v2H4zm0 14h16v2H4zm2-12h12v10H6z" />,
  fridge: <path d="M4 2h16v20H4zm2 4h12m-12 8h12M8 8v4m8-4v4" />,
  geyser: <path d="M12 2a4 4 0 0 0-4 4v8a4 4 0 0 0 8 0V6a4 4 0 0 0-4-4zm-2 6h4" />,
  tv: <path d="M2 6h20v12H2zm4 14h12v2H6z" />,
  wifi: <path d="M12 3a9 9 0 0 1 9 9m-2 0a7 7 0 0 0-7-7m-2 0a5 5 0 0 0-5 5m-2 0a3 3 0 0 1 3-3m-1 0a1 1 0 0 1 1-1" />,
  ac: <path d="M2 8h20M3 12h18m-1 4h-2m-12 0H4m15-8H6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1z" />,
  table: <path d="M2 8h20v2H2zm4 4h12v10H6z" />,
  mattress: <path d="M2 8h20v8H2z" />,
  water: <path d="M12 2a8 8 0 0 0-8 8c0 5 8 12 8 12s8-7 8-12a8 8 0 0 0-8-8zm0 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />,
  dresser: <path d="M4 4h16v2H4zm0 14h16v2H4zm2-12h12v10H6zM10 8h4v4h-4z" />,
  cupboard: <path d="M4 2h16v20H4zm2 4h12M8 8v10m8-10v10" />,
  inverter: <path d="M2 8h8v8H2zm12 0h8v8h-8zM6 4h12v2H6zm0 12h12v2H6z" />,
  cctv: <path d="M12 2a6 6 0 0 0-6 6v4H4v4h16v-4h-2V8a6 6 0 0 0-6-6zm0 2a4 4 0 0 1 4 4v4H8V8a4 4 0 0 1 4-4z" />,
  parking: <path d="M4 4h8v16H4zm10 0h8v16h-8zM6 6h4v4H6zm10 0h4v4h-4z" />,
  lawn: <path d="M2 18h20v2H2zm2-2h16v-2H4zm2-2h12v-2H6zm2-2h8v-2H8zm2-2h4v-2h-4z" />,
  caretaker: <path d="M12 2a5 5 0 0 0-5 5a5 5 0 0 0 5 5a5 5 0 0 0 5-5a5 5 0 0 0-5-5zm0 8a3 3 0 1 1 0-6a3 3 0 0 1 0 6zm-7 8h14v2H5z" />,
  carrom: <path d="M2 2h20v20H2zm4 4h12v12H6zm2 2h8v8H8z" />,
  dart: <path d="M12 2l4 4-4 4-4-4zm0 8l4 4-4 4-4-4z" />,
  boardGame: <path d="M2 2h20v20H2zm4 4h4v4H6zm6 0h4v4h-4zm-6 6h4v4H6zm6 6h4v4h-4z" />,
  badminton: <path d="M12 2l4 4-10 10-4-4zm-6 10l4 4" />,
  cricket: <path d="M12 2a10 10 0 1 0 0 20a10 10 0 0 0 0-20zm-2 5h4v10h-4z" />,
  football: <path d="M12 2a10 10 0 1 0 0 20a10 10 0 0 0 0-20zm-2 5l-2 5h8l-2-5z" />,
  chess: <path d="M2 2h20v20H2zm4 4h2v2H6zm4 0h2v2h-2zm4 0h2v2h-2zm-8 4h2v2H6zm4 0h2v2h-2zm4 0h2v2h-2zm-8 4h2v2H6zm4 0h2v2h-2zm4 0h2v2h-2z" />,
  basketball: <path d="M12 2a10 10 0 1 0 0 20a10 10 0 0 0 0-20zm-2 5h4v5h-4zm0 6h4v4h-4z" />,
  volleyball: <path d="M12 2a10 10 0 1 0 0 20a10 10 0 0 0 0-20zm-2 5h4v5h-4zm0 6h4v4h-4z" />,
  bingo: <path d="M2 2h20v20H2zm4 4h2v2H6zm4 0h2v2h-2zm4 0h2v2h-2zm-8 4h2v2H6zm4 0h2v2h-2zm4 0h2v2h-2zm-8 4h2v2H6zm4 0h2v2h-2zm4 0h2v2h-2z" />,
  cards: <path d="M2 6h8v12H2zm10 0h8v12h-8z" />,
  swing: <path d="M12 2l4 4h-8zm0 18l-4-4h8zM4 8h16v8H4z" />,
  hulaHoop: <path d="M12 2a10 10 0 1 0 0 20a10 10 0 0 0 0-20zm0 2a8 8 0 1 1 0 16a8 8 0 0 1 0-16z" />,
  trampoline: <path d="M4 12h16M6 12l4 4m4-4l4 4" />,
  speaker: <path d="M6 2h12v20H6zm2 4h8v12H8z" />,
  karaoke: <path d="M12 2a4 4 0 0 0-4 4v4a4 4 0 0 0 8 0V6a4 4 0 0 0-4-4zm-6 8H2v6h4zm16 0h-4v6h4z" />,
  hookah: <path d="M12 2a6 6 0 0 0-6 6v8h12V8a6 6 0 0 0-6-6zm-2 10h4v2h-4z" />,
  bbq: <path d="M12 2a4 4 0 0 0-4 4v12h8V6a4 4 0 0 0-4-4zm-2 6h4m-4 4h4m-4 4h4" />,
  location: <path d="M12 2a8 8 0 0 0-8 8c0 5 8 12 8 12s8-7 8-12a8 8 0 0 0-8-8zm0 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />,
  meal: <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2M7 2v20M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Z" />,
  pets: <path d="M12 2a6 6 0 0 0-6 6v10h12V8a6 6 0 0 0-6-6zm-4 6a2 2 0 1 1 4 0a2 2 0 0 1-4 0z" />,
  info: <path d="M12 2a10 10 0 1 0 0 20a10 10 0 0 0 0-20zm-1 5h2v2h-2zm0 4h2v6h-2z" />,
};

export const Icon: React.FC<IconProps> = ({ name, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {ICONS[name]}
    </svg>
  );
};