import { Metadata } from 'next';
import HomeClient from '@/components/HomeClient';

export const metadata: Metadata = {
  title: 'لوحات إعلانية الرياض | حروف بارزة مضيئة | وكالة فاليو للدعاية',
  description: 'وكالة فاليو للدعاية والإعلان بالرياض – متخصصون في تصميم وتصنيع وتركيب اللوحات الإعلانية، الحروف البارزة المضيئة أكريليك وزنكور وستانلس ستيل، مع ضمان سنة كاملة. اتصل الآن للحصول على عرض سعر مجاني.',
  alternates: {
    canonical: 'https://valueadvagency.com/',
  },
};

export default function Home() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "وكالة فاليو للدعاية والإعلان",
    "image": "https://valueadvagency.com/logo.png",
    "telephone": "+966571449439",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "الرياض",
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
