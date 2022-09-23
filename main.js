let listProducts = [
    {
        name: 'bulbasaur',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, velit',
        image: './imgs/bulbasaur.png',
        amount: 11,
        price: 21
    },
    {
        name: 'charmander',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, velit',
        image: './imgs/charmander.png',
        amount: 31,
        price: 18
    },
    {
        name: 'ivysaur',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, velit',
        image: './imgs/ivysaur.png',
        amount: 21,
        price: 22
    },
    {
        name: 'squirtle',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, velit',
        image: './imgs/squirtle.png',
        amount: 0,
        price: 15
    },
    {
        name: 'venusaur',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, velit',
        image: './imgs/venusaur.png',
        amount: 29,
        price: 19
    }
]
let yourCart = []

let tempQuantity = 1;

var productVueInstance = new Vue({
    el : '#list-products',
    data: {
        listProducts: listProducts
    },
    methods: {
        PriceFormatting(number){
            return (new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(number))
        },
        YourCartPush(i){
            cartVueInstance.yourCart.push(i)
            notiInstance.name = `${i.name}`
            notiInstance.type = `add`
        },
        checkQuantity(e, i){
            e.target.value = 10
        }
    },
})
var cartVueInstance = new Vue({
    el : '#your-cart',
    data: {
        yourCart: yourCart
    },
    methods: {
        PriceFormatting(number){
            return (new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(number))
        },
        YourCartDelete(i, index){
            yourCart.splice(index - 1, 1)
            notiInstance.name = `${i.name}`
            notiInstance.type = `delete`
        }
    },
    computed: {
        totalMoney(){
            let result = 0
            this.yourCart.map((item) => {
                if(item.quantity){
                    result += item.price * item.quantity
                } else{
                    result += item.price
                }  
            })
            return result
        },
        totalProduct(){
            let result = 0
            this.yourCart.map((item) => {
                if(item.quantity){
                    result += parseInt(item.quantity)
                } else{
                    result += 1
                }  
            })
            return result
        }
    }
})

var notiInstance = new Vue({
    el : '#noti-wp',
    data: {
        name: '',
        type: ''
    }
})