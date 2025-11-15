export function isBrowser() {
  return typeof window !== 'undefined';
}

const KEY = 'salon_bookings_v1';

export function readBookings() {
  if (!isBrowser()) return [];
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function writeBookings(bookings) {
  if (!isBrowser()) return;
  try {
    window.localStorage.setItem(KEY, JSON.stringify(bookings));
  } catch {}
}

export function addBooking(booking) {
  const list = readBookings();
  list.push(booking);
  writeBookings(list);
}

export function updateBooking(id, updater) {
  const list = readBookings();
  const idx = list.findIndex(b => b.id === id);
  if (idx === -1) return;
  list[idx] = updater(list[idx]);
  writeBookings(list);
}

export function removeBooking(id) {
  const list = readBookings().filter(b => b.id !== id);
  writeBookings(list);
}
