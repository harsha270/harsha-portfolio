export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-10 text-center">
      <h1 className="text-4xl font-bold text-blue-600">Harsha Vardhan Portfolio 🚀</h1>
      <p className="text-lg text-gray-700 mt-3 max-w-xl">
        Welcome to my portfolio website built with Next.js & Tailwind CSS.
      </p>

      <div className="mt-6 space-x-4">
        <a href="/projects" className="px-4 py-2 bg-blue-600 text-white rounded-lg">
          View Projects
        </a>
        <a href="/contact" className="px-4 py-2 bg-gray-800 text-white rounded-lg">
          Contact Me
        </a>
      </div>
    </main>
  );
}
