import { FaBriefcase } from "react-icons/fa";
import { experience } from "../data/portfolioData";

const Experience = () => {
  return (
    <section id="experience" className="py-24 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12">
          Experience
        </h2>

        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          {experience.map((item, i) => (
            <li key={item.role}>
              {i > 0 && <hr className="bg-accent" />}
              <div className="timeline-middle">
                <FaBriefcase className="text-accent h-5 w-5" />
              </div>
              <div
                className={
                  i % 2 === 0
                    ? "timeline-start mb-10 md:text-end"
                    : "timeline-end md:mb-10"
                }
              >
                <time className="font-mono italic text-accent">
                  {item.dates}
                </time>
                <div className="text-lg font-bold mt-1">{item.role}</div>
                <p className="text-accent">
                  {item.company}
                  {item.location && ` · ${item.location}`}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed mt-2">
                  {item.desc}
                </p>
              </div>
              {i < experience.length - 1 && <hr className="bg-accent" />}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Experience;