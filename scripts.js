const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
const buttonMapAll = document.querySelector('.map-all')
const buttonSumAll = document.querySelector('.sum-all')

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

    showAll(discount)

}



function sumAllItens() {

    const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)
    list.innerHTML = 
    `
    <li>
    
        <p> O total de todos os itens são R$ ${totalValue}</p>
    
    </li>
    `
}






buttonShowAll.addEventListener('click', () => showAll(menuOptions));
buttonMapAll.addEventListener('click', MapItens)
buttonSumAll.addEventListener('click', sumAllItens)