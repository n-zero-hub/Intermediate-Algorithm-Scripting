function uniteUnique(arr) {
    var arrArgs = Array.prototype.slice.call(arguments);
let x = arrArgs.join().split(/\W/).map(x=>+x);
console.log(x);
return [...new Set(x)];

}

let w = uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]);
console.log(w); 