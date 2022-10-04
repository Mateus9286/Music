function renderEstiloMusical(arr){
arr.forEach(element => {
const container = document.querySelector("#estilosMusical")
const button = document.createElement("button")

button.classList.add("btnEstiloMusical")
button.id = "btnEstilo"
button.innerText = element
if(element == "Todos"){
    button.classList.add("fundo")
}
container.append(button)
    });

}
renderEstiloMusical(categories)


function listarCards(arr){
  const container = document.getElementById("containerCards") 
    container.innerText = ""
    arr.forEach((element)=>{
        templateCards(element)
    })
}
listarCards(products)


function templateCards(arr){

    const container = document.getElementById("containerCards")
    const card = document.createElement("div")
    const picture = document.createElement("picture")
    const imgProduto = document.createElement("img")
    const div = document.createElement("div")
    const banda = document.createElement("h4")
    const ano = document.createElement("h4")
    const titulo = document.createElement("h4")
    const containerButton = document.createElement("div")
    const valor = document.createElement("h4")
    const btnComprar = document.createElement("button")

    card.classList.add("card")
    imgProduto.classList.add("fotoCard")
    div.classList.add("cardText")
    banda.classList.add("textCard")
    ano.classList.add("textCard")
    ano.classList.add("margin")
    titulo.classList.add("cardTitle")
    containerButton.classList.add("containerButtonCard")
    valor.classList.add("valor")
    btnComprar.classList.add("btnComprar")

    imgProduto.src = arr.img
    banda.innerText = arr.band
    ano.innerText = arr.year
    titulo.innerText = arr.title
    valor.innerText = `R$ ${arr.price}.00`
    btnComprar.innerText = "Comprar"

    picture.append(imgProduto)
    containerButton.append(valor,btnComprar)
    div.append(banda,ano,titulo,containerButton)
    card.append(picture,div)
    container.append(card)
    return card
}

function filtroCategoria(){

    const btnEstilo = document.querySelectorAll("#btnEstilo")

    btnEstilo.forEach((buttons)=>{
      buttons.addEventListener("click",(event)=>{
            event.preventDefault()
      const texto = buttons.innerText
      const indice = categories.indexOf(texto) 
      const produtos = products.filter((element)=>element.category == indice)
      
      if(texto == "Todos"){
      
        listarCards(products) 
      }else{
        listarCards(produtos)
      }

        })
    })
}
filtroCategoria()

function filtroPreco(){

    const preço = document.querySelector(".Preco") 
    const input = document.querySelector("input") 

    input.addEventListener("input",(event)=>{
        event.preventDefault()
        preço.innerText =`Até R$ ${input.value}`
     const filtro = products.filter((element)=>element.price <= input.value )
     listarCards(filtro)
    })
}
filtroPreco()
