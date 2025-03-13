const topBar = document.querySelector('.top-bar');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Define uma dist√¢ncia do topo para exibir a barra (ajuste conforme necess√°rio)
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
        setTimeout(typeWriter, 200); // Velocidade da digitaÁ„o (100ms por letra)
    } else {
        titleElement.style.borderRight = "none"; // Remove o cursor no final
    }
}

typeWriter(); // Inicia a animaÁ„o