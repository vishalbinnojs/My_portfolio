import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold mb-6">Let's Work Together</h2>

        <p className="text-gray-400 mb-10">
          Open for <span className="text-accent">React</span> and Frontend
          opportunities.
        </p>

<div className="flex justify-center gap-8 text-3xl">
          <a
            href="https://github.com/vishalbinnojs"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
          >
            <FaGithub className="hover:text-accent" />
          </a>
          <a
            href="https://www.linkedin.com/in/vishal-bhardwaj-443558308/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
          >
            <FaLinkedin className="hover:text-accent" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
