import React from 'react'
import Link from 'next/link'
import getFormattedDate from '@/lib/getFormattedDate'

type Props = {
  post: BlogsPost
}

export default function ListItem({post}: Props) {
  const { id, date, title } = post 
  const formattedDate = getFormattedDate(date)

  return (
    <li className="mt-4 text-2xl dark:text-white/90" key={id} >
      <Link 
        rel="stylesheet" 
        className='text-2xl font-bold text-green-500 dark:text-green-400' 
        href={`/posts/${id}`}>
          {title}
        </Link>
      <br/>
      <p 
        className="text-sm mt-1 font-bold text-white/90">
          {formattedDate}
      </p>
    </li>
  )
}