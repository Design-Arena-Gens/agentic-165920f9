import ServiceCard from './ServiceCard';
import { services } from '../lib/data';
import Link from 'next/link';

export default function ServiceGrid({ limit, showAllLink = false }) {
  const list = typeof limit === 'number' ? services.slice(0, limit) : services;
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {list.map(s => (
          <ServiceCard key={s.id} service={s} />
        ))}
      </div>
      {showAllLink && (
        <div>
          <Link href="/services" className="btn btn-outline">See all services</Link>
        </div>
      )}
    </div>
  );
}
