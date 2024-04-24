function sayHello(name) {
    return "Hello, ".concat(name);
}
console.log(sayHello('Ali'));
function getSum(num, num2) {
    return num + num2;
}
console.log(getSum(27500, 27500));
function greeter(person) {
    return "Hello, ".concat(person.firstname, " ").concat(person.lastname, " my age is ").concat(person.age);
}
console.log(greeter({ firstname: 'John', lastname: 'Ivanov', age: 30 }));
function getDistance(point) {
    return "distance is ".concat(point.y - point.x);
}
;
console.log(getDistance({ x: 10, y: 20 }));
function filterByType(array, type) {
    return array.filter(function (item) { return typeof item === type; });
}
console.log(filterByType(['1', '2', '3'], 'number'));
