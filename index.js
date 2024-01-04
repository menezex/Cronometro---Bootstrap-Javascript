const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");
const milisegundos = document.getElementById("milisegundos");
const btnIniciar = document.getElementById("btnIniciar");
const btnPausar = document.getElementById("btnPausar");
const btnContinuar = document.getElementById("btnContinuar");
const btnResetar = document.getElementById("btnResetar");

let intervalo;
let min = 0,
  seg = 0,
  miliseg = 0;
let pausa = false;

const iniciar = () => {
  intervalo = setInterval(() => {
    if (!pausa) {
      miliseg += 10;

      if (miliseg === 1000) {
        seg++;
        miliseg = 0;
      }

      if (seg === 60) {
        min++;
        seg = 0;
      }

      minutos.textContent = formatarTempo(min);
      segundos.textContent = formatarTempo(seg);
      milisegundos.textContent = formatarTempoMili(miliseg);
    }
  }, 10);

  btnIniciar.style.display = "none";
  btnPausar.style.display = "block";
};

const pausar = () => {
  btnPausar.style.display = "none";
  btnContinuar.style.display = "block";
  pausa = true;
};

const continuar = () => {
  btnPausar.style.display = "block";
  btnContinuar.style.display = "none";
  pausa = false;
};

const resetar = () => {
  clearInterval(intervalo);
  (min = 0), (seg = 0), (miliseg = 0);
  minutos.textContent = "00";
  segundos.textContent = "00";
  milisegundos.textContent = "000";

  btnPausar.style.display = "none";
  btnContinuar.style.display = "none";
  btnIniciar.style.display = "block";

  return (pausa = true ? (pausa = false) : pausa);
};

const formatarTempo = (tempo) => (tempo < 10 ? `0${tempo}` : tempo);
const formatarTempoMili = (tempo) =>
  tempo < 100 ? `${tempo}`.padStart(3, "0") : tempo;

btnIniciar.addEventListener("click", iniciar);
btnPausar.addEventListener("click", pausar);
btnContinuar.addEventListener("click", continuar);
btnResetar.addEventListener("click", resetar);
