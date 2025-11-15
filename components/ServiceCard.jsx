import Link from 'next/link';

export default function ServiceCard({ service }) {
  return (
    <div className="card flex flex-col justify-between">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">{service.name}</h3>
        <p className="text-white/70 text-sm">{service.description}</p>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <p className="text-white/90 font-medium">${service.price} ? {service.duration} min</p>
        <Link href={{ pathname: '/booking', query: { serviceId: service.id } }} className="btn btn-primary text-sm">Book</Link>
      </div>
    </div>
  );
}
