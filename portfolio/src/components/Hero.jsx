import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">

        <div>
          <p className="text-cyan-400 mb-4">
            Hi, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Vishal Kumar
            <span className="block text-cyan-400">
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
            <button className="px-6 py-3 bg-cyan-400 text-black rounded-lg font-semibold">
             <a href="#projects">View Projects</a>
            </button>

            <button className="px-6 py-3 border border-cyan-400 rounded-lg">
             <a href="public/Vishal-Kumar-Bhardwaj-Resume.pdf" target="_blank">Resume</a>
            </button>
          </div>
        </div>

        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="bg-[#2a2a2a] rounded-xl p-8 border border-cyan-500/20 shadow-[0_0_40px_rgba(0,229,255,0.15)]"
        >
          <pre className="text-cyan-400">
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
