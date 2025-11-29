const pagina = document.getElementById("pagina");
const ano = document.getElementById("ano");
const todos = document.getElementById("todos");
var teste = 0;//para a questão 8 onde é preciso clicar em 2 segundos
var teste2 = 0;//para a questão 44 onde tem um alarme quando chega nela pela 3ª vez
var nome;//para validar o nome na questão 4
var pular3 = 0;//para o usuário não precisar digitar seu nome muitas vezes
function Recomecar() {
    pagina.innerHTML = `<h1>Você errou</h1>
  <button onclick = "Questao1()">Recomeçar</button>`;
    ano.innerHTML = `2025`
}
function Err1() {
    pagina.innerHTML = `<h1>Volte quando estiver pronto</h1>
  <button onclick = "Questao2()">Agora estou pronto</button>`;
    ano.innerHTML = `2025`
}
function Questao1() {
    pagina.innerHTML = `<h1 id="q"><span class="nq">1.</span> Você está pronto?</h1><br>
<div><button onclick = "Questao2()">SIM</button>
<button onclick="Err1()">NÃO</button></div>`;
}
function Questao2() {
    pagina.innerHTML = `<h1 id="q"><span class="nq" onclick = "Questao3()">2.</span> Quantas cores tem a bandeira da polônia?</h1><br>
<div><button onclick="Recomecar()">1</button>
<button onclick="Recomecar()">3</button></div>
<div><button onclick="Recomecar()">5</button>
<button onclick="Recomecar()">8</button></div>`;
}
function Questao3() {
    if (pular3 === 0) {
        //Essa questão pergunta o nome do jogador, mas só é preciso responder uma vez
        pagina.innerHTML = `<h1 id="q"><span class="nq">3.</span> Qual o seu nome?</h1><br>
  <div><input id="nome" placeholder="Seu nome"></input>
  <button onclick="Questao4()">Confirmar</buttton></div>`;
        pular3 = 1;
    } else {
        //Questão 4 quando a 3 é pulada
        pagina.innerHTML = `<h1 id="q"><span class="nq">4.</span> Qual é melhor?</h1><br>
<div><img onclick="Recomecar()" src = "cachorro-quente.png">
<img onclick="Recomecar()" src="Sushi.png"></div>
<div><img onclick="Questao5()" src = "hamburguer.png">
<img onclick="Recomecar()" src="Espaguete.png"></div>`;
    }
}
function Questao4() {
    nome = document.querySelector("input#nome").value;
    const pagina = document.getElementById("pagina");
    //A linha acima memoriza o nome do usuário
    pagina.innerHTML = `<h1 id="q"><span class="nq">4.</span> Qual é melhor?</h1><br>
<div><img onclick="Recomecar()" src = "cachorro-quente.png">
<img onclick="Recomecar()" src="Sushi.png"></div>
<div><img onclick="Questao5()" src = "hamburguer.png">
<img onclick="Recomecar()" src="Espaguete.png"></div>`;
}
function Questao5() {
    pagina.innerHTML = `<h1 id="q"><span class="nq" onclick>5.</span> Qual o resultado?</h1><br>
    <h2>(48 + 27)7 - 50 =</h2><br>
<div><button onclick="Recomecar()">625</button>
<button onclick="Questao6()">475</button></div>
<div><button onclick="Recomecar()">525</button>
<button onclick="Recomecar()">575</button></div>`;
}
function Questao6() {
    pagina.innerHTML = `<h1 id="q"><span class="nq" onclick>6.</span> Em que ano papa Francisco morreu?</h1><br>
<div><button onclick="Recomecar()">2019</button>
<button onclick="Recomecar()">2021</button></div>
<div><button onclick="Recomecar()">2022</button>
<button onclick="Recomecar()">2023</button></div>`;
    //A resposta é o ano que foi pruduzido o jogo: 2025
    ano.innerHTML = `<span onclick="Questao7()">2025</span>`;
}
function Questao7() {
    ano.innerHTML = `2025`
    pagina.innerHTML = `<h1 id="q"><span class="nq" onclick>7.</span> Quem descobriu o Brasil?</h1><br>
<div><button onclick="Recomecar()">Os portugueses</button>
<button onclick="Recomecar()">Os indigenas</button></div>
<div><button onclick="Recomecar()">Os animais</button>
<button onclick="Questao8()">O Brasil nunca esteve coberto</button></div>`;
}
function Questao8() {
    teste = 0;
    setTimeout(function () {
        if (teste === 1) {
            teste = 0;
        } else {
            Questao1();
        }
    }, 2000);
    pagina.innerHTML = `
    <h1 id="q"><span class="nq">8.</span> Clique em 2 segundos:</h1>
    <button onclick="Questao9(teste)">Passar</button>
  `;
    //Foi o jeito que eu encontrei de verificar se o jogador clicou a tempo
}
function Questao9() {
    teste = 1;
    pagina.innerHTML = `<h1 id="q"><span class="nq">?.</span> Qual o número da questão?</h1><br>
<div><button onclick="Recomecar()">10</button>
<button onclick="Recomecar()">12</button></div>
<div><button onclick="Recomecar()">8</button>
<button onclick="Questao10()">9</button></div>`;
}
function Questao10() {
    pagina.innerHTML = `<h1 id="q"><span class="nq">10. </span> Qual fruta envenenou a Branca de Neve?</h1><br>
<div><button onclick="Questao11()">Maçã</button>
<button onclick="Recomecar()">Banana</button></div>
<div><button onclick="Recomecar()">Pera</button>
<button onclick="Recomecar()">Limão</button></div>`;
}
function Questao11() {
    pagina.innerHTML = `<h1 id="q"><span class="nq">11. </span> Qual dessas empresas é maior?</h1><br>
<div><button onclick="Recomecar()">Apple</button>
<button onclick="Recomecar()">Microsoft</button></div>
<div><button onclick="Questao12()">NVidea</button>
<button onclick="Recomecar()">Amazon</button></div>`;
}
function Questao12() {
    pagina.innerHTML = `<img src="arvores.jpg">`;
    setTimeout(function () {
        pagina.innerHTML = `<h1 id="q"><span class="nq">12. </span> Quantas árvores tinha na imagem?</h1><br>
<div><button onclick="Recomecar()">20</button>
<button onclick="Recomecar()">15</button></div>
<div><button onclick="Questao14()">18</button>
<button onclick="Recomecar()">25</button></div>`;
    }, 2000);
}
function Questao14() {
    pagina.innerHTML = `<h1 id="q"><span class="nq" onclick="Recomecar()">14. </span> Qual desses números é maior?</h1><br>
<div><button onclick="Recomecar()">0</button>
<button onclick="Recomecar()">1</button></div>
<div><button onclick="Recomecar()">4</button>
<button onclick="Recomecar()">10</button></div>`
    ano.innerHTML = `<span onclick = "Questao15()">2025</sapn>`;
}
let maze = [
    [0, 1, 0, 0, 0],
    [0, 1, 0, 1, 0],
    [0, 0, 0, 1, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 1, 0]
];
let px = 0, py = 0; // posição do jogador
const gx = 4, gy = 4;      // objetivo (final)
let venceu = false;
function update(key) {
    if (venceu) return; // trava após vitória
    // tenta mover
    let nx = px, ny = py;
    if (key === "ArrowUp") ny--;
    if (key === "ArrowDown") ny++;
    if (key === "ArrowLeft") nx--;
    if (key === "ArrowRight") nx++;
    // verifica se não bateu na parede
    if (maze[ny] && maze[ny][nx] === 0) {
        px = nx; py = ny;
    }
    if (px === gx && py === gy) {
        venceu = true;
        Questao16();
    }
    // redesenha
    const div = document.getElementById("maze");
    div.innerHTML = "";
    for (let y = 0; y < 5; y++) {
        for (let x = 0; x < 5; x++) {
            const c = document.createElement("div");
            c.className = "cell" + (maze[y][x] ? " wall" : "");
            if (x === px && y === py) c.classList.add("player");
            div.appendChild(c);
        }
    }
}
document.addEventListener("keydown", e => update(e.key));
function Questao15() {
    ano.innerHTML = `2025`
    pagina.innerHTML = `<h1 id="q"><span class="nq">15.</span> Labirinto</h1>
    <div id="maze"></div>`
    // desenha primeira vez
    update();
}
function Questao16() {
    pagina.innerHTML = `<h1 id="q"><span class="nq">16. </span> Quem foi o artista reponsável pelos primeiros experimentos com a monotipia na Itália?</h1><br>
<div><button onclick="Recomecar()">Leonardo da Vinci</button>
<button onclick="Recomecar()">Michelangelo</button></div>
<div><button onclick="Questao17()">Giovanni Benedetto Castigione</button>
<button onclick="Recomecar()">Sandro Botticelli</button></div>`;
}
function Questao17() {
    pagina.innerHTML = `<h1 id="q"><span class="nq">17. </span> Onde estará a resposta da questão 40?</h1><br>
<div><button onclick="Recomecar()">Aqui</button>
<button onclick="Recomecar()"><- Ali</button></div>
<div><button onclick="Recomecar()">Em cima</button>
<button onclick="Questao18()">Aqui</button></div>`;
    //Por incrivél que pareça essa questão é de logica
}
function Questao18() {
    pagina.innerHTML = `<h1 id="q"><span class="nq">18.</span> Qual dessas empresas pertence ao Elon Musk?</h1>
<div><button onclick="Questao19()">Tesla</button>
<button onclick="Recomecar()">Apple</button></div>
<div><button onclick="Recomecar()">Microsoft</button>
<button onclick="Recomecar()">Meta</button></div>`;
}
function Questao19() {
    pagina.innerHTML = `<h1 id="q"><span class="nq">19.</span> Quem tem 6 bilhões de doláres?</h1>
<div><button onclick="Recomecar()">Elon Musk</button>
<button onclick="Recomecar()">Donald Trump</button></div>
<div><button onclick="Recomecar()">Vladimir Putin</button>
<button onclick="Recomecar()">Mark Zukerberg</button></div>`;
    todos.innerHTML = `<span onclick="Questao20()">Todos</span>`;
    //A resposta correta é o "Todos" no rodapé
}
function Questao20() {
    pagina.innerHTML = `<h1 id="q"><span class="nq">20.</span> A declaração de direitos humanos é um texto:</h1>
<div><button onclick="Recomecar()">tecnico</button>
<button onclick="Recomecar()">literário</button></div>
<div><button onclick="Questao21()">normativo</button>
<button onclick="Recomecar()">científico</button></div>`;
}
function Questao21() {
    pagina.innerHTML = `<h1 id="q"><span class="nq" onclick="Recomecar">21.</span> Para qual questão deseja ir?</h1>
<div><button onclick="Questao10()">10</button>
<button onclick="Questao9()">9</button></div>
<div><button onclick="Questao18()">18</button>
<button onclick="Questao23()">23</button></div>`;
}
function Questao23() {
    pagina.innerHTML = `<h1 id="q"><span class="nq" onclick="Recomecar">23.</span> Quanto anos durou a guerra fria?</h1>
<div><button onclick="Recomecar()">37</button>
<button onclick="Recomecar()">19</button></div>
<div><button onclick="Recomecar()">1</button>
<button onclick="Questao24()">44</button></div>`;
}
function Questao24() {
    pagina.innerHTML = `<h1 id="q"><span class="nq">24.</span> Clique na <span onclick="Questao25()">virgula,</span></h1>
<span onclick="Recomecar()"><div><b class="trinta">. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .</div> <div>. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .</div> <div>. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .</div> <div>. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .</div> <div> . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .</b></div> </span>`;
}
function Questao25() {
    pagina.innerHTML = `<h1 id="q"><span class="nq">25.</span> Que dia foi encontrada a imagem de nossa Senhora Aparecida no rio Paraíba do sul?</h1>
<div><button onclick="Recomecar()">3/12/1803</button>
<button onclick="Questao26()">12/10/1717</button></div>
<div><button onclick="Recomecar()">20/4/1879</button>
<button onclick="Recomecar()">3/1/1932</button></div>`;
}
function Questao26() {
    pagina.innerHTML = `<h1 id="q"><span class="nq" onclick="Recomecar">26.</span> Como <span onclick="Questao27()">correr</span> de um leão?</h1>
<div><button onclick="Recomecar()">Lutar</button>
<button onclick="Recomecar()">Matar</button></div>
<div><button onclick="Recomecar()">Morrer</button>
<button onclick="Recomecar()">Voar</button></div>`;
    //A resposta é o correr no enunciado
}
function Questao27() {
    pagina.innerHTML = `<h1 id="q"><span class="nq">27.</span> Quem é o atual campeão de xadrez?</h1>
<div><button onclick="Recomecar()">Garry Kasparov</button>
<button onclick="Questao28()">Magnus Carsen</button></div>
<div><button onclick="Recomecar()">Bob Ficher</button>
<button onclick="Recomecar()">Rafael</button></div>`;
}
function Questao28() {
    pagina.innerHTML = `<h1 id="q"><span class="nq">28.</span> Quem dessas pessoas foi curada pelo arcanjo Rafael?</h1>
<div><button onclick="Questao29()">Sara</button>
<button onclick="Recomecar()">Maria</button></div>
<div><button onclick="Recomecar()">Abraão</button>
<button onclick="Recomecar()">Moiséis</button></div>`;
}
function Questao29() {
    pagina.innerHTML = `<h1 id="q"><span class="nq">?.</span> Qual o número da próxima questão?</h1>
<div><button onclick="Recomecar()">29</button>
<button onclick="Recomecar()">28</button></div>
<div><button onclick="Questao30()">30</button>
<button onclick="Recomecar()">35</button></div>`;
}
function Questao30() {
    pagina.innerHTML = `<h1 id="q"><span class="nq">30.</span> Qual é o elemento químico cujo símbolo é W??</h1>
<div><button onclick="Questao31()">Tungstênio</button>
<button onclick="Recomecar()">Tálio</button></div>
<div><button onclick="Recomecar()">Titânio</button>
<button onclick="Recomecar()">Tântalo</button></div>`;
}
function Questao31() {
    pagina.innerHTML = `<h1 id="q"><span class="nq">31.</span> Qual é o único número natural que é igual ao seu próprio inverso multiplicativo?</h1>
<div><button onclick="Recomecar()">0</button>
<button onclick="Questao32()">1</button></div>
<div><button onclick="Recomecar()">-1</button>
<button onclick="Recomecar()">e</button></div>`;
}
function Questao32() {
    pagina.innerHTML = `<h1 id="q"><span class="nq" onclick="Recomecar()">32.</span> Quantos anos tem o Vini Jr?</h1>
<div><button onclick="Recomecar()">30</button>
<button onclick="Recomecar()">22</button></div>
<div><button onclick="Questao33()">25</button>
<button onclick="Recomecar()">27</button></div>`;
}
function Questao33() {
    pagina.innerHTML = `<h1 id="q"><span class="nq">33.</span> Qual questão foi pulada?</h1>
<div><button onclick="Questao34()">13</button>
<button onclick="Recomecar()">9</button></div>
<div><button onclick="Recomecar()">17</button>
<button onclick="Recomecar()">21</button></div>`;
}
function Questao34() {
    pagina.innerHTML = `<h1 id="q"><span class="nq">34.</span> Aonde aconteceu as primeiras olimpiadas?</h1>
<div><button onclick="Recomecar()">Brasil</button>
<button onclick="Recomecar()">Protugal</button></div>
<div><button onclick="Recomecar()">Roma</button>
<button onclick="Questao35()">Grécia</button></div>`;
}
function Questao35() {
    pagina.innerHTML = `<h1 id="q"><span class="nq">35.</span> Qual o próximo número da sequência:</h1>
<h2>1, 1, 2, 6, 24, 120, 720...</h2>
<div><button onclick="Recomecar()">721</button>
<button onclick="Questao36()">5040</button></div>
<div><button onclick="Recomecar()">4320</button>
<button onclick="Recomecar()">1200</button></div>`;
}
function Questao36() {
    pagina.innerHTML = `<h1 id="q"><span class="nq">36.</span> Como se escreve "Olá, mundo!" em JavaScript?</h1>
<div><button onclick="Questao37()">Console.log("Olá, mundo!")</button>
<button onclick="Recomecar()">print("Olá, mundo")</button></div>
<div><button onclick="Recomecar()">Olá, mundo!</button>
<button onclick="Recomecar()">DESISTIR</button></div>`;
}
function Questao37() {
    pagina.innerHTML = `<h1 id="q"><span class="nq">37.</span> Em que mês esse jogo foi lançado?</h1>
<div><button onclick="Recomecar()">Setembro</button>
<button onclick="Recomecar()">Outubro</button></div>
<div><button onclick="Questao38()">Novembro</button>
<button onclick="Recomecar()">Dezembro</button></div>`;
}
function Questao38() {
    pagina.innerHTML = `<h1 id="q"><span class="nq">38.</span> Quantos itens tem no minecraft?</h1>
<div><button onclick="Recomecar()">1582</button>
<button onclick="Recomecar()">1000000</button></div>
<div><button onclick="Recomecar()">580</button>
<button onclick="Questao39()">Mais de 2000</button></div>`;
}
function Questao39() {
    pagina.innerHTML = `<h1 id="q"><span class="nq">39.</span> Qual o rei do Reino Unido?</h1>
<div><button onclick="Recomecar()">Lula</button>
<button onclick="Recomecar()">Bolsonaro</button></div>
<div><button onclick="Questao40()">Charles</button>
<button onclick="Recomecar()">Elizabeth II</button></div>`;
}
function Questao40() {
    pagina.innerHTML = `<h1 id="q"><span class="nq">40. </span> Onde estava a resposta da questão 17?</h1>
<div><button onclick="Recomecar()">Aqui</button>
<button onclick="Recomecar()">Aqui</button></div>
<div><button onclick="Recomecar()">Aqui</button>
<button onclick="Questao41()">Aqui</button></div>`;
}
function Questao41() {
    pagina.innerHTML = `<h1 id="q"><span class="nq">41.</span> Qual outra questão foi pulada?</h1>
<div><button onclick="Recomecar()">13</button>
<button onclick="Recomecar()">16</button></div>
<div><button onclick="Questao42()">22</button>
<button onclick="Recomecar()">38</button></div>`;
}
function Questao42() {
    pagina.innerHTML = `<h1>Clique no <span onclick="Questao43()">quadrado</span>!</h1>
<div id="game-area">
    <div id="target"></div>
</div>`
    jogar();
    // mover automaticamente a cada 700ms
    setInterval(jogar, 700);
}
// Função que move o quadrado e controla o jogo
function jogar() {
    const game = document.getElementById("game-area");
    const t = document.getElementById("target");
    // mudar posição aleatória
    let maxX = game.clientWidth - t.clientWidth;
    let maxY = game.clientHeight - t.clientHeight;
    t.style.left = Math.random() * maxX + "px";
    t.style.top = Math.random() * maxY + "px"
}
function Questao43() {
    pagina.innerHTML = `<h1 id="q"><span class="nq" onclick = "Questao45()">43.</span> Quantos dias dura a quaresma?</h1>
<div><button onclick="Recomecar()">35</button>
<button onclick="Questao44()">40</button></div>
<div><button onclick="Recomecar()">46</button>
<button onclick="Recomecar()">400</button></div>`;
    //A resposta certa é 43 (o número da questão), clicando certo o jogador já pula para a 45, mas clicando em 40 o jogador cai na quetão 44 (uma trolagem)
}
function Questao44() {
    //Essa questão é uma trolagem e não tem resposta correta
    teste2 = teste2 + 1;
    pagina.innerHTML = `<h1 id="q"><span class="nq">44. </span> Em que país esse jogo foi produzido?</h1>
<div><button onclick="Recomecar()">EUA</button>
<button onclick="Recomecar()">França</button></div>
<div><button onclick="Recomecar()">Egito</button>
<button onclick="Recomecar()">Argentina</button></div>`;
    if (teste2 > 0) {
        alert("Você errou a questão!");
    }
    if (teste2 > 2) {
        pagina.innerHTML = `<h1 id="q"><span class="nq">44. </span> A questão anterior está errada.</h1>
<div><button onclick="Questao43()">Voltar</button>
<button onclick="Recomecar()">Recomeçar</button></div>
<div><button onclick="Recomecar()">Desistir</button>
<button>Fazer nada</button></div>`
    }
}
function Questao45() {
    pagina.innerHTML = `<h1 id="q"><span class="nq">45. </span> Quando acabou a guerra dos canudos?</h1>
<div><button onclick="Recomecar()">8/6/1897</button>
<button onclick="Recomecar()">26/2/1899</button></div>
<div><button onclick="Recomecar()">18/1/1897</button>
<button onclick="Questao46()">5/10/1897</button></div>`;
}
function Questao46() {
    pagina.innerHTML = `<h1 id="q"><span class="nq">46.</span> Qual meu nome completo?</h1>
<button onclick="Recomecar()">Rafael Pinheiro Gomes</button>
<button onclick="Recomecar()">Joaquim Antônio José Silva</button>
<button onclick="Questao47()">Rafael Luiz Pereira Gomes</button>
<button onclick="Recomecar()">Rafael Pereira Luiz Gomes</button>`;
}
function Questao47() {
    pagina.innerHTML = `<h1 id="q"><span class="nq">47.</span> Leia o texto para responder a pergunta:</h1>
<p>Lucas acordou no meio da noite com um barulho metálico vindo da sala. Meio assustado, levantou devagar, pegou o celular como lanterna e caminhou até lá. No chão, bem no centro, havia uma pequena chave dourada que ele nunca tinha visto.</p>
<p>Quando a tocou, a chave esquentou e uma luz azul se abriu como uma porta no ar. Do outro lado, uma voz suave chamou:</p>
<p>— Está pronto para descobrir quem realmente é?</p>
</p>Lucas respirou fundo, deu um passo à frente… e a porta se fechou atrás dele.</p>
<p>No sofá da sala, apenas a chave ficou — agora completamente fria.</p><button onclick="Pergunta()">Texto lido</button>`;
}
function Pergunta() {
    //Essa é a pergunta da 47 que pra responder o jogador "precisa" ler o texto
    pagina.innerHTML = `<h1 id="q"><span class="nq">47.</span> Quanto é 5 + 5?</h1>
<div><button onclick="Questao48()">10</button>
<button onclick="Recomecar()">8</button></div>
<div><button onclick="Recomecar()">17</button>
<button onclick="Recomecar()">4²</button></div>`
}
function Questao48() {
    pagina.innerHTML = `<h1 id="q"><span class="nq">48.</span> ${nome}, depois de isso tudo você ainda continua gostando de mim?</h1>
<div><button onclick="Questao49()">Sim</button>
<button onclick="Questao49()">Não</button></div>`;
}
function Questao49() {
    pagina.innerHTML = `<h1 id="q"><span class="nq">49.</span> Qual desses jogos é melhor?</h1>
<div><button onclick="Recomecar()">GênioQuiz</button>
<button onclick="Recomecar()">Terraria</button></div>
<div><button onclick="Questao50()">Minecraft</button>
<button onclick="Recomecar()">Esse</button></div>`;
}
function Err50() {
    pagina.innerHTML = `<h1 id="q">Se você tá falando...</h1>
  <button onclick = "Questao1()">Recomeçar</button>`;
    ano.innerHTML = `2025`
}
function Questao50() {
    pagina.innerHTML = `<h1 id="q"><span class="nq">50.</span> ${nome}, você se acha merecedor de zerar esse jogo?</h1><br>
<div><button onclick = "TFinal()">SIM</button>
<button onclick="Err50()">NÃO</button></div>`;
}
function TFinal() {
    pagina.innerHTML = `<h1 id="q">Parabéns ${nome}, você conseguiu zerar QuizLogic, o que prova que você é um gênio
<h2>Obrigado por jogar</h2>
<a href="creditos.html"><button>Créditos</button></a>
<a href="index.html"><button>Menu</button></a>
    `
}