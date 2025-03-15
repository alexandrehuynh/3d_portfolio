import { bitebyte_logo, kateeva, coding_temple, offtheweights_logo } from "../assets/images";
import {
    offtheweights,
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
    bitebyte,
    react,
    redux,
    sass,
    avatar,
    summiz,
    pokemon,
    trainer,
    handstand,
    tailwindcss,
    charmander,
    typescript
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
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
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
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
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
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
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
    }
];

export const experiences = [
    {
        title: "Software Developer",
        company_name: "Co.Lab",
        icon: bitebyte_logo,
        iconBg: "#E6EFED",
        date: "March 2024 - June 2024",
        points: [
            "Spearheaded development as Lead Developer of BiteByte, an AI-powered nutrition tracking app that received highest ratings in Co.Lab bootcamp.",
            "Engineered AI image recognition with 90%+ nutritional analysis accuracy through Google Cloud Vision and Edamam APIs integration.",
            "Designed scalable backend architecture integrating multiple AI services with Firebase real-time database.",
            "Built cross-device camera functionality using MediaDevices API, enabling seamless photo uploads for AI analysis.",
        ],
    },
    {
        title: "Software Developer",
        company_name: "Coding Temple",
        icon: coding_temple,
        iconBg: "#000000",
        date: "January 2024 - March 2024",
        points: [
            "Developed full-stack web applications using Python, Flask, and React with RESTful APIs and SQL integration in a 600-hour bootcamp.",
            "Architected responsive web interfaces with React components and state management for dynamic single-page applications.",
            "Applied OOP principles to build scalable Python applications with advanced data structures and algorithms.",
            "Utilized Git for version control and collaborative development across multiple team projects.",
        ],
    },
    {
        title: "Fitness Coach",
        company_name: "Multiple Premium Fitness Facilities",
        icon: offtheweights_logo,
        iconBg: "#002147",
        date: "March 2020 - Present",
        points: [
            "Trained athletes from youth to professional levels, contributing to NBA, G-League placements, and collegiate scholarships.",
            "Implemented performance tracking systems resulting in 6% average body fat loss and 25% strength increases across clients.",
            "Achieved 95% client retention rate through personalized training programs and evidence-based coaching methods.",
            "Coached 75-85 client sessions monthly with customized workout plans and nutrition guidance.",
        ],
    },
    {
        title: "Software Test Automation Engineer",
        company_name: "Kateeva",
        icon: kateeva,
        iconBg: "#fbc3bc",
        date: "August 2017 - February 2020",
        points: [
            "Developed automated testing suite for five industrial printer systems, reducing testing time from 1 week to 8 hours.",
            "Engineered comprehensive regression testing framework improving test coverage by 30% while reducing testing time by 65%.",
            "Partnered with cross-functional teams to define requirements and execute system, unit, and acceptance tests.",
            "Automated critical workflows contributing to 10+ major releases and 50+ patches, reducing production issues by 15%.",
            "Created standardized test protocols ensuring repeatable and reliable quality assurance processes.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/alexandrehuynh',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/alexvahuynh/',
    }
];

export const projects = [
    {
        iconUrl: trainer,
        theme: 'btn-back-orange',
        name: 'Trainers Memory',
        description: 'An AI-powered fitness intelligence layer that gives any fitness platform the ability to understand, analyze, and derive insights from client workout data. Our API lets fitness companies add personalized AI coaching capabilities to their existing apps without the massive investment in AI infrastructure and expertise.',
        link: 'https://github.com/alexandrehuynh/trainers-memory/',
    },
    {
        iconUrl: handstand,
        theme: 'btn-back-blue',
        name: 'EyeSpy',
        description: 'Designed to process videos of human movement, extract pose landmarks using Mediapipe, and return detailed feedback and metrics. This API will allow fitness companies to integrate pose analysis into their applications by uploading videos or streaming live data, without requiring extensive backend expertise.',
        link: 'https://github.com/alexandrehuynh/eyespy_api/',
    },
    {
        iconUrl: bitebyte,
        theme: 'btn-back-green',
        name: 'BiteByte',
        description: 'Developed a progressive web application that allows users to get a macro-nutrient breakdown of their meal by uploading or capturing an image of their meal.',
        link: 'https://bitebyte.onrender.com/',
    },
    {
        iconUrl: pokemon,
        theme: 'btn-back-red',
        name: 'Pokemon Capture',
        description: 'Developed a web application that allows users to capture Pokemon and train them to battle against other users.',
        link: 'https://pokemon-battle-abc62.web.app/',
    },
    {
        iconUrl: offtheweights,
        theme: 'btn-back-yellow',
        name: 'OFFTHEWEIGHTS',
        description: 'Designed a website for my fitness brand, offtheweights, to help clients achieve their fitness goals.',
        link: 'https://www.offtheweights.com/',
    },
    {
        iconUrl: avatar,
        theme: 'btn-back-pink',
        name: 'Avatar RPG Charcter Creation',
        description: 'Built a RPG chracter selection screen that allows users to build their own character.',
        link: 'https://typescript-rpg.onrender.com/',
    },
    // {
    //     iconUrl: estate,
    //     theme: 'btn-back-black',
    //     name: 'Real-Estate Application',
    //     description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
    //     link: 'https://github.com/adrianhajdin/projects_realestate',
    // },
    // {
    //     iconUrl: summiz,
    //     theme: 'btn-back-yellow',
    //     name: 'AI Summarizer Application',
    //     description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
    //     link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    // }
];