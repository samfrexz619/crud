import { AiOutlineClose } from 'react-icons/ai'
// import { useParams } from 'react-router-dom'
import { useState } from 'react';
import { useAppDispatch } from '@/app/hooks';
import { editPost } from './postSlice';
import { Posts } from '@/lib/types';

interface Prop {
  openModal: ()=> void;
  post: Posts;
}

const EditPost = ({ openModal, post }: Prop) => {

  const dispatch = useAppDispatch()

  // const post = useAppSelector((state) => selectPostById(state, Number(postId)))


  const [input, setInput] = useState({
    title: post?.title,
    text: post?.body
  })

  const handleChange =(e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>)=> {
    const { value, name} = e.target
    setInput((prevItem) => ({...prevItem, [name]: value}))
  }

  const handleUpdate =(title: string, body: string)=> {
    dispatch(editPost({ body, date: post.date, title, id: post.id}))
    console.log(post)
    setInput({
      title: '',
      text: ''
    })
  }

  const handleModal =()=> {
    openModal()
  }

  return (
    <div className="modal">
      <div className="relative bg-pry w-[500px] h-[400px] rounded-lg">
        <button onClick={handleModal} className="text-2xl absolute top-5 right-4">
          <AiOutlineClose className="text-white" />
        </button>
        <div className="h-full flex items-center justify-center">
          <section className="">
            <div className="w-full py-2 bg-white rounded-lg px-3 mb-4">
              <input
                type="text"
                name="title"
                value={input.title}
                onChange={handleChange}
                className="w-full border-none bg-inherit text-black"
                placeholder="Enter title"
              />
            </div>
            <div className="w-full py-2 bg-white rounded-lg px-3">
              <textarea 
                name="text" 
                value={input.text}
                onChange={handleChange}
                cols={30} 
                rows={3}
                className="w-full text-black resize-none"
                placeholder="Enter message"
              >
              </textarea>
            </div>
            <div className="w-full py-6">
              <button 
                type="button" 
                onClick={()=> handleUpdate(input.title, input.text)}
                className="border-2 border-solid border-white rounded-lg w-full p-3 font-bold"
              >
                Update
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default EditPost