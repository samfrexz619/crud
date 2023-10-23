import { useAppSelector } from "@/app/hooks"
// import { useParams } from 'react-router-dom'
import { useState } from "react"
import AddPost from "@/features/posts/AddPost"
import PostItems from "@/features/posts/Posts"
import SearchInput from "@/features/posts/SearchInput"
import { Posts } from "@/lib/types"
// import { createPost } from "@/features/posts/postSlice"
// import { selectPostById } from "@/features/posts/postSlice"



const HomePage = () => {

  const posts = useAppSelector(state => state.posts.posts)

  // const dispatch = useAppDispatch()

  // const { postId } = useParams()
  
  const [searchTitle, setSearchTitle] = useState<Posts[]>([])

  const [input, setInput] = useState({
    title: '',
    text: '',
  })

  const handleChange =(e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>)=> {
    const { name, value } = e.target
    setInput((prevItem) => ({...prevItem, [name]: value}))
  }
    
  // const orderedPosts = posts?.slice()?.sort((a, b) => b.date.localeCompare(a.date))

  // useEffect(()=> {
  //   const storedPosts = localStorage.getItem('posts')
  //   if(storedPosts) {
  //     dispatch(createPost(JSON.parse(storedPosts)))
  //   }
  // },[dispatch])

  // useEffect(()=> {
  //   localStorage.setItem('posts', JSON.stringify(posts))
  // },[posts])

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>)=> {
    const titleInput = e.target.value
    const filtered = posts.filter(post => post.title.toLowerCase().includes(titleInput.toLowerCase()))
    titleInput === '' ? setSearchTitle([]) : setSearchTitle(filtered)
  }

  return (
    <div className="w-[400px] mx-auto py-7">
      <div className="pb-20">
        <SearchInput handleSearch={handleSearch} searchItem={searchTitle} />
      </div>
      <div>
        <AddPost handleTextInput={handleChange} setTextInput={setInput} textInput={input} />
      </div>
      <div className="w-full">
        {
          posts?.map(post => (
            <PostItems key={post.id} post={post} />
          ))
        }
      </div>
    </div>
  )
}

export default HomePage