export interface Amenity {
  // FIX: Use IconName for type safety instead of string.
  icon: IconName;
  name: string;
  description: string;
}

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  span: string;
}

export interface MenuItem {
  name: string;
  type: 'veg' | 'non-veg' | 'drink';
  description: string;
}

export interface MenuCategory {
  title: string;
  items: MenuItem[];
}

export interface InfoItem {
  // FIX: Use IconName for type safety instead of string.
  icon: IconName;
  title: string;
  details: string;
}

export type IconName =
  | 'calendar' | 'clock' | 'mapPin' | 'shirt' | 'arrowRight' | 'chevronDown'
  | 'martini' | 'music' | 'swimmingPool' | 'utensils' | 'phone' | 'bus'
  | 'mail' | 'twitter' | 'instagram' | 'facebook' | 'users' | 'bed' | 'kitchen'
  | 'sofa' | 'bath' | 'balcony' | 'terrace' | 'fridge' | 'geyser' | 'tv'
  | 'wifi' | 'ac' | 'table' | 'mattress' | 'water' | 'dresser' | 'cupboard'
  | 'inverter' | 'cctv' | 'parking' | 'lawn' | 'caretaker' | 'carrom'
  | 'dart' | 'boardGame' | 'badminton' | 'cricket' | 'football' | 'chess'
  | 'basketball' | 'volleyball' | 'bingo' | 'cards' | 'swing' | 'hulaHoop'
  | 'trampoline' | 'speaker' | 'karaoke' | 'hookah' | 'bbq' | 'location'
  | 'meal' | 'pets' | 'info';