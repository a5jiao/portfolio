import {
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    java,
    python,
    cplusplus,
    cee,
    robo,
    stockify_thumb,
    shopping,
    uw,
    ryuko,
    gao,
    black,
    tensorflow,
    threejs,
    typescript
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "projects",
      title: "Projects",
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
  
  
  const technologies = [
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Java",
      icon: java,
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
      name: "C++",
      icon: cplusplus,
    },
    {
      name: "C",
      icon: cee,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Three.js",
      icon: threejs,
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
      name: "git",
      icon: git,
    },
    {
      name: "TensorFlow",
      icon: tensorflow,
    },
  ];
  
  const experiences = [
    {
      title: "Computer Science & Finance Student",
      company_name: "University of Waterloo",
      icon: uw,
      iconBg: "#d4d4d4",
      date: "Sept 2023 - Present",
      points: [
        "Current 1B Student, Candidate for Bachelors of Computing and Financial Management, open to working Summer 2024 internships.",
        "Awards: President’s Scholarship of Distinction, Computing and Financial Management Entrance Scholarship.",
        "Won first place in 2023 CFM Portfolio Investment contest, generating a historical record best risk-adverse portfolio.",
        "Relevant Courses: Tools and Techniques for Software Development, Algorithm Design and Data Abstraction, Financial Accounting, Financial Markets & Data Analytics, Designing Functional Programs.",
      ],
    },
    {
      title: "Junior Trainer & Busser",
      company_name: "Ryuko Inc.",
      icon: ryuko,
      iconBg: "#FFFFFF",
      date: "June 2022 - June 2023",
      points: [
        "Effectively trained and onboarded new hires, resulting in a 20% increase in overall service and onboarding efficiency.",
        "Demonstrated exceptional time management and task prioritization while overseeing FOH resulting in a 30% reduction in guest wait times.",
        "Maintained strict customer service standards, earning strong recognition from management and customers for creating an elevated dining experience.",
      ],
    },
    {
      title: "Assistant Coach",
      company_name: "Gao-Badminton Tao",
      icon: gao,
      iconBg: "#3274ba",
      date: "May 2021 - Sept 2021",
      points: [
        "Created custom training plans tailored to the skill levels of each trainee, resulting in a measurable increase in both training and performance efficiency.",
        "Worked with trainees of all age and skill levels, honing coaching strategies and understanding across various trainee demographics.",
      ],
    },
  ];
  
  
  const projects = [
    {
      name: "stockify",
      description:
        "A stock market predictor using advanced machine learning techniques! Focused on building a robust model capable of predicting the future stock prices of any stock, leveraging the power of Long Short-Term Memory (LSTM) neural networks through Keras/TensorFlow.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "LSTM",
          color: "green-text-gradient",
        },
        {
          name: "TensorFlow",
          color: "pink-text-gradient",
        },
        {
          name: "Machine Learning",
          color: "orange-text-gradient",
        },
      ],
      image: stockify_thumb,
      source_code_link: "https://github.com/a5jiao/stockify",
    },
    {
      name: "roboadvisor",
      description:
        "Python-based program which consumes a CSV file list of stock tickers, outputting an optimized stock portfolio for Risk-Adverse investors using a multitude of statisical and analytical approaches: Monte Carlo, Beta analysis, and SLSQP. Implemented use of many Python libraries such as Pandas, Numpy, Matplotlib, Yahoo Finance, Multi-threading, and SciPy.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "fintech",
          color: "green-text-gradient",
        },
        {
          name: "pandas",
          color: "pink-text-gradient",
        },
        {
          name: "numpy",
          color: "orange-text-gradient",
        },
      ],
      image: robo,
      source_code_link: "https://github.com/a5jiao/roboadvisor",
    },
    {
      name: "multishop",
      description:
        "Java-based program which runs on the foundation of Object-Oriented Programming. Runs solely within any integrated development environment, prioritizing output cleanliness and user friendliness. Implements adept utilizations of data processing and data storage which allows for a flawless interactive user experience. Made with the inspiration to help those who struggle with shopping anxiety or memory loss.",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "OOP",
          color: "green-text-gradient",
        },
        {
          name: "data-management",
          color: "pink-text-gradient",
        },
      ],
      image: shopping,
      source_code_link: "https://github.com/a5jiao/multishop",
    },
    {
      name: "Coming Soon",
      description:
        "Work in progress!",
      tags: [
        
      ],
      image: black,
      source_code_link: "https://github.com/a5jiao/",
    },
  ];
  
  export { technologies, experiences, projects };