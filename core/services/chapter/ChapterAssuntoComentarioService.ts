import { useEffect, useState } from "react";
import { ChapterAssuntoComentario } from "../../../models/ChapterAssuntoComentario";
import { API, handleError } from "../../../http/API";


export function getChapterAssuntoComentariosFilterByChapterAssuntoId(id: number | string) {

  const [chapterAssuntoComentarios, getChapterAssuntoComentarios] = useState<ChapterAssuntoComentario[]>()

  useEffect(() => {
    (async() => {
      try {
        const { data } = await API.get(`ChapterAssuntoComentario/filterByChapterAssuntoId/${id}`)
        getChapterAssuntoComentarios(data)
      } catch (error) {
        handleError(error)
      }
    })()
  },[])

  return { chapterAssuntoComentarios }
}