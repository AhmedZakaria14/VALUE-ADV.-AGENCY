import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'طباعة وتركيب ستيكر مرمل | وكالة فاليو للدعاية',
  description: 'خدمات طباعة وتركيب ستيكر مرمل للواجهات الزجاجية والمكاتب في الرياض. خصوصية وأناقة لتصميمك الداخلي.',
};

export default function FrostedSticker() {
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
        "name": "طباعة وتركيب ستيكر مرمل",
        "item": "https://valueadvagency.com/services/frosted-sticker"
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
          <h1 className="text-[#243344] font-heading text-4xl md:text-5xl font-bold mb-8">طباعة وتركيب ستيكر مرمل</h1>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-gray-600 font-sans text-lg mb-6 leading-relaxed">
              يُعد الستيكر المرمل (Frosted Sticker) الحل الأمثل لتوفير الخصوصية في المكاتب والشركات والواجهات الزجاجية دون حجب الإضاءة الطبيعية. في وكالة فاليو، نقدم خدمات طباعة وقص وتركيب الستيكر المرمل بتصاميم عصرية تناسب هويتك المؤسسية.
            </p>
            <p className="text-gray-600 font-sans text-lg mb-6 leading-relaxed">
              يمكننا تفريغ الستيكر المرمل ليحمل شعار شركتك أو أنماطاً هندسية وزخرفية تضفي لمسة جمالية واحترافية على المكان. نستخدم خامات عالية الجودة تضمن ثبات الستيكر وعدم تقشره أو تغير لونه مع مرور الوقت.
            </p>
            <p className="text-gray-600 font-sans text-lg mb-8 leading-relaxed">
              فريق التركيب لدينا مدرب على التعامل مع الواجهات الزجاجية الكبيرة والمعقدة، لضمان تركيب خالٍ من الفقاعات والعيوب.
            </p>
            <div className="mt-8">
              <Link href="/contact" className="inline-block bg-[#e22a32] text-white font-sans font-bold px-8 py-3 rounded hover:bg-[#243344] transition-colors">
                تواصل معنا للتفاصيل
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
