"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { Store, PenTool, Type, Palette, Presentation, Layers, X, Menu, Phone, Mail, MapPin } from "lucide-react";

const PHONE_NUMBER = "0571449439";
const WHATSAPP_LINK = `https://wa.me/966571449439`;

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const menuItems = [
    { name: "الرئيسية", href: "/" },
    { name: "من نحن", href: "/about" },
    { name: "خدماتنا", href: "/services" },
    { name: "أعمالنا", href: "/portfolio" },
    { name: "طريقة العمل", href: "/process" },
    { name: "المدونة", href: "/blog" },
  ];

  return (
    <>
      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-[#243344]/60 backdrop-blur-sm z-[9998] md:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white z-[9999] md:hidden shadow-2xl flex flex-col"
            >
              <div className="p-6 flex items-center justify-between border-b border-gray-100">
                <Link href="/" onClick={() => setIsMenuOpen(false)}>
                  <Image src="/logo.png" alt="VALUE ADV. AGENCY" width={120} height={40} className="h-8 w-auto mix-blend-multiply" />
                </Link>
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 rounded-full bg-gray-50 text-[#243344] hover:bg-[#e22a32] hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto py-8 px-6">
                <nav className="flex flex-col gap-2">
                  {menuItems.map((item, idx) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + idx * 0.05, duration: 0.3, ease: "easeOut" }}
                    >
                      <Link 
                        href={item.href} 
                        onClick={() => setIsMenuOpen(false)}
                        className="flex items-center justify-between py-4 px-4 rounded-xl text-[#243344] hover:bg-gray-50 hover:text-[#e22a32] text-lg font-bold transition-all group"
                      >
                        {item.name}
                        <motion.span 
                          initial={{ scale: 0 }}
                          whileHover={{ scale: 1 }}
                          className="w-2 h-2 rounded-full bg-[#e22a32] opacity-0 group-hover:opacity-100 transition-opacity"
                        />
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                <div className="mt-12 pt-8 border-t border-gray-100 space-y-6">
                  <div className="flex items-center gap-4 text-[#243344]">
                    <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-[#e22a32]">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-sans">تواصل معنا</p>
                      <p className="font-bold dir-ltr">{PHONE_NUMBER}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-[#243344]">
                    <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-[#e22a32]">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-sans">البريد الإلكتروني</p>
                      <p className="font-bold">info@valueadvagency.com</p>
                    </div>
                  </div>
                  <a 
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="flex items-center gap-4 text-[#243344] group/wa"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#25D366]/10 flex items-center justify-center text-[#25D366] group-hover/wa:bg-[#25D366] group-hover/wa:text-white transition-colors">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a11.95 11.95 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M11.99 0C5.373 0 0 5.373 0 11.99c0 2.11.553 4.083 1.518 5.793L0 24l6.335-1.491A11.935 11.935 0 0011.99 24C18.607 24 24 18.627 24 11.99 24 5.373 18.607 0 11.99 0zm0 21.818a9.813 9.813 0 01-5.007-1.374l-.36-.214-3.753.983.999-3.649-.235-.374A9.822 9.822 0 012.182 11.99C2.182 6.575 6.575 2.182 11.99 2.182c5.416 0 9.808 4.393 9.808 9.808 0 5.416-4.392 9.828-9.808 9.828z"/></svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-sans">واتساب</p>
                      <p className="font-bold dir-ltr">0571449439</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="p-6 border-t border-gray-100">
                <Link 
                  href="/contact" 
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full bg-[#e22a32] text-white font-bold text-center py-4 rounded-xl shadow-lg shadow-[#e22a32]/20 hover:bg-[#243344] transition-all active:scale-95"
                >
                  تواصل الآن
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* TOPBAR */}
      <div className="flex flex-col md:flex-row justify-between items-center bg-[#243344] px-4 md:px-11 py-2 text-xs md:text-sm text-gray-200 border-b border-[#1a2531] gap-2 md:gap-0 font-sans">
        <span>📍 الرياض – المملكة العربية السعودية 🇸🇦</span>
        <div className="flex gap-4 md:gap-6">
          <a href="mailto:info@valueadvagency.com" className="hover:text-[#f4c03b] transition-colors font-medium">✉ info@valueadvagency.com</a>
          <a href={`tel:${PHONE_NUMBER}`} className="hover:text-[#f4c03b] transition-colors font-medium" dir="ltr">📞 {PHONE_NUMBER}</a>
        </div>
      </div>

      {/* NAV */}
      <nav className="sticky top-0 z-[900] h-[74px] px-6 md:px-12 flex items-center justify-between bg-white/90 backdrop-blur-md border-b border-gray-300 shadow-sm font-sans">
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="VALUE ADV. AGENCY" width={150} height={50} className="h-10 md:h-12 w-auto mix-blend-multiply" />
        </Link>
        <ul className="hidden md:flex items-center gap-1">
          <li><Link href="/" className="text-[#243344] hover:text-[#e22a32] px-4 py-2 rounded text-[15px] font-bold transition-colors">الرئيسية</Link></li>
          <li><Link href="/about" className="text-[#243344] hover:text-[#e22a32] px-4 py-2 rounded text-[15px] font-bold transition-colors">من نحن</Link></li>
          <li><Link href="/services" className="text-[#243344] hover:text-[#e22a32] px-4 py-2 rounded text-[15px] font-bold transition-colors">خدماتنا</Link></li>
          <li><Link href="/portfolio" className="text-[#243344] hover:text-[#e22a32] px-4 py-2 rounded text-[15px] font-bold transition-colors">أعمالنا</Link></li>
          <li><Link href="/process" className="text-[#243344] hover:text-[#e22a32] px-4 py-2 rounded text-[15px] font-bold transition-colors">طريقة العمل</Link></li>
          <li><Link href="/blog" className="text-[#243344] hover:text-[#e22a32] px-4 py-2 rounded text-[15px] font-bold transition-colors">المدونة</Link></li>
          <li><Link href="/contact" className="bg-[#e22a32] text-white font-bold px-5 py-2.5 rounded ml-2 hover:bg-[#243344] transition-colors">تواصل الآن</Link></li>
        </ul>
        <button 
          className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg bg-gray-50 border border-gray-200 text-[#243344] hover:bg-gray-100 transition-colors" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="القائمة"
        >
          <div className="flex flex-col gap-1.5 items-center justify-center">
            <motion.span 
              animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-current rounded-full"
            />
            <motion.span 
              animate={isMenuOpen ? { opacity: 0, x: 10 } : { opacity: 1, x: 0 }}
              className="block w-6 h-0.5 bg-current rounded-full"
            />
            <motion.span 
              animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-current rounded-full"
            />
          </div>
        </button>
      </nav>

      {/* TICKER */}
      <div className="w-full overflow-hidden bg-[#e22a32] text-white py-2.5 flex items-center shadow-md relative z-[800] font-sans">
        <div className="flex w-max animate-marquee-rtl hover:[animation-play-state:paused] items-center flex-shrink-0">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-8 items-center whitespace-nowrap px-4 flex-shrink-0">
              <span className="font-bold text-sm md:text-base flex items-center gap-1.5"><Store className="w-4 h-4" /> لوحات المحلات</span>
              <span className="text-white/50 opacity-50">•</span>
              <span className="font-bold text-sm md:text-base flex items-center gap-1.5"><PenTool className="w-4 h-4" /> طباعة ستيكر سيارات</span>
              <span className="text-white/50 opacity-50">•</span>
              <span className="font-bold text-sm md:text-base flex items-center gap-1.5"><Type className="w-4 h-4" /> حروف بارزة 3D</span>
              <span className="text-white/50 opacity-50">•</span>
              <span className="font-bold text-sm md:text-base flex items-center gap-1.5"><Palette className="w-4 h-4" /> بنر أسوار مشاريع</span>
              <span className="text-white/50 opacity-50">•</span>
              <span className="font-bold text-sm md:text-base flex items-center gap-1.5"><Presentation className="w-4 h-4" /> رول اب وبوب اب</span>
              <span className="text-white/50 opacity-50">•</span>
              <span className="font-bold text-sm md:text-base flex items-center gap-1.5"><Layers className="w-4 h-4" /> هوية بصرية متكاملة</span>
              <span className="text-white/50 opacity-50">•</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
