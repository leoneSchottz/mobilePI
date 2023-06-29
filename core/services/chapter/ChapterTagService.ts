import { useEffect, useState } from "react";
import { ChapterTag } from "../../../models/ChapterTag";
import { API, handleError } from "../../../http/API";


export function getAllChapterTags () {
  const [chapterTags, setChapterTags] = useState<ChapterTag[]>()


  useEffect(() => {
    (async () => {
      try {
        const { data } = await API.get<ChapterTag[]>('ChapterTag')
        setChapterTags(data)
      } catch (error) {
        handleError(error)
      }
    })()
  },[])

  return { chapterTags }
}