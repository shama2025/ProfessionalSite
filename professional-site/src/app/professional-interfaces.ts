import { workExp } from '../work-exp';
import { links } from './links';
import { projects } from './projects';
export const WORKEXP: workExp[] = [
  {
    date: 'Summer 2024',
    job: 'Quality Assurance Intern',
    employer: 'Karmak',
    desc: "Researched different mobile app automated testing frameworks. Created automated and manual tests for Karmak's mobile app and enterprise level application. Performed smoke and revalidation tests on the enterprise level application.",
    toolsSkills: 'Detox • BrowserStack • Appium • Azure DevOps',
  },
  {
    date: 'Summer 2023',
    job: 'Software Engineer Intern',
    employer: 'Genesys',
    desc: "In this role I worked with team members to create automated testing utilites. I also utilized Genesys's classes and learned about Python and machine learning.",
    toolsSkills: 'Java • Selenium • Jenkins • Groovy',
  },
  {
    date: 'Fall 2022 - Spring 2024',
    job: 'Library Tech Worker',
    employer: 'Anderson University',
    desc: 'In this role I assisted students with printer and paper needs. I would help students who had questions about the library computers, printers, and custom paper. Worked with Archive department to scan documents.',
    toolsSkills: 'Customer Service • Tech Support',
  },
  {
    date: 'Fall 2021 - Spring 2022',
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
    tools: 'Python | HuggingFace | Vanilla JS, HTML, & CSS',
    link: 'Github Repository',
  },
  {
    name: 'Memory Game',
    date: 'Spring 2023',
    desc: 'This was my first project as an Anderson University student, built with the purpose of playing a memory game consisting of 4 rounds and 12 cards per round. The purpose of this project was to practice OOP using C#.',
    tools: 'C#',
    link: 'Github Link',
  },
  {
    name: 'Athletic Trainer Site',
    date: 'Summer 2024',
    desc: 'My first side project, where I took what I learned from the IUK web team and classes at AU and built the frontend and backend for this site. The purpose of this site was to create a potential tool to help athletic trainers fill out Patient Outcome Reported Measure forms.',
    tools: 'Angular | Python | MySQL',
    link: '',
  },
];
