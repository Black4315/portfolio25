import { m } from "motion/react";
import React from "react";

import {
  FaSass,
  FaReact,
  FaGitAlt,
  FaCss3Alt, FaFigma, FaHtml5, FaJs, FaPython
} from 'react-icons/fa';
import { MdBuild } from "react-icons/md";
import {
  SiTailwindcss,
  SiJquery,
  SiTypescript,
  SiNextdotjs,
  SiGreensock,
  SiThreedotjs,
  SiVite,
  SiFramer,
  SiDjango,
  SiAdobephotoshop,
  SiFigma,
  SiLinux,
} from 'react-icons/si';



export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  // { name: "Testimonials", link: "#testimonials" },
  { name: "Skills", link: "#skills" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[550px] min-h-80",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Refining complex interfaces through clean architecture",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website with GSAP animations and Three.js 3D effects.",
    img: "/3d-iphone.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://github.com/Black4315/3d-iphone",
    
  },
  {
    id: 2,
    title: "AI chatbot – BrainwaveCurve",
    des: "A landing page showcasing benefits and roadmap of AI chatbot with bold visuals, animations, and modern design trends. Built with Vite, React, GSAP, and Tailwind.",
    img: "/brainwave.png",
    iconLists: ["/re.svg", "/tail.svg", "/js.svg", "/gsap.svg"],
    link: "https://github.com/Black4315/brainwave",
  },
  {
    id: 3,
    title: "3D - Earth",
    des: "A beautiful, interactive 3D globe built with Three.js. Smooth animations, clean design, and a real-world feel.",
    img: "/3d-earth.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg",],
    link: "https://github.com/Black4315/3jsEarth",
  },
  {
    id: 4,
    title: "Tic-Tac-Toe (XO Game)",
    des: "Luxurious Tic-Tac-Toe game with smooth animations, (4) AI levels, history tracker, and celebratory effects.",
    img: "/xogame1.png",
    iconLists: ["/html.svg", "/css.svg", "/js.svg",],
    link: "https://github.com/Black4315/Tic-Tac-Toe",
  },
  {
    id: 5,
    title: "portfolio - NewPost",
    des: "Responsive developer portfolio with a dark luxury theme, showcase personal projects, skills, and contact info. Built using HTML, CSS, and JavaScript",
    img: "/newpost.png",
    iconLists: ["/html.svg", "/css.svg", "/js.svg",],
    link: "https://github.com/Black4315/portfolioNewPost",
  },
  {
    id: 6,
    title: "webnest ( Python web framework )",
    des: "WebNest is a lightweight Python framework designed for building web applications quickly. It offers easy project setup, server management, database integration, and custom HTML tags (similar to Jinja2) for dynamic content rendering, such as {{ title }}. WebNest also features simple routing to streamline your development process.",
    img: "/webnest.png",
    iconLists: ["/python.svg"],
    link: "https://github.com/Black4315/webnest",
  },
  
];

export const testimonials = [
  {
    quote:
      "Working with Yahia feels like working with someone who gets both code and people — reliable, thoughtful, and always pushing for better outcomes",
    name: "Michael Johnson",
    img: '/profile.svg',
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in building interactive UIs using React.js, Tailwind CSS, and TypeScript, improving user engagement and performance.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Fullstack Developer ",
    desc: "Designed and developed a dynamic web application using Next.js and Django, integrating REST APIs and delivering a seamless user experience across the stack.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the development of a responsive web app for a client, from concept to full deployment.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Architected and maintained production-level interfaces using Next.js, GSAP, and Three.js, focusing on performance, accessibility, and immersive UX. Collaborated closely with backend teams integrating Django.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: 'https://github.com/Black4315',
  },
  {
    id: 2,
    img: "/wsp.svg",
    link: 'https://wa.me/201019153027',
  },
  {
    id: 3,
    img: "/link.svg",
    link: 'https://www.linkedin.com/in/yahia-badr-4306b5308/',
  },
];


export const approach = [
  {
    order: 'Phase 1',
    title: "Planning & Strategy",
    des: "We'll start by understanding your project's purpose, audience, and goals. I'll help outline the ideal structure, core features, and tech stack to bring your idea to life..",
  },
  {
    order: 'Phase 2',
    title: "Development & Progress",
    des: "Once everything’s aligned, I’ll jump into the build process — setting up the architecture, writing clean code, and keeping you in the loop with regular updates as things come together.",
    otherProp: {
      colors: [
        [255, 166, 158],
        [221, 255, 247],
      ],
      dotSize: 2
    }
  },
  {
    order: 'Phase 3',
    title: "Final Touches & Launch",
    des: "After testing and final adjustments, your site is ready to go live. I’ll ensure it’s optimized, responsive, and running smoothly — and I’ll be here if you need anything post-launch.",
    otherProp: { colors: [[125, 211, 252]], }

  }
]


export const skills = [
  { Icon: FaHtml5, name: 'HTML', prog: 97, category: 'Front-End', color: '#f06529' },
  { Icon: FaCss3Alt, name: 'CSS', prog: 90, category: 'Front-End', color: '#264de4' },
  { Icon: FaSass, name: 'SCSS', prog: 90, category: 'Front-End', color: '#cd6799' },
  { Icon: SiTailwindcss, name: 'Tailwind', prog: 90, category: 'Front-End', color: '#38bdf8' },

  { Icon: FaJs, name: 'JavaScript', prog: 90, category: 'Front-End', color: '#f0db4f' },
  { Icon: SiTypescript, name: 'TypeScript', prog: 90, category: 'Front-End', color: '#007acc' },
  { Icon: SiJquery, name: 'jQuery', prog: 90, category: 'Front-End', color: '#0769ad' },
  { Icon: FaReact, name: 'React.js', prog: 90, category: 'Front-End', color: '#61dafb' },
  { Icon: SiNextdotjs, name: 'Next.js', prog: 90, category: 'Front-End', color: '#ffffff' }, 
  { Icon: SiThreedotjs, name: 'Three.js', prog: 90, category: 'Front-End', color: '#f9f9f9' },
  { Icon: SiGreensock, name: 'GSAP', prog: 90, category: 'Front-End', color: '#88ce02' },
  { Icon: SiFramer, name: 'Framer Motion', prog: 90, category: 'Front-End', color: '#ffffff' },
  { Icon: SiVite, name: 'Vite', prog: 90, category: 'Front-End', color: '#646cff' },

  { Icon: FaPython, name: 'Python', prog: 90, category: 'Back-End', color: '#306998' },
  { Icon: SiDjango, name: 'Django', prog: 90, category: 'Back-End', color: '#44b78b' }, 

  { Icon: FaGitAlt, name: 'Git', prog: 90, category: 'Tools & Platforms', color: '#f05032' },
  { Icon: SiAdobephotoshop, name: 'Photoshop', prog: 90, category: 'Tools & Platforms', color: '#31a8ff' },
  { Icon: SiFigma, name: 'Figma', prog: 90, category: 'Tools & Platforms', color: '#f24e1e' }, 
  { Icon: SiLinux, name: 'Linux', prog: 90, category: 'Tools & Platforms', color: '#ffffff' },
];

// export const skills = [
//   {
//     skill: 'Front-End',
//     items: [
//       { Icon: FaHtml5, name: 'HTML', prog: 97 },
//       { Icon: FaCss3Alt, name: 'CSS', prog: 90 },
//       // { Icon: '', name: 'SCSS', prog: 90 },
//       // { Icon: '', name: 'Tailwind', prog: 90 },
//       // { Icon: '', name: 'CSS 3D', prog: 90 },
//       { Icon: FaJs, name: 'JavaScript', prog: 90 },
//       // { Icon: '', name: 'TypeScript', prog: 90 },
//       // { Icon: '', name: 'jQuery', prog: 90 },
//       // { Icon: '', name: 'React.js', prog: 90 },
//       // { Icon: '', name: 'Next.js', prog: 90 },
//       // { Icon: '', name: 'GSAP', prog: 90 },
//       // { Icon: '', name: 'Three.js', prog: 90 },
//       // { Icon: '', name: 'Framer Motion', prog: 90 },
//       // { Icon: '', name: 'Vite', prog: 90 }
//     ]
//   },
//   {
//     skill: 'Back-End',
//     items: [
//       { Icon: FaPython, name: 'Python', prog: 90 },
//       // { Icon: '', name: 'Django', prog: 90 }
//     ]
//   },
//   {
//     skill: 'Tools & Platforms',
//     items: [
//       { Icon: FaHtml5, name: 'Git', prog: 90 },
//       { Icon: FaHtml5, name: 'Photoshop', prog: 90 }
//     ]
//   }
// ];
