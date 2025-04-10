import Navigation from '../components/Navigation'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import { format } from 'date-fns'

async function getPosts() {
  const postsDirectory = path.join(process.cwd(), 'content/posts')
  const fileNames = fs.readdirSync(postsDirectory)
  
  const posts = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, '')
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data } = matter(fileContents)
    
    return {
      slug,
      title: data.title,
      date: data.date,
    }
  })

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export default async function Blog() {
  const posts = await getPosts()

  return (
    <main>
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Learning Log</h1>
        <div className="grid gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-200"
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                {post.title}
              </h2>
              <p className="text-gray-500">
                {format(new Date(post.date), 'MMMM d, yyyy')}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
} 