"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { Check, ChevronRight, ChevronLeft, Quote, PenTool, Type, Wrench, X, ZoomIn } from "lucide-react";

const PHONE_NUMBER = "0571449439";
const WHATSAPP_LINK = `https://wa.me/966571449439`;

export default function HomeClient() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      bg: "/images/whatsapp-51.jpeg",
      title: "أفضل وكالة لوحات إعلانية في الرياض",
      subtitle: "تصميم وتنفيذ لوحات المحلات والواجهات باحترافية عالية",
      highlight: "إعلانية"
    },
    {
      bg: "/images/whatsapp-55.jpeg",
      title: "تصنيع حروف بارزة مضيئة بجودة مضمونة",
      subtitle: "حروف زنكور، ستانلس ستيل، واكريليك مع ضمان شامل",
      highlight: "مضيئة"
    },
    {
      bg: "/images/whatsapp-46.jpeg",
      title: "تصاميم إبداعية وتكسية واجهات كلادينج",
      subtitle: "نجسد هويتك التجارية بأفضل صورة على واجهة محلك",
      highlight: "كلادينج"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <>
      <h1 className="sr-only">وكالة فاليو للدعاية والإعلان - أفضل تصنيع لوحات محلات وحروف بارزة مضيئة بالرياض</h1>
      {/* Hero Slider */}
      <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden bg-[#243344]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 bg-black/40 z-10" />
            <Image
              src={slides[currentSlide].bg}
              alt={slides[currentSlide].title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 z-20 flex items-center justify-center text-center px-4">
              <div className="max-w-4xl">
                <motion.h2 
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="font-heading text-5xl md:text-7xl text-white mb-6 leading-tight"
                >
                  {slides[currentSlide].highlight && slides[currentSlide].title.includes(slides[currentSlide].highlight) ? (
                    <>
                      {slides[currentSlide].title.split(slides[currentSlide].highlight)[0]}
                      <span className="text-[#f4c03b]">{slides[currentSlide].highlight}</span>
                      {slides[currentSlide].title.split(slides[currentSlide].highlight)[1]}
                    </>
                  ) : (
                    slides[currentSlide].title
                  )}
                </motion.h2>
                <motion.p 
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-xl md:text-3xl text-white/90 font-sans"
                >
                  {slides[currentSlide].subtitle}
                </motion.p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        
        {/* Slider Controls */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-3">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentSlide === idx ? "bg-[#e22a32] scale-125" : "bg-white/50 hover:bg-white"
              }`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Intro Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="block text-[#e22a32] font-sans text-xl mb-4 font-bold">لمحة سريعة على أنواع لوحات الحروف البارزة</span>
            <h2 className="text-[#243344] font-heading text-4xl md:text-5xl font-bold">تصميم وتصنيع وتركيب احترافي</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "لوحات حروف بارزة زنكور",
                desc: "تتميز لوحات حروف بارزة زنكور بمظهر معدني فاخر، وتُستخدم لواجهات المحلات والشركات لجذب الأنظار وتعزيز الهوية البصرية.",
                img: encodeURI("https://alqrar.com/wp-content/uploads/2025/07/لوحات-حروف-بارزة-زنكور.jpg")
              },
              {
                title: "حروف استانلس ستيل",
                desc: "حروف استانلس ستيل تُستخدم في اللوحات الإعلانية لتميزها بالصلابة واللمعان، وتضفي مظهرًا عصريًا وراقيًا على واجهات المحلات والشركات.",
                img: encodeURI("https://alqrar.com/wp-content/uploads/2025/07/حروف-استانلس-ستيل.jpg")
              },
              {
                title: "حروف اكريليك بارزة",
                desc: "حروف أكريليك بارزة تُعد خيارًا مميزًا في تصميم اللوحات الإعلانية، حيث تتميز بألوانها الزاهية وشكلها العصري.",
                img: encodeURI("https://alqrar.com/wp-content/uploads/2025/07/حروف-اكريليك-بارزة.jpg")
              }
            ].map((item, idx) => (
              <div key={idx} className="group relative h-[400px] rounded-lg overflow-hidden shadow-[0_10px_50px_rgba(36,51,68,0.15)]">
                <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                  <Image src={item.img} alt={item.title} fill className="object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#e22a32]/90 via-[#e22a32]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-white font-heading text-2xl font-bold mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{item.title}</h3>
                  <p className="text-white/90 font-sans text-base leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 line-clamp-3">
                    {item.desc}
                  </p>
                  <Link href="/services" className="inline-block bg-white text-[#243344] font-sans font-bold px-6 py-3 rounded w-fit opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300 hover:bg-[#243344] hover:text-[#e22a32]">
                    المزيد ...
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2 relative">
              <div className="relative h-[600px] w-full rounded-lg overflow-hidden shadow-2xl">
                <Image 
                  src={encodeURI("https://alqrar.com/wp-content/uploads/2025/07/تصنيع-لوحات-حروف-بارزة.jpg")} 
                  alt="تصنيع لوحات حروف بارزة" 
                  fill 
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#e22a32] rounded-full -z-10" />
            </div>
            
            <div className="w-full lg:w-1/2">
              <span className="block text-[#e22a32] font-sans text-xl mb-2 font-bold">من نحن</span>
              <h2 className="text-[#243344] font-heading text-4xl md:text-5xl font-bold mb-6 leading-tight">
                وكالة فاليو للدعاية والإعلان
              </h2>
              <p className="text-gray-600 font-sans text-lg mb-8 leading-relaxed whitespace-pre-line">
                نحن متخصصون في تصميم وتصنيع وتركيب جميع أنواع اللوحات الإعلانية والدعائية بأحدث التقنيات وأفضل الخامات، مع التزامنا بتقديم أعلى مستويات الجودة والضمان.
                
                💎 مميزات خدماتنا:
                - خامات أصلية 100%: نستخدم أجود أنواع الاستانلس ستيل والزنكور عالي الجودة والأكريليك النقي وLED المقاوم للعوامل الجوية.
                - ضمان شامل لمدة سنة كاملة: ضمان حقيقي يغطي الأداء والتركيب والإضاءة.
                - تصاميم احترافية ومبتكرة: فريق تصميم جاهز لترجمة رؤيتكم إلى لوحة فريدة وجذابة.
                
                لماذا تختار وكالة فاليو للدعاية والإعلان؟
                - السرعة في التنفيذ: التزام بالمواعيد دون تأخير
                - فنيون بخبرة عالية: فريق متخصص لضمان جودة التركيب
                - أسعار منافسة: جودة عالية بأسعار تناسب ميزانيتكم
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {["تصاميم احترافية", "تنفيذ بدقة عالية", "خامات فاخرة", "التزام بالمواعيد"].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#e22a32]/10 flex items-center justify-center text-[#e22a32]">
                      <Check className="w-5 h-5" />
                    </div>
                    <span className="font-sans text-lg font-bold text-[#243344]">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="block text-[#e22a32] font-sans text-xl mb-2 font-bold">خدماتنا الشاملة</span>
            <h2 className="text-[#243344] font-heading text-4xl md:text-5xl font-bold">ما يمكننا القيام به بالنسبة لك</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "تصميم وتصنيع اللوحات",
                desc: "حروف أكريليك مضيئة، حروف إستيل، حروف زنكور مطلية، حروف بلاستيك مضيئة، ولوحات الكلادينج.",
                icon: <PenTool className="w-16 h-16 text-[#e22a32] group-hover:text-white transition-colors" />,
                link: "/services/acrylic-signs"
              },
              {
                title: "طباعة وتركيب بنر وفلكس",
                desc: "تغطية أسوار المشاريع بنر، طباعة أعلام بنر قماش، طباعة وتركيب فلكس فيس للمناسبات والحملات.",
                icon: <Type className="w-16 h-16 text-[#e22a32] group-hover:text-white transition-colors" />,
                link: "/services/banner-project-walls"
              },
              {
                title: "ستيكر سيارات ومرمل",
                desc: "طباعة وتركيب ستيكر لجميع السيارات، وطباعة وتركيب ستيكر مرمل للواجهات الزجاجية.",
                icon: <Wrench className="w-16 h-16 text-[#e22a32] group-hover:text-white transition-colors" />,
                link: "/services/car-sticker"
              },
              {
                title: "بوب اب ورول اب",
                desc: "طباعة وتركيب بوب اب، رول اب، ولاما استاند للمعارض والفعاليات.",
                icon: <PenTool className="w-16 h-16 text-[#e22a32] group-hover:text-white transition-colors" />,
                link: "/services/popup-rollup-stand"
              },
              {
                title: "لوحات كانفس",
                desc: "طباعة وتركيب لوحات كانفس فنية ودعائية بجودة عالية.",
                icon: <Type className="w-16 h-16 text-[#e22a32] group-hover:text-white transition-colors" />,
                link: "/services/canvas-signs"
              },
              {
                title: "خدمات الصيانة والتجديد",
                desc: "صيانة فورية لأعطال الإضاءة والأسلاك، وتجديد اللوحات القديمة إلى LED موفر للطاقة.",
                icon: <Wrench className="w-16 h-16 text-[#e22a32] group-hover:text-white transition-colors" />,
                link: "/services"
              }
            ].map((service, idx) => (
              <div key={idx} className="group bg-white border border-gray-100 p-10 rounded-lg shadow-[0_10px_50px_rgba(36,51,68,0.08)] hover:bg-[#e22a32] transition-colors duration-300 text-center">
                <div className="h-24 mb-8 flex items-center justify-center">
                  {service.icon}
                </div>
                <h3 className="text-[#243344] group-hover:text-white font-heading text-2xl font-bold mb-4 pb-4 border-b-2 border-[#e22a32] group-hover:border-white inline-block transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500 group-hover:text-white/90 font-sans text-base leading-relaxed mb-8 transition-colors">
                  {service.desc}
                </p>
                <Link href={service.link} className="inline-block font-sans font-bold text-[#243344] group-hover:text-[#e22a32] bg-gray-50 group-hover:bg-white px-6 py-2 rounded transition-colors">
                  اقرأ أكثر
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-[#243344] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M30 0l4 12 12 4-12 4-4 12-4-12-12-4 12-4z M0 30l4 12 12 4-12 4-4 12-4-12-12-4 12-4z M60 30l4 12 12 4-12 4-4 12-4-12-12-4 12-4z M30 60l4 12 12 4-12 4-4 12-4-12-12-4 12-4z\' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-white max-w-2xl">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 leading-tight">
                لوحتك أول انطباع عنك ... <span className="text-[#e22a32]">لا تتركها للصدفة!</span>
              </h2>
              <p className="font-sans text-lg text-gray-300">
                وكالة فاليو للدعاية والإعلان ننفذ حروف بارزة ولوحات زنكور بأعلى جودة، ونوفر خدمات صيانة لوحات المحلات الرياض لضمان استمرار التألق والتميّز.
              </p>
            </div>
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="shrink-0 bg-white text-[#243344] hover:bg-[#e22a32] hover:text-white font-sans font-bold text-lg px-8 py-4 rounded shadow-lg transition-all duration-300"
            >
              استشارة مجانية
            </a>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="block text-[#e22a32] font-sans text-xl mb-2 font-bold">كيف؟</span>
            <h2 className="text-[#243344] font-heading text-4xl md:text-5xl font-bold mb-4">تفصيل لوحات محلات</h2>
            <p className="text-gray-600 font-sans text-lg max-w-3xl mx-auto">
              يعد تفصيل لوحة محل خطوة أساسية لتعزيز هوية متجرك وجذب العملاء بجودة تصميم احترافية.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
              <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-xl">
                <Image 
                  src={encodeURI("https://alqrar.com/wp-content/uploads/2025/07/تصميم-قارمة-محل.jpg")} 
                  alt="تصميم قارمة محل" 
                  fill 
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 space-y-12">
              {[
                { num: "٠١", title: "تصميم لوحة محل", desc: "تصميم لوحة محل احترافية يجمع بين الإبداع والجودة ليعكس هوية متجرك ويجذب انتباه العملاء." },
                { num: "٠٢", title: "تصنيع اللوحة", desc: "تصنيع لوحات محلات بجودة عالية باستخدام أفضل المواد والتقنيات الحديثة لضمان الجودة." },
                { num: "٠٣", title: "تركيب لوحات محلات", desc: "تركيب لوحات محلات بدقة واحترافية عالية باستخدام أحدث الأدوات لضمان تثبيت متين وجمالي." }
              ].map((step, idx) => (
                <div key={idx} className="flex gap-6 group">
                  <div className="shrink-0 w-16 h-16 rounded bg-[#e22a32] text-white flex items-center justify-center font-heading text-2xl font-bold group-hover:bg-[#243344] transition-colors">
                    {step.num}
                  </div>
                  <div>
                    <h3 className="text-[#243344] font-heading text-2xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-500 font-sans text-base leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="block text-[#e22a32] font-sans text-xl mb-2 font-bold">أعمالنا</span>
            <h2 className="text-[#243344] font-heading text-4xl md:text-5xl font-bold">نحن محترفون</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { src: "/images/whatsapp-1.jpeg", alt: "واجهة محل بحروف بارزة مضيئة" },
              { src: "/images/whatsapp-2.jpeg", alt: "ستيكر وطباعة إعلانية على مركبة" },
              { src: "/images/whatsapp-16.jpeg", alt: "لوحات محلات مضيئة لواجهات تجارية" },
              { src: "/images/whatsapp-24.jpeg", alt: "تنفيذ واجهة مشروع وهوية بصرية" },
              { src: "/images/whatsapp-25.jpeg", alt: "لوحة محل خارجية بحروف بارزة" },
              { src: "/images/whatsapp-43.jpeg", alt: "تغطية أسوار مشروع بتصميم إعلاني" },
              { src: "/images/whatsapp-51.jpeg", alt: "حروف وشعار داخلي مضيء للاستقبال" },
              { src: "/images/whatsapp-55.jpeg", alt: "صندوق إضاءة ولوحة واجهة خارجية" }
            ].map((item, idx) => (
              <div key={idx} className="relative aspect-[4/3] overflow-hidden group rounded">
                <Image 
                  src={item.src} 
                  alt={item.alt} 
                  fill 
                  loading="lazy"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <span className="inline-block px-3 py-1 bg-[#e22a32] text-white text-xs font-bold rounded-full mb-2 font-sans">
                      لوحات محلات
                    </span>
                    <h3 className="text-white font-heading text-xl font-bold">
                      مشروع {idx + 1}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/portfolio" className="inline-block bg-[#243344] text-white font-sans font-bold px-8 py-3 rounded hover:bg-[#e22a32] transition-colors">
              شاهد جميع أعمالنا
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="block text-[#e22a32] font-sans text-xl mb-2 font-bold">التوصيات</span>
            <h2 className="text-[#243344] font-heading text-4xl md:text-5xl font-bold">تعرف على ما يقوله عملاؤنا السعداء</h2>
          </div>

          <div className="max-w-4xl mx-auto bg-white p-10 md:p-16 rounded-lg shadow-xl relative mt-20">
            <div className="absolute -top-16 right-10 md:-right-16 w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <Image src="https://picsum.photos/seed/client/200/200" alt="Client" fill className="object-cover" referrerPolicy="no-referrer" />
            </div>
            <Quote className="absolute bottom-10 left-10 w-24 h-24 text-[#e22a32]/10" />
            
            <p className="font-sans text-xl md:text-2xl text-[#243344] leading-relaxed mb-8 relative z-10">
              &quot;تجربة رائعة !! لقد جعل الفريق العملية برمتها سهلة من مرحلة التخطيط إلى التركيب النهائي. لقد قاموا بعمل رائع. شعرت أنهم استمعوا حقًا إلى ما أردت، وقدموا لي أفكارًا مبتكرة.&quot;
            </p>
            <div className="font-sans text-lg text-gray-500 font-bold">
              - خالد محمود
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="w-full lg:w-1/2">
              <span className="block text-[#e22a32] font-sans text-xl mb-2 font-bold">الأسعار</span>
              <h2 className="text-[#243344] font-heading text-4xl md:text-5xl font-bold mb-6">مهتم في لوحات المحلات؟</h2>
              <p className="text-gray-600 font-sans text-lg mb-8 leading-relaxed">
                يعد تصميم لوحات المحلات الخاصة بك خطوة محورية في بناء هوية تجارية قوية ومتميزة. فاللوحة ليست مجرد اسم، بل هي أول ما يراه العميل وتعكس احترافية نشاطك التجاري.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#243344] text-white rounded flex items-center justify-center">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 font-sans">اتصل بنا</div>
                    <div className="font-bold text-[#243344] font-sans dir-ltr">{PHONE_NUMBER}</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2">
              <div className="bg-[#e22a32] p-8 md:p-12 rounded-lg shadow-2xl">
                <h3 className="text-white font-heading text-3xl font-bold mb-8">طلب عرض أسعار مجاني</h3>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block text-white/80 text-sm mb-1 font-sans">اسمك (*)</label>
                    <input type="text" className="w-full bg-white/10 border border-white/20 rounded px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white transition-colors" required />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white/80 text-sm mb-1 font-sans">بريدك الالكتروني (*)</label>
                      <input type="email" className="w-full bg-white/10 border border-white/20 rounded px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white transition-colors" required />
                    </div>
                    <div>
                      <label className="block text-white/80 text-sm mb-1 font-sans">رقم الجوال (*)</label>
                      <input type="tel" className="w-full bg-white/10 border border-white/20 rounded px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white transition-colors" required />
                    </div>
                  </div>
                  <div>
                    <label className="block text-white/80 text-sm mb-1 font-sans">رسالتك (*)</label>
                    <textarea rows={4} className="w-full bg-white/10 border border-white/20 rounded px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white transition-colors" required></textarea>
                  </div>
                  <button type="submit" className="bg-[#243344] text-white font-sans font-bold px-8 py-4 rounded hover:bg-white hover:text-[#243344] transition-colors w-full md:w-auto">
                    إرسال
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
