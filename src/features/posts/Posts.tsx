import { NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FiEdit } from 'react-icons/fi'
import { useState } from 'react';
import { MdDelete } from 'react-icons/md'
import { Posts } from "@/lib/types";
import PostTime from "./PostTime";
import { deletePost } from './postSlice';
import { useAppDispatch } from '@/app/hooks';
import EditPost from './EditPost';



interface Props {
  post: Posts;
  // setPost: (postId: string)=> void;
  // openModal: ()=> void;
}



const PostItems = ({ post }: Props) => {

  const dispatch = useAppDispatch()

  const notify = (postTitle: string) => {
    toast.success(`${postTitle} has been deleted`, {
      position: 'top-right',
      theme: 'dark'
    })
  };

  const handleDelete =(postId: string, postTitle: string)=> {
    confirm('are you sure you want to delete this?')
    // setPost(postId)
    dispatch(deletePost(postId))
    notify(postTitle)
  }

  const [close, setClose] = useState(false)

  const openModal =()=> {
    setClose(!close)
  }

  return ( 
    <main className='w-full'>
      <div className="text-white p-4 border-2 border-solid border-white rounded-lg my-5">
        <h3 className="font-bold">{ post.title }</h3>
        <p className="py-3">{ post.body }</p>
        <div className="flex w-full justify-between py-3">
          <PostTime timeStamp={post.date} />
          <div className="flex gap-x-3">
            <button onClick={openModal} className="cursor-pointer">
              <FiEdit  />
            </button>
            <button onClick={ ()=> handleDelete(post.id, post.title)} className="cursor-pointer">
              <MdDelete  />
            </button>
            <ToastContainer  />
          </div>
        </div>
          <NavLink to={post.id}>more</NavLink>
      </div>
      {close && <EditPost openModal={openModal} post={post} />}
    </main>
   );
}
 
export default PostItems;