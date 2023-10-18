import { createSlice, PayloadAction, createSelector } from "@reduxjs/toolkit";
import { posts } from "@/lib/data";
import { Posts } from "@/lib/types";



interface  PostsState {
  posts: Posts[];
}

const initialState: PostsState = {
  posts
}

export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    getPosts: (state, action: PayloadAction<Posts[]>) => {
      state.posts = action.payload
    },
    createPost: (state, action: PayloadAction<Posts>) => {
      state.posts.push(action.payload)
    },
    deletePost: (state, action: PayloadAction<string>)=> {
      state.posts = state.posts.filter(post => post.id !== action.payload)
    },
    editPost: (state, action: PayloadAction<Posts>)=> {
      state.posts = state.posts.map(post => post.id === action.payload.id ? {
        ...post, title: action.payload.title, body: action.payload.body, date: new Date().toISOString()
      } : post)
    },
  }
})

const selectPost = (state: PostsState)=> state.posts

export const { getPosts, createPost, deletePost, editPost } = postSlice.actions

export const selectPostById = (postId: string) =>
    createSelector([selectPost], (posts)=> posts.find(post => post.id === postId))

export default postSlice.reducer;