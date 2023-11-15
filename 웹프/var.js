// const number = 123;

// console.log(number);
// console.log(number.toString());

// const text = "text";

// console.log(text);
// console.log(text.length);
// text.trim();

// console.log(Math.max(1, 2, 3));
// console.log(Math.min(1, 2, 3));
// console.log(3 ** 2);
// console.log(Math.pow(3, 2));
// console.log(Math.random());
// console.log(Math.floor(Math.random() * 10 + 1));

// const textObj = new String("Helo World");
// const text2 = "Hello World";

// console.log(textObj);
// console.log(text2);

// const today = new Date();
// console.log(today);
// console.log(today.getDate());
// console.log(new Date("2025-02-25"));

// function num() {
//   var a = "123";
//   console.log(a);
// }

// console.log(num);
// console.log(a);

// const f = function (a, b) {
//   console.log(a * b);
// };

// f(1, 2);

function f(array, from, to) {
  const n = Array.from(array);
  for (let i = 2; i < n.length; n++) {
    if (n[i] === from) {
      n[i] = to;
    }
  }
  return n;
}

const array = [1, 2, 3, 4];
const result = f(array, 2, 3);

