// Webpack will resolve these dependencies
const add = require('../helpers/add');
const del = require('../helpers/delete');

// ES6 will be transpiled, so string literal syntax here will be converted to string concatenation syntax
document.getElementById('body-text').innerHTML = `Red text is great. Maths is great, for example 6 + 8 = ${add(6,8)} and 5 - 2 = ${del(5,2)}`;
