export default function initFuncionamento() {
  const funcioanemto = document.querySelector('[data-semana]');
  const diasSemana = funcioanemto.dataset.semana.split(',').map(Number);
  const horarioSemana = funcioanemto.dataset.horario.split(',').map(Number);

  const dataAgora = new Date();
  const diaAgora = dataAgora.getDay();
  const horaAgora = dataAgora.getHours();
  
  const semanaaberta = diasSemana.indexOf(diaAgora) !== -1;
  const horarioAberto = (horaAgora >= horarioSemana[0] && horaAgora<horarioSemana[1]);

  if(semanaaberta && horarioAberto){
    funcioanemto.classList.add('aberto');
  }
}
// const HoraAtual = new Date(); FORMULA PARA CONTAR QUANTOS DIAS FALTAM PARA UMA DATA ESPECIFICA
//   const futuro = new Date('Dec 24 2077 23:59');
//   console.log(HoraAtual);
//   console.log(futuro);

//   function transfomarDias (tempo){
//     return tempo / (24*60*60*1000);
//   }
//   const DiasAgora = transfomarDias(HoraAtual.getTime());
//   const DiasFuturo = transfomarDias(futuro.getTime());

//   console.log(Math.floor(DiasFuturo-DiasAgora));