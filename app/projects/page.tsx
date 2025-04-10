import Navigation from '../components/Navigation'

const projects = [
  {
    title: 'Project 1',
    description: 'A brief description of the first project and its purpose.',
    technologies: ['React', 'TypeScript', 'Node.js'],
    github: 'https://github.com/username/project1',
    demo: 'https://project1-demo.com',
  },
  {
    title: 'Project 2',
    description: 'A brief description of the second project and its purpose.',
    technologies: ['Next.js', 'Tailwind CSS', 'MongoDB'],
    github: 'https://github.com/username/project2',
    demo: 'https://project2-demo.com',
  },
]

export default function Projects() {
  return (
    <main>
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Projects</h1>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-200"
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                {project.title}
              </h2>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="mb-4">
                <h3 className="text-sm font-medium text-gray-900 mb-2">
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex space-x-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-dark"
                >
                  GitHub
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary-dark"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
} 