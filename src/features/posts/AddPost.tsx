import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useAppDispatch } from "@/app/hooks";
import { createPost } from "./postSlice";


const AddPost = () => {

  const dispatch = useAppDispatch()

  const [input, setInput] = useState({
    title: '',
    text: '',
  })

  const handleChange =(e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>)=> {
    const { name, value } = e.target
    setInput((prevItem) => ({...prevItem, [name]: value}))
  }

  const handleSubmitPost =()=> {
    const newPost = {
      title: input.title,
      body: input.text,
      id: nanoid(),
      date: new Date().toISOString()
    }

    dispatch(createPost(newPost))

    setInput({
      title: '',
      text: ''
    })
  }

  return ( 
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
          onClick={handleSubmitPost}
          type="button" 
          className="border-2 border-solid border-white rounded-lg w-full p-3 font-bold"
        >
          {'Post'}
        </button>
      </div>
    </section>
   );
}
 
export default AddPost;