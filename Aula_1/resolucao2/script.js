var area = document.getElementById('area');

let nota1, nota2, nota3;

function entrada() {
    var nome = prompt("Informe seu nome: ");
    var curso = prompt("Informe o seu curso: ");
    
    if (!nome || !curso) {
        alert("Ops, algo de errado n�o est� certo!");
        area.innerHTML = "Clique no bot�o para acessar...";
    } else {
        area.innerHTML = `Bem-vindo, ${nome}, ao curso de ${curso}!`;

        // Cria um bot�o "Sair da conta"
        let botaoSair = document.createElement("button");
        botaoSair.innerText = "Sair da conta";
        botaoSair.onclick = sair;
        area.appendChild(botaoSair);

        // Solicita as notas ap�s o login
        solicitarNotas();
    }
}

function solicitarNotas() {
    while (true) {
        nota1 = parseFloat(prompt("Digite a primeira nota:"));
        nota2 = parseFloat(prompt("Digite a segunda nota:"));
        nota3 = parseFloat(prompt("Digite a terceira nota:"));

        if (!isNaN(nota1) && !isNaN(nota2) && !isNaN(nota3)) {
            break; // Sai do loop apenas se todas as notas forem v�lidas
        }
        
        alert("Por favor, insira valores num�ricos v�lidos para as notas.");
    }

    CalculaMedia();
}

function CalculaMedia() {
    var media = (nota1 + nota2 + nota3) / 3;

    alert(`M�dia: ${media.toFixed(2)}`);

    if (media >= 7) {
        alert("Aluno aprovado!");
    } else {
        alert("Aluno reprovado!");
    }
}

function sair() {
    alert("At� mais, meu caro!");
    area.innerHTML = "Voc� saiu!";
}
