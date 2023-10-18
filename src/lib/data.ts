import { sub } from "date-fns"
import { nanoid } from "@reduxjs/toolkit"
import { Posts } from "./types"

export const posts: Posts[] = [ 
  {
    id: nanoid(),
    title: 'random post 1',
    body: 'how to get away with murder is one of the sickest movies',
    date: sub(new Date, {minutes: 10}).toISOString()
  },
  {
    id: nanoid(),
    title: 'random post 2',
    body: 'It is shocking for a man to fall in love with another man',
    date: sub(new Date, {minutes: 12}).toISOString()
  },
  {
    id: nanoid(),
    title: 'random post 3',
    body: 'just some random text about how the media spread propaganda',
    date: sub(new Date, {minutes: 15}).toISOString()
  },
  {
    id: nanoid(),
    title: 'random post 4',
    body: 'one thing is very certain and that is no regrets, just lessons',
    date: sub(new Date, {minutes: 20}).toISOString()
  },
]