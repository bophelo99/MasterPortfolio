/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Bophilo's Portfolio",
  description: "A passionateb individual",
  og: {
    title: "Bophilo Charles Ntsemi Portfolio",
    type: "website",
    url: "http://bophelo99.github.io/",
  },
};

//Home Page
const greeting = {
  title: "Bophilo Charles Ntsemi",
  logo_name: "BophiloNtsemi",
  nickname: "Life",
  subTitle:
    "I am Bophilo Charles Ntsemi, an engineer and technologist with expertise in electrical maintenance, software development, and data analytics. My experience in power systems, embedded systems, and AI drives my passion for creating efficient and secure technological solutions.",
  resumeLink:
    "https://drive.google.com/file/d/1IbbTsG3aF4f4OVKCAqfutHSGNV3a2uIp/view?usp=sharing",
  portfolio_repository: "https://github.com/bophelo99/MasterPortfolio",
  githubProfile: "https://github.com/bophelo99",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/bophelo99",
  // linkedin: "https://www.linkedin.com/in/charles-ntsemi-5713062b4/",
  // gmail: "ntsemibophilo@gmail.com",
  // facebook: "ttps://www.facebook.com/BopheloNtsemi/",
  // twitter: "https://x.com/Bvby_Lyf",
  // instagram: "https://www.instagram.com/bvby_lyf/"

  {
    name: "Github",
    link: "https://github.com/bophelo99",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/charles-ntsemi-5713062b4/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/@codezero99",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:ntsemibophilo@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "https://x.com/Bvby_Lyf",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },

  {
    name: "Facebook",
    link: "https://www.facebook.com/BopheloNtsemi/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/bvby_lyf/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Analyzing large datasets in a cloud computing environment",
        "⚡ Experience with cloud computing platforms such as IBM, enabling scalable data storage and processing.",
        "⚡ Expertise in working with SQL databases (e.g., MySQL, MongoDB, PostgreSQL) essential for cloud-based applications",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Linux (Ubuntu)",
          fontAwesomeClassname: "simple-icons:ubuntu",
          style: {
            backgroundColor: "transparent",
            color: "#e95420",
          },
        },
        {
          skillName: "Numpy",
          fontAwesomeClassname: "simple-icons:numpy",
          style: {
            backgroundColor: "transparent",
            color: "#91ac40",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            backgroundColor: "transparent",
            color: "#bf7e3e",
          },
        },
        {
          skillName: "Powershell",
          fontAwesomeClassname: "simple-icons:powershell",
          style: {
            backgroundColor: "transparent",
            color: "#bf583e",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Programming Languages and Frameworks: Building responsive website front end using React-Redux",
        "⚡ Developing mobile applications using Flutter, React Native, and node.js",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "Flask",
          fontAwesomeClassname: "simple-icons:flask",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "Vue",
          fontAwesomeClassname: "simple-icons:vuedotjs",
          style: {
            color: "#91ac40",
          },
        },
        {
          skillName: "Angular",
          fontAwesomeClassname: "simple-icons:angular",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Knowledge of working on IBM cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying models on cloud to use on mobile devices",
      ],
      softwareSkills: [
        {
          skillName: "IBM",
          fontAwesomeClassname: "simple-icons:ibm",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
      ],
    },
    {
      title: "PLC Programming",
      fileName: "DesignImg",
      skills: [
        "⚡ Writing and debugging code for control systems using Arduino IDE and integrating sensors, actuators, and communication modules",
        "⚡ Implementing and testing projects involving Arduino microcontroller for real-time monitoring and control tasks.",
        "⚡ Designing and calibrating microcontroller enabled systems to measure electrical, mechanical, or environmental parameters.",
      ],
      softwareSkills: [
        {
          skillName: "Arduino",
          fontAwesomeClassname: "simple-icons:arduino",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Assemby",
          fontAwesomeClassname: "simple-icons:geopandas",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#FF7C00",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/profile/ntsemibophilo",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/bophilo28",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "University of the Witwatersrand, Johannesburg",
      subtitle: "BSc in Electrical Engineering - NQF level 8",
      logo_path: "WitsLogo.png",
      alt_name: "WITS",
      duration: "incomplete (Final-Year)",
      descriptions: [
        "⚡ I have studied basic software engineering subjects that focus on Data Structures, Algorithms, Data Base Management Structures.",
        "⚡ Apart from this, I have done courses that focus on  Cloud Computing in Data Science, Full Stack Development, High Voltage Engineering, Power Systems, Signals and Measurement Systems (Instrumentation), and Engineering Design, research and Prototyping",
        "⚡ I have also participated in Mentorship Program to mentor and tutor first year students in the field of Engineering",
      ],
      website_link: "https://www.wits.ac.za/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "IBM Full Stack Software Developer Career Path",
      subtitle: "IBM",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://coursera.org/share/1257280da8a6a66627ef29ac57b584fd",
      alt_name: "Coursera",
      color_code: "#800080",
    },
    {
      title: "Mentorship Development",
      subtitle: "Witwatersrand University",
      logo_path: "WitsLogo.png",
      certificate_link:
        "https://drive.google.com/file/d/1Gmfx0kAnwPQYrPqJ-f9jlE1aSKQJQvAn/view?usp=sharing",
      alt_name: "WITS",
      color_code: "#FFDB58",
    },
    {
      title: "Digital Manufacturing & Design Technology",
      subtitle: "The State University of New York & University at Buffalo",
      logo_path: "bufallo.png",
      certificate_link:
        "https://coursera.org/share/758db2a87c6768b6a39abfa8c077abea",
      alt_name: "Coursera",
      color_code: "#DCDCDC",
    },
    {
      title: "AI Argumented Professional Developemnt Skills",
      subtitle: "ALX Academy",
      logo_path: "alx.jpg",
      certificate_link:
        "https://drive.google.com/file/d/16H-T0WN2AVSkl41QqBcLdgBtYbnxJytG/view?usp=sharing",
      alt_name: "ALX",
      color_code: "#2A73CC",
    },
    {
      title: "Research & Innovation",
      subtitle: "University of Cape Town",
      logo_path: "uct.png",
      certificate_link:
        "https://coursera.org/share/c9c96c74f63490b2eb8c597794ef4d21",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Developing Back-End Apps with Node.js and Express",
      subtitle: "IBM",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://coursera.org/share/987d14c9de3a557772a16b1e1cd74041",
      alt_name: "Coursera",
      color_code: "#800080",
    },
    {
      title: "Django Application Development with SQL and Databases",
      subtitle: "IBM",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://coursera.org/share/069696f4c4cbb78e2c12acb663c4a1ee",
      alt_name: "Coursera",
      color_code: "#800080",
    },
    {
      title: "Developing Front-End Apps with React",
      subtitle: "IBM",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://coursera.org/share/9407808e68f715edefd1f75a187466cc",
      alt_name: "Coursera",
      color_code: "#800080",
    },
    {
      title: "Developing AI Applications with Python and Flask",
      subtitle: "IBM",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://coursera.org/share/f22fad186d53cd8dd4b32587ed811cfe",
      alt_name: "Coursera",
      color_code: "#800080",
    },
    {
      title: "Technical Support Fundamentals",
      subtitle: "Google",
      logo_path: "google_logo.png",
      certificate_link:
        "https://coursera.org/share/09c915fe90bf941f3f1fb1c268f79aa5",
      alt_name: "Coursera",
      color_code: "#DCDCDC",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description: "",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Junior Engineering Technician - Part Time",
          company: "CZ Electronics (Pty) Ltd - Manufacturing",
          company_url: "https://czelectronics.co.za/",
          logo_path: "cz.jpg",
          duration: "October 2019 - March 2020",
          location: "Boksburg, Gauteng",
          description:
            "At CZ Electronics (Pty) Ltd, I worked as an Engineering Technician, assisting senior engineers and technicians in electronics manufacturing, testing, and troubleshooting." +
            " I supported diagnostics, PCB circuit analysis, soldering, and component replacement for DSTV decoders and smart TVs. Additionally, I helped configure manufacturing softwares," +
            " maintain production records, and implement process optimizations. This experience enhanced my hardware testing, quality assurance, and problem-solving skills in a fast-paced production environment.",
          color: "#000000",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Junior Electrical Engineer (Summer Internship)",
          company: "Hlogirati (Pty) Ltd - Consulting & Training Services",
          company_url: "https://za.linkedin.com/company/hlogirati",
          logo_path: "hlogirati.jpg",
          duration: "Nov 2022 - Feb 2023",
          location: "Phalaborwa, Limpopo",
          description:
            "At Hlogirati Consulting (Pty) Ltd, I worked as an Electrical Engineer intern. I have assisted  senior engineer in transformer design, three-phase network analysis, " +
            "and fault level calculations for residential power projects. I gained experience in industrial motor installations, switchgear systems, and remote-control programming." +
            " My role also involved risk assessment, and compliance reporting, ensuring workplace safety and efficiency. Additionally, I conducted technical research on power systems " +
            "and prepared reports to support engineering solutions. This experience strengthened my electrical design, troubleshooting, and project management skills.",
          color: "#000000",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Microsoft Student Partner",
          company: "Microsoft",
          company_url: "https://www.microsoft.com/",
          logo_path: "microsoft_logo.png",
          duration: "Current",
          location: "",
          description:
            "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups." +
            " Under this program, I participates on workshops and seminars that teach Cloud Computing concepts to students.",
          color: "#D83B01",
        },
        {
          title: "Building Maintenance,",
          company: "Department of Public Works, Road and Transport",
          company_url: "http://dpwrt.mpg.gov.za/gert-sibande-district/",
          logo_path: "dpwrt.png",
          duration: "June 2024 - Nov 2024",
          location: "Ermelo, Mpumalanga",
          description:
            "At the Department of Public Works, Road and Transport, I worked as an Experience Learner in Building Maintenance, assisting with electrical system inspections," +
            " maintenance, and repairs for generators and HVAC systems. My role included troubleshooting HVAC equipment, performing minor plumbing repairs, wiring connections," +
            " and ensuring site maintenance. I also contributed to safety compliance, material handling, and general labor tasks. This experience enhanced my technical skills in" +
            " electrical maintenance, HVAC systems, and workplace safety procedures.",
          color: "#000000",
        },
        {
          title: "WITS First-Year Student Mentor and Tutor",
          company: "Witwatersrand University",
          company_url: "https://www.wits.ac.za/",
          logo_path: "WitsLogo.png",
          duration: "Feb 2021 - Nov 2021",
          location: "Braamfontein, Johannesburg",
          description:
            "First Year Mentorship program is a program for university senior students to develop Leadership, mentorship and tutoring skills and experience." +
            " Under this program, I provided tutoring and mentoring sessions to first year student on a weekl basis",
          color: "#FFDB58",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    /*{
        id: "neuro-symbolic-sudoku-solver",
        name: "Neuro-Symbolic Sudoku Solver",
        createdAt: "2023-07-02T00:00:00Z",
        description: "Paper published in KDD KiML 2023",
        url: "https://arxiv.org/abs/2307.00653",
      },
      {
        id: "mdp-diffusion",
        name: "MDP-Diffusion",
        createdAt: "2023-09-19T00:00:00Z",
        description: "Blog published in Paperspace",
        url: "https://blog.paperspace.com/mdp-diffusion/",
      },
      {
        id: "consistency-models",
        name: "Consistency Models",
        createdAt: "2023-10-12T00:00:00Z",
        description: "Blog published in Paperspace",
        url: "https://blog.paperspace.com/consistency-models/",
      },*/
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "profile.jpeg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with AI, React, Android, Webpage, back/front-end, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Vorna Valley, Midrand, Gauteng, SA 1686",
    locality: "Vorna Valley",
    country: "SA",
    region: "Midrand",
    postalCode: "1686",
    streetAddress: "&1 Jami Uys STr",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/R9B61iV6YXFTwHjR6",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
