import { workExp } from "../work-exp";
import { links} from "./links";
import { projects } from "./projects";
export const WORKEXP: workExp[] = [
    {date: '', job: 'Quality Assurance Intern', employer: 'Karmak', desc: '', tools: ''},
    {date: '', job: 'Software Engineer Intern', employer: 'Genesys', desc: '', tools: ''},
    {date: '', job: '', employer: '', desc: '', tools: ''}
];
export const LINKS: links[] = [
    {site: 'Github', link: 'https://github.com/shama2025', username:'shama2025'},
    {site: 'LinkedIn', link: 'https://www.linkedin.com/in/marcus-shaffer-3ba9b0252/', username: 'marcus-shaffer'}
];
export const PROJECTS: projects[] = [
    {name: 'Inferential', date: 'Fall 2023', desc: 'For this project, I assisted in helping build the API for the inference tool. This tool is a basic inference engine housing different models to help teach the basics of inference and LLM\'s to students.', tools: 'Python | HuggingFace | Vanilla JS, HTML, & CSS', link: 'Github Repository'},
    {name: 'Memory Game', date: 'Spring 2023', desc: 'This was my first project as an Anderson University student, built with the purpose of playing a memory game consisting of 4 rounds and 12 cards per round. The purpose of this project was to practice OOP using C#.', tools: 'C#', link: 'Github Link'},
    {name: 'Athletic Trainer Site', date: 'Summer 2024', desc: 'My first side project, where I took what I learned from the IUK web team and classes at AU and built the frontend and backend for this site. The purpose of this site was to create a potential tool to help athletic trainers fill out Patient Outcome Reported Measure forms.', tools: 'Angular | Python | MySQL', link: ''}
];