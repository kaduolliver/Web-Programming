//Anima��o da barra superior
const topBar = document.querySelector('.top-bar');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Define uma distância do topo para exibir a barra (ajuste conforme necessário)
    if (scrollTop < 100) {
        topBar.style.top = '0'; // Exibe a barra
    } else {
        topBar.style.top = '-100px'; // Esconde a barra
    }
});

const titulo = document.querySelector("h1");
titulo.textContent = "";

const title = "CredGuard";
const titleElement = document.getElementById("typing-title");
let index = 0;

function typeWriter() {
    if (index < title.length) {
        titleElement.innerHTML += title.charAt(index);
        index++;
        setTimeout(typeWriter, 200); // Velocidade da digita��o (100ms por letra)
    } else {
        titleElement.style.borderRight = "none"; // Remove o cursor no final
    }
}

typeWriter(); // Inicia a anima��o

//Altera��o dos n�meros ao apertar os 3 bot�es
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona os bot�es de r�dio
    const btnGarantia = document.getElementById('btnradio1');
    const btnPessoal = document.getElementById('btnradio2');
    const btnConsignado = document.getElementById('btnradio3');

    // Seleciona o input da taxa de juros
    const inputJuros = document.querySelector('.input-group.mb-3 input[type="text"]');

    // Adiciona os eventos de clique aos bot�es
    btnGarantia.addEventListener('click', function() {
        inputJuros.value = '1,50';
    });

    btnPessoal.addEventListener('click', function() {
        inputJuros.value = '9,60';
    });

    btnConsignado.addEventListener('click', function() {
        inputJuros.value = '1,80';
    });
});

//Bot�o dropdown da taxa de juros
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona o bot�o dropdown
    const dropdownButton = document.getElementById('dropdownButton');
    
    // Seleciona todos os itens do dropdown
    const dropdownItems = document.querySelectorAll('.dropdown-item');

    // Adiciona um evento de clique para cada item do dropdown
    dropdownItems.forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault(); // Evita o comportamento padr�o do link

            // Obt�m o valor do item clicado (Mensal ou Anual)
            const selectedValue = item.getAttribute('data-value');

            // Verifica se o valor foi capturado corretamente
            if (selectedValue) {
                // Atualiza o texto do bot�o com o valor selecionado
                dropdownButton.textContent = `% ${selectedValue}`;
            } else {
                console.error('Valor n�o encontrado no item do dropdown.');
            }
        });
    });
});

//Bot�es de + e -
document.querySelector('.minus').addEventListener('click', function() {
    let input = document.querySelector('.parcelas input');
    let value = parseInt(input.value);
    if (value > 1) {
        input.value = value - 1;
    }
});

document.querySelector('.plus').addEventListener('click', function() {
    let input = document.querySelector('.parcelas input');
    let value = parseInt(input.value);
    input.value = value + 1;
});

//Input de inserir valor
document.getElementById('valorInput').addEventListener('input', function(event) {
    let input = event.target;
    let valor = input.value.replace(/[^0-9]/g, ''); // Remove tudo que n�o � n�mero

    // Se o valor estiver vazio, define como "0,00"
    if (valor === '') {
        input.value = 'R$ 0,00';
        return;
    }

    // Garante que o valor tenha no m�ximo 2 casas decimais
    let valorFormatado = (Number(valor) / 100).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });

    // Atualiza o valor do campo de entrada
    input.value = valorFormatado;
});

// ... (c�digo anterior mantido inalterado)

// Bot�o Simular - C�lculo do Empr�stimo
document.querySelector('.simu').addEventListener('click', function() {
    // Captura dos valores do formul�rio
    const valorEmprestimo = parseFloat(
        document.getElementById('valorInput').value
        .replace(/[^\d,]/g, '')
        .replace('.', '')
        .replace(',', '.')
    ) || 0;

    const taxaJuros = parseFloat(
        document.querySelector('.input-group.mb-3 input').value
        .replace(',', '.')
    ) || 0;

    const tipoTaxa = document.getElementById('dropdownButton')
                    .textContent.includes('Anual') ? 'anual' : 'mensal';

    const parcelas = parseInt(
        document.querySelector('.parcelas input').value
    ) || 1;

    // C�lculo da taxa mensal efetiva
    let i = tipoTaxa === 'anual' 
           ? (taxaJuros / 12) / 100 
           : taxaJuros / 100;

    // C�lculo da presta��o
    let prestacao;
    if (i === 0) {
        prestacao = valorEmprestimo / parcelas;
    } else {
        const fator = Math.pow(1 + i, parcelas);
        prestacao = valorEmprestimo * (i * fator) / (fator - 1);
    }

    // C�lculos adicionais
    const totalPago = prestacao * parcelas;
    const juros = totalPago - valorEmprestimo;

    // Formata��o dos valores
    const formatoBRL = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });

    // Atualiza��o dos resultados
    const resultados = document.querySelectorAll('.custom-grid .custom-col');
    resultados[3].textContent = formatoBRL.format(prestacao);
    resultados[5].textContent = formatoBRL.format(totalPago);
    resultados[7].textContent = formatoBRL.format(valorEmprestimo);
    resultados[9].textContent = formatoBRL.format(juros);
});