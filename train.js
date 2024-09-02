// console.log("train task ishga tushdi !")




// // 21-dars

// console.log("Jack Ma maslahatlari");
// const list = [
//     "Yaxshi talaba bo'ling", // 0-20
//     "To'g'ri boshliq tanlang va ko'proq xato qiling", // 20-30
//     "O'zingizning ishlaringizni boshlang boshlang", // 30-40
//     "Siz kuchli bo'lgan narsalarni qiling", // 40-50
//     "Yoshlarga investitsiya qiling", //50-60
//     "Endi biroz dam oling va sekinlashgan holda davom eting", // 60- ~
// ];

// function maslahatBering(a, callback) {
//     if(typeof a !== "number") callback("insert a number", null);
//     // if(typeof a !== "number", a < 0) callback("insert a number", null);
//     else if (a > 0 && a <= 20) callback(null, list[0]);
//     else if (a > 20 && a <= 30) callback(null, list[1]);
//     else if (a > 30 && a <= 40) callback(null, list[2]);
//     else if (a > 40 && a <= 50) callback(null, list[3]);
//     else if (a > 50 && a <= 60) callback(null, list[4]);
//      else { 
//         setTimeout(function () {
//             callback(null, list[5]);
//         },5000);
       
//     }
// };

// console.log('passed here 0');

// maslahatBering(88, (err, data) => {
//     if(err) console.log("ERROR:", err);
//     else {
//         console.log("javob:", data);
//     }
// });
// console.log('passed here 1');








// // 22-dars

// console.log("Jack Ma maslahatlari");
// const list = [
//     "Yaxshi talaba bo'ling", // 0-20
//     "To'g'ri boshliq tanlang va ko'proq xato qiling", // 20-30
//     "O'zingizning ishlaringizni boshlang boshlang", // 30-40
//     "Siz kuchli bo'lgan narsalarni qiling", // 40-50
//     "Yoshlarga investitsiya qiling", //50-60
//     "Endi biroz dam oling va sekinlashgan holda davom eting", // 60- ~
// ];

// function maslahatBering(a, callback) {
//     if(typeof a !== "number") callback("insert a number", null);
//     // if(typeof a !== "number", a < 0) callback("insert a number", null);
//     else if (a > 0 && a <= 20) callback(null, list[0]);
//     else if (a > 20 && a <= 30) callback(null, list[1]);
//     else if (a > 30 && a <= 40) callback(null, list[2]);
//     else if (a > 40 && a <= 50) callback(null, list[3]);
//     else if (a > 50 && a <= 60) callback(null, list[4]);
//      else { 
//         setInterval(function () {
//             callback(null, list[5]);
//         },1000);
       
//     }
// };

// console.log('passed here 0');

// maslahatBering(88, (err, data) => {
//     if(err) console.log("ERROR:", err);
//     else {
//         console.log("javob:", data);
//     }
// });
// console.log('passed here 1');




// async function maslahatBering(a) {
//     if(typeof a !== "number") throw new Error("insert a number", null);
//     // if(typeof a !== "number", a < 0) callback("insert a number", null);
//     else if (a > 0 && a <= 20) return list[0];
//     else if (a > 20 && a <= 30) return list[1];
//     else if (a > 30 && a <= 40) return list[2];
//     else if (a > 40 && a <= 50) return list[3];
//     else if (a > 50 && a <= 60) return list[4];
//      else { 
//         return new Promise((resolve, reject) => {
//             setInterval(() => {
//                 resolve(list[5]);
//              },1000);
//         });
//     }
// }




// console.log('passed here 0');

// maslahatBering(70)
//   .then((data) => {
//     console.log("javob:", data);
// })
//  .catch((err) => {
//     console.log("ERROR");
// });

// console.log('passed here 1');




// async function run()  {
//     let javob = await maslahatBering(68);
//     console.log(javob);
//     // javob = await maslahatBering(43);
//     // console.log(javob);
//     // javob = await maslahatBering(63);
//     // console.log(javob);
// } 
// run();

   

// Call via then/catch
// console.log('passed here 0');

// maslahatBering(30)
//   .then((data) => {
//     maslahatBering(40)
//   .then((data) => {
//     maslahatBering(70)
//   .then((data) => {
//     console.log("javob:", data);
// })
//  .catch((err) => {
//     console.log("ERROR");
// });
// console.log('passed here 1');


//     console.log("javob:", data);
// })
//  .catch((err) => {
//     console.log("ERROR");
// });
// console.log('passed here 1');


//     console.log("javob:", data);
// })
//  .catch((err) => {
//     console.log("ERROR");
// });
// console.log('passed here 1');


//// A-TASK

// function countLetter(letter, word) {
//     letter = letter.toLowerCase();
//     word = word.toLowerCase();
//     let count = 0;
  
//     for (let i = 0; i < word.length; i++) {
//       if (word[i] === letter) {
//         count++;
//       }
//     }
  
//     return count;
//   }
  
// //   console.log(countLetter("k", "Koreya")); 
// console.log(countLetter("r", "Uzbekistan")); 
  

// //// B-TASK

//   // Stringdagi raqamlarni topish

// function countDigits(str) {
// const digits = str.match(/\d/g);
//   return digits ? digits.length : 0;
// }

// console.log(countDigits("1q2w3e4r5t6y7u8i"));


//// C-TASK

//// Chastota va ikki stringdagi harflarni taqqoslash

//// Nomlashda qaysi o'zgaruvchi va qaysi doim o'zgarmasligini mashq qildim

// function takrorlanishSoni(soz) {
//   const toplam = {};
//   for (let harflar of soz) {
//       toplam[harflar] = (toplam[harflar] || 0) + 1;
//   }
//   return toplam;
// }

// function harflarniTekshirish(parametr1, parametr2) {
  
//   const obyekt1 = takrorlanishSoni(parametr1);
//   const obyekt2 = takrorlanishSoni(parametr2);

  
//   const kalitlar1 = Object.keys(obyekt1).sort();
//   const kalitlar2 = Object.keys(obyekt2).sort();

//   if (kalitlar1.length !== kalitlar2.length) return false;

//   for (let keyy of kalitlar1) {
//       if (obyekt1[keyy] !== obyekt2[keyy]) return false;
//   }

//   return true;
// }

// console.log(harflarniTekshirish("elgoog", "goolge")); 
// console.log(harflarniTekshirish("g", "goolge")); 



// console.log("==============================================================");



// function countChars(str) {
//   const charCount = {};
//   for (let char of str) {
//       charCount[char] = (charCount[char] || 0) + 1;
//   }
//   return charCount;
// }

// function checkContent(str1, str2) {
//   const count1 = countChars(str1);
//   const count2 = countChars(str2);

//   const keys1 = Object.keys(count1).sort();
//   const keys2 = Object.keys(count2).sort();

//   if (keys1.length !== keys2.length) return false;

//   for (let key of keys1) {
//       if (count1[key] !== count2[key]) return false;
//   }

//   return true;
// }

// console.log(checkContent("1q2w3e4r", "4r3e2w1q"));
// console.log(checkContent("ㅋㅋㅋ", "ㅋㅋㅌ"));     





// /////  D-TASK

// class Shop {
//   constructor(non, lagmon, cola) {
//       this.ombor = { non, lagmon, cola }; 
//       this.logVaqt();
//   }

//   // Vaqtni va qoldiqni log qilish
//   logVaqt() {
//       const now = new Date();
//       const vaqtString = now.toLocaleTimeString('en-US', { hour12: false });
//       console.log(`Hozir ${vaqtString}da ${this.ombor.non}ta non, ${this.ombor.lagmon}ta lagmon va ${this.ombor.cola}ta cola mavjud!`);
//   }

//   // Qoldiqni ko'rsatadi
//   qoldiq() {
//       this.logVaqt();
//       return `Hozir ${new Date().toLocaleTimeString('en-US', { hour12: false })}da ${this.ombor.non}ta non, ${this.ombor.lagmon}ta lagmon va ${this.ombor.cola}ta cola mavjud!`;
//   }

//   // Sotish operatsiyasi
//   sotish(mahsulot, miqdor) {
//       if (this.ombor[mahsulot] !== undefined && this.ombor[mahsulot] >= miqdor) {
//           this.ombor[mahsulot] -= miqdor;
//           this.logVaqt();
//           console.log(`${miqdor}ta ${mahsulot} sotildi.`);
//       } else {
//           console.log(`Xato: Yetarli ${mahsulot} mavjud emas.`);
//       }
//   }

//   // Qabul qilish operatsiyasi
//   qabul(mahsulot, miqdor) {
//       if (this.ombor[mahsulot] !== undefined) {
//           this.ombor[mahsulot] += miqdor;
//           this.logVaqt();
//           console.log(`${miqdor}ta ${mahsulot} qabul qilindi.`);
//       } else {
//           console.log(`Xato: ${mahsulot} mavjud emas.`);
//       }
//   }
// }

// // Misol uchun foydalanish
// const shop = new Shop(4, 5, 2);
// console.log(shop.qoldiq()); 
// shop.sotish('non', 3);   
// shop.qabul('cola', 4);   
// console.log(shop.qoldiq());




// ////// E-TASK


// function getReverse(str) {
//   return str.split('').reverse().join('');
// }

// console.log(getReverse("salom")); 



/////// F-TASK


function findDoublers(s) {
  for (let i = 0; i < s.length; i++) {
      if (s.indexOf(s[i]) < i) {
          return true;
      }
  }
  return false;
}

// Misollarni sinash
console.log(findDoublers("11qq22ww"));  // true
console.log(findDoublers("asdfg"));   // true



