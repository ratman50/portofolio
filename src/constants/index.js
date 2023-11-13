import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
     nestjs,
     car,
     contact,
     css,
     estate,
     express,
     git,
     github,
     html,
     javascript,
     linkedin,
     mongodb,
     motion,
     mui,
     nextjs,
     nodejs,
     pricewise,
     react,
     redux,
     sass,
     snapgram,
     summiz,
     tailwindcss,
     threads,
     typescript,
     laravel,
     php,
     postgresql,
     angular,
     c,
     mysql,
     sonatelAcademy,
} from "../assets/icons";

export const skills = [
     {
          imageUrl: css,
          name: "CSS",
          type: "Frontend",
     },
     {
          imageUrl: express,
          name: "Express",
          type: "Backend",
     },
     {
          imageUrl: git,
          name: "Git",
          type: "Version Control",
     },
     {
          imageUrl: github,
          name: "GitHub",
          type: "Version Control",
     },
     {
          imageUrl: nestjs,
          name: "nestjs",
          type: "backend",
     },
     {
          imageUrl: html,
          name: "HTML",
          type: "Frontend",
     },
     ,
     {
          imageUrl: php,
          name: "php",
          type: "SGBD",
     },
     ,
     {
          imageUrl: angular,
          name: "angular",
          type: "Frontend",
     },
     ,
     {
          imageUrl: c,
          name: "C",
          type: "All",
     },
     ,
     {
          imageUrl: mysql,
          name: "mysql",
          type: "SGBD",
     },
     {
          imageUrl: postgresql,
          name: "postgresql",
          type: "SGBD",
     },
     {
          imageUrl: javascript,
          name: "JavaScript",
          type: "Frontend",
     },
     {
          imageUrl: mongodb,
          name: "MongoDB",
          type: "Database",
     },

     {
          imageUrl: mui,
          name: "Material-UI",
          type: "Frontend",
     },

     {
          imageUrl: nodejs,
          name: "Node.js",
          type: "Backend",
     },
     {
          imageUrl: react,
          name: "React",
          type: "Frontend",
     },

     {
          imageUrl: sass,
          name: "Sass",
          type: "Frontend",
     },
     {
          imageUrl: laravel,
          name: "Laravel",
          type: "back-end",
     },
     {
          imageUrl: tailwindcss,
          name: "Tailwind CSS",
          type: "Frontend",
     },
     {
          imageUrl: typescript,
          name: "TypeScript",
          type: "Frontend",
     },
];

export const experiences = [
     {
          title: "full-stack Developer",
          company_name: "Starbucks",
          icon: sonatelAcademy,
          iconBg: "#accbe1",
          date: "January 2023 - November 2023",
          points: [
               "Developing and maintaining web applications using js, Angular.js, php, Laravel,mysql and other related technologies.",
               "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
               "Implementing responsive design and ensuring cross-browser compatibility.",
               "Participating in code reviews and providing constructive feedback to other developers.",
          ],
     },
   
   
    
];

export const socialLinks = [
     {
          name: "Contact",
          iconUrl: contact,
          link: "/contact",
     },
     {
          name: "GitHub",
          iconUrl: github,
          link: "https://github.com/YourGitHubUsername",
     },
     {
          name: "LinkedIn",
          iconUrl: linkedin,
          link: "https://www.linkedin.com/in/YourLinkedInUsername",
     },
];

export const projects = [
     {
          iconUrl: pricewise,
          theme: "btn-back-red",
          name: "ContentHub",
          description:
               "Publication of articles, news, and other written content, with the ability to edit and delete posts, reader comments on each publication, an administration interface to manage content and comments, and email notifications for new comments.",
          link: "https://github.com/ratman50/express_mongo_typeScript",
     },
     {
          iconUrl: threads,
          theme: "btn-back-green",
          name: "Management of  courses and sessions.",
          description:
               "A secure and robust course management system built with Laravel, Angular, and Tailwind CSS. It features authentication, role-based access control, CRUD operations for courses, session scheduling, room availability management, attendance tracking, and notifications.",
          link: "https://github.com/ratman50/Gestion-P-dagogique",
     },
     {
          iconUrl: car,
          theme: "btn-back-blue",
          name: "Bookioc",
          description: "A user-friendly online hotel reservation platform that offers seamless booking experiences. It provides a wide selection of hotels, and with the inclusion of search filters, users can easily refine their search based on preferences such as location, price range, amenities, and more. This platform ensures convenience and customization, allowing users to find the perfect hotel for their needs and make hassle-free reservations.",

          link: "https://github.com/ratman50/booki",
     },
     {
          iconUrl: snapgram,
          theme: "btn-back-pink",
          name: "DigitalMart",
          description:
               "Contributed to the development of a digital article ordering platform. Implemented a stock management system to check article availability. Created a process to connect with other branches or partners to sell out-of-stock items. Developed features for adding articles with all necessary information. Utilized Laravel, Angular, and Tailwind CSS to create a user-friendly interface.",
          link: "https://github.com/ratman50/couture",
     },
     {
          iconUrl: estate,
          theme: "btn-back-black",
          name: "PedogoPro",
          description:
               "I took on a project that I had previously developed with PHP and re-implemented it using NestJS to further enhance my skills.",
          link: "https://github.com/ratman50/peda-with-nest",
     },
     {
          iconUrl: summiz,
          theme: "btn-back-yellow",
          name: "Calculator",
          description:
               "Toggle between dark mode and light mode, calculation history, and performing basic and advanced operation.",
          link: "https://github.com/ratman50/calculator-with-js",
     },
];
