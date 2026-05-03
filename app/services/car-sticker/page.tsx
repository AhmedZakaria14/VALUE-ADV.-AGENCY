import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'طباعة وتركيب ستيكر سيارات | وكالة فاليو للدعاية',
  description: 'خدمات طباعة وتركيب ستيكر لجميع أنواع السيارات في الرياض. حوّل أسطول سياراتك إلى لوحة إعلانية متحركة.',
};

export default function CarSticker() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "الرئيسية",
        "item": "https://valueadvagency.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "خدماتنا",
        "item": "https://valueadvagency.com/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "طباعة وتركيب ستيكر سيارات",
        "item": "https://valueadvagency.com/services/car-sticker"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="py-24 bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-[#243344] font-heading text-4xl md:text-5xl font-bold mb-8">طباعة وتركيب ستيكر سيارات</h1>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-gray-600 font-sans text-lg mb-6 leading-relaxed">
              حوّل أسطول سيارات شركتك إلى وسيلة إعلانية متحركة تجوب شوارع الرياض مع خدمات طباعة وتركيب ستيكر السيارات من وكالة فاليو. نقدم حلولاً متكاملة لتغليف السيارات جزئياً أو كلياً بتصاميم جذابة تعكس هويتك التجارية.
            </p>
            <p className="text-gray-600 font-sans text-lg mb-6 leading-relaxed">
              نستخدم أفضل أنواع الستيكر المخصص للسيارات (مثل الفينيل المصبوب) والذي يتميز بمرونته العالية ومقاومته للحرارة وأشعة الشمس والخدوش، مما يضمن بقاء الألوان زاهية لفترات طويلة دون الإضرار بطلاء السيارة الأصلي.
            </p>
            <p className="text-gray-600 font-sans text-lg mb-8 leading-relaxed">
              سواء كنت تمتلك سيارة واحدة أو أسطولاً كاملاً من سيارات النقل والتوزيع، فإن فريقنا الفني يضمن لك تركيباً احترافياً ودقيقاً يبرز رسالتك الإعلانية بأفضل صورة.
            </p>
            <div className="mt-8">
              <Link href="/contact" className="inline-block bg-[#e22a32] text-white font-sans font-bold px-8 py-3 rounded hover:bg-[#243344] transition-colors">
                احصل على عرض سعر
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
