AOS.init();

const dataDoEvento = new Date("May 20, 2024 12:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaTempo = setInterval(function () {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

    const diferencaDoTempo = timeStampDoEvento - timeStampAtual;
    const dias = Math.floor(diferencaDoTempo / diaEmMs);
    const horas = Math.floor((diferencaDoTempo % diaEmMs) / horaEmMs);
    const minutos = Math.floor((diferencaDoTempo % horaEmMs) / minutoEmMs);
    const segundos = Math.floor((diferencaDoTempo % minutoEmMs) / 1000);

    document.getElementById('contador').innerHTML = `${dias}d ${horas}h ${minutos}m ${segundos}s`;

    if (diferencaDoTempo < 0) {
        clearInterval(contaTempo);
        document.getElementById('contador').innerHTML = 'Cecília já nasceu!!! S2';
    }
}, 1000);