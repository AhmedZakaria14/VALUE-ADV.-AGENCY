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
    default: 'لوحات إعلانية وحروف بارزة مضيئة بالرياض | وكالة فاليو للدعاية والإعلان',
    template: '%s | وكالة فاليو للدعاية والإعلان'
  },
  description: 'وكالة فاليو للدعاية والإعلان بالرياض (Value Adv Agency) - متخصصون في تصميم وتصنيع وتركيب اللوحات الإعلانية للمحلات المعمارية والتجارية، حروف بارزة مضيئة (أكريليك، زنكور، ستانلس ستيل)، لوحات كلادينج، وتكسية الواجهات. نضمن لك أعلى جودة مع ضمان سنة كاملة وأسعار تنافسية. اتصل الآن.',
  keywords: 'لوحات إعلانية الرياض, حروف بارزة, لوحات محلات, لوحات اكريليك مضيئة, وكالة دعاية واعلان الرياض, تصميم لوحات تجارية, لوحات كلادينج, حروف زنكور, تركيب لوحات مضيئة, مصنع لوحات بالرياض, واجهات محلات, ستيكر سيارات, فلكس, بنر, لوحات إرشادية',
  authors: [{ name: 'وكالة فاليو للدعاية والإعلان', url: 'https://valueadvagency.com' }],
  creator: 'وكالة فاليو للدعاية',
  publisher: 'وكالة فاليو للدعاية والإعلان',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://valueadvagency.com/',
  },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'وكالة فاليو للدعاية والإعلان | خبراء اللوحات الإعلانية بالرياض',
    description: 'صناعة اللوحات الإعلانية للمحلات بجودة عالية وأسعار منافسة بالرياض. متخصصون في الحروف البارزة المضيئة واجهات الكلادينج.',
    url: 'https://valueadvagency.com',
    siteName: 'وكالة فاليو للدعاية والإعلان',
    locale: 'ar_SA',
    type: 'website',
    images: [
      {
        url: '/images/whatsapp-51.jpeg',
        width: 1200,
        height: 630,
        alt: 'وكالة فاليو للدعاية والإعلان - لوحات إعلانية',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'وكالة فاليو للدعاية والإعلان | خبراء اللوحات الإعلانية بالرياض',
    description: 'متخصصون في تصميم وتركيب اللوحات للمحلات التجارية والحروف البارزة والاكريلك بالرياض.',
    images: ['/images/whatsapp-51.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'وكالة فاليو للدعاية والإعلان',
    image: 'https://valueadvagency.com/images/whatsapp-51.jpeg',
    '@id': 'https://valueadvagency.com',
    url: 'https://valueadvagency.com',
    telephone: '0571449439',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'الرياض',
      addressRegion: 'الرياض',
      addressCountry: 'SA'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 24.7136, // الرياض
      longitude: 46.6753
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Saturday',
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday'
      ],
      opens: '08:00',
      closes: '22:00'
    },
    sameAs: [
      'https://www.instagram.com/valueadvagency',
      'https://twitter.com/valueadvagency'
    ]
  };

  return (
    <html lang="ar" dir="rtl" className={`${tajawal.variable} ${cairo.variable} scroll-smooth`}>
      <head>
        <meta name="google-site-verification" content="Iu_xHTNAlQZ5EKlJljDGI2w-7iQjS01x3OAFVQ5LXsk" />
        <script
          id="gtm"
          dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MF8KR9MR');`}}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-white text-[#243344]" suppressHydrationWarning>
        <Navbar />
        {children}
        <FloatingButtons />
        <Footer />
      </body>
    </html>
  );
}
