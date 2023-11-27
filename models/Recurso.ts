import { Usuario } from './Usuario';
import * as TextEncoding from 'text-encoding'

export type Recurso = {
    id: number;
    descricao: string;
    nomeArquivo: string;
    arquivo: string;
    dataCadastro: string;
    status: number;
    usuarioId: string;
    
}
