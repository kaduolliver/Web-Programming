var area = document.getElementById('area');

//Declaração de variáveis
let nota1, nota2, nota3;

//Criação da função "entrada"
function entrada() {
    //Variáveis
    var nome = prompt("Informe seu nome: ");
    var curso = prompt("Informe o seu curso: ");

    //Condição para validar o que foi digitado nos campos "nome" e "curso"
    if (!nome || !curso) {
        alert("Ops, algo de errado não está certo!");
        area.innerHTML = "Clique no botão para acessar...";
    } else {
        area.innerHTML = `Bem-vindo, ${nome}, ao curso de ${curso}!`;

        // Cria um botão "Sair da conta"
        let botaoSair = document.createElement("button");
        botaoSair.innerText = "Sair da conta";
        botaoSair.onclick = sair;
        area.appendChild(botaoSair);

        // Solicita as notas após o login
        solicitarNotas();
    }
}

//Função solicitar notas
function solicitarNotas() {
    while (true) {
        nota1 = parseFloat(prompt("Digite a primeira nota:"));
        nota2 = parseFloat(prompt("Digite a segunda nota:"));
        nota3 = parseFloat(prompt("Digite a terceira nota:"));

        //Condição para válidar notas
        if (!isNaN(nota1) && !isNaN(nota2) && !isNaN(nota3)) {
            break; // Sai do loop apenas se todas as notas forem válidas
        }

        alert("Por favor, insira valores numéricos válidos para as notas.");
    }
    //Chama a função Calcular Media
    CalculaMedia();
}

//Função calcular media
function CalculaMedia() {
    var media = (nota1 + nota2 + nota3) / 3;

    alert(`Média: ${media.toFixed(2)}`);

    //Condição para avaliar se o aluno foi aprovado ou não
    if (media >= 7) {
        alert("Aluno aprovado!");
    } else {
        alert("Aluno reprovado!");
    }
}

//Função para sair do programa
function sair() {
    alert("Até mais, meu caro!");
    area.innerHTML = "Você saiu!";
}
