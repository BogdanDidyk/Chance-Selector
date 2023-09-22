# Chance Selector
This code provides a simple and efficient solution for selecting random values based on their respective chances or probabilities.

## Accuracy
Suppose we have the following array of data and an array of corresponding probabilities:

```javascript
let arr = ["Silver", "Gold", "Diamond"];
let probabilities = [0.5, 0.3, 0.2];
```
That is, the chance of getting silver = 0.5, gold = 0.3, and diamond = 0.2. Now, based on this data, we will get ```N``` random values, and calculate the relative frequency for the values we get:

||**Silver**|**Gold**|**Diamond**|
|--|:----:|:-----:|:-------:|
|**N = 10**|0.48|0.42|0.1|
|**N = 100**|0.46|0.328|0.212|
|**N = 1000**|0.4986|0.3002|0.2012|
|**N = 10000**|0.5072|0.2916|0.2012|
|**N = 100000**|0.50067|0.299086|0.200244|

As you can see from the table, the larger ```N```, the more accurate the result.