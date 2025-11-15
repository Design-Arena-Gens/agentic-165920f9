export const metadata = {
  title: 'Luxe Salon & Spa',
  description: 'Premium hair, beauty, and spa experiences. Book online in minutes.',
};

import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="container-max py-8 min-h-[70vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
