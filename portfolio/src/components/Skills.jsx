import { skills } from "../data/portfolioData";

const Skills = () => {
  return (
    <section id="skills" className="py-24">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold mb-12">
          Skills
        </h2>

        <div className="flex flex-wrap gap-4">

          {skills.map((skill) => (
            <div
              key={skill}
              className="px-5 py-3 rounded-full bg-[#2b2b2b] border border-cyan-500/20 hover:border-cyan-400"
            >
              {skill}
            </div>
          ))}

        </div>
      </div>

    </section>
  );
};

export default Skills;