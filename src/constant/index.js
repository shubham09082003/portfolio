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
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    event,
    threejs,
    aktu,
    wheather,
    password,
    spotifyClone,
    blog,
    chess,
    roomDesign
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
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Gamer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "MERN Stack Developer",
      company_name: "ABESIT ",
      icon:"",
      iconBg: "#383E56",
      date: "July 2024 - August 2024",
      points: [
        "Developing and maintaining web applications using MERN Stack and other related technologies.",
        "Collaborating with cross-functional teams of developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Room Design",
      description:
        "Built an interactive room design tool to visualize and customize interior layouts.Developed using Nextjs, NodeJs, Drizzle-Orm, Clerk authentication, TailwindCss .Implemented dynamic rendering for real-time design updates. Optimized performance for smooth user experience",
      tags: [
        {
          name: "NodeJs",
          color: "blue-text-gradient",
        },
        {
          name: "NextJs",
          color: "green-text-gradient",
        },
        {
          name: "TailwindCSS",
          color: "blue-text-gradient",
        },
      ],
      image: roomDesign,
      source_code_link: "https://room-design-dusky.vercel.app/",
    },
    {
      name: "Chess Game",
      description:
        "Built a chess game using React and Websocket. It is a multiplayer game where legal move validation and interactive UI",
      tags: [
        {
          name: "TypeScript",
          color: "blue-text-gradient",
        },
        {
          name: "ReactJs",
          color: "green-text-gradient",
        },
        {
          name: "WebSockets",
          color: "blue-text-gradient",
        },
      ],
      image: chess,
      source_code_link: "https://github.com/shubham09082003/chess",
    },
    {
      name: "Blog-Website",
      description:
        "Built a responsive blogging platform inspired by Medium, designed for content creators and readers to share and explore articles",
      tags: [
        {
          name: "TypeScript",
          color: "blue-text-gradient",
        },
        {
          name: "ReactJs",
          color: "green-text-gradient",
        },
        {
          name: "Serverless-Backends",
          color: "blue-text-gradient",
        },
      ],
      image: blog,
      source_code_link: "https://github.com/shubham09082003/blog",
    },
    {
      name: "Spotify-Clone",
      description:
        "Developed a spotify clone app using react and tailwind and also use react libraries",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind",
          color: "green-text-gradient",
        },
      ],
      image: spotifyClone,
      source_code_link: "https://github.com/shubham09082003/Spotify-clone",
    },
    {
      name: "Event Management Website",
      description:
        "Web-based platform that allows users to create event , show the latest event that are on going.",
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
          name: "nodejs",
          color: "blue-text-gradient",
        },
        {
            name: "express",
            color: "blue-text-gradient",
        },
      ],
      image: event,
      source_code_link: "https://github.com/",
    },
    {
      name: "AKTU Notes Website",
      description:
        "Web-based platform that allows users to search notes of categorised subject that they want.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
      ],
      image: aktu,
      source_code_link: "https://github.com/shubham09082003/Aktu-Notes",
    },
    {
      name: "WheatherApp",
      description:
        "Web application that enables users to see the weather of their current location and the location that you want to see.",
      tags: [
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "Api",
          color: "green-text-gradient",
        },
        {
          name: "HTML",
          color: "pink-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: wheather,
      source_code_link: "https://github.com/shubham09082003/Wheather-App",
    }
  ];
  
  export { services, technologies, experiences, testimonials, projects };