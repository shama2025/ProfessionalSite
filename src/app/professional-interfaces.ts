import { workExp } from '../work-exp';
import { links } from './links';
import { projects } from './projects';
export const WORKEXP: workExp[] = [
  {
    date: '2024',
    job: 'Quality Assurance Intern',
    employer: 'Karmak',
    desc: "Researched different mobile app automated testing frameworks. Created automated and manual tests for Karmak's mobile app and enterprise level application. Performed smoke and revalidation tests on the enterprise level application.",
    toolsSkills: 'Detox • BrowserStack • Appium • Azure DevOps',
  },
  {
    date: '2023',
    job: 'Software Engineer Intern',
    employer: 'Genesys',
    desc: "In this role I worked with team members to create automated testing utilites. I also utilized Genesys's classes and learned about Python and machine learning.",
    toolsSkills: 'Java • Selenium • Jenkins • Groovy',
  },
  {
    date: '2022 - 2024',
    job: 'Library Tech Worker',
    employer: 'Anderson University',
    desc: 'In this role I assisted students with printer and paper needs. I would help students who had questions about the library computers, printers, and custom paper. Worked with Archive department to scan documents.',
    toolsSkills: 'Customer Service • Tech Support',
  },
  {
    date: '2021 - 2022',
    job: 'Indiana University Web Design Team',
    employer: 'Indiana University Kokomo',
    desc: 'Collaborated with fellow students to learn vanills HTML, JS, and CSS and research other frameworks such as React, Node, and Angular. Built projects using our knowledge of web design in multiple languages and frameworks.',
    toolsSkills: 'Angular • TypeScript • Node • React',
  },
];
export const LINKS: links[] = [
  {
    site: 'Github',
    link: 'https://github.com/shama2025',
    username: '@shama2025',
  },
  {
    site: 'LinkedIn',
    link: 'https://www.linkedin.com/in/marcus-shaffer-3ba9b0252/',
    username: '@marcus-shaffer',
  },
  {
    site: 'Email',
    link: '2003mashaffer@gmail.com',
    username: '2003mashaffer@gmail.com',
  },
];
export const PROJECTS: projects[] = [
  {
    name: 'Inferential',
    date: 'Fall 2023',
    desc: "For this project, I assisted in helping build the API for the inference tool. This tool is a basic inference engine housing different models to help teach the basics of inference and LLM's to students.",
    tools: 'Python • HuggingFace • Vanilla JS • HTML • CSS',
    link: 'https://github.com/jncraton/inferential',
    img: 'assets/inferentialLogo.jpg',
    alt: 'Inferential Logo Image',
  },
  {
    name: 'Library Database',
    date: 'Fall 2022',
    desc: 'For this project, me and my partner were tasked with creating a database using SQL, for teachers, students, and faculty to checkout and donate books.',
    tools: 'C# • SQL • Windows Forms App • SSMS',
    link: 'https://github.com/shama2025/CPSCSQLPROJ',
    img: 'assets/pixelBooks.jpg',
    alt: 'Pixel Book Image',
  },
  {
    name: 'Athletic Trainer Site',
    date: 'Summer 2024',
    desc: 'My first side project, where I took what I learned from the IUK web team and classes at AU and built the frontend and backend for this site as well as created the tests for. The purpose of this site was to create a potential tool to help athletic trainers and students fill out Patient Outcome Reported Measure forms.',
    tools: 'Angular • Python • MySQL • UI/API Tests',
    link: 'https://github.com/shama2025/student-injury',
    img: 'assets/stethoscope.jpg',
    alt: 'Pixel Stethoscope Image',
  },
];
