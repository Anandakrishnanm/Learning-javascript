let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};

foods.bananas = 13;
foods['grapes'] = 35;
let a = 'strawberries';
foods[a] = 27;

console.log( "After adding new keys: ", foods);

delete foods.bananas;
delete foods['grapes'];
console.log( "After deleting bananas and grapes : ", foods);

