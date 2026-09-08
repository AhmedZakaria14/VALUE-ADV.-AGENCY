import { Metadata } from 'next';
import HomeClient from '@/components/HomeClient';

export const metadata: Metadata = {
  title: 'وكالة فاليو | أرخص وأفضل لوحات محلات وحروف بارزة بالرياض',
  description: 'أفضل وكالة تصنيع لوحات اعلانية بالرياض. نقوم بتصميم وتركيب حروف بارزة مضيئة، لوحات كلادينج وزينكور بدقة عالية وأسعار منافسة. تواصل معنا لتنفيذ واجهة محلك!',
  keywords: ['وكالة دعاية واعلان الرياض', 'لوحات محلات الرياض', 'حروف بارزة', 'تصميم لوحات اعلانية', 'واجهات كلادينج', 'مصنع لوحات مضيئة', 'لوحات زنكور', 'حروف اكريليك مضيئة'],
  alternates: {
    canonical: 'https://valueadvagency.com/',
  },
};

export default function Home() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "وكالة فاليو للدعاية والإعلان",
    "image": [
      "https://valueadvagency.com/images/whatsapp-51.jpeg",
      "https://valueadvagency.com/images/whatsapp-55.jpeg",
      "https://valueadvagency.com/logo.png"
    ],
    "@id": "https://valueadvagency.com",
    "url": "https://valueadvagency.com",
    "telephone": "+966571449439",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "الرياض",
      "addressLocality": "الرياض",
      "addressRegion": "الرياض",
      "postalCode": "11564",
      "addressCountry": "SA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 24.7136,
      "longitude": 46.6753
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "22:00"
    },
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 24.7136,
        "longitude": 46.6753
      },
      "geoRadius": "50000"
    },
    "sameAs": [
      "https://www.instagram.com/valueadvagency",
      "https://twitter.com/valueadvagency"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "خدمات اللوحات الإعلانية",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "لوحات حروف بارزة اكريليك"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "تركيب واجهات كلادينج"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "لوحات زنكور وستانلس ستيل"
          }
        }
      ]
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "ما هي أنواع اللوحات الإعلانية التي تنفذونها؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ننفذ جميع أنواع اللوحات الإعلانية بما في ذلك حروف أكريليك مضيئة أمامية، حروف إستيل (ستانلس ستيل) بإضاءة خلفية، حروف زنكور مطلية، حروف بلاستيك مضيئة، طباعة وتركيب فلكس فيس، ولوحات الكلادينج."
        }
      },
      {
        "@type": "Question",
        "name": "هل تقدمون ضماناً على التركيب؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "نعم، نقدم ضماناً شاملاً لمدة سنة كاملة يغطي الأداء والتركيب والإضاءة."
        }
      },
      {
        "@type": "Question",
        "name": "ما مناطق التغطية في الرياض؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "نغطي جميع مناطق وأحياء مدينة الرياض لتقديم خدمات تصميم وتصنيع وتركيب اللوحات الإعلانية."
        }
      },
      {
        "@type": "Question",
        "name": "كم تستغرق مدة التنفيذ؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "تعتمد مدة التنفيذ على حجم المشروع ونوع اللوحة، ولكننا نتميز بالسرعة في التنفيذ والالتزام بالمواعيد المحددة دون تأخير."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HomeClient />
    </>
  );
}
