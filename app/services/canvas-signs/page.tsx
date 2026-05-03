import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'طباعة وتركيب لوحات كانفس | وكالة فاليو للدعاية',
  description: 'طباعة لوحات الكانفس الفنية والدعائية بدقة عالية في الرياض. أضف لمسة فنية لمكتبك أو منزلك.',
};

export default function CanvasSigns() {
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
        "name": "طباعة وتركيب لوحات كانفس",
        "item": "https://valueadvagency.com/services/canvas-signs"
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
          <h1 className="text-[#243344] font-heading text-4xl md:text-5xl font-bold mb-8">طباعة وتركيب لوحات كانفس</h1>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-gray-600 font-sans text-lg mb-6 leading-relaxed">
              تضفي لوحات الكانفس لمسة فنية وراقية على الديكورات الداخلية للمكاتب، الشركات، والمنازل. في وكالة فاليو، نقدم خدمة طباعة الصور والتصاميم الفنية على قماش الكانفس القطني عالي الجودة باستخدام أحبار صديقة للبيئة ومقاومة للبهتان.
            </p>
            <p className="text-gray-600 font-sans text-lg mb-6 leading-relaxed">
              نقوم بشد الكانفس المطبوع على إطارات خشبية مخفية (Gallery Wrap) باحترافية عالية لضمان استواء السطح ومظهره الأنيق. يمكنك طباعة صور فوتوغرافية، لوحات فنية، أو رسائل تحفيزية لموظفيك.
            </p>
            <p className="text-gray-600 font-sans text-lg mb-8 leading-relaxed">
              نوفر مقاسات متعددة حسب الطلب، مع خدمة التوصيل والتركيب الآمن على الجدران لضمان أفضل نتيجة نهائية.
            </p>
            <div className="mt-8">
              <Link href="/contact" className="inline-block bg-[#e22a32] text-white font-sans font-bold px-8 py-3 rounded hover:bg-[#243344] transition-colors">
                اطلب طباعة لوحتك
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
