export default function ProjectCard({ title, description, tech }) {
  return (
    <div className="border p-5 rounded-xl shadow">
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="opacity-75 mt-1">{description}</p>
      <div className="flex gap-2 mt-3 flex-wrap">
        {tech.map(t => <span key={t} className="tag">{t}</span>)}
      </div>
    </div>
  );
}
