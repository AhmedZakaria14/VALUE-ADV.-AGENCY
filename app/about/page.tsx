import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'من نحن - وكالة فاليو | أفضل مصنع لوحات إعلانية بالرياض',
  description: 'تعرف على وكالة فاليو للدعاية والإعلان، منشأة رائدة في تصميم وتصنيع اللوحات التجارية والحروف البارزة المضيئة (أكريليك، زنكور، ستانلس ستيل) في الرياض بخبرة واسعة.',
  keywords: ['خبراء اللوحات الاعلانية', 'مصنع لوحات الرياض', 'من نحن وكالة فاليو', 'تصنيع لوحات الاكريليك'],
  alternates: {
    canonical: 'https://valueadvagency.com/about',
  },
  openGraph: {
    title: 'من نحن - وكالة فاليو | أفضل مصنع لوحات إعلانية بالرياض',
    description: 'تعرف على وكالة فاليو للدعاية والإعلان، فريق متخصص في تصميم وتصنيع وتركيب اللوحات الإعلانية بالرياض.',
    url: 'https://valueadvagency.com/about',
    type: 'website',
  }
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "من نحن | وكالة فاليو للدعاية",
            "description": "نحن فريق متخصص في تصميم وتصنيع وتركيب اللوحات الإعلانية بالرياض.",
            "publisher": {
              "@type": "Organization",
              "name": "وكالة فاليو للدعاية",
              "logo": {
                "@type": "ImageObject",
                "url": "https://valueadvagency.com/logo.png"
              }
            }
          })
        }}
      />
      <div className="min-h-screen bg-transparent py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="w-full aspect-square bg-white/90 backdrop-blur-sm border border-gray-200 rounded-lg shadow-[0_10px_50px_rgba(36,51,68,0.08)] flex items-center justify-center p-8">
              <div className="font-heading text-[60px] md:text-[80px] text-[#e22a32] text-center leading-tight">
                وكالة فاليو<br/><span className="text-2xl text-gray-500 font-sans">للدعاية والإعلان</span>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h1 className="font-heading text-4xl md:text-5xl text-[#243344] mb-6 font-bold">من نحن</h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-6 font-sans">
              نحن متخصصون في تصميم وتصنيع وتركيب جميع أنواع اللوحات الإعلانية والدعائية بأحدث التقنيات وأفضل الخامات، مع التزامنا بتقديم أعلى مستويات الجودة والضمان.<br/><br/>خبرتنا الممتدة في السوق السعودي تجعلنا الخيار الأول لمئات الشركات والمحلات.
            </p>
            <ul className="flex flex-col gap-4 mt-8 font-sans">
              {[
                "تنفيذ متوافق مع اشتراطات البلدية والجهات الرسمية",
                "فريق من أمهر الفنيين في التركيب والصيانة",
                "أحدث معدات القص والطباعة لأعلى دقة في التنفيذ",
                "ضمان جودة شاملة وصيانة بعد التسليم",
                "تسليم سريع وأسعار تنافسية في السوق"
              ].map((feat, i) => (
                <li key={i} className="flex items-center gap-3 py-3 text-gray-700 border-b border-gray-100 last:border-0 text-lg">
                  <span className="text-[#e22a32] font-bold text-xl">✓</span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
