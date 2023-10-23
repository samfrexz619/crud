import { useState, useEffect, } from "react";
// import { Posts } from "./types";


function useLocalStorage<T>(key: string, initialValue: T){

  const storedValue = localStorage.getItem(key);

  const [value, setValue] = useState<T[]>(()=> {
    if(storedValue !== null){
      try {
        return JSON.parse(storedValue)
      } catch(error) {
        console.log(error)
      }
    }
    return initialValue;
  })

  useEffect(()=> {
    try {
      const serializedValue = JSON.stringify(value)
      localStorage.setItem(key, serializedValue)
    } catch(error){
      console.log(error)
    }
  }, [key, value])

  // const deletePost =(postId: T)=> {
  //   setValue(prev => prev.filter(post => post !== postId))
  // }
  return [value, setValue]
}

export default useLocalStorage