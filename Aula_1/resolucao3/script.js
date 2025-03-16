const topBar = document.querySelector('.top-bar');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Define uma distÃ¢ncia do topo para exibir a barra (ajuste conforme necessÃ¡rio)
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
        setTimeout(typeWriter, 200); // Velocidade da digitação (100ms por letra)
    } else {
        titleElement.style.borderRight = "none"; // Remove o cursor no final
    }
}

typeWriter(); // Inicia a animação

document.addEventListener('DOMContentLoaded', function() {
    // Seleciona o botão dropdown
    const dropdownButton = document.getElementById('dropdownButton');
    
    // Seleciona todos os itens do dropdown
    const dropdownItems = document.querySelectorAll('.dropdown-item');

    // Adiciona um evento de clique para cada item do dropdown
    dropdownItems.forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault(); // Evita o comportamento padrão do link

            // Obtém o valor do item clicado (Mensal ou Anual)
            const selectedValue = item.getAttribute('data-value');

            // Verifica se o valor foi capturado corretamente
            if (selectedValue) {
                // Atualiza o texto do botão com o valor selecionado
                dropdownButton.textContent = `% ${selectedValue}`;
            } else {
                console.error('Valor não encontrado no item do dropdown.');
            }
        });
    });
});

//Botões de + e -
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
    let valor = input.value.replace(/[^0-9]/g, ''); // Remove tudo que não é número

    // Se o valor estiver vazio, define como "0,00"
    if (valor === '') {
        input.value = 'R$ 0,00';
        return;
    }

    // Garante que o valor tenha no máximo 2 casas decimais
    let valorFormatado = (Number(valor) / 100).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });

    // Atualiza o valor do campo de entrada
    input.value = valorFormatado;
});