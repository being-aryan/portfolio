const skills = [
  "C++", "Python", "JavaScript", "React",
  "Node.js", "Solidity", "MongoDB", "MySQL",
  "Git", "Linux", "REST APIs"
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-zinc-50 dark:bg-zinc-800">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-semibold dark:text-white">Skills</h2>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map(skill => (
            <div
              key={skill}
              className="p-4 rounded-xl bg-white dark:bg-zinc-900 shadow text-center"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
