export default function Navbar() {
  return (
    <nav className="flex justify-between py-4 px-6">
      <h2 className="font-bold text-xl">Harsha Vardhan</h2>
      <div className="flex gap-6">
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}
