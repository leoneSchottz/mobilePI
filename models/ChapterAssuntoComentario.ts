import { ChapterAssunto } from "./ChapterAssunto";
import { Usuario } from "./Usuario";

export interface ChapterAssuntoComentario{
    id:	number;
    texto: string;
    data: string;
    pai?: number;
    chapterAssuntoComentarioReferenciaPai?: undefined;
    chapterAssuntoId: number;
    chapterAssunto:	ChapterAssunto;
    usuarioId:	string;
    usuario:	Usuario;
}