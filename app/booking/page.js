"use client";
import { useEffect, useMemo, useState } from 'react';
import { services, stylists, timeSlots } from '../../lib/data';
import { addBooking } from '../../lib/storage';
import { generateICS, downloadICS } from '../../lib/ics';

function uid() {
  return 'b_' + Math.random().toString(36).slice(2, 10);
}

function todayStr() {
  const d = new Date();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${d.getFullYear()}-${m}-${day}`;
}

export default function BookingPage({ searchParams }) {
  const prefillServiceId = searchParams?.serviceId;
  const [serviceId, setServiceId] = useState(prefillServiceId || services[0]?.id);
  const [stylistId, setStylistId] = useState(stylists[0]?.id);
  const [date, setDate] = useState(todayStr());
  const [time, setTime] = useState(timeSlots[4]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [note, setNote] = useState('');
  const [created, setCreated] = useState(null);

  useEffect(() => {
    if (prefillServiceId) setServiceId(prefillServiceId);
  }, [prefillServiceId]);

  const selectedService = useMemo(() => services.find(s => s.id === serviceId), [serviceId]);
  const selectedStylist = useMemo(() => stylists.find(s => s.id === stylistId), [stylistId]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!selectedService || !selectedStylist) return;
    const id = uid();
    const booking = {
      id,
      customer: { name, email, phone },
      serviceId,
      stylistId,
      date,
      time,
      duration: selectedService.duration,
      price: selectedService.price,
      note,
      status: 'scheduled',
      createdAt: new Date().toISOString(),
    };
    addBooking(booking);
    setCreated(booking);
    try {
      const ics = generateICS({
        id,
        title: `${selectedService.name} @ Luxe Salon`,
        description: `Stylist: ${selectedStylist.name}\\n${note || ''}`,
        location: 'Luxe Salon, 123 Main St',
        date,
        time,
        durationMinutes: selectedService.duration,
      });
      downloadICS(`luxe-${id}.ics`, ics);
    } catch {}
  }

  if (created) {
    return (
      <div className="max-w-xl mx-auto card space-y-4">
        <h1 className="text-2xl font-semibold">You?re booked! ??</h1>
        <p className="text-white/80">We?ve saved your appointment locally. Add the calendar file we downloaded to your calendar to get a reminder.</p>
        <div className="text-sm text-white/70 space-y-1">
          <p><span className="text-white/60">Service:</span> {selectedService.name}</p>
          <p><span className="text-white/60">Stylist:</span> {selectedStylist.name}</p>
          <p><span className="text-white/60">When:</span> {date} at {time}</p>
          <p><span className="text-white/60">Price:</span> ${selectedService.price}</p>
        </div>
        <div className="flex gap-3">
          <a href="/bookings" className="btn btn-primary">View My Bookings</a>
          <a href="/booking" className="btn btn-outline">Make Another</a>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Book an appointment</h1>
      <form onSubmit={handleSubmit} className="card space-y-5">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="label">Service</label>
            <select className="input" value={serviceId} onChange={(e)=>setServiceId(e.target.value)}>
              {services.map(s => <option key={s.id} value={s.id}>{s.name} ? ${s.price} ? {s.duration}m</option>)}
            </select>
          </div>
          <div>
            <label className="label">Preferred stylist</label>
            <select className="input" value={stylistId} onChange={(e)=>setStylistId(e.target.value)}>
              {stylists.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
            </select>
          </div>
          <div>
            <label className="label">Date</label>
            <input type="date" className="input" value={date} onChange={(e)=>setDate(e.target.value)} min={todayStr()} />
          </div>
          <div>
            <label className="label">Time</label>
            <select className="input" value={time} onChange={(e)=>setTime(e.target.value)}>
              {timeSlots.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="label">Full name</label>
            <input className="input" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Jane Doe" required />
          </div>
          <div>
            <label className="label">Phone</label>
            <input className="input" value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder="(555) 555-5555" />
          </div>
          <div className="md:col-span-2">
            <label className="label">Email</label>
            <input type="email" className="input" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="you@example.com" required />
          </div>
          <div className="md:col-span-2">
            <label className="label">Notes</label>
            <textarea className="input min-h-[100px]" value={note} onChange={(e)=>setNote(e.target.value)} placeholder="Anything we should know?" />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-white/80">Estimated total: <span className="font-semibold">${selectedService?.price ?? 0}</span></p>
          <button className="btn btn-primary">Confirm booking</button>
        </div>
      </form>
    </div>
  );
}
