import getFormattedDate from "@/lib/getFormattedDate"
import { getSortedPostsData, getPostData } from "@/lib/posts"
import { notFound } from "next/navigation"
import Link from "next/link"

export function generateStaticParams() {
  const posts = getSortedPostsData() //deduped!

  return posts.map((post) => ({
      postId: post.id
  }))
}

export function generateMetadata({ params } : { params : { postId : string } }) {
  
  const posts = getSortedPostsData()
  const { postId } = params

  const post = posts.find(post => post.id === postId)

  
  if(!post){
    return{
      title: 'Not Found',
    }
  }

  return {
    title: post.title,
  }
}

export default async function Post({ params } : { params : { postId : string } }) {
  
  const posts = getSortedPostsData()
  const { postId } = params
  
  if(!posts.find(post => post.id === postId)){
    return notFound()
  }
  
  const { title, date, contentHtml } = await getPostData(postId)
  
  const pubDate = getFormattedDate(date)

  return (
    <main className="px-6 prose prose-xl prose-slate dark:prose-invert mx-auto">
      <h1 className="text-3xl mt-4 mb-0">{title}</h1>
      <p className="mt-0">
          {pubDate}
      </p>
      <article>
          <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
          <p>
              <Link className="shadow-inner-xl bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-full" href="/">← Volver al inicio</Link>
          </p>
      </article>
    </main>
  )
}