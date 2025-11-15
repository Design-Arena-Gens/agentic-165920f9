"use client";
import { useEffect, useMemo, useState } from 'react';
import { readBookings, updateBooking, removeBooking } from '../../lib/storage';
import { services, stylists } from '../../lib/data';
import { generateICS, downloadICS } from '../../lib/ics';

export default function MyBookingsPage() {
  const [items, setItems] = useState([]);

  function load() { setItems(readBookings().sort((a,b) => a.date.localeCompare(b.date) || a.time.localeCompare(b.time))); }

  useEffect(() => { load(); }, []);

  function cancel(id) {
    updateBooking(id, (b) => ({ ...b, status: 'cancelled' }));
    load();
  }

  function remove(id) {
    removeBooking(id);
    load();
  }

  function ics(b) {
    const service = services.find(s=>s.id===b.serviceId);
    const stylist = stylists.find(s=>s.id===b.stylistId);
    const icsText = generateICS({
      id: b.id,
      title: `${service?.name || 'Service'} @ Luxe Salon`,
      description: `Stylist: ${stylist?.name || ''}`,
      location: 'Luxe Salon, 123 Main St',
      date: b.date,
      time: b.time,
      durationMinutes: b.duration || service?.duration || 60,
    });
    downloadICS(`luxe-${b.id}.ics`, icsText);
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">My Bookings</h1>
      {items.length === 0 ? (
        <div className="card">
          <p className="text-white/80">No bookings yet. Book your first appointment.</p>
          <a href="/booking" className="btn btn-primary mt-3 inline-block">Book now</a>
        </div>
      ) : (
        <div className="space-y-4">
          {items.map(b => {
            const service = services.find(s=>s.id===b.serviceId);
            const stylist = stylists.find(s=>s.id===b.stylistId);
            return (
              <div key={b.id} className="card">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                  <div>
                    <h3 className="font-semibold">{service?.name} ? ${service?.price}</h3>
                    <p className="text-white/70 text-sm">{b.date} at {b.time} ? Stylist: {stylist?.name}</p>
                    {b.status !== 'scheduled' && (
                      <p className="text-xs text-white/50 mt-1">Status: {b.status}</p>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <button className="btn btn-outline" onClick={()=>ics(b)}>Add to Calendar</button>
                    {b.status === 'scheduled' && (
                      <button className="btn btn-primary" onClick={()=>cancel(b.id)}>Cancel</button>
                    )}
                    <button className="btn btn-outline" onClick={()=>remove(b.id)}>Remove</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
