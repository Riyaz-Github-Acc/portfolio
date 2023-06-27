import {
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
  merneshopadmin,
  merneshop,
  merneshopapi,
  phone,
  email,
  address,
  reactcert,
  nodecert,
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

const certificates = [
  {
    name: "React JS Certificate",
    image: reactcert,
    certificate_link:
      "https://res.cloudinary.com/ds60krqho/image/upload/v1687410227/Portfolio/a81lmto75ucsxwuomu3t.jpg",
  },
  {
    name: "Node JS Certificate",
    image: nodecert,
    certificate_link:
      "https://res.cloudinary.com/ds60krqho/image/upload/v1687410227/Portfolio/r72texi2qblzk5yyerpg.jpg",
  },
  // {
  //   name: "UI/UX Design Certificate",
  //   image: nodecert,
  //   certificate_link:
  //     "https://res.cloudinary.com/ds60krqho/image/upload/v1687410227/Portfolio/r72texi2qblzk5yyerpg.jpg",
  // },
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
    title: "Frontend Developer",
    company_name: "Designosoft",
    date: "Aug 2022 - Apr 2023",
  },
];

const projects = [
  {
    name: "MERNeShop Admin",
    description:
      "MERNeShop Admin Dashboard serves as a centralized hub, providing real-time insights and empowering businesses to make informed decisions.",
    tags: [
      {
        name: "React",
        color: "text-blue-500",
      },
      {
        name: "Redux",
        color: "text-purple-500",
      },
      {
        name: "TailwindCSS",
        color: "text-sky-500",
      },
      {
        name: "RestAPI",
        color: "text-rose-500",
      },
    ],
    image: merneshopadmin,
    source_code_link: "https://github.com/Riyaz-Github-Acc/mern-e-shop-admin",
    project_link: "https://merneshop-admin.netlify.app",
  },

  {
    name: "MERNeShop",
    description:
      "The Ecommerce Website let's you discover a wide array of products, effortlessly browse, apply advanced filters, and enjoy a seamless checkout experience. Add items to your cart with ease and complete your purchase securely, all in one place.",
    tags: [
      {
        name: "React",
        color: "text-blue-500",
      },
      {
        name: "Redux",
        color: "text-purple-500",
      },
      {
        name: "TailwindCSS",
        color: "text-sky-500",
      },
      {
        name: "RestAPI",
        color: "text-rose-500",
      },
    ],
    image: merneshop,
    source_code_link: "https://github.com/Riyaz-Github-Acc/mern-e-shop",
    project_link: "https://merneshop.netlify.app/",
  },
  {
    name: "MERNeShop API",
    description:
      "This ECommerce API offers a wide range of endpoints and functionalities to manage products, inventory, orders, customers, payments, and more.",
    tags: [
      {
        name: "MongoDB",
        color: "text-green-500",
      },
      {
        name: "ExpressJS",
        color: "text-gray-400",
      },
      {
        name: "NodeJS",
        color: "text-lime-500",
      },
      {
        name: "Cloudinary",
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
        name: "MongoDB",
        color: "text-green-500",
      },
      {
        name: "ExpressJS",
        color: "text-gray-400",
      },
      {
        name: "React",
        color: "text-blue-500",
      },
      {
        name: "NodeJS",
        color: "text-lime-500",
      },
      {
        name: "CSS",
        color: "text-sky-500",
      },
      {
        name: "Firebase",
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
        name: "NextJS",
        color: "text-white-400",
      },

      {
        name: "React",
        color: "text-blue-500",
      },
      {
        name: "MongoDB",
        color: "text-green-500",
      },
      {
        name: "TailwindCSS",
        color: "text-sky-500",
      },
      {
        name: "Cloudinary",
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
        name: "MongoDB",
        color: "text-green-500",
      },
      {
        name: "ExpressJS",
        color: "text-gray-400",
      },
      {
        name: "React",
        color: "text-blue-500",
      },
      {
        name: "NodeJS",
        color: "text-lime-500",
      },
      {
        name: "SCSS",
        color: "text-sky-500",
      },
      {
        name: "Firebase",
        color: "text-yellow-500",
      },
    ],
    image: hotelbookingapp,
    source_code_link:
      "https://github.com/Riyaz-Github-Acc/ui-mern-bookings-app/",
    project_link: "https://hotelbookingappmern.netlify.app/",
  },

  // {
  //   name: "Admin Dashboard",
  //   description: "Admin Dashboard for the Booking App.",
  //   tags: [
  //     {
  //       name: "MongoDB",
  //       color: "text-green-500",
  //     },
  //     {
  //       name: "ExpressJS",
  //       color: "text-gray-400",
  //     },
  //     {
  //       name: "React",
  //       color: "text-blue-500",
  //     },
  //     {
  //       name: "NodeJS",
  //       color: "text-lime-500",
  //     },
  //     {
  //       name: "SCSS",
  //       color: "text-sky-500",
  //     },
  //     {
  //       name: "Cloudinary",
  //       color: "text-blue-600",
  //     },
  //   ],
  //   image: admindashboardbookingapp,
  //   source_code_link:
  //     "https://github.com/Riyaz-Github-Acc/hotelbookingapp-admindashboard",
  //   project_link: "https://hotelbookingapp-admindashboard.netlify.app/",
  // },

  // {
  //   name: "React Commerce",
  //   description:
  //     "Effortlessly browse, filter, and add products to your cart for seamless checkout on our ecommerce website.",
  //   tags: [
  //     {
  //       name: "React",
  //       color: "text-blue-500",
  //     },
  //     {
  //       name: "Redux",
  //       color: "text-purple-500",
  //     },
  //     {
  //       name: "SCSS",
  //       color: "text-sky-500",
  //     },
  //     {
  //       name: "strapi",
  //       color: "text-blue-700",
  //     },
  //   ],
  //   image: reactcommerce,
  //   source_code_link: "https://github.com/Riyaz-Github-Acc/react-commerce",
  //   project_link: "https://ecommercewebsitereact.netlify.app/",
  // },
];

export {
  services,
  technologies,
  experiences,
  projects,
  contacts,
  certificates,
};
