export interface Testimonial {
  id: string;
  name: string;
  city: string;
  text: string;
  rating: number;
  date: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
  boldPhrase: string;
}

export interface IncludableItem {
  title: string;
  description: string;
  duration?: string;
}
