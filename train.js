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








// 22-dars

console.log("Jack Ma maslahatlari");
const list = [
    "Yaxshi talaba bo'ling", // 0-20
    "To'g'ri boshliq tanlang va ko'proq xato qiling", // 20-30
    "O'zingizning ishlaringizni boshlang boshlang", // 30-40
    "Siz kuchli bo'lgan narsalarni qiling", // 40-50
    "Yoshlarga investitsiya qiling", //50-60
    "Endi biroz dam oling va sekinlashgan holda davom eting", // 60- ~
];

function maslahatBering(a, callback) {
    if(typeof a !== "number") callback("insert a number", null);
    // if(typeof a !== "number", a < 0) callback("insert a number", null);
    else if (a > 0 && a <= 20) callback(null, list[0]);
    else if (a > 20 && a <= 30) callback(null, list[1]);
    else if (a > 30 && a <= 40) callback(null, list[2]);
    else if (a > 40 && a <= 50) callback(null, list[3]);
    else if (a > 50 && a <= 60) callback(null, list[4]);
     else { 
        setInterval(function () {
            callback(null, list[5]);
        },1000);
       
    }
};

console.log('passed here 0');

maslahatBering(88, (err, data) => {
    if(err) console.log("ERROR:", err);
    else {
        console.log("javob:", data);
    }
});
console.log('passed here 1');




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


