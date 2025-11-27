export default function TimelineItem({ year, role, details }) {
  return (
    <div className="border-l pl-4 ml-3 py-2">
      <h4 className="font-semibold">{year} — {role}</h4>
      <p className="opacity-75 text-sm">{details}</p>
    </div>
  );
}
