import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Valentina Comerci', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Valentina Comerci',
  subtitle: 'Aspiring Web Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'HI, my name is Valentina. I grew up in Rome, Italy and discovered my passion for web development while living in San Francisco, California. ',
  paragraphTwo: 'I know that I can provide a fresh take and an extraordinary approach to every project. I am always open to challenges and constructive feedback. ',
  paragraphThree: 'I am open-minded and learn new things quickly. I want to become a team player and dedicate all my skills and talents to develop high-quality and unique products.',
  resume: 'https://docs.google.com/document/d/1ZSHHTa_Zx602uUgCXTv3Du2wnzWaAFOv0ECQlk2tnjE/edit?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'todoapp.png',
    title: 'Todo App',
    info: ' A simple Todo-list built with React. ',
    info2: '',
    url: '',
    repo: 'https://github.com/valentinacomerci3/TodoList', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Nucampsite.jpg',
    title: 'NucampSite review Website',
    info: 'built with React and Redux',
    info2: '',
    url: '',
    repo: 'https://github.com/valentinacomerci3/Reactapp', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'valentinacomerci3@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/valentinacomerci',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/valentina-comerci-24582417a/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/valentinacomerci3',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
