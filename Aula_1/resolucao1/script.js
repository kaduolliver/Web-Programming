document.getElementById('numeroForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio do formul�rio
    // Obt�m o valor do n�mero digitado
    const numero = parseFloat(document.getElementById('numero').value);
    // Chama a fun��o para calcular o quadrado
    const resultado = calcularQuadrado(numero);
    // Exibe o resultado na p�gina
    document.getElementById('resultado').textContent = resultado;
});
function calcularQuadrado(numero) {
    return numero * numero;
}

