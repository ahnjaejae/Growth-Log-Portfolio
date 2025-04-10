import Navigation from '../../components/Navigation'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'

const components = {
  pre: ({ children, ...props }: any) => (
    <pre {...props} className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
      {children}
    </pre>
  ),
  code: ({ children, ...props }: any) => (
    <code {...props} className="text-sm font-mono">
      {children}
    </code>
  ),
}

async function getPost(slug: string) {
  const postsDirectory = path.join(process.cwd(), 'content/posts')
  const fullPath = path.join(postsDirectory, `${slug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [rehypeSlug],
      remarkPlugins: [remarkGfm],
    },
  })

  return {
    slug,
    title: data.title,
    date: data.date,
    content: mdxSource,
  }
}

export default async function Post({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug)

  return (
    <main>
      <Navigation />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <article className="prose prose-lg max-w-none">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{post.title}</h1>
          <div className="text-gray-500 mb-8">
            {new Date(post.date).toLocaleDateString('ko-KR', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </div>
          <MDXRemote {...post.content} components={components} />
        </article>
      </div>
    </main>
  )
} 