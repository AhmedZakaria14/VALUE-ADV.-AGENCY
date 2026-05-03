import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'تغطية أسوار المشاريع بنر | وكالة فاليو للدعاية',
  description: 'خدمات تغطية أسوار المشاريع الإنشائية والتجارية ببنر عالي الجودة في الرياض. طباعة وتركيب احترافي بأسعار منافسة.',
};

export default function BannerProjectWalls() {
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
        "name": "تغطية أسوار المشاريع بنر",
        "item": "https://valueadvagency.com/services/banner-project-walls"
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
          <h1 className="text-[#243344] font-heading text-4xl md:text-5xl font-bold mb-8">تغطية أسوار المشاريع بنر</h1>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-gray-600 font-sans text-lg mb-6 leading-relaxed">
              نقدم في وكالة فاليو للدعاية والإعلان خدمات متكاملة في طباعة وتركيب بنر لتغطية أسوار المشاريع الإنشائية والتجارية في جميع أنحاء الرياض. نستخدم خامات بنر قوية ومقاومة للعوامل الجوية تضمن بقاء إعلانك أو رسالتك واضحة طوال فترة المشروع.
            </p>
            <p className="text-gray-600 font-sans text-lg mb-6 leading-relaxed">
              تعتبر تغطية أسوار المشاريع فرصة ذهبية للإعلان عن تفاصيل المشروع، المطور العقاري، أو حتى كسب مساحات إعلانية ضخمة تلفت أنظار المارة. فريقنا المتخصص يتولى عملية أخذ المقاسات، التصميم، الطباعة بدقة عالية، والتركيب الاحترافي الآمن.
            </p>
            <p className="text-gray-600 font-sans text-lg mb-8 leading-relaxed">
              نضمن لك سرعة في التنفيذ وجودة في الألوان لا تتأثر بأشعة الشمس، مع توفير خيارات متعددة تناسب ميزانيتك واحتياجات مشروعك.
            </p>
            <div className="mt-8">
              <Link href="/contact" className="inline-block bg-[#e22a32] text-white font-sans font-bold px-8 py-3 rounded hover:bg-[#243344] transition-colors">
                اطلب تسعيرة الآن
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
