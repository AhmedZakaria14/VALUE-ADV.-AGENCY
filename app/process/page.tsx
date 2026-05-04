import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'مراحل التنفيذ والتركيب - وكالة فاليو لصناعة اللوحات الإعلانية',
  description: 'كيف نعمل؟ تكتشف مراحل تصميم وتصنيع وتركيب اللوحات الإعلانية (كلادينج وحروف بارزة) بأعلى معايير الجودة والسرعة في التنفيذ لعملائنا بالرياض.',
  keywords: ['تركيب لوحات محلات', 'كيفية تنفيذ لوحات كلادينج', 'طريقة عمل الحروف المضيئة', 'تنفيذ اللوحات الاعلانية'],
  alternates: {
    canonical: 'https://valueadvagency.com/process',
  },
  openGraph: {
    title: 'مراحل التنفيذ والتركيب - وكالة فاليو لصناعة اللوحات الإعلانية',
    description: 'كيف نعمل؟ تكتشف مراحل تصميم وتصنيع وتركيب اللوحات الإعلانية (كلادينج وحروف بارزة) بأعلى معايير الجودة والسرعة في التنفيذ لعملائنا بالرياض.',
    url: 'https://valueadvagency.com/process',
    type: 'website',
  }
};

export default function ProcessPage() {
  const steps = [
    { num: "01", title: "الاستشارة والفكرة", desc: "نجلس معك لفهم احتياجاتك ورؤيتك لعلامتك التجارية، ونقدم لك الاستشارات الفنية اللازمة." },
    { num: "02", title: "التصميم المبدئي", desc: "يقوم فريقنا بتجهيز تصاميم مبدئية وعرضها عليك لاختيار الأنسب وإجراء التعديلات المطلوبة." },
    { num: "03", title: "التصنيع والتنفيذ", desc: "بعد اعتماد التصميم، نبدأ عملية التصنيع باستخدام أفضل الخامات وأحدث تقنيات القص والطباعة لضمان جودة عالية." },
    { num: "04", title: "التركيب والتسليم", desc: "يقوم فريقنا الفني بتركيب اللوحة أو المطبوعات باحترافية عالية وفي الوقت المحدد لضمان رضاك التام." }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "طريقة العمل | وكالة فاليو للدعاية",
            "description": "تعرف على خطوات عملنا في وكالة فاليو للدعاية والإعلان من الفكرة والتصميم إلى التنفيذ والتركيب.",
            "publisher": {
              "@type": "Organization",
              "name": "وكالة فاليو للدعاية"
            }
          })
        }}
      />
      <div className="min-h-screen py-20 px-6 md:px-12 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="font-heading text-4xl md:text-5xl text-[#243344] mb-6 font-bold">طريقة العمل</h1>
            <p className="text-lg text-gray-600 font-sans">نتبع منهجية عمل واضحة واحترافية لضمان تقديم أفضل النتائج لعملائنا.</p>
          </div>
          
          <div className="space-y-8">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-6 items-start bg-white p-8 rounded-xl shadow-[0_10px_50px_rgba(36,51,68,0.08)] border border-gray-100">
                <div className="flex-shrink-0 w-16 h-16 bg-[#e22a32] text-white rounded-full flex items-center justify-center text-2xl font-bold font-heading">
                  {step.num}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-[#243344] mb-3 font-heading">{step.title}</h2>
                  <p className="text-gray-600 text-lg leading-relaxed font-sans">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
