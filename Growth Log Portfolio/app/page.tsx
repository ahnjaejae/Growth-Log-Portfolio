import Navigation from './components/Navigation'

export default function Home() {
  return (
    <main>
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Welcome to My Growth Log
          </h1>
          <p className="text-lg text-gray-600">
            Join me on my journey of continuous learning and development
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="aspect-w-16 aspect-h-9 mb-4">
            <iframe
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              title="Live Stream"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-lg"
            />
          </div>
          <div className="text-center">
            <p className="text-gray-600">
              Currently Offline - Next Stream: Mon/Wed/Fri 8PM-10PM
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Stream</h2>
          <p className="text-gray-600">
            I stream my learning journey live on YouTube, sharing my experiences,
            challenges, and insights as I grow as a developer. Join me to learn
            together and be part of this learning community!
          </p>
        </div>
      </div>
    </main>
  )
} 