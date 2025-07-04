import Link from "next/link";

export const getPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = res.json()
    return data
} 


export default async function posts() {
    const posts = await getPosts();
    console.log(posts);
  return (
    <div className="grid grid-cols-4 gap-5 ">
        {
            posts.map(post => {
                return(
                  <div key={post.id} className="border-2 border-gray-300 p-4">
                    
                    <p>{post.title}</p>
                    <p>{post.body}</p>
                    <Link href={`/posts/${post.id}`}>
                    <button className="p-2 bg-green-400 text-white font-semibold hover:bg-green-500 rounded-lg">Details</button>
                    </Link>
                  </div>  
                )
            })
        }
    </div>
  )
}
