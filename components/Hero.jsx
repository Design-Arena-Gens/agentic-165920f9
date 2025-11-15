import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-brand-800/40 to-black p-10 md:p-16">
      <div className="max-w-xl space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">Elevate your style at Luxe Salon</h1>
        <p className="text-white/80">Award-winning stylists. Premium products. Personalized experiences crafted just for you.</p>
        <div className="flex gap-3">
          <Link href="/booking" className="btn btn-primary">Book an Appointment</Link>
          <Link href="/services" className="btn btn-outline">Explore Services</Link>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 opacity-40">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-brand-600 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-brand-400 blur-3xl" />
      </div>
    </section>
  );
}
