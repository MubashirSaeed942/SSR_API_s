import React from 'react'

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// Define the props type for PostCard
interface PostCardProps {
  PostData: Post;
}


export default function PostCard(props:PostCardProps) {
    const {PostData}  = props;

  return (
    <div className=" w-[20rem] h-[20rem] flex mx-auto my-3 bg-white rounded-lg shadow-lg ">
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{PostData .title}</h2>
        <p className="text-gray-700 mb-4">{PostData.body}</p>

      </div>
    </div>
  )
}
