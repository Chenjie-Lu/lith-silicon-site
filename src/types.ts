export interface Service {
  zh: { title: string; desc: string };
  en: { title: string; desc: string };
}

export interface BlogPost {
  slug: string;
  date: string;
  category: string;
  categoryEn: string;
  title: string;
  titleEn: string;
  excerpt: string;
  excerptEn: string;
  tags: string[];
  tagsEn: string[];
  content?: string;
  contentEn?: string;
}
