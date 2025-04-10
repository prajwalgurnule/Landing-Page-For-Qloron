const services = [
  {
    id: 1,
    name: "Web Development",
    description: "We provide modern web development solutions.",
    expand: "We provide modern web development solutions using the latest technologies to create responsive, visually appealing websites. Our approach ensures optimal performance and tailored experiences across all devices",
    icon: "../images/servicesImages/WebDevelopment.png",
    comingSoon: false,
    category: "development",
    featured: true
  },
  {
    id: 4,
    name: "Mobile Development",
    description: "We create cutting-edge mobile applications tailored to your business needs.",
    expand: "Our mobile development services focus on building user-friendly, high-performance mobile applications that deliver seamless experiences across both iOS and Android platforms, utilizing the latest technologies to meet your specific business requirements.",
    icon: "../images/servicesImages/MobileDevelopment1.png",
    comingSoon: false,
    category: "development"
  },
  {
    id: 2,
    name: "Web Hosting",
    description: "We provide reliable and secure web hosting services",
    expand: "We provide reliable and secure web hosting services with robust uptime, comprehensive security, and seamless scalability to ensure optimal website performance and protection.",
    icon: "../images/servicesImages/WebHosting.png",
    comingSoon: false,
    category: "development" // Mapped to development as it's tech infrastructure
  },
  {
    id: 3,
    name: "Digital Marketing",
    description: "Boost your online presence with our digital marketing services.",
    expand: "Boost your online presence with our digital marketing services, utilizing targeted strategies to enhance visibility, engagement, and conversions effectively.",
    icon: "../images/servicesImages/DigitalMarketing.png",
    comingSoon: false,
    category: "marketing",
    featured: true
  },
  {
    id: 5,
    name: "AI Chat Bots",
    description: "Coming Soon",
    expand: "Coming Soon",
    icon: "../images/servicesImages/AIChatBot.png",
    comingSoon: true,
    category: "development" // Mapped to development as it's a tech product
  },
  {
    id: 6,
    name: "Business Technology Platform",
    description: "Comprehensive technology solutions for your business needs.",
    expand: "Our Business Technology Platform offers integrated solutions to streamline operations, enhance productivity, and drive innovation across your organization.",
    icon: "../images/servicesImages/BusinessTech.png",
    comingSoon: false,
    category: "strategy" // Mapped to strategy as it's business-oriented
  },
  {
    id: 7,
    name: "Human Capital Management",
    description: "Optimize your workforce management.",
    expand: "Our Human Capital Management solutions help you attract, develop, and retain top talent while optimizing workforce productivity and engagement.",
    icon: "../images/servicesImages/HumanCapital.jpg",
    comingSoon: false,
    category: "strategy" // Mapped to strategy
  },
  {
    id: 8,
    name: "Enterprise Resource Planning",
    description: "Integrated management of core business processes.",
    expand: "Our Enterprise Resource Planning solutions provide a unified system for managing your company's financials, supply chain, operations, reporting, and more.",
    icon: "../images/servicesImages/ERP.jpg",
    comingSoon: false,
    category: "strategy", // Mapped to strategy
    featured: true
  },
  {
    id: 9,
    name: "Financial Support",
    description: "Expert financial management solutions.",
    expand: "Our Financial Support services offer comprehensive solutions for accounting, financial planning, analysis, and reporting to support your business growth.",
    icon: "../images/servicesImages/FinancialSupport.jpg",
    comingSoon: false,
    category: "strategy" // Mapped to strategy
  },
  {
    id: 10,
    name: "CRM & Customer Experience",
    description: "Enhance customer relationships and experiences.",
    expand: "Our CRM & Customer Experience solutions help you build stronger customer relationships, improve satisfaction, and drive loyalty through personalized experiences.",
    icon: "../images/servicesImages/CRM.png",
    comingSoon: false,
    category: "marketing" // Mapped to marketing
  },
  {
    id: 11,
    name: "Spend Management",
    description: "Optimize and control your company spending.",
    expand: "Our Spend Management solutions provide visibility and control over company expenditures, helping you reduce costs and improve financial efficiency.",
    icon: "../images/servicesImages/SpendManagement.jpg",
    comingSoon: false,
    category: "strategy" // Mapped to strategy
  },
  {
    id: 12,
    name: "Business analytics and governance",
    description: "Business analytics and governance solutions.",
    expand: "Our BAG (Business Analytics and Governance) services provide insights and oversight to drive better business decisions and compliance.",
    icon: "../images/servicesImages/BAG.png",
    comingSoon: false,
    category: "strategy" // Mapped to strategy
  }
];

export default services;

// Categories limited to the original 5 you specified
export const categories = [
  { id: "all", name: "All Services" },
  { id: "development", name: "Development" },
  { id: "marketing", name: "Marketing" },
  { id: "strategy", name: "Strategy" }
];