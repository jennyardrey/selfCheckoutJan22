/* 1- As a user, I would like to be able to scan an item using barcode so its details can be found from products list (test data).

2 - As a user, I would like to be able to add an item to my basket.
3 - As a user, I would like to be able to see the total price of all items in my basket.
4 - As a user, I would like to be able to remove an item from my basket. */

const { orange, pineapple, kiwi, apple, banana, catalogue } = require('../data')
const { scanItem, addItem, removeItem, addsPrices } = require('../index');

// function that input = barcode > name & price
// basket is array, items can be pushed to array

describe('scanItem', () => {
    it('returns item info', () => {
        expect(scanItem(orange.barcode)).toEqual(orange)
    })
   
})

describe('addItem', () => {
    it('adds an item to the basket', () => {
        let basket = []
        expect(basket).toEqual([])
        addItem(basket, kiwi)
        expect(basket.length).toEqual(1)
        expect(basket).toEqual([kiwi])
    })
})

describe('removeItem', () => {
    it('removes an item to the basket', () => {
        let basket = []
        addItem(basket, kiwi)
        addItem(basket, banana)
        expect(basket).toEqual([kiwi, banana])
        expect(basket.length).toEqual(2)
        removeItem(basket, kiwi)
        expect(basket.length).toEqual(1)
        expect(basket).toEqual([banana])
    })
})

describe('addsPrices', () => {
    it('returns the total price of all the items in the basket', () => {
        let basket = []
        addItem(basket, apple)
        addItem(basket, pineapple)
        addItem(basket, orange)
        expect(addsPrices(basket)).toEqual(92)
    })
})