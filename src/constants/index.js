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
    carrent,
    jobit,
    tripguide,
    threejs,
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
      title: "Teacher",
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
      icon: starbucks,
      iconBg: "#383E56",
      date: "November 2021 - Now",
      points: [
        "I'm baby whatever sed before they sold out tousled. Adaptogen ut stumptown enim, affogato selvage migas master cleanse fam consectetur PBR&B.",
        "Slow-carb echo park messenger bag, +1 pop-up pour-over hella wolf grailed forage.",
        "VHS squid pickled keffiyeh mustache wayfarers paleo.",
        "Tattooed umami semiotics, copper mug next level helvetica palo santo craft beer paleo gorpcore jianbing in.",
      ],
    },
    {
      title: "Coach",
      company_name: "Kenzie Academy",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "August 2021 - November 2021",
      points: [
        "Culpa meh vinyl, praxis DIY listicle cloud bread tote bag beard twee gatekeep thundercats grailed. ",
        "Beard crucifix hot chicken jawn bespoke dolore viral. Marfa kombucha jianbing listicle neutral milk hotel edison bulb.",
        "Photo booth franzen squid, four dollar toast do 8-bit ad.",
        "Fit gatekeep velit af occupy gochujang hella pork belly roof party unicorn, do etsy asymmetrical venmo cupping. ",
      ],
    },
    {
      title: "FullStack Dev",
      company_name: "Freelance",
      icon: shopify,
      iconBg: "#383E56",
      date: "August 2021 - Now",
      points: [
        "Franzen unicorn cliche pork belly snackwave wayfarers pickled ad gatekeep try-hard four loko.",
        "Food truck chambray +1 umami etsy.",
        "Consequat officia pork belly, nulla swag pop-up tilde live-edge eiusmod kogi copper mug man bun blog subway tile.",
        "Tilde solarpunk ascot pabst, offal migas fit neutra. ",
      ],
    },
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
        "After he optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
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
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/NathanHolt/react-admin",
    },
    {
      name: "Project go here",
      description:
        "Do sartorial fit chambray taxidermy commodo. Truffaut green juice quinoa, microdosing put a bird on it slow-carb id taxidermy waistcoat.",
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
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Project go here",
      description:
        "Sustainable disrupt fugiat minim culpa in chartreuse. Fingerstache etsy lorem, lumbersexual vexillologist lyft officia tofu.",
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
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };