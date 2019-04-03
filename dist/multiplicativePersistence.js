"use strict";
module.exports = function multiplicativePersistence(number) {
    const numberAbsolute = Math.abs(number);
    if (!Number.isInteger(numberAbsolute)) {
        throw new Error("Number is not an integer");
    }
    if (numberAbsolute < 10) {
        return 0;
    }
    const getProduct = (number) => {
        const numberAsArray = [...number.toString()].map(digit => parseInt(digit));
        return numberAsArray.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
    };
    let numberProduct = getProduct(numberAbsolute);
    const products = [];
    while (!products.includes(numberProduct)) {
        products.push(numberProduct);
        numberProduct = getProduct(numberProduct);
    }
    return products.length;
};
