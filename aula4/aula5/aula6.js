 function mostrarCalculo() {
    const input = document.getElementById("numeroInput").value;
    const numero = Number(input);

    if (isNaN(numero)) {
        document.getElementById("mostrarCalculo").innerText = "Por favor, digite um número válido!";
        return;
    }

    const dobro = numero * 2;
    document.getElementById("mostrarCalculo").innerText = `O dobro de ${numero} é ${dobro}.`;
}

