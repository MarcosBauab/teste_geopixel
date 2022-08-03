// O vetor de produtos começa com um inicial
var produtosArray = ['Arroz']
// Pressionando a tecla enter, adiciona o elemento
window.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        add()
    }
});
// Adiciona o elemento ao vetor de produtos
function add(){
    // Checa erros, se for 0 não tem erro
    let erro = 0

    let inputText = document.getElementById("textoInserir")
    // Checa se o campo está vazio
    if(inputText.value == 0){
        window.alert("Preencha o campo de texto")
        return
    }
    // Checa se o produto já existe no vetor
    produtosArray.forEach(value => {
        
        if(value == inputText.value){
            window.alert("Produto já inserido")
            inputText.value = ""
            erro = 1
        }

    })

    if(erro == 1)
        return
    // Adiciona o produto ao vetor
    produtosArray.push(inputText.value)
    
    let select = document.querySelector("select#opts")

    // Cria o elemento option e faz o append dele singularmente
    const option = document.createElement('option')
    option.value = inputText.value
    option.innerHTML = inputText.value
    select.appendChild(option)

    // Limpa o campo de texto e foca nele
    inputText.value = ""
    inputText.focus()
    // Comunica que o produto foi inserido com sucesso
    window.alert("Produto inserido com sucesso")

}

function selecionou(){
    // Insere o texto selecionado no select no parágrafo
    let paragrafo = document.getElementById("recebe")
    let select = document.querySelector("select#opts")

    paragrafo.innerHTML = select.options[select.selectedIndex].innerText

}

function remove(){
    // Checa se o elemento existe
    let existe = 0
    // Checa se o elemento existe no vetor
    produtosArray.forEach(value => {
        
        if(value == document.getElementById("textoInserir").value){
            produtosArray.splice(produtosArray.indexOf(value), 1)
            existe = 1
        }

    })
    // Se não existe, retorna um alerta
    if(existe == 0){
        window.alert("Produto não encontrado")
        document.getElementById("textoInserir").value = ""
        return
    }

    let select = document.querySelector("select#opts")
    // Inicia o select
    select.innerHTML = `
            <option value="placeholder" disabled>Selecione uma opção</option>
            `
    // Adiciona os produtos atuais ao select
    produtosArray.forEach(value => {

        const option = document.createElement('option')
        option.value = value
        option.innerHTML = value
        select.appendChild(option)

    })

    document.getElementById("textoInserir").value = ""
    document.getElementById("textoInserir").focus()

    // Comunica que o produto foi removido com sucesso
    window.alert("Produto removido com sucesso")
    // Chama a função para atualizar o parágrafo
    selecionou()

}

function limpar(){
    // Limpa o campo de texto e foca nele
    document.getElementById("textoInserir").value = ""
    document.getElementById("textoInserir").focus()

}
