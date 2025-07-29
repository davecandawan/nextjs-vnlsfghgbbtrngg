// Common types used across the application

export interface Review {
  name: string;
  date: string;
  title: string;
  body: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  rating: number;
  reviewCount: number;
}

export interface FaqItem {
  question: string;
  answer: string;
}

// Add more shared types as needed
