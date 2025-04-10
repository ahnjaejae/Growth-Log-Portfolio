import Navigation from '../components/Navigation'

export default function About() {
  return (
    <main>
      <Navigation />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">About Me</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              I am a passionate developer who believes in continuous learning and
              sharing knowledge with others. My journey in software development
              has been driven by curiosity and a desire to solve real-world
              problems through code.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Technical Interests
            </h2>
            <p className="text-gray-600 mb-6">
              I am particularly interested in web development, focusing on modern
              JavaScript frameworks, cloud technologies, and software architecture.
              I enjoy exploring new technologies and best practices to improve my
              skills and create better solutions.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Learning Goals
            </h2>
            <p className="text-gray-600 mb-6">
              My current learning goals include mastering advanced TypeScript
              concepts, improving my understanding of system design, and
              contributing more to open-source projects. I believe in learning by
              doing and sharing my journey with others.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Why Live Streaming?
            </h2>
            <p className="text-gray-600 mb-6">
              I started live streaming my learning process to create a more
              interactive and engaging way to share knowledge. It allows me to
              connect with other developers, receive real-time feedback, and
              demonstrate problem-solving in action. The live format makes the
              learning process more transparent and accessible to everyone.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Contact
            </h2>
            <div className="space-y-2">
              <p className="text-gray-600">
                Email:{' '}
                <a
                  href="mailto:your.email@example.com"
                  className="text-primary hover:text-primary-dark"
                >
                  your.email@example.com
                </a>
              </p>
              <p className="text-gray-600">
                GitHub:{' '}
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-dark"
                >
                  github.com/yourusername
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 