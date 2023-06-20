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
  admindashboardbookingapp,
  reactcommerce,
  merneshopapi,
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
    name: "MERNeShop API",
    description:
      "“MERNeShop API” is a powerful and versatile application programming interface (API) designed to revolutionize the way you handle online selling and shopping.",
    tags: [
      {
        name: "mongodb",
        color: "text-green-500",
      },
      {
        name: "expressjs",
        color: "text-gray-400",
      },
      {
        name: "nodejs",
        color: "text-lime-500",
      },
      {
        name: "cloudinary",
        color: "text-blue-600",
      },
    ],
    image: merneshopapi,
    source_code_link: "https://github.com/Riyaz-Github-Acc/mern-e-shop-api",
    project_link: "https://mern-e-shop-api.onrender.com/",
  },

  {
    name: "Recipe App",
    description:
      "The recipe app lets users post, save, and delete recipes, building their own collection. Discover new recipes from others and enjoy a seamless cooking experience with this user-friendly app.",
    tags: [
      {
        name: "mongodb",
        color: "text-green-500",
      },
      {
        name: "expressjs",
        color: "text-gray-400",
      },
      {
        name: "react",
        color: "text-blue-500",
      },
      {
        name: "nodejs",
        color: "text-lime-500",
      },
      {
        name: "css",
        color: "text-sky-500",
      },
      {
        name: "firebase",
        color: "text-yellow-500",
      },
    ],
    image: recipeapp,
    source_code_link: "https://github.com/Riyaz-Github-Acc/mern-recipe-app",
    project_link: "https://recipeappmern.netlify.app/",
  },
  {
    name: "Aibnb Clone",
    description:
      "The Airbnb clone is a global platform for finding and booking accommodations. Explore a wide range of listings based on location, amenities, and pricing to easily book your preferred property.",
    tags: [
      {
        name: "nextjs",
        color: "text-white-400",
      },

      {
        name: "react",
        color: "text-blue-500",
      },
      {
        name: "mongodb",
        color: "text-green-500",
      },
      {
        name: "tailwindcss",
        color: "text-sky-500",
      },
      {
        name: "cloudinary",
        color: "text-blue-600",
      },
    ],
    image: airbnbclone,
    source_code_link: "https://github.com/Riyaz-Github-Acc/next-airbnb",
    project_link: "https://nextjs-rent-app.vercel.app/",
  },
  {
    name: "Hotel Booking App",
    description:
      "The hotel booking app offers a users to search and book hotels globally. With a vast selection of accommodations, users can easily find their desired hotel based on location, dates, and preferences.",
    tags: [
      {
        name: "mongodb",
        color: "text-green-500",
      },
      {
        name: "expressjs",
        color: "text-gray-400",
      },
      {
        name: "react",
        color: "text-blue-500",
      },
      {
        name: "nodejs",
        color: "text-lime-500",
      },
      {
        name: "scss",
        color: "text-sky-500",
      },
      {
        name: "firebase",
        color: "text-yellow-500",
      },
    ],
    image: hotelbookingapp,
    source_code_link:
      "https://github.com/Riyaz-Github-Acc/ui-mern-bookings-app/",
    project_link: "https://hotelbookingappmern.netlify.app/",
  },

  {
    name: "Admin Dashboard",
    description: "Admin Dashboard for the Booking App.",
    tags: [
      {
        name: "mongodb",
        color: "text-green-500",
      },
      {
        name: "expressjs",
        color: "text-gray-400",
      },
      {
        name: "react",
        color: "text-blue-500",
      },
      {
        name: "nodejs",
        color: "text-lime-500",
      },
      {
        name: "scss",
        color: "text-sky-500",
      },
      {
        name: "cloudinary",
        color: "text-blue-600",
      },
    ],
    image: admindashboardbookingapp,
    source_code_link:
      "https://github.com/Riyaz-Github-Acc/hotelbookingapp-admindashboard",
    project_link: "https://hotelbookingapp-admindashboard.netlify.app/",
  },

  {
    name: "React Commerce",
    description:
      "Effortlessly browse, filter, and add products to your cart for seamless checkout on our ecommerce website.",
    tags: [
      {
        name: "react",
        color: "text-blue-500",
      },
      {
        name: "redux",
        color: "text-purple-500",
      },
      {
        name: "scss",
        color: "text-sky-500",
      },
      {
        name: "strapi",
        color: "text-blue-700",
      },
    ],
    image: reactcommerce,
    source_code_link: "https://github.com/Riyaz-Github-Acc/react-commerce",
    project_link: "https://ecommercewebsitereact.netlify.app/",
  },
];

export { services, technologies, experiences, projects, contacts };
