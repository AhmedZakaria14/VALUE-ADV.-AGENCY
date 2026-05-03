import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'طباعة وتركيب بوب اب ورول اب | وكالة فاليو للدعاية',
  description: 'تجهيز المعارض والفعاليات بأفضل منصات العرض: بوب اب، رول اب، ولاما استاند. طباعة عالية الدقة في الرياض.',
};

export default function PopupRollupStand() {
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
        "name": "طباعة وتركيب بوب اب ورول اب",
        "item": "https://valueadvagency.com/services/popup-rollup-stand"
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
          <h1 className="text-[#243344] font-heading text-4xl md:text-5xl font-bold mb-8">طباعة وتركيب بوب اب ورول اب ولاما استاند</h1>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-gray-600 font-sans text-lg mb-6 leading-relaxed">
              لنجاح مشاركتك في المعارض والمؤتمرات، تحتاج إلى منصات عرض احترافية تعكس قوة علامتك التجارية. نوفر في وكالة فاليو تشكيلة متكاملة من أنظمة العرض المحمولة (Display Stands) تشمل البوب اب (Pop-up)، الرول اب (Roll-up)، واللاما استاند (Lama Stand).
            </p>
            <p className="text-gray-600 font-sans text-lg mb-6 leading-relaxed">
              تتميز منتجاتنا بسهولة الفك والتركيب والنقل، مع استخدام هياكل ألمنيوم قوية وخفيفة الوزن. نقوم بطباعة الرسومات الإعلانية بدقة فائقة على خامات مقاومة للتمزق والالتفاف (Anti-curl)، لضمان مظهر مشدود وأنيق دائماً.
            </p>
            <p className="text-gray-600 font-sans text-lg mb-8 leading-relaxed">
              نقدم خدمة التصميم والطباعة السريعة لتجهيز جناحك الإعلاني في وقت قياسي وبأعلى معايير الجودة.
            </p>
            <div className="mt-8">
              <Link href="/contact" className="inline-block bg-[#e22a32] text-white font-sans font-bold px-8 py-3 rounded hover:bg-[#243344] transition-colors">
                اطلب منصة العرض الخاصة بك
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
