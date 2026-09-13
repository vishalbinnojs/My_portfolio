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
              className="px-5 py-3 rounded-full bg-panel-alt border border-accent/20 hover:border-accent transition-colors"
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