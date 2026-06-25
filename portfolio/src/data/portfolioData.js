import vipMatrimonial from "/vip_matrimonial_thumb.png";
import upStudio from "/up_studio_thumb.png";
import kanpeki from "/kanpeki_thumb.png";
import quizApp from "/quiz_app_thumb.png";
import carRental from "/car_rental_thumb.png";

export const skills = [
  "React",
  "JavaScript",
  "Tailwind CSS",
  "Redux Toolkit",
  "Context API",
  "Bootstrap",
  "Material UI",
  "Zustand",
  "Git",
  "GitHub",
  "Vite",
  "Framer Motion",
  "Swiper",
];

export const projects = [
  {
    title: "Up Studio",
    desc: "Responsive studio website built with React and Vite.",
    tech: ["React", "Vite"],
    thumb: upStudio,
    url:"https://697de2aecf3658908cdd555c--up-studio.netlify.app/"
  },
  {
    title: "Extra Miles Car Rental",
    desc: "Car rental platform with Swiper animations.",
    tech: ["React", "Swiper"],
    thumb: carRental,
    url:"https://extra-miles-car-rental.netlify.app/"
  },
  {
    title: "Quiz App",
    desc: "Interactive quiz application with score tracking.",
    tech: ["React", "Tailwind"],
    thumb: quizApp,
    url:"https://quiz11app.netlify.app/"
  },
  {
    title: "VIP Matrimonial",
    desc: "Responsive matrimonial website template.",
    tech: ["Bootstrap"],
    thumb: vipMatrimonial,
    url:"https://vip-matrimonial.netlify.app/"
  },
  {
    title: "Kanpeki Care",
    desc: "Japanese Skin care & hair care website.",
    tech: ["Bootstrap"],
    thumb: kanpeki,
    url:"https://kanpeki-care.netlify.app/"
  },
];
