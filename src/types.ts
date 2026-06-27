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
