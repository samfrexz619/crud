import { Dispatch, SetStateAction } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useAppDispatch } from "@/app/hooks";
import { createPost } from "./postSlice";
import { Input } from "@/lib/types";



interface Props {
  handleTextInput: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=> void;
  textInput: Input;
  setTextInput: Dispatch<SetStateAction<{ title: string; text: string; }>>
}

const AddPost = ({ handleTextInput, textInput, setTextInput }: Props) => {

  const dispatch = useAppDispatch()

  const handleSubmitPost =()=> {
    const newPost = {
      title: textInput.title,
      body: textInput.text,
      id: nanoid(),
      date: new Date().toISOString()
    }
    if(textInput.text.trim() !== '' && textInput.title.trim() !== ''){
      dispatch(createPost(newPost))
      setTextInput({
        title: '',
        text: ''
      })
    }
  }

  return ( 
    <section className="">
      <div className="w-full py-2 bg-white rounded-lg px-3 mb-4">
        <input
          type="text"
          name="title"
          value={textInput.title}
          onChange={handleTextInput}
          className="w-full border-none bg-inherit text-black"
          placeholder="Enter title"
        />
      </div>
      <div className="w-full py-2 bg-white rounded-lg px-3">
        <textarea 
          name="text" 
          value={textInput.text}
          onChange={handleTextInput}
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