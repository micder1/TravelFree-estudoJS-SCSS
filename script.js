let nav = document.querySelector('nav')

const menuMobile = document.getElementById('menu-abrir')

function AbrirMenu(){
    menuMobile.addEventListener
    nav.classList.add('abrir-menu')
}

const menuMobile2 = document.getElementById('mobile-fechar')

function FecharMenu(){
    menuMobile.addEventListener
    nav.classList.remove('abrir-menu')
}

//arrow function para iniciar o modal

function iniciaModal(modalID){
    const modal = document.getElementById(modalID);

    modal.classList.add('mostrar') 
    modal.addEventListener('click', (e) => { //arrow func para fechar o modal
        if(e.target.id == modalID){ //se o target do argumento 'e' for equivalente ao id do argumento passado ele irá fechar (nesse caso irá fechar caso ele clique fora da parte interna do modal, que é a div de id='modal-compra')
            modal.classList.remove('mostrar')
        }else if(e.target.className == 'fechar'){ //se o target do argumento 'e' for o elemento de classe 'fechar' ele também irá fechar
            modal.classList.remove('mostrar')
        }
    })
}

//arrow function para abrir o modal ao clicar em comprar
const comprar = document.getElementById('comprar')
comprar.addEventListener('click', () => iniciaModal('modal-compra')) //a função da o trigger na função inicia modal com o parametro 'modal-compra'

const comprar2 = document.getElementById('comprar2')
comprar2.addEventListener('click', () => iniciaModal('modal-compra'))

const comprar3 = document.getElementById('comprar3')
comprar3.addEventListener('click', () => iniciaModal('modal-compra'))

