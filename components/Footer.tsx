import Image from "next/image";
import Link from "next/link";

const PHONE_NUMBER = "0571449439";

export default function Footer() {
  return (
    <footer className="bg-[#243344] pt-16 px-6 md:px-12 pb-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <Link href="/" className="block mb-4">
              <Image src="/logo.png" alt="VALUE ADV. AGENCY" width={150} height={50} className="h-12 w-auto brightness-0 invert" />
            </Link>
            <p className="text-sm text-gray-300 leading-relaxed mb-4">وكالة فاليو للدعاية والإعلان متخصصة في تصميم وتصنيع وتركيب اللوحات الإعلانية الاحترافية بالرياض. نُحوّل علامتك التجارية إلى تحفة تُميّزك.</p>
            <a href={`tel:${PHONE_NUMBER}`} className="text-lg font-bold text-white hover:text-[#e22a32] transition-colors" dir="ltr">{PHONE_NUMBER}</a>
          </div>
          
          <div>
            <h2 className="font-heading text-xl text-white mb-4 font-bold">روابط سريعة</h2>
            <ul className="flex flex-col gap-2">
              {['الرئيسية', 'من نحن', 'خدماتنا', 'أعمالنا', 'طريقة العمل', 'المدونة', 'تواصل معنا'].map((link, i) => (
                <li key={i}>
                  <Link 
                    href={link === 'الرئيسية' ? '/' : link === 'المدونة' ? '/blog' : `/${link === 'من نحن' ? 'about' : link === 'خدماتنا' ? 'services' : link === 'أعمالنا' ? 'portfolio' : link === 'طريقة العمل' ? 'process' : 'contact'}`} 
                    className="text-sm text-gray-300 hover:text-[#e22a32] transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h2 className="font-heading text-xl text-white mb-4 font-bold">خدماتنا</h2>
            <ul className="flex flex-col gap-2">
              {['لوحات المحلات', 'طباعة بنر وأعلام', 'حروف بارزة', 'ستيكر مرمل وسيارات', 'بانرات ولافتات', 'لوحات كانفس وأكريليك'].map((link, i) => (
                <li key={i}><Link href="/services" className="text-sm text-gray-300 hover:text-[#e22a32] transition-colors">{link}</Link></li>
              ))}
            </ul>
          </div>
          
          <div>
            <h2 className="font-heading text-xl text-white mb-4 font-bold">كلمات مفتاحية</h2>
            <div className="flex flex-wrap gap-2">
              {['لوحات إعلانية الرياض', 'حروف بارزة مضيئة', 'أكريليك وزنكور وستانلس ستيل', 'بنر وفلكس', 'ستيكر سيارات', 'وكالة دعاية وإعلان'].map((tag, i) => (
                <span key={i} className="bg-white/10 border border-white/20 text-gray-300 text-xs px-2 py-1 rounded hover:bg-[#e22a32] hover:text-white transition-colors">{tag}</span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <span>© {new Date().getFullYear()} وكالة فاليو للدعاية والإعلان – جميع الحقوق محفوظة</span>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-white transition-colors">سياسة الخصوصية</Link>
            <span>|</span>
            <Link href="#" className="hover:text-white transition-colors">الشروط والأحكام</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
