/* //1. Print numbers from 1 to 10
for(let i=1; i<=10; i++){
    console.log(i)
} 

let i=1;
while (i<=10){
    console.log(i)
    i++
}
*/

/* 
//2. Print the odd numbers less than 100
for(let i=1; i<=100;i+=2){
    console.log(i)
}

let j=0;
while(j<=100){
    if(j%2!==0) console.log(j)
    j++
} */

/* //3. Print the multiplication table with 7
for(let i=1; i<=10;i++){
    console.log(`${i} x ${7} = ${7*i}`)
}
 */

/* //4. Print all the multiplication tables with numbers from 1 to 10
let j = 1;
while(j<=10){
    for(let i=1; i<=10;i++){
        console.log(`${i} x ${j} = ${j*i}`)
    }
    j++;
} can also use two if statements
 */
/* 
//5. Calculate the sum of numbers from 1 to 10
let i=0;
let sum = 0;
while(i<=10){
    sum+=i;
    i++
}
console.log(sum)

//using recursion
function sumrecursion(limit){
    //base case
    if(limit===0){
        return limit
    }
    //recursion
    return limit + sumrecursion(limit-1)
}
console.log(sumrecursion(10)) 
*/

/* //6. Calculate 10!
let i=10;
let factorial = 1;
while(i>0){
    factorial = factorial * i;
    i--
}
console.log(factorial)

//using recursion
function factorialrecursive(num){
    //base case
    if(num===1){
        return 1;
    }
    //recursion
    return num * factorialrecursive(num-1)
}
console.log(factorialrecursive(10)) 
*/

/* //7. Calculate the sum of even numbers greater than 10 and less than 30
//recursion
function sumevenrecursion(min,max){
    //base case
    if(max===min){
        return 0 //range not inclusive of last number
    }
    //recursion
    if(max%2===0){
        return max + sumevenrecursion(min, max-1)
    } else{
        return sumevenrecursion(min, max-1) //does not add anything to stack
    }
}
console.log(sumevenrecursion(10,29)) 
*/


/* 
//8. Create a function that will convert from Celsius to Fahrenheit
const celcToFarh = (val) =>{
    return (`${val} deg Celcius = ${(val*9/5)+32} Farenheit`)
}
console.log(celcToFarh(60))

//9. Create a function that will convert from Fahrenheit to Celsius
const farhToCelc = (val) =>{
    return (`${val} deg Farenheit = ${(val-32)*5/9} Celcius`)
}
console.log(farhToCelc(140)) 
*/

/* 
//10. Calculate the sum of numbers in an array of numbers
//recursion
function sumInArrayRecursive(arr=[]){
    //base case - empty array, and single number array
    if(arr.length===0){
        return 0
    }
    if(arr.length===1){
        return arr[0]
    }

    //recur from max to min
    return arr[arr.length-1] + sumInArrayRecursive(arr.slice(0,-1))
}

console.log(sumInArrayRecursive([1,2,3,4,5,6,7,8,9,10]))

 */

