const numbers = [1, 2, 3, 4];
const meals = ['pizza', 'burger'];

const numbersMeals = numbers.concat(meals);
console.log(numbersMeals);
const numbersMeals2 = [...numbers, ...meals];
console.log(numbersMeals2);
