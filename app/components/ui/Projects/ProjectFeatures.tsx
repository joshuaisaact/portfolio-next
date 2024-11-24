interface ProjectFeaturesProps {
  features: string[];
}

function ProjectFeatures({ features }: ProjectFeaturesProps) {
  return (
    <section className="my-12" aria-labelledby="features-heading">
      <h2 id="features-heading" className="text-xl font-semibold mb-6">
        Key Features
      </h2>
      <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl py-4 md:p-8">
        <ul className="space-y-4" role="list">
          {features.map((feature, index) => (
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
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ProjectFeatures;
