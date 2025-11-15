import Hero from '../components/Hero';
import ServiceGrid from '../components/ServiceGrid';

export default function HomePage() {
  return (
    <div className="space-y-16">
      <Hero />
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Our Signature Services</h2>
        <ServiceGrid limit={6} showAllLink />
      </section>
      <section className="card">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold">Ready to transform your look?</h3>
            <p className="text-white/70">Book an appointment in under 2 minutes.</p>
          </div>
          <a href="/booking" className="btn btn-primary">Book Now</a>
        </div>
      </section>
    </div>
  );
}
