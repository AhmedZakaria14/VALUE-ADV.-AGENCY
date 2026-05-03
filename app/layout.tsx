import type {Metadata} from 'next';
import { Tajawal, Cairo } from 'next/font/google';
import './globals.css'; // Global styles
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';

const tajawal = Tajawal({
  subsets: ['arabic'],
  weight: ['400', '500', '700', '800'],
  variable: '--font-tajawal',
  display: 'swap',
});

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  weight: ['600', '700', '800', '900'],
  variable: '--font-heading',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://valueadvagency.com'),
  title: {
    default: 'لوحات إعلانية الرياض | حروف بارزة مضيئة | وكالة فاليو للدعاية',
    template: '%s | وكالة فاليو للدعاية'
  },
  description: 'وكالة فاليو للدعاية والإعلان بالرياض – متخصصون في تصميم وتصنيع وتركيب اللوحات الإعلانية، الحروف البارزة المضيئة أكريليك وزنكور وستانلس ستيل، مع ضمان سنة كاملة. اتصل الآن للحصول على عرض سعر مجاني.',
  keywords: 'لوحات إعلانية الرياض, حروف بارزة مضيئة, أكريليك, زنكور, ستانلس ستيل, بنر وفلكس, ستيكر سيارات, وكالة دعاية وإعلان',
  alternates: {
    canonical: 'https://valueadvagency.com/',
  },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'لوحات إعلانية الرياض | حروف بارزة مضيئة | وكالة فاليو للدعاية',
    description: 'وكالة فاليو للدعاية والإعلان بالرياض – متخصصون في تصميم وتصنيع وتركيب اللوحات الإعلانية، الحروف البارزة المضيئة أكريليك وزنكور وستانلس ستيل، مع ضمان سنة كاملة. اتصل الآن للحصول على عرض سعر مجاني.',
    locale: 'ar_SA',
    type: 'website',
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 600,
        alt: 'وكالة فاليو للدعاية والإعلان',
      },
    ],
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="ar" dir="rtl" className={`${tajawal.variable} ${cairo.variable}`}>
      <body className="font-sans antialiased bg-white text-[#243344]" suppressHydrationWarning>
        <Navbar />
        {children}
        <FloatingButtons />
        <Footer />
      </body>
    </html>
  );
}
