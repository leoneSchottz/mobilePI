import { useEffect, useState } from "react";
import { Chapter } from "../../../models/Chapter";
import { API, handleError } from "../../../http/API";
import { ChapterAssunto } from "../../../models/ChapterAssunto";



export function getAllChaptersAssunto() {
  const [chaptersAssunto, setChaptersAssunto] = useState<ChapterAssunto[]>()

  useEffect(() => {
    (async() => {
      try {
        const {data} = await API.get<ChapterAssunto[]>(`ChapterAssunto`)
        setChaptersAssunto(data);
      } catch (error) {
        handleError(error)
      }
    })()
  },[])

  return { chaptersAssunto }
}
export function getChaptersAssuntoById(id: number | string) {
  const [chapterAssunto, setChapterAssunto] = useState<ChapterAssunto>()

  useEffect(() => {
    (async() => {
      try {
        const {data} = await API.get<ChapterAssunto>(`ChapterAssunto/${id}`)
        setChapterAssunto(data);
      } catch (error) {
        handleError(error)
      }
    })()
  },[])

  return { chapterAssunto }
}


export async function createChaptersAssunto(newChapterAssunto) {

  const response = await API.post<ChapterAssunto>(`ChapterAssunto`, newChapterAssunto)
  return(response.status)

}

export async function deleteChapterAssunto(id: number | string) {

  const response = await API.delete<ChapterAssunto>(`ChapterAssunto/${id}`)

  return {response}
}