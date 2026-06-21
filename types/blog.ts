export interface BlogPost {
  slug: string;
  title: string;
  metaDescription: string;
  keywords: string[];
  tags: string[];
  category: string;
  categoryColor: string;
  content: string;
  date: string;
  focus_keyword?: string;
  excerpt?: string;
  table_of_contents?: { heading: string; anchor: string; }[];
  faq?: { question: string; answer: string; }[];
  published?: boolean;
}
