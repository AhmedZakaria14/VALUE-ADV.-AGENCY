import { articles } from '@/data/articles';
import { Metadata } from 'next';
import BlogList from '@/components/BlogList';

export const metadata: Metadata = {
  title: 'المدونة الإعلانية - مقالات تخص اللوحات التجارية | وكالة فاليو بالرياض',
  description: 'دليلك الشامل حول تصميم اللوحات التجارية، تصاريح البلدية للوحات المحلات، وتثقيف حول أنواع الحروف البارزة المضيئة والمواد المستخدمة.',
  keywords: ['مقالات عن اللوحات الاعلانية', 'تصريح لوحة محل', 'الفرق بين الزنكور والاكريليك', 'تصميم لوحات تجارية', 'مدونة دعاية واعلان'],
  alternates: {
    canonical: 'https://valueadvagency.com/blog',
  },
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-heading text-4xl md:text-5xl text-[#243344] mb-4 font-bold">مدونة VALUE ADV. AGENCY</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-sans">
            دليلك الشامل لكل ما يخص عالم الدعاية والإعلان، تصميم اللوحات التجارية، وأحدث التقنيات في صناعة الحروف البارزة.
          </p>
        </div>

        <BlogList initialArticles={articles} />
      </div>
    </div>
  );
}
