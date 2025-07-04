import React from 'react'

export const getSingleData = async(post_id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${post_id}`)
    const data = res.json();
    return data
}

export default async function SinglePost({params}) {
    const p = await params;
    const singlePost  = await getSingleData(p.id)
    console.log(singlePost);
  return (
    <div>
       <p>{singlePost.id}</p>
       <p className='text-3xl font-bold'>{singlePost.title}</p>
       <p>{singlePost.body}</p>
    </div>
  )
}
