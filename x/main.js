// Simulando a atualização fictícia do ranking
const novoRanking = [
  { nome: "CONEXÃO EM CRISTO", pontos: 1600 },
  { nome: "MENSAGEIROS DA ESPERANÇA", pontos: 1400 },
  { nome: "ATALAIAS DO REI", pontos: 1200 },
  { nome: "GERAÇÃO 7", pontos: 500 },  // Corrigindo a pontuação
  { nome: "FRUTOS DA CRUZ", pontos: 600 },
  { nome: "HB11", pontos: 600 },
  { nome: "JADS", pontos: 400 },
  { nome: "REMIDOS", pontos: 300 },
  { nome: "FILHOS DO REI", pontos: 200 },
  { nome: "HERDEIROS DA COROA", pontos: 100 },
];

const rankingAtual = document.getElementById("ranking-list");

// Detectando mudanças na pontuação e posição
for (let i = 0; i < novoRanking.length; i++) {
  const novoItem = novoRanking[i];
  const itemAtual = rankingAtual.children[i];

  if (novoItem.nome === itemAtual.querySelector("p").innerText) {
    const pontosAtual = parseInt(itemAtual.querySelector(".revenue").innerText);

    if (novoItem.pontos !== pontosAtual) {
      // Adicionando uma classe de animação para elementos que mudaram de posição
      itemAtual.classList.add("troca-de-posicao");
    }
  }
}

// Atualizando o HTML com o novo ranking (simulação)
rankingAtual.innerHTML = "";
novoRanking.forEach((item, index) => {
  const li = document.createElement("li");
  li.innerHTML = `<span>${index + 1}</span>
                   <img src="./assets/pato.gif" alt="" srcset="" />
                   <p data-name>${item.nome}</p>
                   <span data-revenue class="revenue">${item.pontos}</span>`;
  rankingAtual.appendChild(li);
});

// Agora, a classe "troca-de-posicao" pode ser usada no seu CSS para adicionar a animação desejada
