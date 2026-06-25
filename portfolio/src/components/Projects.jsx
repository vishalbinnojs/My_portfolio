import { projects } from "../data/portfolioData";

const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12">Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-[#2b2b2b] p-6 rounded-xl border border-cyan-500/20  transition"
            >
              <h3 className="text-xl font-bold mb-3">{project.title}</h3>

              <p className="text-gray-400">{project.desc}</p>
              <div className="h-40 overflow-hidden rounded-lg my-2">
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  <div className="group relative w-full h-full">
                    <img
                      src={project.thumb}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform transform-gpu duration-500 group-hover:scale-110 "
                    />
                    <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>
                  </div>
                </a>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((item) => (
                  <span key={item} className="text-cyan-400 text-sm">
                    #{item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
