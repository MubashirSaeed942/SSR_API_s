
import PostCard from '@/components/PostCard/PostCard'
import Link from 'next/link';




interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
const getAllPost = async ()=>{
  const response =  await fetch("https://jsonplaceholder.typicode.com/posts")
  return(
    response.json()
  )
}

export default async function Blogs() {
  const PostData =  await getAllPost()
  


  return (
    <div className='flex flex-wrap bg-gray-200 space-x-4 '>
      {PostData.map((eachPost: Post) => 
        <div key={eachPost.id}>
          <Link href={`/blogs/${eachPost.id}`}>
            <PostCard PostData={eachPost} />
          </Link>
        </div>
    )}

    </div>
  )

}

