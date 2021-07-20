function addThreeNumbers (x , y , z) {
    let numbers= x+y+z;
    return numbers;
    
}

console.log(addThreeNumbers(2, 2 , 2))



function ray(r, a) {
    return r * a;
}

let multiply = ray(2, 4);
console.log(multiply);

//calculator

let add = function(n1, n2) {
    return n1 + n2;
}
let sub = function(n1, n2) {
    return n1 - n2;
}
let multi = function(n1, n2) {
    return n1 * n2;
}
let divide = function(n1, n2) {
    return n1 / n2;
}

console.log(add(2, 2));
console.log(sub(4, 4));
console.log(divide(8, 4));
console.log(multi(8, 4));