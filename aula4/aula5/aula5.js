        function saudacoes(nome) {
            return `Olá, ${nome}!`;
        }


        function mostrarSaudacao() {
            const nome = document.getElementById("nomeInput").value;
            const mensagem = saudacoes(nome);
            document.getElementById("mensagemSaudacao").innerText = mensagem;
        }
 