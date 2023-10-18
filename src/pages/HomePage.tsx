import { useAppSelector } from "@/app/hooks"
import { useParams } from 'react-router-dom'
import AddPost from "@/features/posts/AddPost"
import PostItems from "@/features/posts/Posts"
import SearchInput from "@/features/posts/SearchInput"
import { useState } from "react"
import { Posts } from "@/lib/types"
// import { selectPostById } from "@/features/posts/postSlice"





const HomePage = () => {

  const posts = useAppSelector(state => state.posts.posts)

  const { postId } = useParams()

  // const postNum = useAppSelector(state => selectPostById(state, Number(postId)))

  const orderedPosts = posts?.slice()?.sort((a, b) => b.date.localeCompare(a.date))

  const [searchTitle, setSearchTitle] = useState<Posts[]>([])

  console.log(postId)

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
        <AddPost  />
      </div>
      <div className="w-full">
        {
          orderedPosts.map(post => (
            <PostItems key={post.id} post={post} />
          ))
        }
      </div>
    </div>
  )
}

export default HomePage