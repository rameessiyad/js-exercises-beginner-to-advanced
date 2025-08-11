const myArr = [10, 20, "hello", true, { name: "Ramees" }, [55, 34]];
// console.log(myArr);
// console.log(typeof(myArr))
console.log(Array.isArray(myArr));

myArr.push(100);
myArr.splice(0, 2);
console.log(myArr)
