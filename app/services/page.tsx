import { Metadata } from 'next';
import { Store, PenTool, Type, Palette, Presentation, Layers } from "lucide-react";
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'خدمات اللوحات الإعلانية وتكسية الواجهات | وكالة فاليو بالرياض',
  description: 'قائمة خدماتنا الشاملة: تفصيل وتركيب اللوحات الإعلانية للمحلات، حروف بارزة (اكريليك وزنكور وستانلس ستيل)، تكسية واجهات كلادينج، ستيكر سيارات وطباعة بنر.',
  keywords: ['تركيب وتفصيل لوحات محلات', 'خدمات الدعاية والإعلان', 'تركيب كلادينج', 'حروف بارزة اكريليك', 'ستانلس ستيل مضيء', 'وكالة فاليو'],
  alternates: {
    canonical: 'https://valueadvagency.com/services',
  },
  openGraph: {
    title: 'خدمات اللوحات الإعلانية وتكسية الواجهات | وكالة فاليو بالرياض',
    description: 'قائمة خدماتنا الشاملة: تفصيل وتركيب اللوحات الإعلانية للمحلات، حروف بارزة (اكريليك وزنكور وستانلس ستيل)، تكسية واجهات كلادينج، ستيكر سيارات وطباعة بنر.',
    url: 'https://valueadvagency.com/services',
    type: 'website',
  }
};

export default function ServicesPage() {
  const services = [
    { n: "01", ico: <Store className="w-10 h-10 text-[#e22a32]" />, title: "تصميم وتصنيع اللوحات", desc: "حروف أكريليك مضيئة، حروف إستيل، حروف زنكور مطلية، حروف بلاستيك مضيئة، ولوحات الكلادينج.", link: "/services/acrylic-signs" },
    { n: "02", ico: <Presentation className="w-10 h-10 text-[#e22a32]" />, title: "طباعة وتركيب بنر وفلكس", desc: "تغطية أسوار المشاريع بنر، طباعة أعلام بنر قماش، طباعة وتركيب فلكس فيس للمناسبات والحملات.", link: "/services/banner-project-walls" },
    { n: "03", ico: <Layers className="w-10 h-10 text-[#e22a32]" />, title: "ستيكر سيارات ومرمل", desc: "طباعة وتركيب ستيكر لجميع السيارات، وطباعة وتركيب ستيكر مرمل للواجهات الزجاجية.", link: "/services/car-sticker" },
    { n: "04", ico: <Type className="w-10 h-10 text-[#e22a32]" />, title: "بوب اب ورول اب", desc: "طباعة وتركيب بوب اب، رول اب، ولاما استاند للمعارض والفعاليات.", link: "/services/popup-rollup-stand" },
    { n: "05", ico: <Palette className="w-10 h-10 text-[#e22a32]" />, title: "لوحات كانفس", desc: "طباعة وتركيب لوحات كانفس فنية ودعائية بجودة عالية.", link: "/services/canvas-signs" },
    { n: "06", ico: <PenTool className="w-10 h-10 text-[#e22a32]" />, title: "خدمات الصيانة والتجديد", desc: "صيانة فورية لأعطال الإضاءة والأسلاك، وتجديد اللوحات القديمة إلى LED موفر للطاقة.", link: "/contact" }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "ItemList",
              "itemListElement": services.map((srv, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "item": {
                  "@type": "Service",
                  "name": srv.title,
                  "description": srv.desc,
                  "provider": {
                    "@type": "Organization",
                    "name": "VALUE ADV. AGENCY"
                  }
                }
              }))
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "ما هي أنواع اللوحات الإعلانية المتاحة لديكم؟",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "نقدم تشكيلة واسعة من اللوحات منها الحروف البارزة (أكريليك، زنكور، ستانلس ستيل)، لوحات الفلكس، البنرات، تكسية واجهات الكلادينج، بالإضافة إلى لوحات 3D المضيئة والكانفس."
                  }
                },
                {
                  "@type": "Question",
                  "name": "ما هو الضمان المقدم على تفصيل وتركيب اللوحات؟",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "نقدم ضماناً شاملاً يتراوح بين سنة إلى 5 سنوات على جودة المواد المستخدمة، مقاومة العوامل الجوية، وثبات إضاءة LED، لضمان حماية استثمارك بأفضل صورة ممكنة."
                  }
                },
                {
                  "@type": "Question",
                  "name": "كم يستغرق وقت تنفيذ وتركيب لوحة المحل؟",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "تختلف المدة حسب حجم وتعقيد اللوحة، ولكن في المتوسط يستغرق التنفيذ والتركيب من 3 إلى 7 أيام عمل من تاريخ اعتماد التصميم النهائي والمقاسات من قبل العميل."
                  }
                },
                {
                  "@type": "Question",
                  "name": "هل تقدمون خدمات الصيانة للوحات الإعلانية القديمة؟",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "نعم، نوفر خدمات صيانة متكاملة تشمل إصلاح وتغيير الإضاءة التالفة وتحديثها إلى إضاءة LED موفرة للطاقة، وتجديد واجهات المحلات لتعود لوحتك كأنها جديدة."
                  }
                },
                {
                  "@type": "Question",
                  "name": "كيف يتم تحديد تكلفة لوحات الحروف البارزة أو الكلادينج؟",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "يتم تحديد التكلفة بناءً على مقاسات الواجهة بالمتر المربع، نوع المواد المستخدمة (كمية ونوع الأكريليك أو الستانلس ستيل)، نوع الإضاءة المختارة، وصعوبة التركيب في موقع المشروع."
                  }
                }
              ]
            }
          ])
        }}
      />
      <div className="min-h-screen py-20 px-6 md:px-12 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="font-heading text-4xl md:text-5xl text-[#243344] mb-6 font-bold">خدماتنا</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-sans">كل ما تحتاجه لعلامتك التجارية تحت سقف واحد، بأعلى معايير الجودة والاحترافية.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((srv, i) => (
              <div 
                key={i}
                className="bg-white/90 backdrop-blur-sm p-10 rounded-xl border border-gray-200 hover:shadow-[0_10px_50px_rgba(36,51,68,0.08)] transition-all hover:-translate-y-1 group"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="text-4xl group-hover:scale-110 transition-transform">{srv.ico}</span>
                  <span className="text-2xl font-bold text-gray-200">{srv.n}</span>
                </div>
                <h2 className="font-heading text-2xl text-[#243344] mb-4 font-bold">{srv.title}</h2>
                <p className="text-base text-gray-600 leading-relaxed mb-6 font-sans">{srv.desc}</p>
                <Link href={srv.link} className="inline-flex items-center text-[#e22a32] font-bold hover:underline gap-2 font-sans">
                  التفاصيل <span>&larr;</span>
                </Link>
              </div>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="mt-24 max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl text-[#243344] mb-4 font-bold">الأسئلة الشائعة حول خدماتنا</h2>
              <p className="text-gray-600 font-sans">إجابات على أهم الاستفسارات التقنية حول أنواع اللوحات وضمانات التنفيذ.</p>
            </div>
            
            <div className="space-y-6">
              {[
                {
                  q: "ما هي أنواع اللوحات الإعلانية المتاحة لديكم؟",
                  a: "نقدم تشكيلة واسعة من اللوحات منها الحروف البارزة (أكريليك، زنكور، ستانلس ستيل)، لوحات الفلكس، البنرات، تكسية واجهات الكلادينج، بالإضافة إلى لوحات 3D المضيئة والكانفس."
                },
                {
                  q: "ما هو الضمان المقدم على تفصيل وتركيب اللوحات؟",
                  a: "نقدم ضماناً شاملاً يتراوح بين سنة إلى 5 سنوات على جودة المواد المستخدمة، مقاومة العوامل الجوية، وثبات إضاءة LED، لضمان حماية استثمارك بأفضل صورة ممكنة."
                },
                {
                  q: "كم يستغرق وقت تنفيذ وتركيب لوحة المحل؟",
                  a: "تختلف المدة حسب حجم وتعقيد اللوحة، ولكن في المتوسط يستغرق التنفيذ والتركيب من 3 إلى 7 أيام عمل من تاريخ اعتماد التصميم النهائي والمقاسات من قبل العميل."
                },
                {
                  q: "هل تقدمون خدمات الصيانة للوحات الإعلانية القديمة؟",
                  a: "نعم، نوفر خدمات صيانة متكاملة تشمل إصلاح وتغيير الإضاءة التالفة وتحديثها إلى إضاءة LED موفرة للطاقة، وتجديد واجهات المحلات لتعود لوحتك كأنها جديدة."
                },
                {
                  q: "كيف يتم تحديد تكلفة لوحات الحروف البارزة أو الكلادينج؟",
                  a: "يتم تحديد التكلفة بناءً على مقاسات الواجهة بالمتر المربع، نوع المواد المستخدمة (كمية ونوع الأكريليك أو الستانلس ستيل)، نوع الإضاءة المختارة، وصعوبة التركيب في موقع المشروع."
                }
              ].map((faq, i) => (
                <div key={i} className="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-heading text-lg md:text-xl text-[#243344] font-bold mb-3 flex gap-3 items-start">
                    <span className="text-[#e22a32]">Q.</span>
                    {faq.q}
                  </h3>
                  <div className="flex gap-3 items-start">
                    <span className="text-[#e22a32] font-bold mt-1">A.</span>
                    <p className="font-sans text-gray-600 leading-relaxed md:leading-loose text-base m-0">
                      {faq.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
