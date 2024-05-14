let data = [
    [{ name: 'John', age: 30 }, { name: 'Jane', age: 25 }],
    [{ name: 'Bob', age: 35 }]
];

let flattenedData = data.flat();
let names = flattenedData.map(item => item.name);

console.log(names); // ['John', 'Jane', 'Bob']