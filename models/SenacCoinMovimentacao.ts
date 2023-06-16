import { SenacCoin } from "./SenacCoin";
import { Usuario } from "./Usuario";

export type SenacCoinMovimentacao = {
  id:          number;
  data:        string;
  observacao:  string;
  valor:       number;
  status:      number;
  senacCoinId: number;
  senacCoin:   SenacCoin;
  usuarioId:   string;
  usuario:     Usuario;
}