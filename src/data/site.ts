import hero from "@/assets/hero-dental.jpg";
import services from "@/assets/services-card.jpg";
import clinic from "@/assets/clinic.jpg";
import whitening from "@/assets/whitening.jpg";
import d1 from "@/assets/dentist-1.jpg";
import d2 from "@/assets/dentist-2.jpg";
import d3 from "@/assets/dentist-3.jpg";
import d4 from "@/assets/dentist-4.jpg";

export const images = { hero, services, clinic, whitening };

export const serviceList = [
  {
    slug: "preventive-care",
    title: "Preventive Care",
    desc: "Keep your smile healthy with check-ups, cleanings, and fluoride. Our team ensures your teeth stay strong.",
  },
  {
    slug: "oral-surgery",
    title: "Oral Surgery",
    desc: "For complex needs, we provide dental implants, wisdom teeth extractions, and surgery to restore appearance.",
  },
  {
    slug: "emergency-care",
    title: "Emergency Care",
    desc: "If you're in pain or facing an urgent dental issue, we offer prompt, gentle, attentive care to help you feel better.",
  },
  {
    slug: "orthodontics",
    title: "Orthodontics",
    desc: "Straighten your teeth and improve your smile with traditional braces or clear aligners for lasting confidence.",
  },
  {
    slug: "cosmetic-dentistry",
    title: "Cosmetic Dentistry",
    desc: "Enhance the natural beauty of your smile with services like teeth whitening, veneers, and smile makeovers.",
  },
  {
    slug: "dental-repair",
    title: "Dental Repair",
    desc: "From fillings to crowns and bridges, we restore damaged teeth, improving both their function and appearance.",
  },
];

export const dentists = [
  { slug: "dr-olivia-martinez", name: "Dr. Olivia Martinez", role: "Chief Dentist", img: d1 },
  { slug: "dr-jacob-wilson", name: "Dr. Jacob Wilson", role: "Orthodontist", img: d2 },
  { slug: "lia-shanna", name: "Lia Shanna", role: "Dental Assistant", img: d3 },
  { slug: "emily-parker", name: "Emily Parker", role: "Patient Coordinator", img: d4 },
];

export const testimonials = [
  {
    title: "Wonderful Experience!",
    text: "I've been visiting Dental for years, and I've always had a great experience. The staff is friendly, the office is clean and modern, and Dr. Martinez always takes the time to explain my treatment options.",
    name: "Lisa Miles",
    service: "Orthodontic Service",
  },
  {
    title: "Highly Recommended!",
    text: "Dr. Wilson and his team made my orthodontic journey smooth and stress-free. The results are incredible, and I feel more confident than ever.",
    name: "Daniel Dalen",
    service: "Orthodontic Service",
  },
  {
    title: "Amazing Experience!",
    text: "I was nervous about getting my first root canal, but Dr. Martinez and the whole team were so reassuring, kind, and professional. The procedure was quick, and I felt no pain.",
    name: "Anna Frost",
    service: "Endodontic Service",
  },
];

export const pricingPlans = [
  {
    name: "Health Maintenance",
    desc: "Perfect for regular check-ups and preventive care.",
    price: 400,
    features: ["Initial Consultation & Exam", "Routine Dental Cleaning", "X-Rays", "Fluoride Treatment"],
  },
  {
    name: "Smile Enhancement",
    desc: "Ideal for patients focusing on basic restorative care.",
    price: 1200,
    features: ["Routine Dental Cleaning", "Teeth Whitening", "Dental Bonding", "Orthodontic Consultation"],
    highlight: true,
  },
  {
    name: "Comprehensive Care",
    desc: "Best for patients requiring extensive or special care.",
    price: 1500,
    features: ["Orthodontic Consultation", "Root Canal Treatment", "Orthodontics Discount", "Gum Disease Treatment"],
  },
];

export const blogPosts = [
  {
    slug: "5-tips-for-healthier-teeth",
    title: "5 daily habits for healthier teeth",
    excerpt: "Small consistent habits make the biggest difference in long-term oral health.",
    date: "May 1, 2026",
    author: "Dr. Olivia Martinez",
  },
  {
    slug: "what-to-expect-from-whitening",
    title: "What to expect from professional whitening",
    excerpt: "A look at in-office whitening, take-home kits, and how to keep results lasting longer.",
    date: "April 18, 2026",
    author: "Dr. Jacob Wilson",
  },
  {
    slug: "kids-first-dental-visit",
    title: "Your child's first dental visit",
    excerpt: "How to prepare your little one for a calm, positive first appointment.",
    date: "April 2, 2026",
    author: "Lia Shanna",
  },
];

export const site = {
  name: "Dental",
  phone: "+1 212 425 8617",
  email: "information@office.com",
  address: "14 Tottenham Road, London, England",
  hours: "Mon – Fri, 9:00 AM – 6:00 PM",
};
