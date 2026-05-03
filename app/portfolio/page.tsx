import { Metadata } from 'next';
import PortfolioGallery from "@/components/PortfolioGallery";

export const metadata: Metadata = {
  title: 'أعمالنا | وكالة فاليو للدعاية',
  description: 'شاهد معرض أعمال وكالة فاليو للدعاية والإعلان في تصميم وتصنيع اللوحات التجارية والحروف البارزة.',
  alternates: {
    canonical: '/portfolio',
  },
  openGraph: {
    title: 'أعمالنا | وكالة فاليو للدعاية',
    description: 'شاهد معرض أعمال وكالة فاليو للدعاية والإعلان في تصميم وتصنيع اللوحات التجارية والحروف البارزة.',
    url: 'https://valueadvagency.com/portfolio',
    type: 'website',
  }
};

export default function PortfolioPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "أعمالنا | وكالة فاليو للدعاية",
            "description": "معرض أعمال وكالة فاليو للدعاية والإعلان في تصميم وتصنيع اللوحات التجارية.",
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
      <div className="min-h-screen bg-white/80 backdrop-blur-sm py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12 text-center">
          <h1 className="font-heading text-4xl md:text-5xl text-[#243344] mb-6 font-bold">معرض أعمالنا</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-sans">تصفح مجموعة من أحدث أعمالنا في تصميم وتصنيع اللوحات التجارية والحروف البارزة.</p>
        </div>
        <PortfolioGallery />
      </div>
    </>
  );
}
