import { ReactElement } from "react";
import { StaticImageData } from "next/image";
import {
  FaCheck,
  FaChartBar,
  FaImage,
  FaLaptopCode,
  FaMobile,
  FaPalette,
  FaChartLine,
  FaEnvelope,
  FaPhone,
  FaWordpress,
  FaFacebookF,
} from "react-icons/fa6";
import { TbDeviceLandlinePhone } from "react-icons/tb";
import { PiCertificateBold } from "react-icons/pi";
import {
  RiInstagramFill,
  RiLinkedinFill,
  RiWhatsappFill,
} from "react-icons/ri";
import { MdVideoLibrary } from "react-icons/md";
import { AiOutlineWhatsApp } from "react-icons/ai";

// Client logos
import Logo1 from "@/assets/logos/logo-1.png";
import Logo2 from "@/assets/logos/logo-2.png";
import Logo3 from "@/assets/logos/logo-3.png";
import Logo4 from "@/assets/logos/logo-4.png";
import Logo5 from "@/assets/logos/logo-5.png";

// Graphics Portfolio
import GraphicsImg1 from "@/assets/portfolio/graphic-design/graphic-1.png";
import GraphicsImg2 from "@/assets/portfolio/graphic-design/graphic-2.png";
import GraphicsImg3 from "@/assets/portfolio/graphic-design/graphic-3.png";
import GraphicsImg4 from "@/assets/portfolio/graphic-design/graphic-4.png";
import GraphicsImg5 from "@/assets/portfolio/graphic-design/graphic-5.png";

// Marketing Portfolio
import Marketing1 from "@/assets/portfolio/marketing/marketing-1.png";
import Marketing2 from "@/assets/portfolio/marketing/marketing-2.png";
import Marketing3 from "@/assets/portfolio/marketing/marketing-3.png";
import Marketing4 from "@/assets/portfolio/marketing/marketing-4.png";

// Web Development Portfolio
import Web1 from "@/assets/portfolio/web/web1.png";
import Web2 from "@/assets/portfolio/web/web2.png";
import Web3 from "@/assets/portfolio/web/web3.png";
import Web4 from "@/assets/portfolio/web/web4.png";
import Web5 from "@/assets/portfolio/web/web5.png";

// UI Portfolio
import UI1 from "@/assets/portfolio/ui-design/ui-1.png";
import UI2 from "@/assets/portfolio/ui-design/ui-2.png";
import UI3 from "@/assets/portfolio/ui-design/ui-3.png";
import UI4 from "@/assets/portfolio/ui-design/ui-4.png";
import UI5 from "@/assets/portfolio/ui-design/ui-5.png";
import UI6 from "@/assets/portfolio/ui-design/ui-6.png";
import UI7 from "@/assets/portfolio/ui-design/ui-7.png";

// Wordpress Portfolio
import WordpressImg1 from "@/assets/portfolio/wordpress/wordpress-1.png";
import WordpressImg2 from "@/assets/portfolio/wordpress/wordpress-2.png";
import WordpressImg3 from "@/assets/portfolio/wordpress/wordpress-3.png";
import WordpressImg4 from "@/assets/portfolio/wordpress/wordpress-4.png";
import WordpressImg5 from "@/assets/portfolio/wordpress/wordpress-5.png";
import WordpressImg6 from "@/assets/portfolio/wordpress/wordpress-6.png";

// Video Editing
import VideoEditing from "@/assets/portfolio/video-editing.png";

// Header Images
import Graphics from "@/assets/header/graphic-designing.png";
import UI from "@/assets/header/ui-ux.png";
import Web from "@/assets/header/web-development.png";
import App from "@/assets/header/app-development.png";
import Wordpress from "@/assets/header/wordpress.png";
import Marketing from "@/assets/header/digital-marketing.png";
import Editing from "@/assets/header/video-editing.png";

// Teams Image
import AhmadNadeem from "@/assets/team/ahmad-nadeem.png";
import SaqibAli from "@/assets/team/saqib-ali.png";
import AmeerHamza from "@/assets/team/ameer-hamza.jpg";
import AyubRehman from "@/assets/team/ayub-rehman.png";
import KomalShaikh from "@/assets/team/komal-shaikh.png";
import MuhammadTahir from "@/assets/team/muhammad-tahir.png";

// Interfaces
type Navlinks = {
  name: string;
  path: string;
};

export type PricingPlan = {
  title: string;
  description: string;
  features: string[];
  price: number;
};

export type portfolio = {
  imgSrc: StaticImageData | string;
  link: string;
};

export type Service = {
  id: number;
  icon: ReactElement;
  name: string;
  shortDesc: string;
  description: string;
  pricing: PricingPlan[];
  portfolio?: portfolio[];
  portfolioDesc: string;
  thumbnail: StaticImageData | string;
};

type Testimonial = {
  name: string;
  text: string;
  service: string;
};

type WhyUs = {
  icon: ReactElement;
  title: string;
  description?: string;
};

type ContactInfo = {
  icon: ReactElement;
  title: string;
  description: string;
};

export type TeamInterface = {
  imgSrc: StaticImageData | string;
  name: string;
  position: string;
  socialLinks: {
    icon: ReactElement;
    url: string;
  }[];
};

// Data
export const navLinks: readonly Navlinks[] = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Services",
    path: "/services",
  },
  {
    name: "Portfolio",
    path: "/portfolio",
  },
  {
    name: "Team",
    path: "/team",
  },
];

export const AboutData: readonly WhyUs[] = [
  {
    icon: <FaCheck />,
    title: "Smart digital solutions, seamless success.",
  },
  {
    icon: <FaCheck />,
    title: "Timely, efficient, and seamless delivery.",
  },
  {
    icon: <FaCheck />,
    title: "Innovative approach, exceptional results.",
  },
];

export const ClientData: readonly StaticImageData[] = [
  Logo1,
  Logo2,
  Logo3,
  Logo4,
  Logo5,
];

export const TestimonialData: readonly Testimonial[] = [
  {
    name: "Loops Tech",
    service: "UI/UX Design",
    text: "Dev Sphere's UI/UX design services exceeded our expectations! Their team crafted an intuitive, visually stunning interface that enhanced user engagement. Highly professional and innovative—highly recommended!",
  },
  {
    name: "Loops Tech",
    service: "Graphic Designing",
    text: "Dev Sphere's graphic design work is outstanding! Their creativity and attention to detail brought our brand to life with stunning visuals. Highly professional and truly exceptional—highly recommended!",
  },
  {
    name: "The ACE Solutions",
    service: "Web Development",
    text: "Dev Sphere's web development team impressed us with their efficiency and expertise. They built a seamless, high-performing website that enhanced our online presence. Great collaboration and outstanding results!",
  },
  {
    name: "Web Bano",
    service: "Video Editing",
    text: "I worked with Dev Sphere for video editing, and they exceeded my expectations. Their attention to detail, creativity, and smooth execution made our content stand out. Highly professional and reliable!",
  },
  {
    name: "ASK Technologies",
    service: "Video Editing",
    text: "I worked with Dev Sphere for UI design, and they delivered an intuitive and visually stunning interface. Their attention to detail and user-centric approach truly set them apart. Highly recommended!",
  },
  {
    name: "Skillish World",
    service: "UI/UX Design",
    text: "I worked with Dev Sphere for web design, and they delivered a visually striking and highly functional website. Their creativity, professionalism, and attention to detail are truly impressive. Highly recommended!",
  },
];

export const WhyUsData: readonly WhyUs[] = [
  {
    icon: <PiCertificateBold />,
    title: "Certified Professionals & Experts",
    description:
      "Our certified experts deliver quality solutions with proven skills and experience.",
  },
  {
    icon: <FaChartLine />,
    title: "We are fast, Accurate & Reliable",
    description:
      "We are fast, accurate, reliable, and committed to delivering exceptional results.",
  },
  {
    icon: <TbDeviceLandlinePhone />,
    title: "24/7 Customer Support",
    description:
      "Providing 24/7 customer support with fast, accurate, and reliable service.",
  },
];

export const AboutPageData = {
  ourVision: {
    title: "Our Vision",
    description:
      "This is our vision of the Internet and the Internet is available to everyone and everyone in the world and is available to everyone in the world in the world of the Internet and the Internet is available to everyone in the world in the world of the Internet and the Internet is available to everyone in the world in the world of the Internet and the Internet is available to everyone in the world",
  },
  ourMission: {
    title: "Our Mission",
    description:
      "The mission of the Internet and the Internet is available to everyone in the world in the world of the Internet and the Internet is available to everyone in the world in the world of the Internet and the Internet is available to everyone in the world in the world of the Internet and the Internet is available to everyone in the world in the world of the Internet and the",
  },
};

export const ContactPageData: readonly ContactInfo[] = [
  {
    icon: <FaEnvelope />,
    title: "Email Us",
    description: "devsphereoffical@gmail.com",
  },
  {
    icon: <FaPhone />,
    title: "Call Us",
    description: "+92346-7890654",
  },
  {
    icon: <RiWhatsappFill />,
    title: "WhatsApp Us",
    description: "+92346-7890654",
  },
];

export const ServicesData: readonly Service[] = [
  {
    id: 1,
    icon: <FaPalette />,
    name: "Graphic Designing",
    shortDesc:
      "Looking for stunning designs? Our graphic design services create eye-catching visuals that make your brand stand out. Creative, and effective designs for all your needs.",
    description:
      "Your brands visual identity plays a crucial role in how your audience perceives your business. At DevSphere, our graphic design team is passionate about creating stunning visuals that not only capture attention but also communicate your brands story and message effectively. We believe that great design has the power to leave a lasting impression, and we work tirelessly to ensure that your designs are both creative and functional. Our graphic design services cover a wide range of needs, including logo design, branding materials, brochures, posters, digital banners, social media graphics, and more. Each design is carefully crafted with your brand's identity and marketing objectives in mind, ensuring that your visuals resonate with your audience and elevate your brand presence. Whether you are looking to create a new brand identity or refresh your existing one, we help you craft designs that are memorable and impactful, driving engagement and enhancing your brands recognition.",
    pricing: [
      {
        title: "Starter",
        description: "Check out our starup plan",
        features: [
          "Logo Design (2 Concepts)",
          "Business Card Design",
          "Social Media Post (5 Posts)",
          "Basic Flyer or Brochure Design",
          "Color Palette & Font Selection",
          "High-Resolution Files (PNG, JPG)",
          "2 Revisions",
        ],
        price: 8000,
      },
      {
        title: "Basic",
        description: "Check out our premium plan",
        features: [
          "Logo Design (4 Concepts)",
          "Complete Branding Kit (Logo, Colors, Fonts)",
          "Social Media Kit (10 Posts + Banners)",
          "Business Card, Letterhead & Envelope",
          "Brochure / Flyer Design",
          "Editable Source Files (AI, PSD, SVG)",
          "4 Revisions",
        ],
        price: 15000,
      },
      {
        title: "Premium",
        description: "Check out our basic plan",
        features: [
          "Custom Logo Design (6 Concepts)",
          "Complete Brand Identity Design",
          "Social Media Management Templates (20+ Posts)",
          "Business Card, Letterhead, Envelope, Presentation Slides",
          "Brochure, Flyer, and Poster Design",
          "Custom Illustrations & Infographics",
          "Unlimited Revisions",
        ],
        price: 40000,
      },
    ],
    portfolioDesc:
      "Creative visuals that speak louder than words. Explore my graphic design portfolio, where colors, typography, and innovation come together to create impactful designs.",
    portfolio: [
      {
        imgSrc: GraphicsImg1,
        link: "#",
      },
      {
        imgSrc: GraphicsImg2,
        link: "#",
      },
      {
        imgSrc: GraphicsImg3,
        link: "#",
      },
      {
        imgSrc: GraphicsImg4,
        link: "#",
      },
      {
        imgSrc: GraphicsImg5,
        link: "#",
      },
    ],
    thumbnail: Graphics,
  },
  {
    id: 2,
    icon: <FaImage />,
    name: "UI/UX Desgining",
    shortDesc:
      "Transform your user experience with our UX/UI design services. We create intuitive, user-friendly interfaces that make your website or app easy to navigate and visually appealing.",
    description:
      "A well-designed user interface (UI) and a seamless user experience (UX) are vital to ensuring that your users have a positive interaction with your digital products. At DevSphere, we specialize in designing intuitive and user-friendly interfaces that not only look great but also make your product easy to navigate and use. Our UI/UX design process revolves around understanding your users' needs, behaviors, and pain points, which allows us to create solutions that meet their expectations and improve their overall experience. Our team focuses on creating designs that are both functional and aesthetically pleasing, optimizing each element to drive engagement and satisfaction. From wireframing and prototyping to interactive design and user testing, we take a comprehensive approach to ensure that every touchpoint of the user journey is considered and refined. With our UI/UX design services, we help you create digital products that users love to interact with, improving conversion rates and fostering long-term customer loyalty.",
    pricing: [
      {
        title: "Starter",
        description: "Check out our starup plan",
        features: [
          "Wireframing (Low-Fidelity)",
          "1 Website or App Page Design",
          "Basic Color Palette & Typography",
          "User Flow Mapping",
          "Responsive Design (Mobile & Desktop)",
          "Up to 2 Revisions",
        ],
        price: 10000,
      },
      {
        title: "Basic",
        description: "Check out our premium plan",
        features: [
          "Wireframing (Medium-Fidelity)",
          "5 Website or App Pages Design",
          "Branding Integration (Colors, Fonts, Icons)",
          "Interactive Prototype (Figma/Adobe XD)",
          "User Experience Optimization",
          "Responsive Design for All Devices",
          "Up to 4 Revisions",
        ],
        price: 15000,
      },
      {
        title: "Premium",
        description: "Check out our basic plan",
        features: [
          "Wireframing & Prototyping (High-Fidelity)",
          "Complete Website or Mobile App UI Design",
          "Advanced UX Research & Usability Testing",
          "Custom Illustrations & Icons",
          "Micro-Interactions & Animations",
          "Full Design System & Component Library",
          "Unlimited Revisions",
        ],
        price: 35000,
      },
    ],
    portfolio: [
      {
        imgSrc: UI1,
        link: "#",
      },
      {
        imgSrc: UI2,
        link: "#",
      },
      {
        imgSrc: UI3,
        link: "#",
      },
      {
        imgSrc: UI4,
        link: "#",
      },
      {
        imgSrc: UI5,
        link: "#",
      },
      {
        imgSrc: UI6,
        link: "#",
      },
      {
        imgSrc: UI7,
        link: "#",
      },
    ],
    portfolioDesc:
      "Creative visuals that enhance user experience. Explore my UI/UX portfolio, where design, functionality, and innovation come together for seamless interactions.",
    thumbnail: UI,
  },
  {
    id: 3,
    icon: <FaLaptopCode />,
    name: "Web Development",
    shortDesc:
      "Turn your ideas into reality with our expert app development. We build intuitive, scalable, and high-performance mobile apps tailored to your business needs.",
    description:
      "At DevSphere, we understand the importance of having a strong online presence, and we specialize in creating dynamic, responsive websites that are built to engage visitors and convert them into loyal customers. Whether you are looking to develop an entirely new website or refresh your current one, our team of experienced web developers ensures your site is visually appealing, easy to navigate, and performs at its best. We design and develop custom websites that are tailored to meet your specific business goals, ensuring they stand out in a crowded digital space. Our web development process is user-centric, focusing on providing a seamless and enjoyable browsing experience across all devices. We utilize the latest web technologies and development frameworks to ensure that your site is fast, secure, and scalable, offering you a platform that can grow as your business evolves. From e-commerce platforms to corporate websites and blogs, we build solutions that not only reflect your brand identity but also provide a smooth user experience. Additionally, our development team works closely with you throughout the project to make sure your vision is brought to life, keeping you updated with progress and ensuring every feature aligns with your objectives.",
    pricing: [
      {
        title: "Starter",
        description: "Check out our starup plan",
        features: [
          "Single Page Application (SPA)",
          "React.js/Next.js Frontend",
          "Express.js & Node.js Backend",
          "MongoDB Database",
          "Responsive UI",
          "Basic Contact Form",
          "15 Days Free Support",
        ],
        price: 30000,
      },
      {
        title: "Basic",
        description: "Check out our premium plan",
        features: [
          "Multi-Page Dynamic Website",
          "User Authentication (JWT)",
          "Admin Dashboard",
          "REST API Integration",
          "MongoDB Database",
          "React with Tailwind",
          "SEO Optimization",
          "2 Months Free Support",
        ],
        price: 90000,
      },
      {
        title: "Premium",
        description: "Check out our basic plan",
        features: [
          "Full-Scale Web Application",
          "Redux/Zustand State Management",
          "Role-Based Authentication",
          "Payment Gateway Integration",
          "Advanced API Security",
          "Performance Optimized & Scalable",
          "4 Months Free Support",
        ],
        price: 200000,
      },
    ],
    portfolio: [
      {
        imgSrc: Web1,
        link: "https://saqib-ali-travel-agency.vercel.app",
      },
      {
        imgSrc: Web2,
        link: "#",
      },
      {
        imgSrc: Web3,
        link: "#",
      },
      {
        imgSrc: Web4,
        link: "#",
      },
      {
        imgSrc: Web5,
        link: "#",
      },
    ],
    portfolioDesc:
      "Creative visuals that bring ideas to life. Explore my web development portfolio, where design, performance, and innovation come together for seamless experiences.",
    thumbnail: Web,
  },
  {
    id: 4,
    icon: <FaMobile />,
    name: "App Development",
    shortDesc:
      "Bring your ideas to life with our expert app development. We build intuitive, scalable, and high-performance mobile apps tailored to your business needs.",
    description:
      "In todays mobile-first world, an effective mobile application is key to staying competitive and keeping customers engaged. At DevSphere, we offer comprehensive mobile app development services for both Android and iOS platforms, creating apps that provide smooth, intuitive user experiences while achieving your business goals. Our app development team takes the time to understand your business objectives, target audience, and specific needs to design and build mobile applications that fit seamlessly into your overall digital strategy. We provide end-to-end app development services, covering everything from initial concept and design to development, testing, and deployment. Our apps are built to offer high performance, reliability, and scalability, with features that enhance user engagement and improve business processes. Whether you are looking to develop a mobile app for e-commerce, social networking, entertainment, or productivity, we have the expertise to create customized solutions that cater to your target audience and drive results.",
    pricing: [
      {
        title: "Starter",
        description: "Check out our starup plan",
        features: [
          "Simple Mobile App (Android & iOS)",
          "3-5 Screens",
          "Basic UI/UX Design",
          "No Backend (Static Data)",
          "Basic Navigation & Forms",
          "15 Days Free Support",
        ],
        price: 40000,
      },
      {
        title: "Basic",
        description: "Check out our premium plan",
        features: [
          "Dynamic Mobile App (Android & iOS)",
          "5-10 Screens",
          "User Authentication",
          "REST API Integration",
          "Backend Integration",
          "Push Notifications",
          "Basic Admin Panel",
          "2 Months Free Support",
        ],
        price: 80000,
      },
      {
        title: "Premium",
        description: "Check out our basic plan",
        features: [
          "Full-Scale Mobile App (Android & iOS)",
          "10+ Screens",
          "Real-Time Features (Chat, Live Updates)",
          "Payment Gateway Integration",
          "Advanced API Security",
          "Performance Optimization",
          "Scalable Backend (Node.js/Django)",
          "4 Months Free Support",
        ],
        price: 180000,
      },
    ],
    portfolio: [
      {
        imgSrc: UI1,
        link: "#",
      },
      {
        imgSrc: UI2,
        link: "#",
      },
      {
        imgSrc: UI3,
        link: "#",
      },
      {
        imgSrc: UI4,
        link: "#",
      },
      {
        imgSrc: UI5,
        link: "#",
      },
      {
        imgSrc: UI6,
        link: "#",
      },
      {
        imgSrc: UI7,
        link: "#",
      },
    ],
    portfolioDesc:
      "Creative visuals that power digital experiences. Explore my app development portfolio, where design, performance, and innovation come together for seamless usability.",
    thumbnail: App,
  },
  {
    id: 5,
    icon: <FaChartBar />,
    name: "Digital Marketing & SEO",
    shortDesc:
      "Boost your online presence with our digital marketing services. From social media to SEO, we help you reach your audience, grow your brand, and drive results.",
    description:
      "In the fast-paced digital world, a strong online presence is essential for business growth. At DevSphere, our digital marketing services are designed to help you reach your target audience, increase brand awareness, and drive conversions. We use data-driven strategies and cutting-edge marketing tools to create comprehensive campaigns that deliver measurable results. We offer a full suite of digital marketing services, including search engine marketing (SEM), social media marketing, content marketing, email marketing, influencer marketing, and more. Our team of experts works closely with you to develop a personalized marketing strategy that aligns with your business objectives and ensures you are reaching the right audience with the right message. By combining creative content, strategic targeting, and advanced analytics, we optimize every campaign to achieve the best possible outcomes for your brand. Whether you are looking to increase website traffic, improve engagement on social media, or boost sales through targeted ad campaigns, our digital marketing services help you stay ahead of the competition and achieve long-term success.",
    pricing: [
      {
        title: "Starter",
        description: "Check out our starup plan",
        features: [
          "Basic On-Page SEO",
          "Keyword Research (10 Keywords)",
          "Meta Tags Optimization",
          "Social Media Setup (FB, IG, Twitter)",
          "10 Social Media Posts",
          "Monthly Performance Report",
        ],
        price: 20000,
      },
      {
        title: "Basic",
        description: "Check out our premium plan",
        features: [
          "Advanced On-Page & Technical SEO",
          "Keyword Research (30 Keywords)",
          "Backlink Strategy (50 Links)",
          "Social Media Management (FB, IG, LinkedIn)",
          "20 Social Media Posts",
          "Google Ads (Rs. 20,000 Budget)",
          "Bi-Weekly Performance Report",
        ],
        price: 40000,
      },
      {
        title: "Premium",
        description: "Check out our basic plan",
        features: [
          "Full Digital Marketing & SEO",
          "Keyword Research (Unlimited)",
          "Backlink Strategy (100+ High DA Links)",
          "Social Media Management (FB, IG, LinkedIn, TikTok, YouTube)",
          "30+ Social Media Posts",
          "Google & Social Media Ads (₨ 50,000+ Budget)",
          "Content Marketing (Blogs & Articles)",
          "Email Marketing",
          "Weekly Performance Report",
        ],
        price: 80000,
      },
    ],
    portfolio: [
      {
        imgSrc: Marketing1,
        link: "#",
      },
      {
        imgSrc: Marketing2,
        link: "#",
      },
      {
        imgSrc: Marketing3,
        link: "#",
      },
      {
        imgSrc: Marketing4,
        link: "#",
      },
    ],
    portfolioDesc:
      "Creative visuals that drive engagement. Explore my digital marketing portfolio, where strategy, design, and innovation come together for impactful campaigns.",
    thumbnail: Marketing,
  },
  {
    id: 6,
    icon: <MdVideoLibrary />,
    name: "Video Editing",
    shortDesc:
      "Enhance your website ranking with expert SEO services. We optimize keywords, build links, and refine on-page strategies to drive traffic and increase visibility.",
    description:
      "Video content is one of the most engaging and effective ways to connect with your audience. At DevSphere, we provide professional video editing services to help you create polished, high-quality videos that communicate your brand message and engage viewers. Whether you need promotional videos, explainer videos, tutorials, or social media content, our video editing team ensures that your videos are crafted to perfection. We handle all aspects of video editing, from cutting and arranging footage to adding special effects, transitions, and sound design. Our goal is to create visually appealing, compelling content that resonates with your audience and drives results. We use advanced editing software and techniques to ensure that each video meets the highest standards of quality, ensuring your brand stands out in a crowded digital space. Our video editing services are customized to fit your brands tone and messaging, helping you tell a captivating story that inspires action from your audience. Whether you are looking to increase brand awareness, generate leads, or simply entertain your followers, our video editing expertise ensures your content is professional, engaging, and impactful.",
    pricing: [
      {
        title: "Starter",
        description: "Check out our starup plan",
        features: [
          "Basic Video Editing (Trimming, Cutting, Merging)",
          "Up to 2 Minutes Video",
          "Basic Transitions & Text Overlays",
          "Background Music Addition",
          "Standard 1080p Quality",
          "2 Revisions",
        ],
        price: 5000,
      },
      {
        title: "Basic",
        description: "Check out our premium plan",
        features: [
          "Professional Editing (Transitions, Color Correction)",
          "Up to 5 Minutes Video",
          "Motion Graphics & Effects",
          "Subtitles & Captions",
          "Background Music",
          "4 Revisions",
        ],
        price: 20000,
      },
      {
        title: "Premium",
        description: "Check out our basic plan",
        features: [
          "High-End Video Editing & Post-Production",
          "Up to 15+ Minutes Video",
          "Advanced Motion Graphics & VFX",
          "Green Screen Editing",
          "Multi-Camera Editing",
          "4K Quality Export",
          "Unlimited Revisions",
        ],
        price: 50000,
      },
    ],
    portfolio: [
      {
        imgSrc: VideoEditing,
        link: "#",
      },
      {
        imgSrc: "/video-editing/video-editing-1.mp4",
        link: "#",
      },
      {
        imgSrc: "/video-editing/video-editing-2.mp4",
        link: "#",
      },
      {
        imgSrc: "/video-editing/video-editing-3.mp4",
        link: "#",
      },
      {
        imgSrc: "/video-editing/video-editing-4.mp4",
        link: "#",
      },
      {
        imgSrc: "/video-editing/video-editing-5.mp4",
        link: "#",
      },
      {
        imgSrc: "/video-editing/video-editing-6.mp4",
        link: "#",
      },
    ],
    portfolioDesc:
      "Creative visuals that tell compelling stories. Explore my video editing portfolio, where motion, effects, and innovation come together for impactful visuals.",
    thumbnail: Editing,
  },
  {
    id: 7,
    icon: <FaWordpress />,
    name: "Wordpress",
    shortDesc:
      "We design, optimize, and maintain custom WordPress websites with SEO, security, WooCommerce, and performance enhancements, ensuring a high-performing, visually appealing, and user-friendly experience.",
    description:
      "WordPress is one of the most powerful and versatile platforms for building websites. At DevSphere, we provide professional WordPress services to help you create a fully customized, high-performing website that aligns with your brand and business goals. Whether you need a corporate website, blog, e-commerce store, or portfolio, our team ensures your site is visually appealing, responsive, and optimized for success. We handle all aspects of WordPress development, from custom theme design and plugin integration to performance optimization and security enhancements. Our goal is to deliver a seamless, user-friendly experience that engages visitors and drives results. We use the latest WordPress technologies and best practices to ensure your website is secure, fast, and scalable, helping your brand stand out in a competitive digital landscape. Our WordPress services are tailored to fit your specific needs, allowing you to create a powerful online presence that reflects your brand identity and vision. Whether you want to improve SEO, enhance functionality, or maintain a smooth-running website, our expertise ensures your WordPress site remains efficient, professional, and impactful.",
    pricing: [
      {
        title: "Starter",
        description: "Check out our starup plan",
        features: [
          "Up to 5 Pages Website",
          "Responsive Design",
          "Basic Theme Customization",
          "Essential Plugins Installation",
          "Contact Form Integration",
          "SEO-Friendly Structure",
          "Speed Optimization",
          "1 Revision",
        ],
        price: 20000,
      },
      {
        title: "Basic",
        description: "Check out our premium plan",
        features: [
          "Up to 10 Pages Website",
          "Premium Theme Customization",
          "WooCommerce Integration (E-commerce)",
          "Custom Contact & Inquiry Forms",
          "Basic SEO Optimization",
          "Mobile & Tablet Responsive",
          "Security & Backup Setup",
          "Speed Optimization",
          "Social Media Integration",
          "3 Revisions",
        ],
        price: 80000,
      },
      {
        title: "Premium",
        description: "Check out our basic plan",
        features: [
          "Unlimited Pages",
          "Custom WordPress Theme Development",
          "Advanced WooCommerce Setup (E-commerce)",
          "Membership & Subscription Features",
          "Multi-language Support (WPML)",
          "Advanced SEO & Performance Optimization",
          "Security Enhancements & Firewall Setup",
          "Custom Plugins Development",
          "API Integration & Automation",
          "Unlimited Revisions",
        ],
        price: 180000,
      },
    ],
    portfolio: [
      {
        imgSrc: WordpressImg1,
        link: "#",
      },
      {
        imgSrc: WordpressImg2,
        link: "#",
      },
      {
        imgSrc: WordpressImg3,
        link: "#",
      },
      {
        imgSrc: WordpressImg4,
        link: "#",
      },
      {
        imgSrc: WordpressImg5,
        link: "#",
      },
      {
        imgSrc: WordpressImg6,
        link: "#",
      },
    ],
    portfolioDesc:
      "Creative visuals that power dynamic websites. Explore my WordPress portfolio, where design, functionality, and innovation come together for seamless web experiences.",
    thumbnail: Wordpress,
  },
];

// Social Data
export const SocialData = [
  {
    icon: <FaFacebookF />,
    url: "https://www.facebook.com/profile.php?id=61572834600833",
  },
  {
    icon: <RiLinkedinFill />,
    url: "https://www.linkedin.com/company/dev-sphere-it-company/",
  },
  {
    icon: <RiInstagramFill />,
    url: "https://www.instagram.com/devsphereofficial/profilecard/?igsh=aDV6M21wcnp3c2ls",
  },
  {
    icon: <AiOutlineWhatsApp />,
    url: "https://wa.me/923467890654",
  },
  {
    icon: <FaEnvelope />,
    url: "mailto:devsphere@gmail.com",
  },
];

export const TeamData: TeamInterface[] = [
  {
    name: "Ahmad Nadeem",
    position: "Founder & Director",
    imgSrc: AhmadNadeem,
    socialLinks: [
      {
        icon: <FaFacebookF />,
        url: "https://www.facebook.com/profile.php?id=100089044984069",
      },
      {
        icon: <RiLinkedinFill />,
        url: "https://www.linkedin.com/in/ahmad-nadeem-4703822b8",
      },
      {
        icon: <FaEnvelope />,
        url: "mailto:ahmadofficials121@gmail.com",
      },
    ],
  },
  {
    name: "Saqib Ali",
    position: "App Developer",
    imgSrc: SaqibAli,
    socialLinks: [
      {
        icon: <FaFacebookF />,
        url: "https://www.facebook.com/msaqib.ali.31392",
      },
      {
        icon: <RiLinkedinFill />,
        url: "https://www.linkedin.com/in/m-saqib-ali",
      },
      {
        icon: <FaEnvelope />,
        url: "mailto:msaqibalilolai@gmail.com",
      },
    ],
  },
  {
    name: "Ameer Hamza",
    position: "Wordpress Developer",
    imgSrc: AmeerHamza,
    socialLinks: [
      {
        icon: <FaFacebookF />,
        url: "https://www.facebook.com/share/15pv45rwkd/",
      },
      {
        icon: <RiLinkedinFill />,
        url: "https://www.linkedin.com/in/ameer-hamza-00bb1b25b/",
      },
      {
        icon: <FaEnvelope />,
        url: "mailto:ameerhamzaisb9@gmail.com",
      },
    ],
  },
  {
    name: "Ayub Rehman",
    position: "Graphic and UI Designer",
    imgSrc: AyubRehman,
    socialLinks: [
      {
        icon: <FaFacebookF />,
        url: "https://web.facebook.com/lovely.danish.771",
      },
      {
        icon: <RiLinkedinFill />,
        url: "https://www.linkedin.com/in/ayub-rehman-a428a624a",
      },
      {
        icon: <FaEnvelope />,
        url: "mailto:ayubrehman107@gmail.com",
      },
    ],
  },
  {
    name: "Komal Shaikh",
    position: "Full Stack Developer",
    imgSrc: KomalShaikh,
    socialLinks: [
      {
        icon: <FaFacebookF />,
        url: "https://www.facebook.com/share/1U3PcdipdQ/",
      },
      {
        icon: <RiLinkedinFill />,
        url: "https://www.linkedin.com/in/komal-shaikh-37471a1a4",
      },
      {
        icon: <FaEnvelope />,
        url: "mailto:komalshaikh.cs@gmail.com",
      },
    ],
  },
  {
    name: "Muhammad Tahir",
    position: "Digital Marketer",
    imgSrc: MuhammadTahir,
    socialLinks: [
      {
        icon: <FaFacebookF />,
        url: "https://www.facebook.com/share/1EFofpvruT/",
      },
      {
        icon: <RiLinkedinFill />,
        url: "https://www.linkedin.com/in/muhammad-tahir-940713318",
      },
      {
        icon: <FaEnvelope />,
        url: "mailto:ysmarketingsagency@gmail.com",
      },
    ],
  },
];
