import { useEffect, useState } from "react";
import { Chapter } from "../../../models/Chapter";
import { API, handleError } from "../../../http/API";



export function getAllChapters() {
  const [chapters, setChapters] = useState<Chapter[]>()

  useEffect(() => {
    (async() => {
      try {
        const {data} = await API.get<Chapter[]>(`Chapter`)
        setChapters(data);
      } catch (error) {
        handleError(error)
      }
    })()
  },[])

  return { chapters, setChapters }
}