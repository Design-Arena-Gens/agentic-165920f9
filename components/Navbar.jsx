"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';

const links = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/stylists', label: 'Stylists' },
  { href: '/booking', label: 'Book' },
  { href: '/bookings', label: 'My Bookings' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onResize = () => setOpen(false);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur">
      <nav className="container-max flex items-center justify-between py-4">
        <Link href="/" className="font-bold text-lg">Luxe Salon</Link>
        <div className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <Link key={l.href} href={l.href} className="text-white/80 hover:text-white">
              {l.label}
            </Link>
          ))}
          <Link href="/booking" className="btn btn-primary">Book</Link>
        </div>
        <button className="md:hidden btn btn-outline px-3 py-1" onClick={() => setOpen(v => !v)} aria-label="Menu">
          ?
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/80">
          <div className="container-max py-3 flex flex-col gap-3">
            {links.map(l => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-white/90">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
