import Navigation from '../components/Navigation'

export default function Projects() {
  return (
    <main>
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">프로젝트</h1>
        <div className="grid gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              성장 로그 포트폴리오
            </h2>
            <p className="text-gray-600 mb-4">
              개발자로서의 성장 과정을 기록하고 공유하는 웹사이트입니다.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded-md text-sm">
                Next.js
              </span>
              <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded-md text-sm">
                TypeScript
              </span>
              <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded-md text-sm">
                Tailwind CSS
              </span>
            </div>
            <a
              href="https://github.com/ahnjaejae/Growth-Log-Portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-dark"
            >
              GitHub 저장소
            </a>
          </div>
        </div>
      </div>
    </main>
  )
} 