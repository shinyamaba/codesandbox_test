/*
mapやfilterを使った配列の処理
*/

const nameArr = ["田中", "山田", "ころね"];

// for (let index = 0; index < nameArr.length ; index ++ ) {
//   console.log(`${index}番目は${nameArr[index]}です。`);
// }

// const nameArr2 = nameArr.map((name)=>{
//   return name;
// })
// console.log(nameArr2);

//nameArr.map((name, index) => console.log(`${index+1}番目は${name}です`));

// const numArr = [1,2,3,4,5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// })
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "ころね"){
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// })
// console.log(newNameArr);

// /*
// 三項演算子
// */
// // ある条件　? 条件がTRUEの時　: 条件がfalseの時
// const val1 = 1 < 0 ? "trueです"　: "falseです";
// console.log(val1);

// const num = 1300;
// const formattedNum = typeof num === "number" ? `¥${num.toLocaleString()}`: "数値を入力してください"
// console.log(formattedNum);

// const checkSum = (num1,num2) =>{
//   return num1 + num2 > 100 ? "100を超えています！":"許容範囲内です"
// }
// console.log(checkSum(50,60));

/*
論理演算子の本当に意味を知ろう
&& \\
*/

// const flag1 = true;
// const flag2 = true;

// if (flag1 && flag2){
//   console.log("1も2はtrueになります");
// }

// if (flag1 || flag2){
//   console.log("1か2はtrueになります");
// }

// || は左側がfalseなら右側を返す
// const num = 1000;
// const fee = num || "金額未設定です";
// console.log(`¥${fee.toLocaleString()}`);

// &&は左側がtrueなら右側を返す
const num2 = null;
const fee2 = num2 && "何か設定されました";
console.log(fee2);
