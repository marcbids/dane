let pizzaMenu = document.querySelector('#Pizza-menu')
let donutMenu = document.querySelector('#Donut-menu')
let breadMenu = document.querySelector('#Bread-menu')

let loadingTime = 100
let value

const pizzaMenuItem = [
    { location: '../utils/menu-items/pizza/pizza.jpg', title: "pizza1", price: 1 },
    { location: '../utils/menu-items/pizza/pizza.jpg', title: "pizza2", price: 1 },
    { location: '../utils/menu-items/pizza/pizza.jpg', title: "pizza3", price: 1 },
    { location: '../utils/menu-items/pizza/pizza.jpg', title: "pizza4", price: 1 },
    { location: '../utils/menu-items/pizza/pizza.jpg', title: "pizza5", price: 1 },
]

const donutMenuItem = [
    { location: '../utils/menu-items/donut/strawberry-donut.jpg', title: "donut1", price: 1 },
    { location: '../utils/menu-items/donut/strawberry-donut.jpg', title: "donut2", price: 1 },
    { location: '../utils/menu-items/donut/strawberry-donut.jpg', title: "donut3", price: 1 },
    { location: '../utils/menu-items/donut/strawberry-donut.jpg', title: "donut4", price: 1 },
    { location: '../utils/menu-items/donut/strawberry-donut.jpg', title: "donut4", price: 1 },
]

const breadMenuItem = [
    { location: '../utils/menu-items/bread/bread.jpg', title: "bread1", price: 1 },
    { location: '../utils/menu-items/bread/bread.jpg', title: "bread2", price: 1 },
    { location: '../utils/menu-items/bread/bread.jpg', title: "bread3", price: 1 },
    { location: '../utils/menu-items/bread/bread.jpg', title: "bread4", price: 1 },
    { location: '../utils/menu-items/bread/bread.jpg', title: "bread4", price: 1 },
]

const loading = "<p style='height:350px;'>Loading</p>"


let doughitItem = document.querySelector('#menu-item')
doughitItem.innerHTML = loading
let items = ``
pizzaMenuItem.map(item => {
    items = items +
        `
        <div class="col-lg-5">
            <div class="menu-item">
                <div class="menu-item-image-container">
                    <img
                        src="${item.location}"
                        alt="${item.title}"
                        class="item-image"
                        width="350px"
                    />
                </div>
                <div class="menu-item-description-container">
                    <span>${item.title}</span>
                    <span>P ${item.price}</span>
                    <button class="add-to-cart-button">Add to cart</button>
                </div>
            </div>
        </div>
        `
})
setTimeout(() => {
    doughitItem.innerHTML = items
}, loadingTime)

pizzaMenu.addEventListener('click', () => {
    console.log("Pizza is clicked")
    doughitItem.innerHTML = loading
    items = ``
    pizzaMenuItem.map(item => {
        items = items +
            `
            <div class="col-lg-5">
                <div class="menu-item">
                    <div class="menu-item-image-container">
                        <img
                            src="${item.location}"
                            alt="${item.title}"
                            class="item-image"
                            width="350px"
                        />
                    </div>
                    <div class="menu-item-description-container">
                        <span>${item.title}</span>
                        <span>P ${item.price}</span>
                        <span>Add to cart</span>
                    </div>
                </div>
            </div>
            `
    })
    setTimeout(() => {
        doughitItem.innerHTML = items
        value = document.querySelectorAll(".item-image")
        value.forEach(item => {
            handleHover(item)
        })
    }, loadingTime)
})
donutMenu.addEventListener('click', () => {
    console.log("Donut is clicked")
    doughitItem.innerHTML = loading
    items = ``
    donutMenuItem.map(item => {
        items = items +
            `
            <div class="col-lg-5">
                <div class="menu-item">
                    <div class="menu-item-image-container">
                        <img
                            src="${item.location}"
                            alt="${item.title}"
                            class="item-image"
                            width="350px"
                        />
                    </div>
                    <div class="menu-item-description-container">
                        <span>${item.title}</span>
                        <span>P ${item.price}</span>
                        <span>Add to cart</span>
                    </div>
                </div>
            </div>
            `

    })
    setTimeout(() => {
        doughitItem.innerHTML = items
        value = document.querySelectorAll(".item-image")
        value.forEach(item => {
            handleHover(item)
        })
    }, loadingTime)
})
breadMenu.addEventListener('click', () => {
    console.log("Bread is clicked")
    doughitItem.innerHTML = loading
    items = ``
    breadMenuItem.map(item => {
        items = items +
            `
            <div class="col-lg-5">
                <div class="menu-item">
                    <div class="menu-item-image-container">
                        <img
                            src="${item.location}"
                            alt="${item.title}"
                            class="item-image"
                            width="350px"
                        />
                    </div>
                    <div class="menu-item-description-container">
                        <span>${item.title}</span>
                        <span>P ${item.price}</span>
                        <span>Add to cart</span>
                    </div>
                </div>
            </div>
            `

    })
    setTimeout(() => {
        doughitItem.innerHTML = items
        value = document.querySelectorAll(".item-image")
        value.forEach(item => {
            handleHover(item)
        })
    }, loadingTime)
})


