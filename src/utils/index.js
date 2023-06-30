/**
 * 
 * @param {Array} products cartProduct: Array of Objects
 * @returns {Number} totalPrice: Number
 */

export const calculateTotalPriceOfCartProduct = ( products ) => {
    let sumOfProductPrices = 0;
    products.map( product => {
        sumOfProductPrices = sumOfProductPrices + product.price
    });
    return sumOfProductPrices;
}

