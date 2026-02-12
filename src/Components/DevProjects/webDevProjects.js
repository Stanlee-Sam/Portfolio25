import NeuroCare from "../../assets/NeuroCare.png";
import Connectify from "../../assets/Connectify.png";
import GamerHub from "../../assets/GamerHub.png";
import SmartWraps from "../../assets/SmartWraps.png";
import Mune from "../../assets/Mune.png";

export const devProjects = [
  {
    id: 1,
    title: "Mune",
    description:
      "A pet health early-warning platform for symptom monitoring, outbreak alerts, and nearby clinic discovery.",
    overview:
      "Mune helps pet owners and vets monitor symptoms, evaluate risk, track outbreak alerts, and manage veterinary clinic records with role-based access for OWNER and VET accounts.",
    image: Mune,
    keyFeatures: [
      "Symptom checker with rule-based risk evaluation and recommended action",
      "Outbreak alerts management (create, view, update, delete)",
      "Veterinary clinics directory with image upload and full CRUD",
      "Authentication with role-based access (OWNER, VET)",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Node.js",
      "Express",
      "Prisma",
      "PostgreSQL",
      "JWT",
      "Cloudinary",
    ],
    liveUrl: "https://mune-five.vercel.app/",
    repoUrl: "https://github.com/Stanlee-Sam/Mune.git",
  },
  {
    id: 2,
    title: "NeuroCare",
    description:
      "A sentiment-based mental health tracker with an AI-powered chatbot (Google Gemini).",
    overview:
      "NeuroCare helps users track their mental health through journaling, sentiment analysis, and chatbot interaction. It provides mood insights over time, powered by an Express + Prisma backend and a React + Vite frontend.",
    image: NeuroCare,
    keyFeatures: [
      "Daily mood journaling with sentiment analysis",
      "Interactive AI-powered chatbot (Google Gemini)",
      "Dashboard with mood trends and insights",
      "Secure authentication using Firebase and JWT",
      "Data persisted in Postgres through Prisma",
    ],
    technologies: [
      "React",
      "Vite",
      "MUI",
      "Node.js",
      "Express",
      "Prisma",
      "PostgreSQL",
      "Firebase Admin",
      "JWT",
      "Google Gemini",
      "VADER Sentiment",
    ],
    liveUrl: "https://neuro-care-plum.vercel.app/",
    repoUrl: "https://github.com/Stanlee-Sam/NeuroCare.git",
  },
  {
    id: 3,
    title: "Connectify",
    description:
      "A full-stack social media platform for posting, liking, commenting, and following.",
    overview:
      "Connectify lets users sign up, manage posts with images, like and comment on posts, and follow or unfollow users. It is built with a React + Vite frontend and an Express + Prisma backend with PostgreSQL.",
    image: Connectify,
    keyFeatures: [
      "User authentication (signup/login) with JWT stored in cookies",
      "Create, edit, and delete posts with image upload support",
      "Like and unlike posts with comment functionality",
      "Follow and unfollow user relationships",
      "Responsive UI styled with CSS, SCSS, MUI, and custom components",
    ],
    technologies: [
      "React",
      "Vite",
      "React Router",
      "Redux Toolkit",
      "MUI",
      "Node.js",
      "Express",
      "Prisma",
      "PostgreSQL",
      "JWT",
      "bcrypt",
      "Multer",
      "CSS",
      "SCSS",
      "Sass",
      "Nodemon",
      "ESLint",
    ],
    liveUrl: "https://connectify-teal-psi.vercel.app/",
    repoUrl: "https://github.com/Stanlee-Sam/Connectify.git",
  },
  {
    id: 4,
    title: "GamerHub",
    description:
      "A full-stack e-commerce platform for gaming consoles, gaming laptops, and accessories.",
    overview:
      "GamerHub provides a modern shopping experience with product browsing, category filtering, cart management, and an admin panel for product management. It is built with a React + Vite frontend and a Node.js + Express backend using Prisma with PostgreSQL.",
    image: GamerHub,
    keyFeatures: [
      "Modern landing page with product carousel and featured sections",
      "Shop views with category filters and product listings",
      "Add to cart, view cart, and remove from cart functionality",
      "Admin interface for adding and editing products with image upload support",
      "Backend API with Prisma-based data models and Cloudinary file upload helper",
    ],
    technologies: [
      "React",
      "Vite",
      "Node.js",
      "Express",
      "Prisma",
      "PostgreSQL",
      "Cloudinary",
      "JWT",
    ],
    liveUrl: "https://gamer-hub-phi.vercel.app/",
    repoUrl: "https://github.com/Stanlee-Sam/GamerHub_.git",
  },
  {
    id: 5,
    title: "SmartWraps",
    description:
      "A colourful landing page for a small business selling precovered books to school children.",
    overview:
      "SmartWraps is designed to attract parents during the back-to-school season with a product carousel, detail modals, and smooth animated transitions for an engaging storefront experience.",
    image: SmartWraps,
    keyFeatures: [
      "Colourful, kid-friendly landing page design",
      "Product carousel showcasing items using Swiper",
      "Modal display for detailed product information",
      "Responsive layout for mobile and tablet devices",
      "Animated section transitions using Framer Motion",
    ],
    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Swiper",
      "Framer Motion",
      "react-icons",
      "EmailJS",
      "ESLint",
    ],
    liveUrl: "https://smart-wraps.vercel.app/",
    repoUrl: "https://github.com/Stanlee-Sam/SmartWraps.git",
  },
];





