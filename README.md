# Multiplicative Persistence

[![Build Status](https://travis-ci.com/pawelgrzybek/multiplicative-persistence.svg?branch=master)](https://travis-ci.com/pawelgrzybek/multiplicative-persistence)

> Multiply all the digits of a number n by each other, repeating with the product until a single digit is obtained. The number of steps required is known as the **multiplicative persistence**, and the final digit obtained is called the **multiplicative digital root** of n.

## Build and test

```
yarn build
```

```
yarn dev
```

```
yarn test
```

```
yarn test:watch
```


## Whats wrong with it

- I am not sure how to handle non-integers
- JavaScript is not the best language to deal with big numbers, maybe I will refactor it to use [`BigInt()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt) one day
