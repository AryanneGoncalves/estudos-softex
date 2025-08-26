let notasAlunos = [
    [9, 8, 6], // Aluno 1
    [9, 5, 8], // Aluno 2
    [6, 7, 7], // Aluno 3
    [5, 6, 4]  // Aluno 4
];

const tabela = document.querySelector("#tabelaNotas tbody");

for (let i = 0; i < notasAlunos.length; i++) {
    let linha = document.createElement("tr");

    //  aluno
    let celAluno = document.createElement("td");
    celAluno.textContent = `Aluno ${i + 1}`;
    linha.appendChild(celAluno);

    // notas + soma
    let soma = 0;
    for (let j = 0; j < notasAlunos[i].length; j++) {
        let celNota = document.createElement("td");
        celNota.textContent = notasAlunos[i][j];
        linha.appendChild(celNota);
        soma += notasAlunos[i][j];
    }

    // média
    let media = soma / notasAlunos[i].length;
    let celMedia = document.createElement("td");
    celMedia.textContent = media.toFixed(2);
    linha.appendChild(celMedia);

    // final
    let celSituacao = document.createElement("td");
    celSituacao.textContent = media >= 7 ? "Aprovado" : "Reprovado";
    linha.appendChild(celSituacao);

    tabela.appendChild(linha);
}
