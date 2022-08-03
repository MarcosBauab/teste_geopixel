// Tomamos a bolinha e o ambiente em que ela está inserida
var bolinha = document.querySelector("div#bolinha1")
var ambiente = document.querySelector("div#ambiente")
// Quando o mouse entra no ambiente e depois na bolinha, a bolinha se move
ambiente.addEventListener("mouseenter", (event) => {

    bolinha.addEventListener("mouseenter", function(e) {
        // Números aleatórios para a bolinha se mover, em porcentagem
        // números de 0 a 90, pois 90 considera o tamanho da bolinha
        let num = Math.floor(Math.random() * 91)
        let num2 = Math.floor(Math.random() * 91)
        bolinha.style.left = num + "%"
        bolinha.style.top = num2 + "%";

    })

})