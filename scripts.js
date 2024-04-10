const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
const buttonMapAll = document.querySelector('.map-all')


function showAll(productsArray) {
    let myLi = ''

    productsArray.forEach((product) => {
        myLi += `
        <li>
            <img src= ${product.src}>
            <p> ${product.name}</p>
            <p class="item-price"> R$ ${product.price}</p>
        </li>

    `

    })

    list.innerHTML = myLi

}


function MapItens() {
    

    const discount = menuOptions.map((products) => ({

        ...products,
        price: products.price * 0.9, // vai aplicar o desconto 

    }))

    showAll (discount)

}




buttonShowAll.addEventListener('click', () => showAll(menuOptions));
buttonMapAll.addEventListener('click', MapItens)
