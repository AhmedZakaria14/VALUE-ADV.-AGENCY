import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'قص وتركيب اللوحات الأكريليك | وكالة فاليو للدعاية',
  description: 'تصميم وقص وتركيب لوحات وحروف الأكريليك المضيئة والبارزة في الرياض. دقة متناهية وجودة عالية.',
};

export default function AcrylicSigns() {
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
        "name": "قص وتركيب اللوحات الأكريليك",
        "item": "https://valueadvagency.com/services/acrylic-signs"
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
          <h1 className="text-[#243344] font-heading text-4xl md:text-5xl font-bold mb-8">قص وتركيب اللوحات الأكريليك بجميع أنواعها</h1>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-gray-600 font-sans text-lg mb-6 leading-relaxed">
              يعتبر الأكريليك من أرقى الخامات المستخدمة في صناعة اللوحات الإعلانية والديكورات الداخلية نظراً لشفافيته ولمعانه الذي يضاهي الزجاج، مع متانة ومقاومة عالية للكسر. في وكالة فاليو، نمتلك أحدث ماكينات القص بالليزر لتشكيل الأكريليك بدقة متناهية.
            </p>
            <p className="text-gray-600 font-sans text-lg mb-6 leading-relaxed">
              نقدم خدمات تصميم وتصنيع الحروف البارزة المضيئة، الدروع التذكارية، اللوحات الإرشادية للمكاتب، والمجسمات الإعلانية. نوفر مجموعة واسعة من ألوان وسماكات الأكريليك لتناسب كافة الاحتياجات التصميمية.
            </p>
            <p className="text-gray-600 font-sans text-lg mb-8 leading-relaxed">
              يتميز فريقنا بالدقة في التجميع والتركيب، مع إمكانية دمج الأكريليك مع خامات أخرى كالاستانلس ستيل أو الخشب لإخراج تحف فنية تعزز من قيمة علامتك التجارية.
            </p>
            <div className="mt-8">
              <Link href="/contact" className="inline-block bg-[#e22a32] text-white font-sans font-bold px-8 py-3 rounded hover:bg-[#243344] transition-colors">
                تواصل معنا لتنفيذ فكرتك
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
