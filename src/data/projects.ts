import { IProjectItem, ProjectType, RepoType } from "@/types";

const projects: IProjectItem[] = [
  // {
  //   id: "social-media-app-flutter",
  //   title: "Social Media App",
  //   description:
  //     "A social media mobile application developed using Flutter, GetX, Firebase Notifications and Hive.",
  //   icon: "/skills/flutter.svg",
  //   repoType: RepoType.Public,
  //   projectType: ProjectType.Personal,
  //   githubUrl: "https://github.com/nixrajput/social-media-app-flutter",
  //   url: "https://github.com/nixrajput/social-media-app-flutter/releases",
  //   tags: ["Flutter", "Dart", "GetX", "Hive"],
  // },
  {
    id: "e-commerce-app-mern",
    title: "E-commerce App",
    description:
      "An e-commerce web application developed using React.js, Material UI, Redux, and Stripe.",
    icon: "/skills/react.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/Mstrangerdeveloper/E-COM_SHOP",
    url: "https://github.com/Mstrangerdeveloper/E-COM_SHOP",
    tags: ["React.js", "Redux", "Material UI", "Stripe"],
  },
   {
    id: "solar-app-mern",
    title: "Solar web App",
    description:
      "An solar web application developed using React.js,Chakra  UI, Redux,.",
    icon: "/skills/react.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/Mstrangerdeveloper/solar/tree/main/frontend",
    url: "https://github.com/Mstrangerdeveloper/solar/tree/main/frontend",
    tags: ["React.js", "Redux", "Chakra  UI"],
  },
 
  {
    id: "social-media-api-nodejs",
    title: "Social Media API",
    description:
      "A RESTful API developed using Node.js, Express.js, and MongoDB to integrate backend and frontend with ease.",
    icon: "/skills/nestjs.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/nixrajput/social-media-api-nodejs",
    tags: ["Node.js", "Express.js", "MongoDB", "WebSocket"],
  },
 
  {
    id: "e-commerce-api-nodejs",
    title: "E-commerce API",
    description:
      "A RESTful API developed using Node.js, Express.js, MongoDB, and Stripe to integrate e-commerce backend.",
    icon: "/skills/nodejs.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    // githubUrl: "https://github.com/nixrajput/ecommerce-api-nodejs",
    // tags: ["Node.js", "Express.js", "MongoDB", "Stripe"],
  },


  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description:
      "This repository contains the source code for a portfolio website built using Next.js and Sass.",
    icon: "/skills/nextjs.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    // githubUrl: "https://github.com/nixrajput/portfolio-website",
    // url: "https://nixrajput.dev",
    tags: ["Next.js", "Sass", "Web Development"],
  },

];
export default projects;
