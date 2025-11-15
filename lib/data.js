export const services = [
  { id: 'cut-basic', name: 'Classic Haircut', duration: 45, price: 45, description: 'Precision haircut with wash and style.' },
  { id: 'cut-deluxe', name: 'Deluxe Haircut', duration: 60, price: 65, description: 'Haircut, scalp massage, hot towel, and style.' },
  { id: 'color-root', name: 'Root Color', duration: 90, price: 95, description: 'Root touch-up for regrowth coverage.' },
  { id: 'balayage', name: 'Balayage Highlights', duration: 180, price: 220, description: 'Hand-painted highlights for natural dimension.' },
  { id: 'blowout', name: 'Blowout', duration: 45, price: 40, description: 'Shine-enhancing wash and professional blowout.' },
  { id: 'style-event', name: 'Event Styling', duration: 75, price: 120, description: 'Elegant styling for special occasions.' },
  { id: 'spa-facial', name: 'Hydrating Facial', duration: 60, price: 85, description: 'Deep cleansing and hydration with facial massage.' },
  { id: 'spa-massage', name: 'Aromatherapy Massage', duration: 60, price: 95, description: 'Relaxing full-body massage with essential oils.' },
];

export const stylists = [
  { id: 'ava', name: 'Ava Collins', specialties: ['Cut', 'Color', 'Balayage'] },
  { id: 'leo', name: 'Leo Ramirez', specialties: ['Cut', 'Event Styling'] },
  { id: 'nina', name: 'Nina Patel', specialties: ['Facials', 'Massage'] },
];

export const timeSlots = Array.from({ length: (19 - 9) * 2 }, (_, i) => {
  const hour = 9 + Math.floor(i / 2);
  const min = i % 2 === 0 ? '00' : '30';
  return `${String(hour).padStart(2, '0')}:${min}`;
});
