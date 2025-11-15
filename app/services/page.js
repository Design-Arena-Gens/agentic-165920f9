import ServiceGrid from '../../components/ServiceGrid';

export const metadata = { title: 'Services ? Luxe Salon' };

export default function ServicesPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Services</h1>
      <p className="text-white/70 max-w-2xl">From precision cuts to bespoke color and restorative spa treatments ? explore our full menu.</p>
      <ServiceGrid />
    </div>
  );
}
