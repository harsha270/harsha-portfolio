import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectCard from "./components/ProjectCard";
import SkillBadge from "./components/SkillBadge";
import TimelineItem from "./components/TimelineItem";
import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <main className="px-6 md:px-16 py-10 space-y-20">

      <Navbar />

      {/* HERO SECTION */}
      <section className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold">
          Harsha Vardhan
        </h1>
        <p className="mt-3 text-lg opacity-80">
          Java Full-Stack Developer | React | SQL | Spring Boot
        </p>
        <a href="/resume.pdf" download className="btn mt-5">
          Download Resume 📄
        </a>
      </section>

      {/* SKILLS */}
      <section id="skills">
        <h2 className="section-title">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          <SkillBadge skill="Java" />
          <SkillBadge skill="React Js" />
          <SkillBadge skill="Spring Boot" />
          <SkillBadge skill="MySQL" />
          <SkillBadge skill="HTML CSS JS" />
          <SkillBadge skill="Git & GitHub" />
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects">
        <h2 className="section-title">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">

          <ProjectCard 
            title="Portfolio Website"
            description="Responsive portfolio with projects, contact, and resume."
            tech={["Next.js", "Tailwind"]}
          />

          <ProjectCard 
            title="Movie Recommendation System"
            description="AI-powered movie recommendation model."
            tech={["Java", "ML", "Python"]}
          />

        </div>
      </section>

      {/* EXPERIENCE TIMELINE */}
      <section id="experience">
        <h2 className="section-title">Experience</h2>
        <TimelineItem 
          year="2024"
          role="Java Developer Intern — Remote"
          details="Developed REST APIs, SQL queries & CRUD microservices."
        />
      </section>

      {/* CONTACT */}
      <section id="contact">
        <h2 className="section-title">Contact Me</h2>
        <ContactForm />
      </section>

      <Footer />
    </main>
  );
}
