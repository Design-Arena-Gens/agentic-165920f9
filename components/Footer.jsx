export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10">
      <div className="container-max py-8 text-sm text-white/70 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
        <p>? {new Date().getFullYear()} Luxe Salon & Spa. All rights reserved.</p>
        <p>123 Main St, Suite 200 ? Daily 9am ? 7pm</p>
      </div>
    </footer>
  );
}
