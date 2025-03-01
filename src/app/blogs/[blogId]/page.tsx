import Comments from '@/components/Comments/Comments';


interface BlogPageParams {
  blogId: number;
}



interface PostSpecificData {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface CommentData {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

interface Data {
  postSpecificData: PostSpecificData;
  specificCommentData: CommentData[];
}

const getSpecificData = async ({ params }: { params: BlogPageParams }) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.blogId}`)
  if (response.ok) {
    const commentsData = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.blogId}/comments`)
    const commentsResponse = await commentsData.json();

    const sepicificData = await response.json();
    return {
      postSpecificData: sepicificData,
      specificCommentData: commentsResponse
    }
  }

}
  export default async function Blogpage({ params }: { params: BlogPageParams }) {

    const data : Data | undefined = await getSpecificData({params})
    if (!data) {
      return <div>Error: Data not found!</div>;
    }
    

  
  return (
    <div className="   bg-white border border-gray-200 rounded-lg shadow-md  justify-start ">
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{(data.postSpecificData || {}).title}</h2>
        <p className="text-gray-700 mb-4">{(data.postSpecificData || {}).body}</p>
      </div>
      <div className="bg-gray-100 p-4">
        <h3 className="text-lg font-semibold mb-2">
          {data.specificCommentData.map((com: CommentData) => {
            return (
              <div key={com.id}>
                <Comments PostComments={com} />
              </div>

            )
          })}


        </h3> </div>
    </div>
  )
} 
