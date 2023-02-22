//1
console.log("Task 1")
let products = ["bananas","tomatoes","lemons","apples","oranges" ];
console.log(products)
let lastProducts = products[products.length-1];
console.log('The last element of the array : ' + lastProducts);

//2
console.log("\nTask 2");

var styles = ["Джаз","Блюз"];
console.log(styles);

styles.push("Рок-н-Ролл");
console.log(styles);

styles.splice(-2,1,"Класика");
console.log("Видалено елемент: "+ styles.shift());

console.log(styles.shift());

styles.unshift("Рэп", "Регги");
console.log(styles)


//3
console.log("\nTask 3");
function find(array, value) {
    console.log(array.indexOf(value));
}

find(styles,"Регги");
find(styles,"Метал");
find(styles,"Рок-н-Ролл");
