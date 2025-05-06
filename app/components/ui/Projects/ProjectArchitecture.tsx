interface ProjectArchitectureProps {
  architecture: {
    frontend?: string;
    backend?: string;
    infrastructure?: string;
    testing?: string;
  };
}

function ProjectArchitecture({ architecture }: ProjectArchitectureProps) {
  const architectureSections = Object.entries(architecture).map(
    ([key, content]) => ({
      title: key.charAt(0).toUpperCase() + key.slice(1),
      // Split content into separate lines and clean up whitespace
      points: content
        .split("\n")
        .map((line) => line.trim())
        .filter((line) => line.length > 0),
    }),
  );

  return (
    <section className="space-y-8">
      {architectureSections.map(({ title, points }) => (
        <div key={title} className="space-y-6">
          <h2 className="text-xl font-semibold">{title}</h2>
          <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl py-4 md:p-8">
            <ul className="space-y-4" role="list">
              {points.map((point, index) => (
                <li
                  key={index}
                  className="flex items-baseline gap-3 text-gray-700 dark:text-gray-300"
                >
                  <span
                    className="text-blue-500 md:block hidden"
                    aria-hidden="true"
                  >
                    •
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
}

export default ProjectArchitecture;
