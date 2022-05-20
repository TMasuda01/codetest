/**
 * const,let
 */
// var val1 = "ver変数"
// console.log(val1);

// // var変数は上書き可能
// val1 = "var変数は上書き"
// console.log(val1);

// // var変数は再宣言可能
// var val1 = "varへんすう"
// console.log(val1);

//

// const val3 ="const変数";
// console.log (val3);
// // val3 = "constを上書き"

//constで定義したobjectはプロパティの変更可能
// const val4 = {
//   name:"masuda",
//   age: 23,
// };
// val4.name = "takuya";
// val4.address = "osaka";
// console.log (val4);

//constで定義した配列はプロパティの変更可能
// const val5 = ['dog', 'cat'];
// val5[0] ='bird';
// val5.push('monkey');
// console.log (val5);

/**
 * テンプレート文字列
 */

//  const name ='masuda';
//  const age =23
// //
// const message1 = "私の名前は"+ name +"です。年齢は"+ age +"です。";
// console.log (message1);
// //テンプレート文字列を用いると
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

/**
 * アロー関数
 */
//従来の関数
//  function func1(str) {
//    return str;
//  }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です。"));
// //アロー関数
// const func2 = (str) => str;
// console.log(func2("func2です"));

// const func3 = (num1, num2) => {
//   return num1 +num2;
// }
// console.log(func3(10,20));

/**
 * 分割代入
 */

//  　const myProfile = {
//    name:"masuda",
//    age:23,
//  };

//  const message1 =`名前は${myProfile.name}です。年齢は${myProfile.age}です。`
//  console.log(message1);

//  const {name,age} = myProfile;
//  const message2 =`名前は${name}です。年齢は${age}です。`;
//  console.log (message2);

// const myProfile = ["masuda", 23];

// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です。`;
// console.log(message3);

// const [name,age] = myProfile
// const message4 = `名前は${name}年齢${age}`;
// console.log(message4);

/**
 * デフォルト地
 */
// const sayHallo = (name = "ゲスト") => console.log(`こんにちは${name}さん！`);
// sayHallo('masuda');

/**
 * スプレット構文
 */
//配列の展開
// const arr1 = [1,2];
// // console.log (arr1);
// // console.log(...arr1);

// const sumFunc = (num1,num2) => console.log(num1+num2);
// sumFunc(arr1[0],arr1[1]);
// sumFunc(...arr1);

//まとめる
// const arr2 = [1,2,3,4,5];
// const [num1,num2,...arr3] = arr2
// console.log(num1);
// console.log(num2);
// console.log(arr3);

//配列のコピーや結合
// const arr4 = [10,20];
// const arr5 = [30,40];

//

// const arr8 =arr4
// console.log(arr8);

// arr8[0] = 100;
// console.log(arr4);

/**
 * map.filter
 */
// const nameArr =['tanaka',"yamada", "masuda"];
// // for (let index =0; index <nameArr.length;index++) {
//   console.log(`${index+1}番目は${nameArr[index]}です`);
// }

// const nameArr2 = nameArr.map((name)=>{
//   return name;
// })
// console.log(nameArr2);

// nameArr.map((name,index)=>{
//   return console.log(`${index+1}ばん目は${name}です`);
// });

// const numArr = [1,2,3,4,5];
// const newNumArr = numArr.filter((num)=>{
//   return num %2 === 1;
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name)=>{
//   if (name === "masuda") {
//     return name
//   }else{
//     return `${name}さん`

//   }
// })
// console.log(newNameArr);

/**
 * 三項演算子
 */
//条件?true:false
// const val1 = 1>0 ? 'true':'false';
// console.log(val1);
// const num ='1300';
// console.log(num.toLocaleString());

// const formattedNum = typeof num === 'number' ? num.toLocaleString():'数値を入力してください'
// console.log(formattedNum);

// const cehckSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えています" : "許容範囲ないです";
// };
// console.log(cehckSum(50, 60));
