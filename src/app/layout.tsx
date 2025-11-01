import type { Metadata } from 'next';
import { Inter, Allura } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/ui/Navigation';
import { ScrollProgress } from '@/components/ui/ScrollProgress';

const inter = Inter({ subsets: ['latin'] });
export const allura = Allura({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-allura',
});

export const metadata: Metadata = {
  title: 'Kartheek Panyam | Software Developer',
  description: 'Software Developer specializing in distributed systems, microservices architecture, and cloud infrastructure. 5+ years of experience building scalable, high-performance systems.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} ${allura.variable} antialiased`}>
        <ScrollProgress />
        <Navigation />
        {children}
      </body>
    </html>
  );
}
