
let arr = ['start', 2, 3, 5, 11, 155, 888, '15x', 6789, -5564, 'obuolys', -51, 55, 0, 33, 789, 6543, 1, 'trylika', 444, 321, 654, -1, 987, -333, -321, 'end']
console.log(arr)

//1
let task1 = arr.filter(function (num) {
  return num > 0
})
console.log(task1)


//2
let task2 = arr.filter(function (num) {
  return num < 0
})
console.log(task2)

//3
let task3 = arr.filter(function (num) {
  return num % 2 === 0 
})
console.log(task3)

//4
let task4 = arr.filter(function (num) {
  return num % 3 === 0 
})
console.log(task4)

//5
let task5 = arr.filter(function (num) {
  return num % 5 === 0 
})
console.log(task5)

//6
let task6 = arr.filter(function (num) {
  return num % 11 === 0 
})
console.log(task6)

//7
let task7 = arr.filter(function (num) {
  return num % 31 === 0 
})
console.log(task7)

//8
let task8 = arr.filter(function (num) {
  return num % 2 === 0 && num % 3 === 0
})
console.log(task8)

//9
let task9 = arr.filter(function (num) {
  return num % 3 === 0 && num % 7 === 0
})
console.log(task9)

//10
let task10 = arr.filter(function (num) {
  return num % 5 === 0 && num % 9 === 0
})
console.log(task10)

//11
let task11 = arr.filter(function (num) {
  return num % 5 === 0 && num % 11 === 0
})
console.log(task11)

//12
let task12 = arr.filter(function (num) {
  return num % 2 === 0 && num % 8 === 0 && num % 12 === 0
})
console.log(task12)

//13
let task13 = arr.filter(function (num) {
  return num % 2 === 0 || num % 3 === 0
})
console.log(task13)

//14
let task14 = arr.filter(function (num) {
  return num % 3 === 0 || num % 5 === 0
})
console.log(task14)

//15
let task15 = arr.filter(function (num) {
  return num % 5 === 0 || num % 6 === 0
})
console.log(task15)

//16
let task16 = arr.filter(function (num) {
  return num % 7 === 0 || num % 8 === 0
})
console.log(task16)

//17
let task17 = arr.filter(function (num) {
  return num % 9 === 0 || num % 13 === 0
})
console.log(task17)

//18
let task18 = arr.filter(function (num) {
  return num % 2 === 0 && num % 3 === 0 || num % 5 === 0
})

//19
let task19 = arr.filter(function (num) {
  return num % 5 === 0 && num % 7 === 0 || num % 9 === 0
})
console.log(task19)

//20
let task20 = arr.filter(function (num) {
  return num % 7 === 0 && num % 8 === 0 || num % 11 === 0
})
console.log(task20)

//21
let task21 = arr.filter(function (num) {
  return num % 9 === 0 && num % 12 === 0 || num % 13 === 0
})
console.log(task21)

//22
let task22 = arr.filter(function (num) {
  return num > 100
})
console.log(task22)

//23
let task23 = arr.filter(function (num) {
  return num > 555
})
console.log(task23)

//24
let task24 = arr.filter(function (num) {
  return num >= 888
})
console.log(task24)

//25
let task25 = arr.filter(function (num) {
  return num >= 6789
})
console.log(task25)

//26
let task26 = arr.filter(function (num) {
  return num < 50
})
console.log(task26)

//27
let task27 = arr.filter(function (num) {
  return num < 1000
})
console.log(task27)

//28
let task28 = arr.filter(function (num) {
  return num <= -1
})
console.log(task28)

//29
let task29 = arr.filter(function (num) {
  return num <= -5564
})
console.log(task29)

//30
let task30 = arr.filter(function (num) {
  return 1000 > num && num > 500
})
console.log(task30)

//31
let task31 = arr.filter(function (num) {
  return 100 > num && num > 0
})
console.log(task31)

//32
let task32 = arr.filter(function (num) {
  return 0 > num && num > -50
})
console.log(task32)

//33
let task33 = arr.filter(function (num) {
  return 0 >= num && num > -100
})
console.log(task33)

//34
let task34 = arr.filter(function (num) {
  return 0 <= num && num < 55
})
console.log(task34)

//35
let task35 = arr.filter(function (num) {
  return 444 <= num && num <= 654
})
console.log(task35)

//36
let task36 = arr.filter(function (num) {
  return num > 0 && num % 2 === 0
})
console.log(task36)

//37
let task37 = arr.filter(function (num) {
  return num > 0 && num % 3 === 0
})
console.log(task37)

//38
let task38 = arr.filter(function (num) {
  return num < 0 && num % 4 === 0
})
console.log(task38)

//39
let task39 = arr.filter(function (num) {
  return num < 0 && num % 111 === 0
})
console.log(task39)

//40
let task40 = arr.filter(function (num) {
  return num > 500 && num % 2 === 0
})
console.log(task40)

//41
let task41 = arr.filter(function (num) {
  return num > 1000 && num % 3 === 0
})
console.log(task41)

//42
let task42 = arr.filter(function (num) {
  return num < 1000 && num % 9 === 0
})
console.log(task42)

//43
let task43 = arr.filter(function (num) {
  return num < 500 && num % 2 === 0
})
console.log(task43)

//44
let task44 = arr.filter(function (num) {
  return num >= 33 && num % 3 === 0
})
console.log(task44)

//45
let task45 = arr.filter(function (num) {
  return num >= 444 && num % 12 === 0
})
console.log(task45)

//46
let task46 = arr.filter(function (num) {
  return num <= 155 && num % 5 === 0
})
console.log(task46)

//47
let task47 = arr.filter(function (num) {
  return num <= -333 && num % 9 === 0
})
console.log(task47)

//48
let task48 = arr.filter(function (num) {
  return num > 100 && num < 500 && num % 5 === 0
})
console.log(task48)

//49
let task49 = arr.filter(function (num) {
  return num >= 888 && num < 1000 && num % 2 === 0
})
console.log(task49)

//50
let task50 = arr.filter(function (num) {
  return num <= 888 && num >= -333 && num % 3 === 0 && num != 0
})
console.log(task50)

//51
let task51 = arr.filter(function (num) {
  return Number(num)
})
console.log(task51)

//52
let task52 = arr.filter(function (num) {
  return typeof num === 'string'
})
console.log(task52)

//53
let task53 = arr.filter(function (num) {
  return typeof num === 'string' && num.length < 5
})
console.log(task53)

//54
let task54 = arr.filter(function (num) {
  return typeof num === 'string' && num.length >= 5
})
console.log(task54)

//55
let task55 = arr.filter(function (num) {
  return typeof num === 'string' && num.length < 7
})
console.log(task55)

//56
let task56 = arr.filter(function (num) {
  return typeof num === 'string' && num.includes('t')
})
console.log(task56)

//57
let task57 = arr.filter(function (num) {
  return typeof num === 'string' && num.includes('y')
})
console.log(task57)

//58
let task58 = arr.filter(function (num) {
  return typeof num === 'string' && (num.includes('e') || num.includes('a'))
})
console.log(task58)

//59
let task59 = arr.filter(function (num) {
  return typeof num === 'string' && (num.includes('t') || num.includes('i'))
})
console.log(task59)

//60
let task60 = arr.filter(function (num) {
  return typeof num === 'string' && (num.includes('t') && !num.includes('k'))
})
console.log(task60)

//61
let task61 = arr.filter(function (num) {
  return typeof num === 'string' && (num.includes('a') && !num.includes('s'))
})
console.log(task61)

//62
let task62 = arr.filter(function (text) {
  return typeof text === 'string' && text.split('t').length - 1 === 2;
});
console.log(task62)

//63
let task63 = arr.filter(function (num) {
  return typeof num === 'string' && num.includes('st')
})
console.log(task63)

//64
let task64 = arr.filter(function (num) {
  return typeof num === 'string' && num.includes('nd')
})
console.log(task64)

//65
let task65 = arr.filter(function (num) {
  return typeof num === 'string' && !num.includes('s')
})
console.log(task65)

//66
let task66 = arr.filter(function (num) {
  return typeof num === 'string' && !num.includes('t')
})
console.log(task66)

//67
let task67 = arr.filter(function (num) {
  return typeof num === 'string' && (!num.includes('r') && !num.includes('l'))
})
console.log(task67)

// //68
let task68 = arr.filter(function (num) {
  return typeof num === 'string' && !isNaN(num[0]);
});

console.log(task68);

//69
let task69 = arr.filter(function (num) {

  return typeof num === 'string' && num[0] === 's'
})
console.log(task69)

//70
let task70 = arr.filter(function (num) {

  return typeof num === 'string' && num[0] === 'o'
})
console.log(task70)

//70.1
let task700 = arr.filter(function (num) {
  return typeof num === 'string' && num[num.length - 1] === 'd'
})
console.log(task700)

//71
let task71 = arr.filter(function (num) {
  return typeof num === 'string' && num[num.length - 1] === 's'
})
console.log(task71)

//72
let task72 = arr.filter(function (num) {
  return typeof num === 'string' && (num.length > 4 && num.includes('o') )
})
console.log(task72)

//73
let task73 = arr.filter(function (num) {
  return typeof num === 'string' && (num.length >= 5 && num.includes('a') )
})
console.log(task73)

//75
let task75 = arr.filter(function (num) {
  return typeof num === 'string' && num.length % 2 === 0
})
console.log(task75)

//76
let task76 = arr.filter(function (num) {
  return typeof num === 'string' && num.length % 2 === 1 && num.includes('s')
})
console.log(task76)

//77
let task77 = arr.filter(function (num) {

  return typeof num === 'string' && num[2] === 'a'
})
console.log(task77)

//78
let task78 = arr.filter(function (num) {
  return typeof num === 'string' && num[3] === 'l'
})
console.log(task78)

//79
let task79 = arr.filter(function (num) {
  return typeof num === 'string' && num[4] !== 't' && num.length > 4
})
console.log(task79)

//80
let task80 = arr.filter(function (num) {
  return typeof num === 'string' && num[0] !== 'e' && num.length < 6 && isNaN(num[0]);
});

console.log(task80);











