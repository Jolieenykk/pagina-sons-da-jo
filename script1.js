function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
    mostrarImagem(idElementoAudio)
}

function mostrarImagem(idImagem){
    const imagem= document.querySelector("img");
    const nomeImagem = idImagem.replace("#som_tecla_","");
    imagem.src= `./images/${nomeImagem}.jpg`;
}

const listaTeclas= document.querySelectorAll('.tecla');


    listaTeclas.forEach(tecla => {
        const instrumento = tecla.classList[1];
        const idAudio = `#som_${instrumento}`; //template string

        tecla.onclick = function () {
            tocaSom(idAudio);
        }
       
        tecla.onkeydown = function (evento) {
            if (evento.code === 'space' || evento.code === 'enter' || evento.code === 'NumpadEnter') {
                tecla.classList.add ('ativa');
    
            }
        };

        tecla.onkeyup = function () {
            tecla.classList.remove ('ativa');
        }
    });
