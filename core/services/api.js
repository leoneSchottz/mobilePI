const fetchUsuario = async (userId) => {
  const resp = await fetch("http://academico3.rj.senac.br/api/Usuario/" + userId);
  const response = await resp.json();
  return response;
};

const fetchSenacCoin = async (userId) => {
  const resp = await fetch("http://academico3.rj.senac.br/api/SenacCoin/FiltrarSenacCoinByUsuarioId/" + userId);
  const response = await resp.json();
  return response;
};

const fetchBadge = async () => {
const resp = await fetch("http://academico3.rj.senac.br/api/Badge");
const response = await resp.json();
return response;
};

const fetchAtividade = async () => {
const resp = await fetch("http://academico3.rj.senac.br/api/Atividade");
const response = await resp.json();
return response;
};

const fetchEstudante = async (userId) => {
const resp = await fetch("http://academico3.rj.senac.br/api/Estudante/FiltrarEstudanteByUsuarioId/" + userId);
const response = await resp.json();
return response;
};

const fetchUnidadesCurriculares = async (idOferta) => {
const resp = await fetch("http://academico3.rj.senac.br/api/UnidadeCurricular/filterByModulo/" + idOferta);
const response = await resp.json();
return response;
};

export {
  fetchUsuario, fetchSenacCoin, fetchBadge, fetchAtividade, fetchEstudante, fetchUnidadesCurriculares
}
