let config = document.getElementById('config')
let cxConfig = document.getElementById('cx-config')
let salvar = document.getElementById('salvar')
let cancelar = document.getElementById('cancelar')
let cxTitulo = document.getElementById('cx-titulo')
let resetar = document.getElementById('resetar')
let n = 0

/*Abre e fecha as configurações do site ao clicar na peça*/
config.addEventListener('click', () => {

    if(n === 0){
        n = 1
        cxConfig.style.display="block"
    }else if(n === 1){
        location.reload();
    }
   

})

/*fecha as configurações do site ao clicar em cancelar*/
cancelar.addEventListener('click', () => {

    if(n === 1){
        location.reload();
    }
   
})


/*Altera o estilo do site ao interagir com determinado elemento*/
document.addEventListener('click', (elemento) =>{
    let corFundo = document.querySelector('input[name="corFundo"]:checked')
    let corLetras = document.querySelector('input[name="corLetras"]:checked')
    let corFundoTitulo = document.querySelector('input[name="corFundoTitulo"]:checked')
    let corFundoTexto = document.querySelector('input[name="corFundoTexto"]:checked')
    let cxH1 = document.getElementById('cx--titulo')
    let cxTexto = document.getElementById('cx-texto')
    
    if(elemento.target.className === 'corFundo'){
        document.body.style.backgroundColor= corFundo.value
    }

    if(elemento.target.className === 'corLetras'){
        document.body.style.color = corLetras.value
    }

    if(elemento.target.className === 'corFundoTitulo'){
        cxH1.style.backgroundColor = corFundoTitulo.value
    }

    if(elemento.target.className === 'corFundoTexto'){
        cxTexto.style.backgroundColor = corFundoTexto.value
    }
})

/*Apaga os dados de Localstroage*/
resetar.addEventListener('click', () => {
    localStorage.removeItem('Dados');
    location.reload();
})

/*Salva as informações no LocalStroage*/
salvar.addEventListener('click', () =>{
    let corFundo = document.querySelector('input[name="corFundo"]:checked')
    let corLetras = document.querySelector('input[name="corLetras"]:checked')
    let corFundoTitulo = document.querySelector('input[name="corFundoTitulo"]:checked')
    let titulo = document.getElementById('titulo').value
    let txt = document.getElementById('txt').value
    let corFundoTexto = document.querySelector('input[name="corFundoTexto"]:checked')

    if(titulo !== '' && txt !== ''){
        let dados = [{CorFundo: corFundo.value}, {CorLetras: corLetras.value}, {CorFundoTitulo: corFundoTitulo.value}, {CorFundoTexto: corFundoTexto.value}, {Titulo: titulo}, {Texto: txt}]

        localStorage.setItem('Dados', JSON.stringify(dados))

        location.reload()
    }else{
        alert('Preencha todos os campos!!!')
    }
    
})

/*Carrega os dados da página*/
function carregar(){
    if(localStorage.Dados){
        let cxTexto = document.getElementById('cx-texto')
        let texto = document.getElementById('texto')
        let cxH1 = document.getElementById('cx--titulo')
        let dados = JSON.parse(localStorage.getItem('Dados'))
        document.body.style.backgroundColor= dados[0].CorFundo
        document.body.style.color= dados[1].CorLetras
        cxH1.style.backgroundColor= dados[2].CorFundoTitulo
        cxTexto.style.backgroundColor= dados[3].CorFundoTexto
        cxTitulo.innerHTML = dados[4].Titulo
        texto.innerHTML = dados[5].Texto
    }
}