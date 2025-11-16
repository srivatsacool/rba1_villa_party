import { Amenity, GalleryImage, MenuCategory, InfoItem } from './types';

export const AMENITIES: Amenity[] = [
  { icon: 'swimmingPool', name: 'Big Swimming Pool (17x32 ft)', description: 'Accessible until 11:00 PM for safety.' },
  { icon: 'bed', name: '4 Master Bedrooms', description: 'Luxurious and comfortable stay with king-size beds.' },
  { icon: 'kitchen', name: 'Spacious Kitchen', description: 'Clean and well-equipped for your culinary needs.' },
  { icon: 'sofa', name: 'Beautiful Hall', description: 'Living room with two comfy sofas.' },
  { icon: 'bath', name: '5 Large Bathrooms', description: 'Clean and modern facilities.' },
  { icon: 'balcony', name: '2 Balconies', description: 'Enjoy the scenic views.' },
  { icon: 'terrace', name: 'Large Terrace', description: 'Ideal for evening gatherings with mountain and sunset views.' },
  { icon: 'fridge', name: 'Fridge', description: '' },
  { icon: 'geyser', name: 'Geysers', description: '' },
  { icon: 'tv', name: '50-inch Smart TV', description: '' },
  { icon: 'wifi', name: 'Free Wifi', description: '' },
  { icon: 'ac', name: 'Air Conditioning', description: 'In all bedrooms.' },
  { icon: 'table', name: 'Dining Table', description: '' },
  { icon: 'mattress', name: 'Extra Mattresses', description: '' },
  { icon: 'water', name: 'Water Dispenser', description: 'With free Bisleri water.' },
  { icon: 'dresser', name: 'Dressing Table', description: '' },
  { icon: 'cupboard', name: 'Cupboards', description: '' },
  { icon: 'inverter', name: 'Inverter Backup', description: '7 to 8 hours of backup.' },
  { icon: 'cctv', name: 'CCTV Surveillance', description: '' },
  { icon: 'parking', name: 'Parking Area', description: '' },
  { icon: 'lawn', name: 'Lawn Area', description: 'Front and backyard.' },
  { icon: 'caretaker', name: 'Caretaker on Call', description: '' },
  { icon: 'carrom', name: 'Carrom Board', description: '' },
  { icon: 'dart', name: 'Dart Game', description: '' },
  { icon: 'boardGame', name: 'Board Games', description: '' },
  { icon: 'badminton', name: 'Badminton', description: '' },
  { icon: 'cricket', name: 'Cricket', description: '' },
  { icon: 'football', name: 'Football', description: '' },
  { icon: 'chess', name: 'Chess', description: '' },
  { icon: 'basketball', name: 'Basketball', description: '' },
  { icon: 'volleyball', name: 'Throw Ball', description: '' },
  { icon: 'bingo', name: 'Housie', description: '' },
  { icon: 'cards', name: 'Playing Cards', description: '' },
  { icon: 'swing', name: 'Swing / Jhula', description: '' },
  { icon: 'hulaHoop', name: 'Hoola Hoop', description: '' },
  { icon: 'trampoline', name: 'Trampoline', description: 'For kids up to 5 years.' },
  { icon: 'speaker', name: 'Bluetooth Speaker', description: '' },
  { icon: 'karaoke', name: 'Karaoke', description: '' },
  { icon: 'hookah', name: 'Hookah', description: 'Available on a chargeable basis.' },
  { icon: 'bbq', name: 'Live BBQ', description: 'Veg and Non-Veg available on a chargeable basis.' }
];

export const GALLERY_IMAGES: GalleryImage[] = [
  { id: 1, src: 'https://r1imghtlak.mmtcdn.com/371cd008-e772-4bfa-98bb-9c3127883ccf.jpg', alt: 'Villa exterior', span: 'col-span-2 row-span-2' },
  { id: 2, src: 'https://r1imghtlak.mmtcdn.com/13223850-954e-4e1a-b647-ffbefeb01305.jpg', alt: 'Poolside party', span: 'col-span-1 row-span-1' },
  { id: 3, src: 'https://r1imghtlak.mmtcdn.com/d20a51f1-d9ed-422a-a018-9068e5738a2e.jpg', alt: 'Gourmet food platter', span: 'col-span-1 row-span-1' },
  { id: 4, src: 'https://r1imghtlak.mmtcdn.com/954d39bb-619d-4d3c-9abd-dbcdf182578d.jpg', alt: 'Luxury lounge area', span: 'col-span-1 row-span-1' },
  { id: 5, src: 'https://r1imghtlak.mmtcdn.com/a40784db-2337-4cc3-a9d0-b83914eb09a2.jpg', alt: 'Living Room', span: 'col-span-1 row-span-1' },
  { id: 6, src: 'https://r1imghtlak.mmtcdn.com/6515a164-bd31-4b1a-a60a-caf1dfc1aeb8.jpg', alt: 'Bedroom', span: 'col-span-2 row-span-1' },
];

export const CULINARY_MENU: MenuCategory[] = [
  {
    title: 'Lunch (1:30 PM - 3:00 PM)',
    items: [
      { name: 'Chicken Handi', type: 'non-veg', description: '' },
      { name: 'Chicken Sukha', type: 'non-veg', description: '' },
      { name: 'Paneer Mutter', type: 'veg', description: '' },
      { name: 'Dal Tadka', type: 'veg', description: '' },
      { name: 'Dal Fry', type: 'veg', description: '' },
      { name: 'Steam Rice', type: 'veg', description: '' },
      { name: 'Chapati/Phoolka/Bhakari', type: 'veg', description: '' },
      { name: 'Kanda Limbu/Aachar/Papad', type: 'veg', description: '' }
    ]
  },
  {
    title: 'Hi-Tea (4:30 PM - 6:00 PM)',
    items: [
      { name: 'Biscuit', type: 'veg', description: '' },
      { name: 'Onion Bhaji', type: 'veg', description: '' },
      { name: 'Potato Bhaji', type: 'veg', description: '' },
      { name: 'Tea/Coffee', type: 'drink', description: '' }
    ]
  },
  {
    title: 'Dinner (9:00 PM - 11:00 PM)',
    items: [
      { name: 'Veg Biryani', type: 'veg', description: '' },
      { name: 'Chicken Biryani', type: 'non-veg', description: '' },
      { name: 'Gulam Jamun or Jalebi', type: 'veg', description: '' },
      { name: 'Curd Cucumber Raita', type: 'veg', description: '' }
    ]
  },
  {
    title: 'Breakfast (8:00 AM - 10:00 AM)',
    items: [
      { name: 'Pooha', type: 'veg', description: '' },
      { name: 'Eggs Bhurji', type: 'non-veg', description: '' },
      { name: 'Misal Pav', type: 'veg', description: '' },
      { name: 'Tea or Coffee', type: 'drink', description: '' }
    ]
  }
];

export const IMPORTANT_INFO: InfoItem[] = [
  {
    icon: 'location',
    title: 'Location',
    details: 'Megastar Villa, Plot No. 29, Gut No. 299, In Durga Society. Landmark - Near Baithak Dhaba. Opposite Papa\'s Village. Karla. Lonavala.'
  },
  {
    icon: 'clock',
    title: 'Timings',
    details: 'The party is on 29th of Nov 2025, starting from 7:00 PM.'
  },
  {
    icon: 'phone',
    title: 'Contact',
    details: 'For any queries, please contact: Harsh (+91 9057538599) or Srivatsa (+91 7295016907).'
  }
];
