export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  slug: string;
}

export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  image: string;
  bio: string;
}

export interface Testimonial {
  id: string;
  author: string;
  content: string;
  rating: number;
}
