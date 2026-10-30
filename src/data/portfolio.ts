
import {
  Bot,
  Braces,
  Brain,
  Cloud,
  Code2,
  Cpu,
  Database,
  Globe,
  Github,
  Heart,
  Layers,
  Linkedin,
  Server,
  Terminal,
  Trophy,
  Users,
  Workflow,
  Wrench,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export const profile = {
  name: 'PUGAZHENTHI M',
  firstName: 'Pugazhenthi',
  email: 'pugazhenthi030506@gmail.com',
  phone: '+91 78249 75988',
  phoneHref: 'tel:+917824975988',
  location: 'Coimbatore, Tamil Nadu, India',
  tagline: 'Building Intelligent Solutions Through Code, APIs & Automation & Creative Experiences.',
  intro:
  "Hi, I'm Pugazhenthi — a Computer Science student, aspiring Software Engineer, AI Automation Enthusiast, and UI/UX Designer.",

roles: [
  'UI/UX Designer',
  'Flutter UI Designer',
  'Creative Video Editor',
  'Software Developer',
  'AI & GenAI Developer',
  'API Integration Enthusiast',
  'Automation Engineer',
  'Frontend Developer',
],
  resumeHref: 'https://drive.google.com/file/d/1XcRZaUUQYOhiL4I4S2PH96AoO4kFJtDD/view?usp=sharing',
  linkedin: 'https://www.linkedin.com/in/pugal030506/',
  github: 'https://github.com/pugal030506',
  leetcode: 'https://leetcode.com/u/pugal030506/',
};

export const navItems = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
];

export const socialLinks: {
  label: string;
  href: string;
  icon: LucideIcon;
}[] = [
  { label: 'LinkedIn', href: profile.linkedin, icon: Linkedin },
  { label: 'GitHub', href: profile.github, icon: Github },
  { label: 'LeetCode', href: profile.leetcode, icon: Code2 },
];

export const aboutParagraphs = [
  'I am a Computer Science and Engineering undergraduate at Sri Shakthi Institute of Engineering and Technology, graduating in 2027. I am passionate about software development, Generative AI, UI/UX design, API integrations, and workflow automation.',

  'I enjoy building intelligent applications, designing user-friendly interfaces, integrating different services, and automating repetitive tasks to solve real-world problems. My experience includes developing AI-powered automation workflows and software applications using Python, JavaScript, REST APIs, and SQL, along with exploring mobile UI design using Flutter.',

  'My technical interests include Data Structures and Algorithms, Object-Oriented Programming, database management, backend development, LLM integrations, cloud technologies, wireframing, user flows, responsive design, and video editing. I also enjoy creating engaging digital content using tools like Figma, Adobe Premiere Pro, and CapCut.',
];

export const floatingTech: {
  label: string;
  icon: LucideIcon;
  className: string;
}[] = [
  { label: 'Python', icon: Code2, className: 'left-[4%] top-[12%] animate-float' },
  { label: 'UIUXs', icon: Globe, className: 'right-[2%] top-[8%] animate-float-slow' },
  { label: 'n8n', icon: Workflow, className: 'left-[0%] bottom-[18%] animate-float-slow' },
  { label: 'Google Cloud', icon: Cloud, className: 'right-[6%] bottom-[10%] animate-float' },
  { label: 'SQL', icon: Database, className: 'left-[30%] top-[-2%] animate-float' },
  { label: 'AI APIs', icon: Bot, className: 'right-[28%] bottom-[-4%] animate-float-slow' },
];

export interface SkillGroup {
  title: string;
  icon: LucideIcon;
  accent: 'electric' | 'violet' | 'cyan';
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Programming',
    icon: Code2,
    accent: 'electric',
    items: ['Python', 'Java', 'JavaScript', 'C', 'C++'],
  },
  {
    title: 'Core Computer Science',
    icon: Brain,
    accent: 'violet',
    items: [
      'Data Structures and Algorithms',
      'Object-Oriented Programming',
      'Problem Solving',
      'Algorithm'
    ],
  },
  {
    title: 'Backend & APIs',
    icon: Braces,
    accent: 'cyan',
    items: [
      'REST APIs',
      'JSON',
      'Client-Server Architecture',
      'API Integration',
    ],
  },
  {
    title: 'AI & Automation',
    icon: Bot,
    accent: 'electric',
    items: [
      'LLM Integration',
      'Prompt Engineering',
      'AI Automation',
      'n8n Workflows',
    ],
  },
  {
    title: 'Database',
    icon: Database,
    accent: 'violet',
    items: ['SQL', 'MySQL'],
  },
  {
    title: 'Cloud',
    icon: Cloud,
    accent: 'electric',
    items: ['Google Cloud', 'AWS'],
  },
    {
    title: 'UI/UX Tools',
    icon: Wrench,
    accent: 'cyan',
    items: [
      'Figma',
      'Adobe XD',
      'Canva',
      'Sketch',
      'Framer',
      'FigJam',
      'Miro',
      'Adobe Photoshop',
      'Adobe Illustrator',
    ],
  },
];

export interface Project {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  technologies: string[];
  highlights: string[];
  icon: LucideIcon;
  accent: 'electric' | 'violet' | 'cyan';
  visual: 'workflow' | 'timetable' | 'shop';
}

export const projects: Project[] = [
  {
    id: 'whatsapp-ai',
    number: '01',
    title: 'WhatsApp AI Voice & Text Assistant',
    tagline: 'Intelligent conversations powered by AI automation',
    description:
      'Developed an AI-powered WhatsApp automation system that processes incoming text and voice messages and generates automated responses using AI APIs and workflow automation.',
    technologies: [
      'Python',
      'n8n',
      'OpenRouter',
      'WhatsApp Cloud API',
      'Google Cloud',
      'REST APIs',
    ],
    highlights: [
      'Integrated WhatsApp Cloud API with AI chatbot services.',
      'Automated text and voice message processing.',
      'Connected speech-to-text processing with AI response generation.',
      'Designed an end-to-end automated messaging workflow.',
    ],
    icon: Workflow,
    accent: 'electric',
    visual: 'workflow',
  },
  {
    id: 'timetable',
    number: '02',
    title: 'Automatic Timetable Generator',
    tagline: 'Clash-free academic schedules through automation',
    description:
      'Developed a Python desktop application that generates academic timetables using scheduling logic while considering faculty, classroom, and subject constraints.',
    technologies: ['Python', 'Tkinter', 'Algorithm Design'],
    highlights: [
      'Automates academic timetable generation.',
      'Reduces faculty and classroom scheduling conflicts.',
      'Uses scheduling logic to distribute subjects across time slots.',
      'Provides an intuitive graphical user interface.',
    ],
    icon: Layers,
    accent: 'violet',
    visual: 'timetable',
  },
  {
    id: 'shopping-portal',
    number: '03',
    title: 'Online Shopping Portal',
    tagline: 'A database-driven full-stack shopping application',
    description:
      'Developed a web-based shopping application with user registration, authentication, database connectivity, and responsive user interfaces.',
    technologies: ['PHP', 'HTML', 'CSS', 'JavaScript', 'MySQL'],
    highlights: [
      'Implemented user registration and authentication.',
      'Integrated MySQL for database operations.',
      'Built responsive interfaces for desktop and mobile.',
    ],
    icon: Server,
    accent: 'cyan',
    visual: 'shop',
  },
  
];

export const education = [
  {
    title: 'Bachelor of Engineering – Computer Science and Engineering',
    org: 'Sri Shakthi Institute of Engineering and Technology, Coimbatore',
    period: '2023 – 2027',
    detail: 'CGPA: 7.59 / 10',
  },
  {
    title: 'Higher Secondary Education',
    org: 'St. Aloysius Hr. Sec. School, Theni',
    period: '2022 – 2023',
    detail: null,
  },
];

export interface Achievement {
  title: string;
  description: string;
  icon: LucideIcon;
  stat?: {
    value: number;
    suffix: string;
    label: string;
  };
}

export const achievements: Achievement[] = [
  {
    title: 'Smart India Hackathon (SIH) 2024',
    description:
      'Participated in the Smart India Hackathon 2024 national innovation challenge.',
    icon: Trophy,
  },
  {
    title: 'LeetCode Problem Solving',
    description:
      'Practiced Data Structures and Algorithms through coding challenges on LeetCode.',
    icon: Terminal,
    stat: {
      value: 50,
      suffix: '+',
      label: 'DSA problems solved',
    },
  },
];

export const certifications = [
  {
    title: 'Full Stack Development',
    issuer: 'Arttifai Tech',
    date: 'May 2025',
  },
  {
    title: 'Deloitte Data Analytics Virtual Experience',
    issuer: 'Forage',
    date: 'September 2025',
  },
];

export const leadership = [
  {
    title: 'Student Coordinator',
    org: 'Illusion Club',
    icon: Users,
  },
  {
    title: 'Member',
    org: 'Rotaract District 3206, Coimbatore',
    icon: Heart,
  },
];
