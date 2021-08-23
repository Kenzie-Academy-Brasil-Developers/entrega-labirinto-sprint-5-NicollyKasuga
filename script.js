const map = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW",
];
const body = document.querySelector('body');
const container = document.createElement('div');
container.classList.add('container')
body.appendChild(container);


for(let i = 0; i < map.length; i++){
    const linhaDiv = document.createElement('div');
    linhaDiv.classList.add('linhaDiv')
    container.appendChild(linhaDiv);
    for(let j = 0; j< map[0].length; j++){
        if(map[i][j] === 'W'){
          const parede = document.createElement('div')
          parede.classList.add('parede');
          linhaDiv.appendChild(parede);
        }
        else if(map[i][j] === ' '){
            const espaco = document.createElement('div')
            espaco.classList.add('espaco');
            linhaDiv.appendChild(espaco);
        }
        else if(map[i][j] === 'S'){
            const comeco = document.createElement('div')
            const jogador = document.createElement('div')
            jogador.classList.add('jogador')
            comeco.appendChild(jogador)
            comeco.classList.add('comeco');
            linhaDiv.appendChild(comeco);
        }
        else if(map[i][j] === 'F'){
            const final = document.createElement('div')
            final.classList.add('final');
            linhaDiv.appendChild(final);
        }
    }
}

function posicao_inicial() {
    for (let i = 0; i < map.length; i++) {
      for (let j = 0; j < map[i].length; j++) {
        if (map[i][j] === "S") {
          return [i, j];
        }
      }
    }
  }
  let funcao = posicao_inicial();
  let i = funcao[0];
  let j = funcao[1];
  let boxTop = 0;
  let boxLeft = 0;
  let jogada = document.querySelector(".jogador");
  document.addEventListener("keydown", (event) => {
    const keyName = event.key;
    if (keyName === "ArrowRight") {
      if (map[i][j + 1] !== "W") {
        j += 1;
        boxLeft += 50;
        jogada.style.left = boxLeft + "px";
      }
    } else if (keyName === "ArrowLeft") {
      if (map[i][j - 1] !== "W") {
        j -= 1;
        boxLeft -= 50;
        jogada.style.left = boxLeft + "px";
      }
    } else if (keyName === "ArrowDown") {
      if (map[i + 1][j] !== "W") {
        i += 1;
        boxTop += 50;
        jogada.style.top = boxTop + "px";
      }
    } else if (keyName === "ArrowUp") {
      if (map[i - 1][j] !== "W") {
        i -= 1;
        boxTop -= 50;
        jogada.style.top = boxTop + "px";
      }
    }
  });