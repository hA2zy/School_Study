// // const number = 123;

// // console.log(number);
// // console.log(number.toString());

// // const text = "text";

// // console.log(text);
// // console.log(text.length);
// // text.trim();

// // console.log(Math.max(1, 2, 3));
// // console.log(Math.min(1, 2, 3));
// // console.log(3 ** 2);
// // console.log(Math.pow(3, 2));
// // console.log(Math.random());
// // console.log(Math.floor(Math.random() * 10 + 1));

// // const textObj = new String("Helo World");
// // const text2 = "Hello World";

// // console.log(textObj);
// // console.log(text2);

// // const today = new Date();
// // console.log(today);
// // console.log(today.getDate());
// // console.log(new Date("2025-02-25"));

// // function num() {
// //   var a = "123";
// //   console.log(a);
// // }

// // console.log(num);
// // console.log(a);

// // const f = function (a, b) {
// //   console.log(a * b);
// // };

// // f(1, 2);

// function f(array, from, to) {
//   const n = Array.from(array);
//   for (let i = 2; i < n.length; n++) {
//     if (n[i] === from) {
//       n[i] = to;
//     }
//   }
//   return n;
// }

// const array = [1, 2, 3, 4];
// const result = f(array, 2, 3);

// 고차 함수 : higher-order function

// const fruits = ["바나나", "딸기", "포도", "딸기"];

// fruits.forEach(function (value, index, array) {
//   console.log(value);
//   console.log(index);
//   console.log(array);
// });

// fruits.forEach((value) => console.log(value))

// find : 조건에 맞는 아이템을 찾을 때
const item1 = { name: "milk", price: 1 };
const item2 = { name: "pizza", price: 2 };
const item3 = { name: "apple", price: 3 };
const product = [item1, item2, item3, item2];
let result = product.find((item) => item.name === "pizza");
console.log(result);

result = product.findIndex((item) => item.name === "pizza");
console.log(result);

// 배열 아이템들이  부분적으로 조건에 맞는지 확인
result = product.some((item) => item.name == "pizza");
console.log(result);

// 모두 맞는지 체크
result = product.every((item) => item.name == "pizza");
console.log(result);

//filter : 조건에 맞는 모든 아이템들을 새로운 배열로
result = product.filter((item) => item.name == "pizza");
console.log(result);

// map : 배열의 다른 아이템들을 각각 다른 아이템들로 매핑, 변환해서 새로운 배열 생성
const nums = [1, 2, 3, 4, 5];
result = nums.map((item) => item * 2);
console.log(result);

result = nums.map((item) => {
  if (item % 2 == 0) {
    return item * 2;
  } else {
    return item;
  }
});
console.log(result);

result = nums.map((item) => [1, 2]);
console.log(result);

result = nums.flatMap((item) => [1, 2]);
console.log(result);
result = ["hong", "gil"].flatMap((text) => text.split(""));
console.log(result);

// sort
const texts = ['hi', 'abc']
texts.sort;
console.log(texts);

const numbers = [0,5,4,3,2,1,10]
numbers.sort
console.log(numbers);

// < 0 a가 잎으로 정렬, 오름차순
// > 0 b가 앞으로 정렬, 내림차순
numbers.sort((a,b) => a - b)
console.log(numbers);

//reduce : 
result = [1,2,3,4,5].reduce((sum, val) => (sum += val),0)
console.log(result);
