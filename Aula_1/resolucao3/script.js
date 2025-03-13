const topBar = document.querySelector('.title');

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
titulo.textContent = "CrediGuard";

const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})
