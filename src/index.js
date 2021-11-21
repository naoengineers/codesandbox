// テンプレート文字列
// const name = "名前";
// const age = 28;
// console.log(`私の名前は${name}です。年齢は${age}です。`);

/**
 * アロー関数
 */
// const func1 = (str) => {
//   return str;
// };
// console.log(func1("func1です"));

// const func2 = (num1, num2) => {
//   return num1 + num2;
// };

// console.log(func2(10, 20));

/**
 * 分割代入
 */
// const myProfile = {
//   name: "山田",
//   age: 28
// };

// const { name, age } = myProfile;
// const message = `名前は${name}です。年齢は${age}歳です`;
// console.log(message);

// const myProfile = ["山田", 28];
// const [name, age] = myProfile;
// const message3 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message3);

/**
 * デフォルト値
 */
// const sayHello = (name = "ゲスト") => console.log(`こんにちは${name}さん`);
// sayHello("山田");

/**
 * スプレッド構文
 */
// 配列の展開
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(...arr1);

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// 配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

/**
 * map&filterを使った配列の処理
 */
// const nameArr = ["田中", "山田", "テスト"];
// // nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です。`));

// // const numArr = [1, 2, 3, 4, 5];
// // const newNumArr = numArr.filter((num) => {
// //   return num % 2 === 0;
// // });
// // console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   const ret = name === "テスト" ? name : `${name}さん`;
//   return ret;
// });
// console.log(newNameArr);
