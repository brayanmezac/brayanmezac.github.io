import React from 'react'
import { getSortedPostsData } from '@/lib/posts'
import ListItem from './ListItem'

export default function Posts() {
  const posts = getSortedPostsData();
  return (
    <section className="mt-6 mx-auto max-w-2xl">
      <h2 className="text-3xl font-bold dark:text-white/90">Posts Blogs</h2>
      <ul className="w-full">
        {posts.map(post => (
          <ListItem key={post.id} post={post}/>
        ))}
      </ul>
    </section>
  )
}
