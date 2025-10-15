import NeuroCare from "../../assets/NeuroCare.png";
import Connectify from "../../assets/Connectify.png";
import GamerHub from "../../assets/GamerHub.png";
import SmartWraps from "../../assets/SmartWraps.png";

export const devProjects = [
  {
    id: 1,
    title: "NeuroCare",
    description:
      "A sentiment-based mental health tracker with an AI-powered chatbot.",
    overview:
      "NeuroCare helps users track their mental health through journaling, sentiment analysis, and chatbot interaction. It provides insights on mood patterns over time.",
    image: NeuroCare,
    keyFeatures: [
      "Daily mood journaling with sentiment analysis",
      "Interactive AI-powered chatbot",
      "Dashboard with mood trends and insights",
      "Secure authentication and data privacy",
    ],
    technologies: ["React", "Tailwind CSS", "Node.js", "Prisma"],
    liveUrl : 'https://neuro-care-plum.vercel.app/',
    repoUrl : 'https://github.com/Stanlee-Sam/NeuroCare.git',
  },
  {
    id: 2,
    title: "Connectify",
    description:
      "A full-stack social media platform for posting, liking, and commenting.",
    overview:
      "Connectify allows users to create, edit, and delete posts, follow/unfollow other users, interact with comments, and like/unlike posts. The app provides a seamless social media experience.",
    image: Connectify,
    keyFeatures: [
      "User authentication and authorization",
      "Create, edit, and delete posts",
      "Like/unlike and comment on posts",
      "Follow and unfollow other users",
      "CSS and SCSS styling",
    ],
    technologies: ["React", "JavaScript", "Node.js", "Express", "CSS", "SCSS"],
    liveUrl : 'https://neuro-care-plum.vercel.app/',
    repoUrl : 'https://github.com/Stanlee-Sam/NeuroCare.git',
  },
  {
    id: 3,
    title: "GamerHub",
    description:
      "An e-commerce platform for gaming consoles, laptops, and accessories.",
    overview:
      "GamerHub provides a modern online shopping experience for PS, Xbox, Nintendo Switch consoles, and gaming laptops. Users can browse products, filter by category, and manage their cart. Admins can manage product listings.",
    image: GamerHub,
    keyFeatures: [
      "Modern landing page with product carousel",
      "Shop page displaying all products or filtered by category",
      "Add to cart and remove from cart functionality",
      "Admin page for adding and managing products",
    ],
    technologies: ["React", "HTML", "CSS", "Node.js", "Express", "Prisma"],
    liveUrl : 'https://neuro-care-plum.vercel.app/',
    repoUrl : 'https://github.com/Stanlee-Sam/NeuroCare.git',
  },
  {
    id: 4,
    title: "SmartWraps",
    description:
      "A colourful landing page for a small business selling precovered books to children.",
    overview:
      "SmartWraps is designed to attract parents during the back-to-school season. It features a product carousel, modals for detailed product views, and smooth animations to enhance user engagement.",
    image: SmartWraps,
    keyFeatures: [
      "Colourful, kid-friendly landing page design",
      "Product carousel showcasing items",
      "Modal display for detailed product information",
      "Responsive for mobile and tablet devices",
      "Animated section transitions with Framer Motion",
    ],
    technologies: ["React", "HTML", "CSS", "Tailwind CSS", "Framer Motion"],
    liveUrl : 'https://smart-wraps.vercel.app/',
    repoUrl : 'https://github.com/Stanlee-Sam/SmartWraps.git',
  },
];
