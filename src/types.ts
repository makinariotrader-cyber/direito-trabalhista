export interface Tool {
  id: string;
  title: string;
  description: string;
  longIntro: string;
  category: string;
  icon: string;
  calculatorType: string;
  questions: FaqItem[];
  tips: string[];
  metaDescription: string;
  keywords: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface AffiliateProduct {
  title: string;
  description?: string;
  amazonUrl?: string;
  shopeeUrl?: string;
}

export interface Guide {
  id: string;
  title: string;
  description: string;
  content: string;
  category: string;
  icon: string;
}

export interface CLTDireito {
  id: string;
  slug: string;
  title: string;
  description: string;
  content: string;
  category: string;
  cfArticle: string;
  cltArticles: string;
  icon: string;
  tags: string[];
  faq: FaqItem[];
  praticas: string[];
  metaDescription: string;
}

export interface Sumula {
  id: string;
  numero: number;
  title: string;
  description: string;
  content: string;
  category: string;
  dataAprovacao: string;
  tags: string[];
  relacionados: string[];
  metaDescription: string;
}

export interface Jurisprudencia {
  id: string;
  titulo: string;
  tema: string;
  tese: string;
  descricao: string;
  dataJulgamento: string;
  orgaoJulgador: string;
  categoria: string;
  tags: string[];
  relator?: string;
  metaDescription: string;
}

export interface OJ {
  id: string;
  numero: number;
  titulo: string;
  conteudo: string;
  categoria: string;
  dataAprovacao: string;
  secao: string;
  tags: string[];
  metaDescription: string;
}
