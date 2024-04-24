function sayHello(name: string):string {
    return `Hello, ${name}`;
}
console.log(sayHello('Ali'));
function getSum(num: number, num2: number): number {
    return num + num2;
}
console.log(getSum(27500,27500));
type Person ={
    firstname: string;
    lastname: string;
    age: number;
}

function greeter(person: Person): string | number{
    return `Hello, ${person.firstname} ${person.lastname} my age is ${person.age}`;
}

console.log(greeter({firstname: 'John', lastname: 'Ivanov', age: 30}))
type Point = {
    x: number;
    y: number;
}
function getDistance(point: Point): string | number {
    return `distance is ${point.y - point.x}`
};
console.log(getDistance({x: 10, y: 20}));
function filterByType(array: Array<any>, type: string): Array<any> {
    return array.filter(item => typeof item === type);
}
console.log(filterByType(['1', '2', '3'], 'number'));
