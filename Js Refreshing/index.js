// console.log("Hello World");
// document.getElementById("click").style.color = "purple";

// 1. write into the browser
    // document.write('Hello bhai');

// 2. JAVASCRIPT CONSOLE API's

    // gives warning and error in the console
    // console.warn("Last warning hai");
    // console.error("Error aagaya BC");

    // to clear the console
    // console.clear();

    // if any comparision fails assertion fails vice verca passes
    // console.assert(4 == 6); // will show assertion because condition fails
    // console.assert(4 == 6 - 2); // will show assertion because condition fails

// 3. Data Types in JavaScript
/*
At high level there are 2 types of data types in javascript:
1. Primitive data types: number, string, undefined, boolean, null, symbol
2. Reference data types: Arrays & objects
*/

    // // variable
    // var num1 = 5;
    // var num2 = 15;
    // console.log(num1 + num2);

    // // string
    // var string1 = 'This is a string';
    // var string2 = 'This is also a string';
    // console.log(string1);
    // console.log(string2);

    // // object
    // var marks = {
    //     prathamesh: 50,
    //     arjun: 49,
    //     patil : 75
    // }
    // console.log(marks)
    // console.log(marks.prathamesh)
    // console.log(marks.arjun)

    // // undefined -> they are undefined but there can be value for it
    // var und;
    // console.log(und)

    // var und = undefined;
    // console.log(und)

    // // booleans
    // var a = true
    // var b = false
    // console.log(a, b)

    // // null -> no value assignd to it
    // var n = null;
    // console.log(n)

    // // Arrays
    // var arr = [1, 2, 'prathamesh', 4, 5]
    // console.log(arr[3]);
    // for (let index = 0; index < arr.length; index++) {
    //     console.log(arr[index]);
        
    // }


// 4. operators in java script

    // // Arithmetic operators
    // var a = 10;
    // var b = 100;
    // console.log('The value of a + b is: ', a + b);
    // console.log('The value of a + b is: ', a - b);
    // console.log('The value of a + b is: ', a * b);
    // console.log('The value of a + b is: ', a / b);

    // // Assignment operators
    // var c = b;
    // c += 2;
    // console.log(c);

    // // Comparision operators
    // var x = 10;
    // var y = 15;
    // console.log(x == y);
    // console.log(x >= y);
    // console.log(x <= y);
    // console.log(x > y);
    // console.log(x < y);

    // // Logical operators
    // // logical and
    // console.log(true && true)
    // // logical or
    // console.log(true || true)
    // // logical not
    // console.log(!true)

// 5. Functions in java script

    // function avg (a, b) {
    //     var c = (a + b) / 2;
    //     return c;
    // }

    // var a = avg (5, 6);
    // var b = avg (15, 6);
    // console.log(b);

// 6. Conditional statements in java script

    // var age = 19;

    // if (age > 18) {
    //     console.log('Ohh BC, you are adult now drinks on the house');
    // }
    // else if (age == 18) {
    //     console.log('shit. just wait 1 year man');
    // }
    // else {
    //     console.log('kid call your parents')
    // }

// 7. Loop's in java script

    // var array = [1, 2, 3, 4, 5, 6, 7 ,8, 9, 10]

    // // for loop
    // // for (var i = 0; i < array.length; i++) {
    // //     console.log(array[i])
    // // }

    // // foreach loop
    // // array.forEach(function(element) {
    // //     console.log(element)
    // // })

    // // while loop & do while loop
    // let a = 0;
    // // while (a < array.length) {
    // //     console.log(array[a]);
    // //     a++;
    // // }

    // do {
    //     console.log(array[a]);
    //     a++;
    // } while(a < array.length);

// 8. Break & Continue in java script

    // var array = [1, 2, 3, 4, 5];

    // for (var i = 0; i < array.length; i++) {
    //     if (i == 2) {
    //         // break; // when condition fired it breaks the loop i.e. no more performance
    //         continue; // when continue fired it skips that particular part of loop and runs the rest i.e. in this case 3 will no be printed
    //     }
    //     console.log(array[i]);
    // }

// 9. Array methods

    /*Array length
    Array toString()
    Array pop()
    Array push()
    Array shift()
    Array unshift()
    Array join()
    Array delete()
    Array concat()
    Array flat()
    Array splice()
    Array slice()*/

    // let myArr = ['fan', 'man', 'can', 34, null, true]

    // console.log(myArr.length) // to get lenght of array
    // myArr.pop(); // pops the last element
    // myArr.push('Prathamesh'); // pushes at end
    // myArr.shift(); // delets the first element
    // myArr.unshift('kamble'); // inserts in the first position

    // console.log(myArr);

// 10. String Methods

    /*
    String length
    String slice()
    String substring()
    String substr()
    String replace()
    String replaceAll()
    String toUpperCase()
    String toLowerCase()
    String concat()
    String trim()
    String trimStart()
    String trimEnd()
    String padStart()
    String padEnd()
    String charAt()
    String charCodeAt()
    String split()
*/ 

    // let myString = 'I am a Devil of my own world! Devil';

    // console.log('Length of the string:' ,myString.length);
    // console.log('first occurance index of the Devil:',myString.indexOf('Devil'));
    // console.log('last occurance index of the Devil:',myString.lastIndexOf('Devil'));
    // console.log('Slice :', myString.slice(7,12));
    // console.log('Replace :', myString.replace('Devil', 'Javascript'))

    // console.log(myString);

// 11. Dates in javascript

    // let myDate = new Date();
    // console.log(myDate.getDate());
    // console.log(myDate.getDay());
    // console.log(myDate.getFullYear());
    // console.log(myDate.getHours());
    // console.log(myDate.getMinutes());

// 12. DOM manipulation

    // let elem = document.getElementById('click');
    // // console.log(elem);

    // let elemClass = document.getElementsByClassName('container');
    // // console.log(elemClass[0]);

    // // elemClass[0].style.background = 'hotpink';
    // // document.getElementsByClassName('container')[0].style.background = 'yellow';

    // elemClass[0].classList.add('primary');
    // elemClass[0].classList.remove('primary');

    // // console.log(elemClass[0].innerHTML);
    // // console.log(elemClass[0].innerText);

    // tn = document.getElementsByTagName('div');
    // // console.log(tn);

    // // Append Child
    // createdElement = document.createElement('button');
    // createdElement.innerText = "Hello";

    // tn[0].appendChild(createdElement);
    
    // newElement = document.createElement('b');
    // newElement.innerText = 'I am the fucking bold';
    
    // tn[1].appendChild(newElement);

    // // Replace child
    // ahh = document.createElement('button');
    // ahh.innerText = "No Hello";

    // tn[0].replaceChild(ahh, createdElement);

    // // Query Selector -> selects the query 
    // sel = document.querySelector('.container');
    // console.log(sel);
    // sel = document.querySelectorAll('.container');
    // console.log(sel);

// 13. Javascript Events 

    // function clicked() {
    //     console.log('button click hua');
    // }
    // window.onload = console.log("window is loded");
    
    // // Event listner
    
    // // id.addEventListener('click', function() {
    // //     console.log('Clicked on container')
    // // })
    // // id.addEventListener('mouseout', function() {
    // //     console.log('Mouse out of container')
    // // })
    // // id.addEventListener('mouseover', function() {
    // //     console.log('Mouse in container')
    // // })

    // let prev = document.querySelectorAll('.container')[1].innerHTML;
    // id.addEventListener('mouseup', function() {
    //     document.querySelectorAll('.container')[1].innerHTML = prev;
    //     console.log('Released')
    // })
    // id.addEventListener('mousedown', function() {
    //     document.querySelectorAll('.container')[1].innerHTML = "Mai hu badal";
    //     console.log('clicked')
    // })

// 14. Arrow function Set Timeout & Set Interval 

    // // Arrow function is basically short form to write the function for eg.
    // hello = function() {
    //     console.log('Hello World');
    // }
    // hello()

    // // skipped writing function here
    // Hello = () => {
    //     console.log('Hello World!');
    // }
    
    // // skipped paranthesis here because theres only one statement
    // Hello = () => console.log('Hello World!!');

    // // similarly we can skip paranthesis if theres only one paramenter 
    // Hello()

    // example = () => {
    //     document.querySelectorAll('.container')[1].innerHTML = 'Hello World';
    //     console.log('Hurray!!')
    // }

    // // clr = setTimeout(example, 2000);
    // clr = setInterval(example, 2000);

    // // clearTimeout(clr);
    // // clearInterval(clr);  // to clear the timeout and interval which is set


// 15. Local Storage

    // localStorage -> to see the local storage

    // localStorage.setItem('name', 'Prathamesh') -> to set local storage name

    // localStorage.getItem('name') -> to get local sotrage by name

    // localStorage.removeIten('name')

    // localStorage.clear();


// 16. JSON

    // JSON is a format for storing and transporting data.

    // JSON is often used when data is sent from a server to a web page.

    // let obj = {
    //     name: 'Prahthamesh',
    //     surname: 'Kamble',
    //     age: 19,
    //     newobj: {
    //         petname: 'Chiku',
    //         height : 5.9
    //     }
    // }

    // jso = JSON.stringify(obj); // converted to string
    // parse = JSON.parse(jso); // converted to object

    // console.log(obj)

    // console.log(jso)
    // console.log(parse)

// 17. Tempelate literals - Backticks
    // let a = 5
    // console.log(`The value of a is: ${a}`)