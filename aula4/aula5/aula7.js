function somar(a, b) {
      return a + b;
    }

    function subtrair(a, b) {
      return a - b;
    }

    function multiplicar(a, b) {
      return a * b;
    }

    function dividir(a, b) {
      if (b !== 0) {
        return a / b;
      } else {
        return "Erro: divisão por zero";
      }
    }

    function calcular() {
      let a = parseFloat(document.getElementById("num1").value);
      let b = parseFloat(document.getElementById("num2").value);

      let texto = `
        Soma: ${somar(a, b)} <br>
        Subtração: ${subtrair(a, b)} <br>
        Multiplicação: ${multiplicar(a, b)} <br>
        Divisão: ${dividir(a, b)}
      `;

      document.getElementById("resultado").innerHTML = texto;
    }
 