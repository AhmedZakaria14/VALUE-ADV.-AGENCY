import { Metadata } from 'next';

const PHONE_NUMBER = "0571449439";
const WHATSAPP_LINK = `https://wa.me/966571449439`;

export const metadata: Metadata = {
  title: 'تواصل معنا - طلب عرض سعر اللوحات الإعلانية | وكالة فاليو',
  description: 'اتصل بوكالة فاليو للدعاية والإعلان بالرياض لتصميم وتصنيع لوحتك الإعلانية أو تكسية واجهة محلك. رقم التواصل و الواتساب: 0571449439',
  keywords: ['ارقام شركات لوحات اعلانية بالرياض', 'رقم صانع لوحات محلات', 'طلب عرض سعر لوحة مضيئة', 'واتساب مصنع لوحات'],
  alternates: {
    canonical: 'https://valueadvagency.com/contact',
  },
  openGraph: {
    title: 'تواصل معنا - طلب عرض سعر اللوحات الإعلانية | وكالة فاليو',
    description: 'اتصل بوكالة فاليو للدعاية والإعلان بالرياض لتصميم وتصنيع لوحتك الإعلانية أو تكسية واجهة محلك. رقم التواصل و الواتساب: 0571449439',
    url: 'https://valueadvagency.com/contact',
    type: 'website',
  }
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "تواصل معنا | وكالة فاليو للدعاية",
            "description": "تواصل مع وكالة فاليو للدعاية والإعلان لتصميم لوحتك التجارية.",
            "publisher": {
              "@type": "Organization",
              "name": "وكالة فاليو للدعاية"
            }
          })
        }}
      />
      <div className="min-h-screen py-20 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-heading text-4xl md:text-5xl text-[#243344] mb-6 font-bold">تواصل معنا</h1>
          <p className="text-lg text-gray-600 mb-12 font-sans">نحن هنا للإجابة على استفساراتك وتقديم أفضل الحلول لعلامتك التجارية.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gray-50 p-10 rounded-xl border border-gray-100 shadow-[0_10px_50px_rgba(36,51,68,0.08)]">
              <div className="text-4xl mb-4">📞</div>
              <h2 className="text-xl font-bold text-[#243344] mb-2 font-heading">اتصل بنا</h2>
              <p className="text-gray-600 mb-6 font-sans">متاحون للرد على مكالماتكم طوال أيام الأسبوع.</p>
              <a href={`tel:${PHONE_NUMBER}`} className="inline-block bg-[#243344] text-white px-8 py-3 rounded-md font-bold text-lg hover:bg-[#e22a32] transition-colors font-sans" dir="ltr">
                {PHONE_NUMBER}
              </a>
            </div>
            
            <div className="bg-gray-50 p-10 rounded-xl border border-gray-100 shadow-[0_10px_50px_rgba(36,51,68,0.08)]">
              <div className="text-4xl mb-4">💬</div>
              <h2 className="text-xl font-bold text-[#243344] mb-2 font-heading">واتساب</h2>
              <p className="text-gray-600 mb-6 font-sans">تواصل معنا عبر واتساب للحصول على عرض سعر فوري.</p>
              <a href={WHATSAPP_LINK} className="inline-block bg-[#25D366] text-white px-8 py-3 rounded-md font-bold text-lg hover:bg-[#128C7E] transition-colors font-sans" target="_blank" rel="noopener noreferrer nofollow">
                مراسلة عبر واتساب
              </a>
            </div>
          </div>
          
          <div className="bg-[#243344]/5 p-10 rounded-xl border border-[#243344]/10 text-center shadow-[0_10px_50px_rgba(36,51,68,0.08)]">
            <h2 className="text-2xl font-bold text-[#243344] mb-4 font-heading">موقعنا</h2>
            <p className="text-gray-700 text-lg font-sans">الرياض – المملكة العربية السعودية 🇸🇦</p>
          </div>
        </div>
      </div>
    </>
  );
}
