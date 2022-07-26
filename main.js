let emailMenu = document.querySelector('.navbar-email');
let desktopMenu = document.querySelector('.desktop-menu');
let iconMenuMobile = document.querySelector('.menu');
let mobileMenu = document.querySelector('.mobile-menu');
let iconShopping = document.querySelector('.navbar-shopping-cart');
let asideShopping = document.querySelector('.product-detail');
let divcardscontainer = document.querySelector('.cards-container')
let productDetailLeft = document.querySelector('.product-detail-left')
let productDetailClose = document.querySelector('.product-detail-close')
let myordercontentContainer = document.querySelector('.my-order-content')
let countCarrito = document.querySelector('.navbar-shopping-cart div')
let totalCarrito = document.querySelector('.total')
let modal = document.querySelector('.modal')
let cerrarModal = document.querySelector('.boton-modal')

let productosEnCarrito = []

countCarrito.innerText = document.querySelectorAll('.shopping-cart').length

totalCarrito.innerText = '$0.00'

emailMenu.addEventListener('click', toggleMenu);
iconMenuMobile.addEventListener('click', toggleMenuMobile);
iconShopping.addEventListener('click', toggleAsideShopping)
productDetailClose.addEventListener('click',closeProductDetail)
cerrarModal.addEventListener('click', closeModal)


function toggleMenu(){
    productDetailLeft.classList.add('inactive')
    asideShopping.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
}

function toggleMenuMobile(){
    productDetailLeft.classList.add('inactive')
    asideShopping.classList.add('inactive');
    mobileMenu.classList.toggle('inactive')
    
}

function toggleAsideShopping(){
    productDetailLeft.classList.add('inactive')
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive')
    asideShopping.classList.toggle('inactive')
}

function openProductDetail(){
    asideShopping.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    productDetailLeft.classList.remove('inactive')
}

function closeProductDetail(){
    asideShopping.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    productDetailLeft.classList.add('inactive')
}

function verificarProducto(nameProduct){
    return productosEnCarrito.some(function(articulo){
        return articulo === nameProduct
    })
}

function closeModal(){
    modal.style.display = 'none'
}

let productList = []
productList.push({
    name:"bake",
    price:120,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
productList.push({
    name:"otro",
    price:180,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
productList.push({
    name:"bake",
    price:150,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
productList.push({
    name:"bake",
    price:120,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
productList.push({
    name:"bake",
    price:120,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
productList.push({
    name:"bake",
    price:120,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
productList.push({
    name:"bake",
    price:120,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
productList.push({
    name:"bake",
    price:120,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
productList.push({
    name:"bake",
    price:120,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})

function renderListProduct(productList){
    for (const product of productList) {
        let divproductCard = document.createElement('div')
        let imgproductcard = document.createElement('img')
        let divproductinfo = document.createElement('div')
        let divdivproductinfo = document.createElement('div')
        let pprice = document.createElement('p')
        let pname = document.createElement('p')
        let figureproductinfo = document.createElement('figure')
        let imgproductinfo = document.createElement('img')
        divproductCard.classList.add('product-card')
        imgproductcard.setAttribute('src', product.image)
        divproductinfo.classList.add('product-info')
        pprice.innerText ='$' + product.price
        pname.innerText = product.name
        imgproductinfo.setAttribute('src', './icons/bt_add_to_cart.svg')
        
        figureproductinfo.appendChild(imgproductinfo)
        divdivproductinfo.appendChild(pprice)
        divdivproductinfo.appendChild(pname)

        divproductinfo.appendChild(divdivproductinfo)
        divproductinfo.appendChild(figureproductinfo)

        divproductCard.appendChild(imgproductcard)
        divproductCard.appendChild(divproductinfo)

        divcardscontainer.appendChild(divproductCard)

        imgproductcard.addEventListener('click', openProductDetail);


        imgproductinfo.addEventListener('click', function(){
            let productoAgregado = []
            productoAgregado.push({
                name: product.name,
                price: product.price,
                image: product.image
            })
            agregarCarrito(productoAgregado)
            
        })
    }
}

function agregarCarrito(producto){
    if(verificarProducto(producto[0].name)){
        return modal.style.display = 'grid'
    }
    let divShoppingCart = document.createElement('div')
    let figureShoppingCart = document.createElement('figure')
    let imgfigureShoppingCart = document.createElement('img')
    let pnameShoppingCart = document.createElement('p')
    let ppriceShoppingCart = document.createElement('p')
    let imgcloseShoppingCart = document.createElement('img')


    divShoppingCart.classList.add('shopping-cart')
    imgfigureShoppingCart.setAttribute('src', producto[0].image)
    pnameShoppingCart.innerText = producto[0].name
    ppriceShoppingCart.innerText ='$' + producto[0].price
    imgcloseShoppingCart.setAttribute('src','./icons/icon_close.png')
    imgcloseShoppingCart.classList.add('removeList')

    figureShoppingCart.appendChild(imgfigureShoppingCart)
    divShoppingCart.appendChild(figureShoppingCart)
    divShoppingCart.appendChild(pnameShoppingCart)
    divShoppingCart.appendChild(ppriceShoppingCart)
    divShoppingCart.appendChild(imgcloseShoppingCart)

    myordercontentContainer.appendChild (divShoppingCart)

    countCarrito.innerText = document.querySelectorAll('.shopping-cart').length
    totalCarrito.innerText = '$' + (Number(totalCarrito.innerText.substring(1)) + Number(producto[0].price))

    productosEnCarrito.push(producto[0].name)
    
    

    imgcloseShoppingCart.addEventListener('click', function(){
        divShoppingCart.remove()
        countCarrito.innerText = document.querySelectorAll('.shopping-cart').length
        totalCarrito.innerText = '$' + (Number(totalCarrito.innerText.substring(1)) - Number(producto[0].price))
        productosEnCarrito.splice(productosEnCarrito.indexOf(producto[0].name),1)
    }) 

}

renderListProduct(productList);