import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">

        <div>
          <p className="text-accent mb-4">
            Hi, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Vishal Kumar
            <span className="block text-accent">
              Bhardwaj
            </span>
          </h1>

          <h2 className="text-2xl text-gray-300 mb-6">
            React Developer
          </h2>

          <p className="text-gray-400 leading-relaxed max-w-xl">
            Passionate frontend developer focused on building
            scalable, user-friendly and modern web applications
            using React and Tailwind CSS.
          </p>

<div className="mt-8 flex gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-accent text-black rounded-lg font-semibold hover:brightness-110 transition"
            >
              View Projects
            </a>

            <a
              href="/Vishal_Kumar_Bhardwaj_newResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-accent text-accent rounded-lg hover:bg-accent hover:text-black transition"
            >
              Resume
            </a>
          </div>
        </div>

        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="bg-panel rounded-xl p-8 border border-accent/20 shadow-accent-glow"
        >
          <pre className="text-accent">
{`const developer = {
  name: "Vishal",
  role: "React Developer",
  skills: [
    "React",
    "Tailwind",
    "Redux",
    "JavaScript",
    "Git",
    "Bootstrap",
    "Material UI",
    "Zustand",
    "Swiper",
    "Framer Motion"
  ]
}`}
          </pre>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
