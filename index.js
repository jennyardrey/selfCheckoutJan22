/* 1- As a user, I would like to be able to scan an item using barcode so its details can be found from products list (test data).

2 - As a user, I would like to be able to add an item to my basket.
3 - As a user, I would like to be able to see the total price of all items in my basket.
4 - As a user, I would like to be able to remove an item from my basket. */

const { breakStatement } = require("@babel/types")
const { catalogue } = require("./data")

const scanItem = function (barcode) {
    return catalogue.find(item => item.barcode === barcode)
    
}

const addItem = function (basket, item) {
    basket.push(item)
}

const removeItem = function (basket, item) {
    basket.splice(item, 1)
}

const addsPrices = function (basket) {
    return basket.reduce((acc, item) => {
        return acc + item.price
    },0)
}
// catalogue.orange.barcode
module.exports = { scanItem, addItem, removeItem, addsPrices }