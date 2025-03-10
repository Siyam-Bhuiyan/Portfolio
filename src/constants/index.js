import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Achievements",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "UI/UX Designer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Machine Learning",
    icon: creator,
  },
  {
    title: "Problem Solving",
    icon: creator,
  },
  {
    title: "Team Collaboration",
    icon: creator,
  },
  {
    title: "Adaptibility",
    icon: creator,
  },
  {
    title: "Willingness to Learn",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Next JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "MIST Inventious 4.1 Heckathon",
    company_name: "UNISPHERE",
    icon: starbucks,
    iconBg: "#383E56",
    date: "CHAMPION",
    points: [
      "A comprehensive university management platform that digitizes campus life through an integrated ecosystem.",
      "Features include real-time bus tracking, AI campus assistant, academic management, student services, and campus navigation.",
      "Implementing responsive design and real-time functionality.",
    ],
  },
  {
    title: "MIST Inventious 4.1 Project Showcase",
    company_name: "Waste Zero Bangladesh",
    icon: starbucks,
    iconBg: "#383E56",
    date: "CHAMPION",
    points: [
      "Waste Zero Bangladesh is a transformative application designed to address waste management challenges in Bangladesh.",
      "By leveraging cutting-edge AI technologies, it provides a user-friendly platform for reporting, collecting, recycling, and reusing waste.",
      "The application aims to minimize environmental impact while promoting sustainable living practices.",
    ],
  },
  {
    title: "UIU CSE FEST Project Showcase",
    company_name: "Waste Zero Bangladesh",
    icon: starbucks,
    iconBg: "#383E56",
    date: "4th Runners Up",
    points: [
      "Waste Zero Bangladesh is a transformative application designed to address waste management challenges in Bangladesh.",
      "By leveraging cutting-edge AI technologies, it provides a user-friendly platform for reporting, collecting, recycling, and reusing waste.",
      "The application aims to minimize environmental impact while promoting sustainable living practices.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Siyam's UniSphere project at MIST Inventious 4.1 demonstrated exceptional innovation in university management. Their championship was well-deserved for bringing such a comprehensive digital solution.",
    name: "Dr. Mahbub Alam",
    designation: "Professor",
    company: "MIST",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    testimonial:
      "The Waste Zero Bangladesh project shows remarkable potential for solving our country's waste management challenges. Their achievement in multiple competitions proves their technical excellence.",
    name: "Farah Rahman",
    designation: "Environmental Consultant",
    company: "Green Tech BD",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    testimonial:
      "As a judge at UIU CSE FEST, I was impressed by their innovative approach to sustainable waste management. Their solution demonstrates both technical expertise and social responsibility.",
    name: "Mohammad Hassan",
    designation: "Tech Lead",
    company: "Digital Innovation Lab",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
  },
];

const projects = [
  {
    name: "UniSphere",
    description:
      "The UniSphere project is a MERN-based varsity management system designed to enhance campus operations. The platform aims to improve communication, accessibility, and overall student experience on campus.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Siyam-Bhuiyan/UniSphere",
  },
  {
    name: "Protilipi",
    description:
      "Protilipi is a NEXT JS based web application that allows users to do so many Bangla functonalities like Translation, Text to Speech, Text to Bangla, Collaborative Writing, Bangla AI(Ekushe AI), Bangla Text EDitor with fonts etc.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Siyam-Bhuiyan/Protilipi",
  },
  {
    name: "Waste Zero Bangladesh",
    description:
      "Waste Zero Bangladesh is an AI powered transformative application designed to address waste management challenges in Bangladesh. The application aims to minimize environmental impact while promoting sustainable living practices.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Siyam-Bhuiyan/WasteZeroBD",
  },
  {
    name: "EduConnect",
    description:
      "EduConnect is a MERN based web application that can be used by a department to manage their students and their data.Also It can be used by a student and faculty to manage their data and get connected with each other.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link:
      "https://github.com/Siyam-Bhuiyan/FRONTEND_EDUCONNECT_MODLOCKED",
  },
  {
    name: "Eunoia",
    description:
      "Eunoia is an wnd-to-end Medical-Chatbot-Generative-AI that can be used to answer medical questions and help with medical advice. Users can ask questions about their health issues and get answers from a well trained chatbot.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "machine learnign",
        color: "green-text-gradient",
      },
      {
        name: "flask",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Siyam-Bhuiyan/Eunoia",
  },
  //Portfolio
  {
    name: "Portfolio",
    description:
      "This is my personal portfolio website that showcases my projects and skills. It is a 3D, clean and responsive portfolio website that showcases my projects and skills. It has my achievements and contact information too.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "vercel",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Siyam-Bhuiyan/Portfolio",
  },
];

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/Siyam-Bhuiyan",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/siyambhuiyan/",
    icon: "linkedin",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/profile.php?id=100024157003376",
    icon: "facebook",
  },
];

export { services, technologies, experiences, testimonials, projects };
navLinks