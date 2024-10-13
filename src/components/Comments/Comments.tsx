import React from 'react';
interface CommentInterFace {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export default function Comments (props:{PostComments: CommentInterFace})  {
  const {PostComments} = props;
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md p-4 mb-4">
      <div className="flex items-center mb-2">
        <div className="font-semibold text-lg">{PostComments.name}</div>
        <span className="ml-auto text-sm text-gray-500">{PostComments.email}</span>
      </div>
      <div className="text-gray-700">
        {PostComments.body}
      </div>
    </div>
  );
};



