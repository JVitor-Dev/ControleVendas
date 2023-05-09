const tamBandeja = document.querySelector('#tamBandeja')
const preco = document.querySelector('#preco')
preco.textContent = `R$ 0.00`
const quantidade = document.querySelector('#quantidade')

const main = document.querySelector('#tela')
let divVenda
let corOvo
let bdjSelecionada
let valorTotal = 0
let descricaoVenda

function calcularValor() {
  valorTotal = tamBandeja.value * quantidade.value
  preco.textContent = `R$ ${valorTotal}`
}

function infoProduto() {
  if (document.querySelector('#ovoBranco').checked) {
    corOvo = 'Ovos Brancos'
  } else if (document.querySelector('#ovoVermelho').checked) {
    corOvo = 'Ovos Vermelhos'
  }
  switch (tamBandeja.value) {
    case (tamBandeja.value = '23.99'):
      bdjSelecionada = '30 und'
      break
    case (tamBandeja.value = '18.00'):
      bdjSelecionada = '20 und'
      break
    case (tamBandeja.value = '15.00'):
      bdjSelecionada = '15 und'
      break

    case (tamBandeja.value = '8.00'):
      bdjSelecionada = '10 und'
      break

    default:
      console.log('não deu')
      break
  }
}

function quant(valor) {
  if (valor === '+') {
    quantidade.value++
    calcularValor()
  } else if (valor === '-') {
    quantidade.value--
    calcularValor()
  }
}

function registrarVenda() {
  if (valorTotal != 0) {
    infoProduto()

    divVenda = document.createElement('div')
    divVenda.classList.add('venda')

    descricaoVenda = document.createElement('p')
    descricaoVenda.classList.add('descricao')
    descricaoVenda.appendChild(
      document.createTextNode(
        `0${quantidade.value} - ${bdjSelecionada} ${corOvo} - ${preco.textContent}`
      )
    )

    divVenda.appendChild(descricaoVenda)
    main.appendChild(divVenda)
  } else {
    alert('preencha todos os dados')
  }
}
