import Navigation from '../../components/Navigation'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import rehypeHighlight from 'rehype-highlight'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'

async function getPost(slug: string) {
  const postsDirectory = path.join(process.cwd(), 'content/posts')
  const fullPath = path.join(postsDirectory, `${slug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  
  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeSlug, rehypeHighlight],
    },
  })

  return {
    source: mdxSource,
    frontMatter: data,
  }
}

export default async function Post({ params }: { params: { slug: string } }) {
  const { source, frontMatter } = await getPost(params.slug)

  return (
    <main>
      <Navigation />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <article className="prose prose-lg max-w-none">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {frontMatter.title}
          </h1>
          <p className="text-gray-500 mb-8">
            {new Date(frontMatter.date).toLocaleDateString()}
          </p>
          <MDXRemote {...source} />
        </article>
      </div>
    </main>
  )
} 