//Assignment2 

// A JavaScript function that takes a number as a parameter and prints whether it's positive, negative, or zero.
function numcheck (num) {
    // let n = num
    console.log(num)
    if (num > 0) {
        console.log(num, 'is a positive number')
    }
    else if (num == 0) {
        console.log(num, 'is zero')
    }
    else 
        console.log(num, 'is a negative number')
}
numcheck(2);
numcheck(-2);
numcheck(0);

// Write a JavaScript function that takes a positive integer as a parameter and calculates its factorial using a for loop. The factorial of a number N is the product of all positive integers less than or equal to N.
function factorial (a) {
    let fact = 1
    console.log(a)
    if (a == 0) {
        console.log('number is zero')
    }
    else if (a > 0) {
        for(let i=1 ; i<=a ; i++) {
            fact = fact * i
        }
    }
    else if (a < 0) {
        console.log('number is not positive');
    }
    console.log("Factorial is ", fact)
}
factorial(5);
factorial(0);
factorial(-5);

// Write a JavaScript function that takes two numbers as parameters and returns the larger one.
function largerNumber (a,b) {
    if (a > b) {
        console.log(a, 'is the larger one')
    }
    else 
        console.log(b, 'is the larger one')
}
largerNumber(9,15)
largerNumber(10,5)

// Write a JavaScript function that takes a string as a parameter and determines whether it's a palindrome or not. 
// A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward (ignoring spaces, punctuation, and capitalization).
function palindrome(string1) {
    // console.log(string1)
    let len = string1.length
    // console.log('length is', len)
    for (let i=0; i<= len/2; i++) {
        if (string1[i] != string1[len-1-i]) {
            return console.log(string1, 'is not a palindrome string')
        }
    }
    console.log(string1, 'is a palindrome string')
}
palindrome("nitin")
palindrome('abba')
palindrome("abcdefg")

// Write a JavaScript function that takes a positive integer as a parameter and prints all the prime numbers less than or equal to that integer. 
// A prime number is a natural number greater than 1 that is not a product of two smaller natural numbers.
function primenumber(num) {
    // console.log(num)
    var count = 0 
    for (let i=0; i<=num; i++){
        if (num % i == 0) {
            count = count + 1 
        }
    }
    if (count == 2) {
        console.log(num, 'is prime')
    }
    else 
        console.log(num, 'is not prime')
}
primenumber(7);
primenumber(15);

// Write a JavaScript function that simulates a simple calculator. 
// The function should take two numbers and an operator (+, -, *, or /) as parameters and perform the corresponding operation.
function calculator (a,b,opr) {
    // console.log(a,b,opr)
    if (opr == '+') {
        return console.log(a+b)
    }
    else if (opr == '-') {
        return console.log(a-b)
    }
    else if (opr == '*') {
        return console.log(a*b)
    }
    else if (opr == '/') {
        return console.log(a/b)
    }
}
calculator(5,10,'+')
calculator(5,10,'-')
calculator(5,10,'*')
calculator(5,10,'/')


// Write a JavaScript function that takes a string as a parameter and counts the number of vowels (a, e, i, o, u) in the string.

function vowelCounter (str) {
    console.log(str)
    let len = str.length
    let count = 0
    for (let i=0; i<= len; i++) {
        if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u') {
            count += 1;
        }
    }
    return console.log(count)
}
vowelCounter("fghty")
vowelCounter("wertaiqotu")
vowelCounter('aeiouaeiou')

// Write a JavaScript function that takes a positive integer as a parameter and checks if it's a perfect number. 
// A perfect number is a positive integer that is equal to the sum of its proper divisors, excluding itself.
function checkPerfectNumber(num) {
    console.log(num)
    let sum = 0 
    for (let i=1; i<=num/2; i++) {
        if (num % i == 0) {
            sum += i;
        }
    }

    if (sum === num && sum != 0) {
        return console.log(num, 'is a perfect number & the sum is =', sum)
    }
    else{
        return console.log(num, 'is not a perfect number & the sum is =', sum)
    } 

}
checkPerfectNumber(5)
checkPerfectNumber(6)
checkPerfectNumber(28)
checkPerfectNumber(100)


// Write a JavaScript function that takes a number as a parameter and prints the Fibonacci series up to that number. 
// The Fibonacci series is a sequence of numbers in which each number is the sum of the two preceding ones.
function fibonacci(num) {
    console.log(num)
    let arr = [];
    arr[0] = 0
    arr[1] = 1 
    for (let i=2; i<num; i++) {
        arr[i] = arr[i-2] + arr[i-1];
    }
    return arr;
}

let num = 5;
answer = fibonacci(num);
console.log("The Fibonacci series is till 5th term is: ", answer);

// fibonacci(5);

// Write a JavaScript function that takes a positive integer as a parameter and prints its multiplication table up to 10.
function multiplication(num) {
    console.log(num)
    let result = 1
    for(let i=1; i<=10; i++){
        result = i * num 
        console.log(`${num} * ${i} = ${result}`);
    }
}
// multiplication(9);
// multiplication(5);
multiplication(7);

