import { stylists } from '../../lib/data';

export const metadata = { title: 'Stylists ? Luxe Salon' };

export default function StylistsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Our Stylists</h1>
      <p className="text-white/70 max-w-2xl">Meet the artists behind the chair. Passion, precision, and a love for craft.</p>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {stylists.map(s => (
          <div key={s.id} className="card">
            <div className="h-36 w-full rounded-lg bg-gradient-to-br from-brand-600/30 to-white/5 mb-4" />
            <h3 className="text-lg font-semibold">{s.name}</h3>
            <p className="text-white/70 text-sm">Specialties: {s.specialties.join(', ')}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
