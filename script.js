console.log('----- #5')
let a=45
let b=15
console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(b/a)
console.log(a+b, a-b, a*b, a/b, b-a)

console.log('------ #6')
let i=1
while (i < 6) {
    console.log(i);
   i++;
}

console.log('------- #7')
let k=5
while (k > 0) {
    console.log(k);
    k--;
}

console.log('-------- #8')
function getMarkInfo(condition) {
    if (condition === 10) {
       console.log('У вас максимальный балл'); 
    }
    else {
        console.log('У вас средний балл');
   }
}
getMarkInfo(10)
getMarkInfo(5)

console.log('--------- #9')
function getDayInfo(position) {
    if (position === 0) {
        console.log('Sunday')
    }
    else if (position === 1) {
        console.log('Monday')
    }
    else if (position === 2) {
        console.log('Tuesday')
    }
    else if (position === 3) {
        console.log('Wednesday')
    }
    else if (position === 4) {
        console.log('Thursday')
    }
    else if (position === 5) {
        console.log('Friday')
    }
    else if (position === 6) {
        console.log('Saturday')
    }
    else {
        console.log('Wrong data')
    }
}
getDayInfo(0)
getDayInfo(1)
getDayInfo(2)
getDayInfo(3)
getDayInfo(4)
getDayInfo(5)
getDayInfo(6)
getDayInfo(65)


console.log('--------- #9_v2')
function getDayInfo(position) {
    switch (position) {
        case 0:
            console.log('Sunday');
            break;
        case 1:
            console.log('Monday');
            break;
        case 2:
            console.log('Tuesday');
            break;
        case 3:
            console.log('Wednesday');
            break;
        case 4:
            console.log('Thursday');
            break
        case 5:
            console.log('Friday');
            break;
        case 6:
            console.log('Saturday');
            break;
        default:
            console.log('Wrong data')
    }
        
    
}
getDayInfo(0)
getDayInfo(1)
getDayInfo(2)
getDayInfo(3)
getDayInfo(4)
getDayInfo(5)
getDayInfo(6)
getDayInfo(65)

console.log('---------- #10')
let arrOne = ['a', 'b', 'c'];
arrOne[3] = 1;
arrOne[4] = 2;
arrOne[5] = 3;
console.log(arrOne)

console.log('----------- #11')
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = arr1.concat(arr2);

console.log(arr3)

console.log('------------ #12')
function countNumber(number) {
    let sum = 0;
    for(let i = 1; i <= number; i++){
        sum += i;
    }
    console.log(sum);
    // тут должен быть ваш код
}
countNumber(20)
