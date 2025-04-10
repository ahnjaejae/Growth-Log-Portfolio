import Navigation from './components/Navigation'

export default function Home() {
  return (
    <main>
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            성장하는 개발자의 기록
          </h1>
          <p className="text-xl text-gray-600">
            배움과 성장의 과정을 기록하는 공간입니다
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 프로젝트 섹션 */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">프로젝트</h2>
            <p className="text-gray-600 mb-4">
              제가 진행한 프로젝트들을 소개합니다. 각 프로젝트의 기술 스택과 
              구현 과정, 배운 점들을 공유합니다.
            </p>
            <a
              href="/projects"
              className="inline-block bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition-colors"
            >
              프로젝트 보기
            </a>
          </div>

          {/* 성장 로그 섹션 */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">성장 로그</h2>
            <p className="text-gray-600 mb-4">
              개발자로서의 성장 과정을 기록합니다. 배운 내용, 고민했던 점들,
              그리고 해결 과정을 공유합니다.
            </p>
            <a
              href="/blog"
              className="inline-block bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition-colors"
            >
              성장 로그 보기
            </a>
          </div>
        </div>

        {/* 최근 활동 섹션 */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">최근 활동</h2>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <p className="text-gray-600">
              최근에 진행한 프로젝트나 학습 내용을 업데이트할 예정입니다.
              자주 방문해주시면 감사하겠습니다!
            </p>
          </div>
        </div>
      </div>
    </main>
  )
} 