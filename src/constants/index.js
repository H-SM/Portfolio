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
    meta,
    starbucks,
    tesla,
    shopify,
    chatify,
    chess,
    shirtcraft,
    facedetection,
    madnessui,
    iNotebook,
    olympic,
    graphpath,
    threejs,
    spotify,
    csi,
    arb,
    linkedin,
    instagram,
    facebook,
    cpp,
    python,
    express,
    vercel,
    vite,
    github,
    discord,
    docker,
    firebase,
    figma,
    postgres,
    aieds,
    dj,
    loop,
    ht,
    next,
    redis,
    gcp,
    prisma,
    excarte,
    utour,
  } from "../assets";
  // Old (pre-2024 version, kept for reference):
  // export const startingFeatures = [
  //   'Eager to contribute in projects & enhance my technical-skills',
  //   'Aim to leverage my problem-solving abilities',
  //   'Passion for designing intuitive user interfaces',
  // ];
  export const startingFeatures = [
    'Shipping production microservices that move real data',
    'Turning gnarly backend problems into clean systems',
    'Building end-to-end, from algorithms to React UI',
  ];
  
  export const socials = [
    {
      name: 'github',
      url: github,
      link: "https://github.com/H-SM",
    },
    {
      name: 'linkedin',
      url: linkedin,
      link: 'https://www.linkedin.com/in/hsmhere',
    },
    {
      name: 'instagram',
      url: instagram,
      link: "https://instagram.com/hsmpaaji?igshid=ZGUzMzM3NWJiOQ==",
    },
    {
      name: 'spotify',
      url: spotify,
      link: 'https://open.spotify.com/user/9m5r99zyz8uow0us14xu2vhg1',
    },
  ];

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
  
  // Old (pre-2024 version, kept for reference):
  // const services = [
  //   {
  //     title: "Full Stack Developer",
  //     icon: web,
  //   },
  //   {
  //     title: "React Developer",
  //     icon: mobile,
  //   },
  //   {
  //     title: "Open Source",
  //     icon: backend,
  //   },
  //   {
  //     title: "Graphic Designer",
  //     icon: creator,
  //   },
  // ];
  const services = [
    {
      title: "Full-Stack Engineer",
      icon: web,
    },
    {
      title: "Backend Engineer",
      icon: mobile,
    },
    {
      title: "Frontend Engineer",
      icon: backend,
    },
    {
      title: "Open Source",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "C++",
      icon: cpp,
    },
    {
      name: "Python",
      icon: python,
    },
    // {
    //   name: "HTML 5",
    //   icon: html,
    // },
    // {
    //   name: "CSS 3",
    //   icon: css,
    // },postgres
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
      name: "Next JS",
      icon: next,
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
      name: "PostgreSQL",
      icon: postgres,
    },
    {
      name: "Prisma",
      icon: prisma,
    },
    {
      name: "Redis",
      icon: redis,
    },
    {
      name: "Git",
      icon: git,
    },
    {
      name: "Express",
      icon: express,
    },
    {
      name: "Vite",
      icon: vite,
    },
    {
      name: "Vercel",
      icon: vercel,
    },
    {
      name: "Firebase",
      icon: firebase
    },
    {
      name: "Docker",
      icon: docker,
    },
    {
      name: "Google Cloud Platform",
      icon: gcp,
    },
    {
      name: "Figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    // {
    //   title: "Design Intern",
    //   company_name: "Apna Roti Bank",
    //   icon: arb,
    //   iconBg: "#E6DEDD",
    //   date: "Jun 2022 - Aug 2022",
    //   points: [
    //     "Executed design strategies and upheld brand coherence across a diverse range of over 15+ projects.",
    //     "Streamlined project timelines for 15+ concurrent projects, optimizing resource allocation.",
    //     "Consistently achieving on-time delivery of deliverables within budget constraints; reduced project delays by 40%.",
    //   ],
    // },
    {
      title: "Software Engineer",
      company_name: "Loop Health (Invoq Health)",
      icon: loop,
      iconBg: "#025F4C",
      date: "Dec 2024 - Present",
      points: [
        "Architected Loop's first communications microservice from scratch, dispatching 1M+ emails and WhatsApp messages in under a minute at peak by streaming job files in 1,000-record batches through parallelised SendGrid and Sinch integrations scheduled on Google Cloud Tasks, with full per-message delivery traceability.",
        "Designed a standalone premium Rater microservice on a JSON rules engine with set operators and pro-rata calculators, scaling pricing rule inputs from 3 attributes to 18 and replacing per-policy hardcoded pricing functions with an operator-driven Excel upload workflow.",
        "Consolidated two drifting copies of member validation logic into a single three-phase (Setup, Validation, Enrichment) Validation Service serving a registration pipeline of 40,000-50,000 records/day, rolled out behind feature flags via an adapter layer that onboarded the legacy pipeline without a rewrite.",
        "Eliminated silent member drop-offs previously caught only through customer escalations by streaming pre- and post-run events into BigQuery across 3 services, adding missed-lives detection queries and the platform's first integration test suite over its most critical registration flow.",
        "Automated insurer endorsement file generation (GMC/GPA formats) behind a factory pattern with operator-editable configuration, cutting hours of manual sheet preparation per endorsement cycle down to near-zero.",
      ],
    },
    {
      title: "Web Developer Intern",
      company_name: "Digital Jalebi",
      icon: dj,
      iconBg: "#212236",
      date: "June 2024 - August 2024",
      points: [
        "Engineered Event Tech project, achieving 40% reduction in database query reads using NextJS, IoT technologies, and database optimization techniques.",
        "Led integration of Local Server, which resulted in 45% improvement in handling load times across offline exhibits.",
        "Developed innovative SaaS applications and experiential exhibits display that enhanced user engagement and 60% improvement in app stability.",
      ],
    },
    {
      title: "Project Intern",
      company_name: "HERE Technology",
      icon: ht,
      iconBg: "#FFFFFF",
      date: "June 2024 - July 2024",
      points: [
        "Reached 90% accuracy in geographic data for end users by implementing advanced web scraping techniques using Scrapy",
        "Worked in a team to scrape data from 8 live sites, enhancing the geographical data pipeline with up-to-date information",
        "Implemented a data scraping framework that automated the collection of location-based information, allowing for an increase in the frequency of data updates by 200%, directly enhancing the quality of mapping services used",
      ],
    },
    {
      title: "Associate Design & VFX Head",
      company_name: "UPES - CSI Student Chapter",
      icon: csi,
      iconBg: "#383E56",
      date: "Sep 2022 - Apr 2024",
      points: [
        "Led a team of 9 designers and visual effects artists, overseeing all aspects of design and VFX over 20+projects.",
        "Implemented design strategies and maintained brand consistency across 20+ projects and increasedbrand awareness by 30%.",
        "Collaborated over 15+ events associated with the community like Hackathon 7.0, Yugmak 2022",
      ],
    }
  ];
  
  // const testimonials = [
  //   {
  //     testimonial:
  //       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
  //     name: "Sara Lee",
  //     designation: "CFO",
  //     company: "Acme Co",
  //     image: "https://randomuser.me/api/portraits/women/4.jpg",
  //   },
  //   {
  //     testimonial:
  //       "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //     name: "Chris Brown",
  //     designation: "COO",
  //     company: "DEF Corp",
  //     image: "https://randomuser.me/api/portraits/men/5.jpg",
  //   },
  //   {
  //     testimonial:
  //       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //     name: "Lisa Wang",
  //     designation: "CTO",
  //     company: "456 Enterprises",
  //     image: "https://randomuser.me/api/portraits/women/6.jpg",
  //   },
  // ];
  
  const projects = [
    {
      name: "Graph Path Guru",
      description:
        "A full-stack MERN app that visualizes 6 shortest-path algorithms step by step on a drag-and-drop editor. The algorithms now run as a Rust WebAssembly module for fast, in-browser execution.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "rust",
          color: "orange-text-gradient",
        },
        {
          name: "webassembly",
          color: "green-text-gradient",
        },
        {
          name: "nodejs",
          color: "pink-text-gradient",
        },
      ],
      image: graphpath,
      source_code_link: "https://github.com/H-SM/GraphPathGuru",
      url_link: "https://graph-path-guru-test.vercel.app/",
      // prod : true
    },
    {
      name: "ExCarte",
      description:
        "A natural-language city discovery app that matches free-text queries like 'cafes with outdoor seating' against 1,500+ curated Bengaluru venues, using a self-hosted LLM for relevance scoring.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "fastapi",
          color: "green-text-gradient",
        },
        {
          name: "llm",
          color: "pink-text-gradient",
        },
        {
          name: "supabase",
          color: "blue-text-gradient",
        },
      ],
      image: excarte,
      source_code_link: "https://github.com/H-SM/ExCarte",
      url_link: "https://ex-carte.vercel.app/",
    },
    {
      name: "U-Tour",
      description:
        "A scheduling gateway for a LIDAR-guided campus tour robot, using Redis-backed queues to serialise bookings, merge overlapping tours, and keep the robot's availability conflict-free.",
      tags: [
        {
          name: "nodejs",
          color: "green-text-gradient",
        },
        {
          name: "redis",
          color: "pink-text-gradient",
        },
        {
          name: "postgresql",
          color: "blue-text-gradient",
        },
        {
          name: "react",
          color: "blue-text-gradient",
        },
      ],
      image: utour,
      source_code_link: "https://github.com/H-SM/U-Tour",
      url_link: "https://utour.vercel.app/",
    },
    {
      name: "AIEDS",
      description:
        "A tool which helps users control their learning process. AIDES harnesses the power of LLMs by providing text summaries and insights on user uploaded content. It also features active revision and quizing which makes learning even more fun and intuitive.",
      tags: [
        {
          name: "Prisma",
          color: "blue-text-gradient",
        },
        {
          name: "Postgresql",
          color: "green-text-gradient",
        },
        {
          name: "React",
          color: "pink-text-gradient",
        },
        {
          name: "Docker",
          color: "blue-text-gradient",
        },
      ],
      image: aieds,
      source_code_link: "https://github.com/sakshamshahu/AIEDS",
      // url_link: "https://chatify-phi.vercel.app/",
      // prod : true
    },
    {
      name: "NoteHaven",
      description:
        "Your notebook on the cloud - taking up our notes which you could access anywhere, anytime, whether you're at home, in the office, or on the go, ensuring seamless productivity. \" Your Idea's Elevated \".",
      tags: [
        {
          name: "mongodb",
          color: "blue-text-gradient",
        },
        {
          name: "react",
          color: "green-text-gradient",
        },
        {
          name: "jwt-token",
          color: "pink-text-gradient",
        },
      ],
      image: iNotebook,

      source_code_link: "https://github.com/H-SM/iNotebook",
      url_link: "https://note-haven-h-sm.vercel.app ",
    },
    // {
    //   name: "Chess",
    //   description:
    //     "This application provides a digital platform to play the classic game of chess online. It features an intuitive user interface, interactive gameplay, and supports standard chess rules and moves.",
    //   tags: [
    //     {
    //       name: "react",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "typescript",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "scss",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image:  chess,
    //   source_code_link: "https://github.com/H-SM/Chess",
    //   url_link: "https://6494f1f87b65d61a2deb525d--funny-marzipan-7f1bb7.netlify.app/",
    // },
    // {
    //   name: "ShirtCraft",
    //   description:
    //     "ShirtCraft is an innovative SaaS project that lets users design their custom t-shirts with a variety of patterns and colors. Import local designs and unleash your creativity! 🎨👕",
    //   tags: [
    //     {
    //       name: "nextjs",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "threejs",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "framer-motion",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image:  shirtcraft,
    //   source_code_link: "https://github.com/H-SM/ShirtCraft",
    //   url_link: "https://shirt-craft.vercel.app/",
    // },
    {
      name: "Deep Face Detection Model",
      description:
        "A Deep Learning verification model designed for robust and precise face recognition. Leveraging advanced convolutional neural networks and feature extraction techniques.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "juypter",
          color: "green-text-gradient",
        },
        {
          name: "kivy",
          color: "pink-text-gradient",
        },
      ],
      image: facedetection,
      source_code_link: "https://github.com/H-SM/deep_face_detection_model",
      url_link: null,
    },
    // {
    //   name: "MetaMadnessUI",
    //   description:
    //     "Metaverse Madness: Step into a boundless realm of virtual wonder with our cutting-edge UI. Embrace limitless possibilities and connect like never before in the ultimate metaverse experience.🪐🪐",
    //   tags: [
    //     {
    //       name: "nextjs",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "framer-motion",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "tailwind",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: madnessui,
    //   source_code_link: "https://github.com/H-SM/MetaMadnessUI/",
    //   url_link: "https://meta-madness-h-sm.vercel.app/",
    // },
    // {
    //   name: "Olympics Tracker",
    //   description:
    //     `A data driven hub for all Olympic 2020 Stats in from of the user. Diverse charts and graphical representation of various nations according to there standing in the Olympics! Submission for 'Geek-o-lypmic 2023'`,
    //   tags: [
    //     {
    //       name: "react",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "chartjs",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "mapbox-gl",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: olympic,
    //   source_code_link: "https://github.com/H-SM/gfgOlympics",
    //   url_link: "https://gfg-olympics.vercel.app/",
    // },
  ];
  
  export { services, technologies, experiences, projects };