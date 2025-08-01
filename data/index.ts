export const navItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const listStack = {
    left: [
      { name: "ReactJS", icon: "/re.svg" },
      { name: "NextJS", icon: "/next.svg" },
      { name: "TypeScript", icon: "/ts.svg" },
    ],
    right: [
      { name: "ExpressJS", icon: "/express.svg" },
      { name: "Tailwind", icon: "/tail.svg" },
      { name: "VueJS", icon: "/vue.svg" },
    ],
  };

export const gridItems = [
  {
    id: 1,
    title: "",
    description: "I am a Physics graduate from Institut Teknologi Bandung, specializing in Computational Photonic Physics. I'm passionate creating friendly user interfaces and efficient user experiences. I specialize in building responsive and visually appealing websites that provide a seamless user experience. I'm always learning to improve my skills in both frontend and backend technologies.",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full opacity-30",
    titleClassName: "justify-end text-justify",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 3,
    title: "My Tech Stack",
    description: "I always improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently working on Software Development",
    description: "",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-auto w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center w-64",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Acara - Manage your Events",
    des: "A Platform to create and manage all of your Events. Fullstack project with MERN stack",
    img: "/project1.png",
    iconLists: ["/mongo.svg", "/express.svg", "/next.svg", "/tail.svg", "/ts.svg"],
    link: "https://front-end-acara-beta.vercel.app/",
  },
  {
    id: 2,
    title: "Digiagency - Creative Digital Agency",
    des: "Creative Digital Agency for Digital Business Services",
    img: "/project2.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/fm.svg"],
    link: "https://digiagency.vercel.app",
  },
  {
    id: 3,
    title: "AQodS Course - Learning Application",
    des: "Platform for learning new skills in infomation technology.",
    img: "/project3.png",
    iconLists: ["/re.svg", "/js.svg", "/bootstrap.svg", "/fm.svg"],
    link: "https://aqods-course.vercel.app",
  },
  {
    id: 4,
    title: "Wedding Invitation Website",
    des: "Algi & Fani Wedding Invitation Website to asking the recepient for attend a wedding.",
    img: "/project4.png",
    iconLists: ["/html.svg", "/css.svg", "/js.svg", "bootstrap.svg"],
    link: "https://algifan.vercel.app",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    href: "https://github.com/AQodS",
  },
  {
    id: 2,
    img: "/insta.svg",
    href: "https://www.instagram.com/qoddri_/",
  },
  {
    id: 3,
    img: "/link.svg",
    href: "https://www.linkedin.com/in/qoddri/",
  },
];
