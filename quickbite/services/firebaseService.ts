import { Canteen, Order } from '../types';

const CANTEENS_DATA: Canteen[] = [
  {
    id: 'canteen-1',
    name: 'Spice Circle',
    location: { lat: 34.0689, lon: -118.4452 }, // UCLA
    menu: [
      { id: 'm1-1', name: 'Paneer Butter Masala', price: 275.00, description: 'Creamy tomato curry with soft paneer cubes.', image: 'https://loremflickr.com/400/300/paneer,curry' },
      { id: 'm1-2', name: 'Garlic Naan', price: 70.00, description: 'Soft flatbread with garlic and butter.', image: 'https://loremflickr.com/400/300/naan,bread' },
      { id: 'm1-3', name: 'Vegetable Biryani', price: 220.00, description: 'Aromatic rice dish with mixed vegetables and spices.', image: 'https://loremflickr.com/400/300/biryani,rice' },
      { id: 'm1-4', name: 'Mango Lassi', price: 120.00, description: 'Refreshing yogurt drink with mango pulp.', image: 'https://loremflickr.com/400/300/mango,lassi' },
    ],
  },
  {
    id: 'canteen-2',
    name: 'Bombay Bites',
    location: { lat: 42.3770, lon: -71.1167 }, // Harvard
    menu: [
      { id: 'm2-1', name: 'Chole Bhature', price: 180.00, description: 'Spicy chickpea curry served with fluffy fried bread.', image: 'https://loremflickr.com/400/300/chole,bhature' },
      { id: 'm2-2', name: 'Vada Pav', price: 50.00, description: 'The classic Mumbai street food burger with a potato fritter.', image: 'https://loremflickr.com/400/300/vada,pav' },
      { id: 'm2-3', name: 'Samosa Chaat', price: 90.00, description: 'Crushed samosas topped with yogurt, chutney, and spices.', image: 'https://loremflickr.com/400/300/samosa,chaat' },
      { id: 'm2-4', name: 'Masala Chai', price: 40.00, description: 'Spiced Indian tea with milk, brewed to perfection.', image: 'https://loremflickr.com/400/300/masala,chai' },
    ],
  },
  {
    id: 'canteen-3',
    name: 'Dakshin Flavors',
    location: { lat: 37.4275, lon: -122.1697 }, // Stanford
    menu: [
      { id: 'm3-1', name: 'Masala Dosa', price: 150.00, description: 'Crispy rice crepe filled with spiced potatoes, served with chutney.', image: 'https://loremflickr.com/400/300/masala,dosa' },
      { id: 'm3-2', name: 'Idli Sambar', price: 100.00, description: 'Steamed rice cakes served with a flavorful lentil soup.', image: 'https://loremflickr.com/400/300/idli,sambar' },
      { id: 'm3-3', name: 'Medu Vada', price: 80.00, description: 'Savory and crispy fried lentil doughnuts.', image: 'https://loremflickr.com/400/300/medu,vada' },
      { id: 'm3-4', name: 'Filter Coffee', price: 50.00, description: 'Strong and aromatic South Indian style coffee.', image: 'https://loremflickr.com/400/300/filter,coffee' },
    ],
  },
];

export const getCanteens = (): Promise<Canteen[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(CANTEENS_DATA);
    }, 1000); // Simulate network delay
  });
};

export const placeOrder = (order: Order): Promise<{ success: boolean; orderId: string }> => {
  console.log('Placing order:', order);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, orderId: `QB-${Date.now()}` });
    }, 1500); // Simulate network delay
  });
};