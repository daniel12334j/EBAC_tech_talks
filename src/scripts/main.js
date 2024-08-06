AOS.init();

const dataDoEvento = new Date("dec 12, 2024 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function(){
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    const diasemMs = 1000 * 60 * 60 * 24;
    const horasemMs = 1000 * 60 * 60;
    const minutosemMs = 1000 * 60;

    const diasAteOEvento = Math.floor(distanciaAteOEvento / diasemMs) ;
    const horasAteOEvento = Math.floor( (distanciaAteOEvento % diasemMs) / horasemMs);
    const minutosAteOEvento = Math.floor( (distanciaAteOEvento % horasemMs) / minutosemMs);
    const segundosAteOEvento = Math.floor( (distanciaAteOEvento % minutosemMs) / (1000));
    
    
    console.log(diasAteOEvento);
    console.log(horasAteOEvento);
    console.log(minutosAteOEvento);
    console.log(segundosAteOEvento);

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;
}, 1000);