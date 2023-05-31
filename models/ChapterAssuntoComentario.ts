import { Usuario } from "./Usuario";

export interface ChapterAssuntoComentario{
    id: number;
    key: number,
    title: string | undefined | null,
    description: string,
    author: Usuario,
    time: string,
    views: number,
    comments: number,
    like: number,
    unlike: number,
    respondida: boolean,
    curtida: boolean,
    descurtida: boolean
}