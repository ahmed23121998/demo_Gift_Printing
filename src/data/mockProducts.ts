import { Product } from '../types';

export const mockProducts: Product[] = [
  {
    id: 1,
    name: "كوب قهوة مطبوع",
    price: 85,
    description: "كوب قهوة عالي الجودة مع طباعة مخصصة حسب الطلب، مناسب للهدايا الشخصية",
    category: "أكواب",
    image: "https://images.pexels.com/photos/302743/pexels-photo-302743.jpeg",
    images: [
      "https://images.pexels.com/photos/302743/pexels-photo-302743.jpeg",
      "https://images.pexels.com/photos/851555/pexels-photo-851555.jpeg"
    ],
    active: true,
    featured: true
  },
  {
    id: 2,
    name: "برواز صورة خشبي",
    price: 120,
    description: "برواز خشبي أنيق مع إمكانية الطباعة والنقش، مثالي للذكريات الجميلة",
    category: "براويز",
    image: "https://images.pexels.com/photos/1670770/pexels-photo-1670770.jpeg",
    images: [
      "https://images.pexels.com/photos/1670770/pexels-photo-1670770.jpeg",
      "https://images.pexels.com/photos/1974596/pexels-photo-1974596.jpeg"
    ],
    active: true,
    featured: true
  },
  {
    id: 3,
    name: "تيشيرت مطبوع",
    price: 150,
    description: "تيشيرت قطني عالي الجودة مع طباعة مخصصة، متوفر بألوان متنوعة",
    category: "ملابس",
    image: "https://images.pexels.com/photos/1020585/pexels-photo-1020585.jpeg",
    images: [
      "https://images.pexels.com/photos/1020585/pexels-photo-1020585.jpeg",
      "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg"
    ],
    active: true,
    featured: false
  },
  {
    id: 4,
    name: "دفتر ملاحظات جلدي",
    price: 95,
    description: "دفتر ملاحظات أنيق من الجلد الطبيعي مع إمكانية النقش الشخصي",
    category: "قرطاسية",
    image: "https://images.pexels.com/photos/261763/pexels-photo-261763.jpeg",
    images: [
      "https://images.pexels.com/photos/261763/pexels-photo-261763.jpeg",
      "https://images.pexels.com/photos/733856/pexels-photo-733856.jpeg"
    ],
    active: true,
    featured: false
  },
  {
    id: 5,
    name: "كيس تسوق مطبوع",
    price: 45,
    description: "كيس تسوق من القطن الطبيعي مع طباعة صديقة للبيئة",
    category: "أكياس",
    image: "https://images.pexels.com/photos/1029896/pexels-photo-1029896.jpeg",
    images: [
      "https://images.pexels.com/photos/1029896/pexels-photo-1029896.jpeg",
      "https://images.pexels.com/photos/1027130/pexels-photo-1027130.jpeg"
    ],
    active: true,
    featured: false
  },
  {
    id: 6,
    name: "ساعة حائط مخصصة",
    price: 200,
    description: "ساعة حائط عصرية مع إمكانية التخصيص بالصور والنصوص",
    category: "ديكور",
    image: "https://images.pexels.com/photos/1095814/pexels-photo-1095814.jpeg",
    images: [
      "https://images.pexels.com/photos/1095814/pexels-photo-1095814.jpeg",
      "https://images.pexels.com/photos/302743/pexels-photo-302743.jpeg"
    ],
    active: true,
    featured: true
  },
  {
    id: 7,
    name: "حافظة جوال مطبوعة",
    price: 75,
    description: "حافظة جوال عالية الحماية مع طباعة مقاومة للخدش",
    category: "إكسسوارات",
    image: "https://images.pexels.com/photos/341523/pexels-photo-341523.jpeg",
    images: [
      "https://images.pexels.com/photos/341523/pexels-photo-341523.jpeg",
      "https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg"
    ],
    active: true,
    featured: false
  },
  {
    id: 8,
    name: "لوحة كانفس مطبوعة",
    price: 180,
    description: "لوحة كانفس عالية الجودة مع طباعة ألوان زاهية ومقاومة للتلاشي",
    category: "لوحات",
    image: "https://images.pexels.com/photos/1568607/pexels-photo-1568607.jpeg",
    images: [
      "https://images.pexels.com/photos/1568607/pexels-photo-1568607.jpeg",
      "https://images.pexels.com/photos/1585325/pexels-photo-1585325.jpeg"
    ],
    active: true,
    featured: true
  }
];

export const categories = [
  "جميع المنتجات",
  "أكواب",
  "براويز",
  "ملابس",
  "قرطاسية",
  "أكياس",
  "ديكور",
  "إكسسوارات",
  "لوحات"
];