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
  firebase,
  mui,
  exjs,
  nextjs,
  github,
  jest,
  reacttestinglibrary,
  recipeapp,
  airbnbclone,
  hotelbookingapp,
  phone,
  email,
  address,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
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
    title: "Frontend Developer",
    icon: creator,
  },

  {
    title: "Backend Developer",
    icon: backend,
  },

  // {
  //   title: "Wordpress Developer",
  //   icon: mobile,
  // },
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
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "Material UI",
    icon: mui,
  },
  ,
  {
    name: "Express JS",
    icon: exjs,
  },

  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "GitHub",
    icon: github,
  },
  {
    name: "Jest",
    icon: jest,
  },
  {
    name: "React Testing Library",
    icon: reacttestinglibrary,
  },
  //   {
  //     name: "Webpack",
  //     icon: webpack,
  //   },
];

const contacts = [
  {
    title: "+91 8270474125",
    icon: phone,
  },

  {
    title: "riyazofficeid@gmail.com",
    icon: email,
  },

  {
    title: "Coimbatore, TamilNadu",
    icon: address,
  },
];

const experiences = [
  {
    title: "Process Associate",
    company_name: "Bytes 2 Knowledge",
    date: "Aug 2021 - Jul 2022",
  },
  {
    title: "Web Designer",
    company_name: "Designosoft",
    date: "Aug 2022 - Apr 2023",
  },
];

const projects = [
  {
    name: "Recipe App",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
    image: recipeapp,
    source_code_link: "https://github.com/Riyaz-Github-Acc/mern-recipe-app",
    project_link: "https://recipeappmern.netlify.app/",
  },
  {
    name: "Aibnb Clone",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
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
    image: airbnbclone,
    source_code_link: "https://github.com/Riyaz-Github-Acc/next-airbnb",
    project_link: "https://nextjs-rent-app.vercel.app/",
  },
  {
    name: "Hotel Booking App",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
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
    image: hotelbookingapp,
    source_code_link:
      "https://github.com/Riyaz-Github-Acc/ui-mern-bookings-app/",
    project_link: "https://hotelbookingappmern.netlify.app/",
  },
];

export { services, technologies, experiences, projects, contacts };
