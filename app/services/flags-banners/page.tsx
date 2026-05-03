import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'طباعة أعلام وبنر قماش | وكالة فاليو للدعاية',
  description: 'خدمات طباعة الأعلام والبنر القماش للمعارض والفعاليات والمهرجانات في الرياض بجودة عالية وألوان زاهية.',
};

export default function FlagsBanners() {
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
        "name": "طباعة أعلام وبنر قماش",
        "item": "https://valueadvagency.com/services/flags-banners"
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
          <h1 className="text-[#243344] font-heading text-4xl md:text-5xl font-bold mb-8">طباعة أعلام وبنر قماش</h1>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-gray-600 font-sans text-lg mb-6 leading-relaxed">
              تعتبر الأعلام والبنرات القماشية من أهم وسائل الجذب في المعارض، الفعاليات، والمهرجانات. في وكالة فاليو، نقدم خدمات طباعة الأعلام والبنر القماش بأعلى معايير الجودة لضمان ظهور علامتك التجارية بشكل بارز ومميز.
            </p>
            <p className="text-gray-600 font-sans text-lg mb-6 leading-relaxed">
              نستخدم تقنيات طباعة متطورة تضمن تغلغل الألوان في النسيج، مما يجعلها مقاومة للبهتان وقابلة للغسيل. نوفر خيارات متعددة من الأقمشة تناسب الاستخدام الداخلي والخارجي، بالإضافة إلى توفير قواعد وتجهيزات التثبيت المختلفة.
            </p>
            <p className="text-gray-600 font-sans text-lg mb-8 leading-relaxed">
              سواء كنت بحاجة إلى أعلام دول، أعلام بشعار شركتك (Teardrop, Feather)، أو بنرات قماشية لتزيين الواجهات، نحن هنا لتلبية احتياجاتك بسرعة واحترافية.
            </p>
            <div className="mt-8">
              <Link href="/contact" className="inline-block bg-[#e22a32] text-white font-sans font-bold px-8 py-3 rounded hover:bg-[#243344] transition-colors">
                تواصل معنا الآن
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
