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
    dash,
    tripguide,
    threejs,
    kenzie,
    nextCar,
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
      title: "Fullstack Web Developer",
      icon: web,
    },
    {
      title: "App Developer",
      icon: mobile,
    },
    {
      title: "AWS & Backend Developer",
      icon: backend,
    },
    {
      title: "Coding Instructor",
      icon: creator,
    },
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
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
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Facilitator",
      company_name: "Kenzie Academy",
      icon: kenzie,
      iconBg: "#383E56",
      date: "November 2021 - Now",
      points: [
        "As a Facilitator I both supported students on an individual and group settings, which included giving lectures",
        "This position requires a high level of skill in communication. I needed to make sure that no matter who I was talking to that they understood what I was saying",
        "A deep knowledge of both Java and AWS was needed, as we were teaching to Amazon standards",
      ],
    },
    {
      title: "Coach",
      company_name: "Kenzie Academy",
      icon: kenzie,
      iconBg: "#E6DEDD",
      date: "August 2021 - November 2021",
      points: [
        "My main responsibility was to tutor and explain programming principles to absolute beginners",
        "Required an in-depth knowledge of both Java fundamentals, as well as AWS",
        "It also needed a high level of problem solving skills to break down whatever problem a student was having"
      ],
    },
    // {
    //   title: "FullStack Dev",
    //   company_name: "Freelance",
    //   icon: shopify,
    //   iconBg: "#383E56",
    //   date: "August 2021 - Now",
    //   points: [
    //     "Franzen unicorn cliche pork belly snackwave wayfarers pickled ad gatekeep try-hard four loko.",
    //     "Food truck chambray +1 umami etsy.",
    //     "Consequat officia pork belly, nulla swag pop-up tilde live-edge eiusmod kogi copper mug man bun blog subway tile.",
    //     "Tilde solarpunk ascot pabst, offal migas fit neutra. ",
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but he proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Very Popular Company",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like he does.",
      name: "Chris Brown",
      designation: "COO",
      company: "Super Cool Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        `Nathan is a creative and outside-the-box thinker who quickly adapts to any environment. His
        ability to assess technical requirements and troubleshoot issues is top-notch. In any team,
        Nathan is the member who can identify gaps and come up with solutions to address them.`,
      name: "Chi Nguyen-Rettig",
      designation: "CTO",
      company: "The Enterprise",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Frontend Admin",
      description:
        "A frontend control website that can be used to monitor a companies statistics and personal.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "formik",
          color: "green-text-gradient",
        },
        {
          name: "mui",
          color: "pink-text-gradient",
        },
      ],
      image: dash,
      source_code_link: "https://github.com/NathanHolt/react-admin",
    },
    {
      name: "Next Cars",
      description:
        "A front end application that uses Next.js serverside rendering. It was built fully using React and Typescript with Tailwind styling.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "nextJS",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: nextCar,
      source_code_link: "https://github.com/NathanHolt/next-car-app",
    },
    {
      name: "AI Application",
      description:
        "This is an ai application that allows you to chat with chatgpt, as well as generate images based off of any prompts you make. You can then store those images for later in mongodb.",
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
          name: "chatgpt",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/NathanHolt/ai-app",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };