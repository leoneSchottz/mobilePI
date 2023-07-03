import { Chapter } from "./Chapter";
import { Tag } from "./Tag";
import { Usuario } from "./Usuario";


export interface ChapterAssunto{
    id: number;
    dataCadastro: string;
    titulo: string;
    descricao?: string;
    contadorVisualizacao: number;
    status:number;
    verificacao: number;
    chapterId: number;
    chapter: Chapter;
    usuarioId: string;
    usuario: Usuario;
    usuarioIdVerificacao: string;
    usuarioVerificacao: Usuario;
    totalComentarios: number
}