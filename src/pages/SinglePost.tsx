import { useParams, useNavigate } from 'react-router-dom';
import { FiEdit } from 'react-icons/fi'
import { BiArrowBack } from 'react-icons/bi'
import { useState } from 'react';
import { MdDelete } from 'react-icons/md'
import PostTime from "@/features/posts/PostTime";
import { deletePost } from '@/features/posts/postSlice';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import EditPost from '@/features/posts/EditPost';


const SinglePost = () => {

  const navigate = useNavigate()

  const { postId } = useParams()

  const [close, setClose] = useState(false)

  const posts = useAppSelector(state=> state.posts.posts)

  const dispatch = useAppDispatch()

  const handleDelete =(postId: string)=> {
    dispatch(deletePost(postId))
  }

  const postDetail = posts.find(post => post.id === postId)

  if(!postDetail) {
    return(
      <div>
        post not found
      </div>
    )
  }

  const openModal =()=> {
    setClose(!close)
  }

  return ( 
    <main className='w-full px-12 py-7'>
      <button onClick={()=> navigate('/')} className='bg-gray-200 px-4 py-2 mb-4 rounded-lg text-pry'>
        <BiArrowBack  />
      </button>
      <div className='py-20'>
        <div className="text-white px-4 border-2 border-solid border-white rounded-lg py-5">
          <h3 className="font-bold">{ postDetail.title }</h3>
          <p className="py-3">{ postDetail.body }</p>
          <div className="flex w-full justify-between py-3">
            <PostTime timeStamp={postDetail.date} />
            <div className="flex gap-x-3">
              <button onClick={openModal} className="cursor-pointer">
                <FiEdit  />
              </button>
              <button onClick={ ()=> handleDelete(postDetail.id)} className="cursor-pointer">
                <MdDelete  />
              </button>
            </div>
          </div>
        </div>
      </div>
      {close && <EditPost openModal={openModal} post={postDetail} />}
    </main>
   );
}
 
export default SinglePost;