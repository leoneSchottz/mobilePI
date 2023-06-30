import { Chapter } from "./Chapter";
import { Tag } from "./Tag";
import { Usuario } from "./Usuario";


export interface ChapterAssunto{
    id: number;
    titulo: string;
    descricao?: string;
    contadorVisualizacao: number;
    status:number;
    verificacao: number;
    chapterId: number;
    chapter: Chapter;
    usuarioId: number;
    usuario: Usuario;
    usuarioIdVerificacao: number;
    usuarioVerificacao: Usuario;
}