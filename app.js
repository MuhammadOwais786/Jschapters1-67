/* =====================================================================
                                CHAPTER 01
========================================================================*/



// Task (01)

var name = prompt("Enter your name")
alert("Welcome To My Website " + name)



// Task (02)

alert("Error! Please enter a valid password")



// Taskn (03)

alert("Welcome to JS Land..." + "\n" + "Happy Coding")



// Task (04)

alert("Welcome to JS Land ")
alert("Happy Coding")



// Task (05)

alert("Hello... I can run JS through my web browser's console")





/* =====================================================================
                                CHAPTER 02
========================================================================*/



// Task (01)

var userName;



// Task (02)

var myName = "Muhammd Owais Ahmed"



// Task (03)

var message = "Hello World"
alert(message)



// Task (04)

var name = "Muhammd Owais Ahmed"   
var age = 20
var certificate = "Certified WEB & Mobile Hybird Apllicaion Developer"
alert(name)
alert(age)
alert(certificate)



// Task (05)

alert("Pizza" + "\n" + "Pizz" + "\n" + "Piz" + "\n" + "Pi" + "\n" + "P")



// Task (06)

var email = " owaisraza2051@gmail.com "
alert("My Email Address is " + email)



// Task (07)

var book = "A smarter way to learn javaScript"
alert("I am trying to learn form the book " + book)



// Task (08)

document.write("Yah! I can write HTML through Javascript")



// Task (09)

var design = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬"
alert(design)





/* =====================================================================
                                CHAPTER 03
========================================================================*/



// Task (01)

var age = 20
alert("I am " + age + " years old")



// Task (02)

var num = 14
alert("You have visited this site " + num + " times")



// Taskn (03)

var birthYear = 2000
document.write("My birth year is " + birthYear)
document.write('Data type of my declared variable is ' + typeof (birthYear))



// Task (04)

var name = "Muhammd Owais Ahmed"
var product = "Shirt"
var quantity = 3
var store = "chaseup.com"
alert(name + " ordered " + quantity + " " + product + ' from ' + store)





/* =====================================================================
                                CHAPTER 04
========================================================================*/



// Task (01)
var variable1 = "Hello World1",
    variable2 = "Hello World2...",
    variable3 = 42;



// Task (02)

/* ***** legal variable ***** */
document.write(
    "<b>Legal Variable Example</b> <br>" +
    "var abc;" + " <br> " +
    "var name1;" + " <br> " +
    "var $hello;" + " <br> " +
    "var _abc;" + " <br> " +
    "var hello_world;" + " <br> "
)

/* ***** illegal variable ***** */
document.write(
    "<b>Illegal Variable Example</b> <br>" +
    "var 1ab " + " <br> " +
    "var hello world;" + " <br> " +
    "var .hek;" + " <br> " +
    "var alert;" + " <br> " +
    "var console;" + " <br> "
)



// Task (03)

document.write("<b> RULES FOR NAMING J VARIABLE: </b> <br>")
document.write("A variable can contain $ numbers  alphabets and _. For Example : $my_1stVariable <br> " +
    "Variables must begin with a Letter $ _ . For example : $name _name or name <br>" +
    "Variable names are case sensitive <br> " +
    " Variable names should not be JS keyword")





/* =====================================================================
                                CHAPTER 05
========================================================================*/



// Task (01)

var num1 = +prompt("Enter first number")
var num2 = +prompt("Enter second number")
var res = num1 + num2
alert("The Sum of " + num1 + " and " + num2 + " is " + res)



// Task (02)

/* ***** Subtraction ***** */

var num1 = +prompt("Enter first number")
var num2 = +prompt("Enter second number")
var res1 = num1 - num2
alert("The subtraction of two number " + num1 + " and " + num2 + " is " + res1)

/* ***** Multiplication ***** */

var num1 = +prompt("Enter first number")
var num2 = +prompt("Enter second number")
var res1 = num1 * num2
alert("The multiplication of two number " + num1 + " and " + num2 + " is " + res1)

/* ***** Division ***** */

var num1 = +prompt("Enter first number")
var num2 = +prompt("Enter second number")
var res1 = num1 / num2
alert("The division of two number " + num1 + " and " + num2 + " is " + res1)

/* ***** Modulus ***** */

var num1 = +prompt("Enter first number")
var num2 = +prompt("Enter second number")
var res1 = num1 % num2
alert("The modulus of two number " + num1 + " and " + num2 + " is " + res1)



// Task  (03)


var variable =
    console.log("The value of the declared variable is " + variable)
var variable = 5
console.log("The initial value is " + variable)

console.log("The value after the increment is " + ++variable)

var variable = variable + 7
console.log("The value after addition is " + variable)

console.log("The value after decreament is " + --variable)
console.log("The remainder is " + variable % 3)



// Task (04)

var ticketPrice = 600
console.log("Total cost to buy 5 tickets to a movie is " + ticketPrice * 5 + "PKR")



// Task (05)

var num = +prompt("Enter the number to generate it's table: ")
document.write("<h1>Table Of " + num + "</h1>")
document.write(num + " x 1 = " + num * 1 + "<br>")
document.write(num + " x 2 = " + num * 2 + "<br>")
document.write(num + " x 3 = " + num * 3 + "<br>")
document.write(num + " x 4 = " + num * 4 + "<br>")
document.write(num + " x 5 = " + num * 5 + "<br>")
document.write(num + " x 6 = " + num * 6 + "<br>")
document.write(num + " x 7 = " + num * 7 + "<br>")
document.write(num + " x 8 = " + num * 8 + "<br>")
document.write(num + " x 9 = " + num * 9 + "<br>")
document.write(num + " x 10 = " + num * 10 + "<br>")



// Task (06)

var celcius = prompt("Enter the temperature in celcius:")
var fahrenheit = (celcius * 9 / 5) + 32
console.log(celcius + "°C is " + fahrenheit + "°F")

var f = prompt("Enter the temperature in farhenheit")
var c = (f - 32) * (5 / 9)
console.log(f + "°F is " + c + "°C")



// Task (07)

document.write("<h1><b>SHOPPING CART</b></h1><br>")


/* *****  Price and quantity Of Item 1 ***** */

var p1 = +prompt("Pice of item 1:")
document.write("Price of item 1 is " + p1 + "<br>")
var q1 = +prompt("Quantity of item 1:")
document.write("Quantity of item 1 is " + q1 + "<br>")

/* *****  Price and quantity Of Item 2 ***** */

var p2 = +prompt("Pice of item 2:")
document.write("Price of item 2 is " + p2 + "<br>")
var q2 = +prompt("Quantity of item 2:")
document.write("Quantity of item 2 is " + q2 + "<br>")

/* *****  Shipping Charges ***** */

var ship = +prompt("Enter Shipping Charges Here")

/* *****  Show The Result ***** */

var total = +(p1 * q1) + (p2 * q2) + ship
document.write("Shipping charges are " + ship + "<br>")
document.write("Total cost of your order is " + total + "<br>")



// Task (08)

/* *****  User Marks ***** */

var sub1 = +prompt("write marks of subject 1")
var sub2 = +prompt("write marks of subject 2")
var sub3 = +prompt("write marks of subject 3")
var sub4 = +prompt("write marks of subject 4")
var obtain = (sub1 + sub2 + sub3 + sub4)
var per = obtain / 400 * 100

/* *****  Show The Result ***** */

document.write("<h1><b> MARKS SHEET </b></h1><br>")
document.write("Total marks 400" + "<br>")
document.write("marks obtained " + obtain + "<br>")
document.write("percentage " + per + "% " + "<br>")



// Task (09)

var us = prompt("Write amount in Dollars($)")
var riyal = prompt("Write amount in Riyal")
var pkr = (us * 104) + (28 * riyal)

document.write("<b> Total Currency in PKR </b><br>")
document.write("PKR " + pkr)



// Task (10)


var digit = +prompt("write digit here")
var calculation = +((digit + 5) * (10)) / 2
alert(calculation)



// Task (11)


var currentYear = +prompt("write current year")
var birthYear = +prompt("your birth year")
var age = (currentYear - birthYear)

document.write("<b> Age Calculator </b><br>")
document.write("Current Year : " + currentYear + " <br> ")
document.write("Birth Year : " + birthYear + " <br> ")
document.write("your age is : " + age + " or " + (++age))



// Task (12)

var radius = +prompt("enter the radius of circle")
var pie = 3.142
var circum = 2 * pie * radius
var area = (2 * pie) * radius * radius

document.write("<b> The Geometrizer </b><br>")
document.write("The radius of a circle is " + radius + "<br>")
document.write("The Circumference of circle is " + circum + "<br>")
document.write("Area of the cicle is " + area + "<br>")



// Task (13)

var snack = prompt("What is your favorite Snack:")
var old = +prompt("What is your current age:")
var max = +prompt("Enter the maximum age:")
var amount = +prompt("How many snacks you take per day")

var totalSnacks = (max - old) * 365 * amount

document.write("<b> The Lifetime Supply Calculator </b><br>")
document.write("Favorite Snack:" + snack + "<br>")
document.write("Current age:" + old + "<br>")
document.write("Maximum age:" + max + "<br>")
document.write("Amount of snack per day:" + amount + "<br>")
document.write("" + "<br>")
document.write("You will need " + totalSnacks + snack + " to last you until the ripe old age of " + max + "<br>")






/* =====================================================================
                            CHAPTER 06 - 09
========================================================================*/



// Task (01)

var a = 10
document.write("The value of a is " + a + "<br>")
var a = ++a
document.write("")
document.write("The value of ++a is " + a + "<br>")
document.write("Now the value of a is " + a + "<br>")
document.write("")

document.write("The value of a++ is " + a + "<br>")
var a = ++a
document.write("Now the value of a is " + a + "<br>")
document.write("")

var a = --a
document.write("The value of --a is " + a + "<br>")
document.write("Now the value of a is " + a + "<br>")
document.write("")

document.write("The value of a-- is " + a-- + "<br>")
document.write("Now the value of a is " + a + "<br>")



// Task (02)

var a = 2
var b = 1
var result = --a - --b + ++b + b--
document.write("The initial result is " + result + "<br>")
document.write("" + "<br>")

document.write("--a;1" + "<br>")
document.write("--a - --b;1" + "<br>")
document.write("--a - --b + ++b;3" + "<br>")
document.write("--a --b + ++b + b--;3" + "<br>")
document.write("" + "<br>")

document.write("a is 1" + "<br>")
document.write("b is 2" + "<br>")
document.write("result is" + result + "<br>")
document.write("" + "<br>")



// Task (03)

var nameUser = prompt("Enter Your Name...!")

alert("Hello ! " + nameUser)



// Quesiton (04)

// Task is not written



// Task (05)

var que5_1 = prompt("Enter a Number Here")
if (!que5_1) {
    que5_1 = 5
}
console.log(que5_1 + " X 1 = " + que5_1 * 1)
console.log(que5_1 + " X 2 = " + que5_1 * 2)
console.log(que5_1 + " X 3 = " + que5_1 * 3)
console.log(que5_1 + " X 4 = " + que5_1 * 4)
console.log(que5_1 + " X 5 = " + que5_1 * 5)
console.log(que5_1 + " X 6 = " + que5_1 * 6)
console.log(que5_1 + " X 7 = " + que5_1 * 7)
console.log(que5_1 + " X 8 = " + que5_1 * 8)
console.log(que5_1 + " X 9 = " + que5_1 * 9)
console.log(que5_1 + " X 10 = " + que5_1 * 10)



// Task (06)

var subject1 = prompt("Enter first subject ")
var subject2 = prompt("Enter second Subject")
var subject3 = prompt("Enter 3rd subject")

var totalMark = 100

var obtain1 = +prompt("Enter " + subject1 + " marks here... out of " + totalMark)
var obtain2 = +prompt("Enter " + subject2 + " marks here... out of " + totalMark)
var obtain3 = +prompt("Enter " + subject3 + " marks here... out of " + totalMark)

var obtained = obtain1 + obtain2 + obtain3


var percent = obtained * 100 / 300

var percent1 = obtain1 * 100 / 100
var percent2 = obtain2 * 100 / 100
var percent3 = obtain3 * 100 / 100



document.write("<table> <tr> <th>Subject</th> <th>Total Marks </th> <th> Obtained Marks </th>  <th>Percentage</th> </tr> <tr> <td>" + subject1 + "</td> <td>" + totalMark + "</td> <td>" + obtain1 + "</td>  <td>" + percent1 + "%" + "</td> </tr> <tr> <td>" + subject2 + "</td> <td>" + totalMark + "</td> <td>" + obtain2 + "</td>  <td>" + percent2 + "%" + "</td> </tr> <tr> <td>" + subject3 + "</td> <td>" + totalMark + "</td> <td>" + obtain3 + "</td>  <td>" + percent3 + "%" + "</td> </tr>              <tr> <td> Total MArks of All subjects </td> <td>" + 300 + "</td> <td> " + obtained + "</td>  <td>" + percent + "%" + "</td> </tr> </table>")



// Task (07) 

// Task is not written






/* =====================================================================
                            CHAPTER 09 - 11
========================================================================*/



// Task (01)

var city = prompt("Enter the name of city")
if (city == "karachi" || city == "Karachi") {
    alert("Welcome to the city of lights")
}



// Task (02)

var gender = prompt("Enter your gender")
if (gender == "male" || gender == "Male") {
    alert("Good Morning Sir")
} else if (gender == "female" || gender == "Female") {
    alert("Good Morning Ma’am")
}



// Task  (03)

var color = prompt("Enter the color")
color = color.toLowerCase()

if (color == "red") {
    alert("Vehicles must Stop")
} else if (color == "green") {
    alert("Vehicles move now")
} else if (color == "yellow") {
    alert("Vehicles should get ready to move")
} else {
    alert("Invalid color")
}



// Task (04)

var remFuel = +prompt("Enter the amount of remaining fuel in Litres")

if (remFuel < 0.25) {
    alert("Please Refill the fuel in your car")
}



// Task (05)


/* ***** "A" ***** */

var a = 4;
if (++a === 5) {
    alert("given condition for the variable is true");
}

/* ***** given consition is true because the value is equal to 5 ***** */


/* ***** "B" ***** */
var b = 82;
if (b++ === 83) {
    alert("given consdition for the variable is true")
}

/* ***** condition is not true because the value is not equals to 83 at this point ***** */


/* ***** "C" ***** */
var c = 12;
if (c++ === 13) {
    alert("condition 1 is true")
}
if (c === 13) {
    alert("condition 2 is true")
}
if (++c < 14) {
    alert("condition 3 is true")
}

if (c === 14) {
    alert("condition 4 is true")

}

/* ***** condition 2 is true ***** */
/* ***** condition 4 is true ***** */


/* ***** "D" ***** */
var materialCost = 2000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;

if (totalCost === laborCost + materialCost) {
    alert("The cost equals")
}

/* ***** the Condition is true ***** */


/* ***** "E" ***** */
if (true) {
    alert("True")
}
if (false) {
    alert("False")
}

/* ***** the Condition is true ***** */



// Task (06)

var marksObtain = +prompt("Enter the marks obtained in 3 subject")
var totalMarks = +prompt("Enter the total marks")
var percentage = marksObtain / totalMarks * 100

document.write("<b> MARKS SHEET </b><br>")
document.write("Marks obtained: " + marksObtain + "<br>")
document.write("Total marks: " + totalMarks + "<br>")
document.write("Percentage: " + percentage + "%" + "<br>")


if (percentage >= 80) {
    document.write("Grade: A-one" + "<br>")
    document.write("Remarks: Excellent" + "<br>")
} else if (percentage >= 70) {
    document.write("Grade: A" + "<br>")
    document.write("Remarks: Good" + "<br>")
} else if (percentage >= 60) {
    document.write("Grade: B" + "<br>")
    document.write("Remarks: You need to improve" + "<br>")
} else if (percentage < 60) {
    document.write("Grade: Fail" + "<br>")
    document.write("Remarks: Sorry" + "<br>")
}



// Task (07)

var secretNumber = 5
var guess = +prompt("Enter the Secret number ranging 1-10")

if (guess === secretNumber) {
    console.log("Bingo! Correct Answer")

} else if (guess === ++secretNumber) {
    console.log("Close enough to the correct answer")

} else if (guess = --secretNumber) {
    console.log("Close enough to the correct answer")
}



// Task (08)

var number = +prompt("Enter the number")
if (number % 3 === 0) {
    console.log(number + "is divisible by 3")
}



// Task (09)

var num = +prompt("Enter the number")

if (num % 2 === 0) {
    console.log(num + " is an Even number")
} else if (num % 2 != 0) {
    console.log(num + " is an Odd number")
}



// Task (10)


var temp = +prompt("Enter the temperature in Celcius")

if (temp >= 40) {
    console.log("It's very hot")
} else if (temp > 30) {
    console.log("Weather is normal")
} else if (temp > 20) {
    console.log("Weather is Cool today")
} else if (temp > 10) {
    console.log("OMG! Weather today is very cool")
}



// Task (11)

var firstNumber = +prompt("Enter the first number")
var secondNumber = +prompt("Enter the second number")
var operation = prompt("Enter the operation to perform +,-.*,/")

if (operation == "+") {
    console.log("The sum of two numbers is " + firstNumber + secondNumber)
} else if (operation == "-") {
    console.log("The difference of two numbers is " + firstNumber - secondNumber)
} else if (operation == "*") {
    console.log("The product of two numbers is " + firstNumber * secondNumber)
} else if (operation == "/") {
    console.log("The division of two numbers is " + firstNumber / secondNumber)
}







/* =====================================================================
                            CHAPTER 12 - 13
========================================================================*/



// Task (01)


var numb = prompt("Enter Number or String")
if (numb === "A") {
    alert("A = 65 & this is Upercase")
} else if (numb === "a") {
    alert("a = 97 & this is lowercase")
} else if (numb === "Z") {
    alert("Z = 90 & this is upercase")
} else if (numb === "z") {
    alert("z = 122 & this is lowercase")
}



// Task (02)

var ab = +prompt("enter 1st number")
var ac = +prompt("enter 2nd num")
if (ab > ac) {
    console.log(ab + " is larger number")
} else(ac + " is larger")



// Task (03)

var numeric = +prompt("enter a number")
if (numeric > 0) {
    console.log("number is Positive")
} else {
    console.log("number is Negative")
}



// Task (04)


var input = prompt("Enter a character:");
if (input == 'a' || input == 'A' || input == 'e' || input == 'E' || input == 'i' || input == 'I' || input == 'o' || input == 'O' || input == 'u' || input == 'U') {
    alert("Its a vowel");
} else if ((input >= 'a' && input <= 'z') || (input >= 'A' && input <= 'Z')) {
    alert("Its a consonant");
} else {
    alert("Invalid input please enter an alphabet");
}


// Task (05)

var password = "abc123"
var confrimPass = prompt("enter your password")
if (confrimPass.toLowerCase() == password) {
    console.log("password is right")
} else {
    console.log("password is incorrect")
}



// Task (06)

var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day"
} else {
    greeting = "Good evening";
}



// Task (07)

var time1 = prompt("Enter time like this 12:00 pm")

if (time1 >= 0000 && time1 <= 1200) {
    alert("Good Morning")
} else if (time1 >= 1200 && time1 <= 1700) {
    alert("Good Afternoon")
} else if (time1 >= 1700 && time1 <= 2100) {
    alert("Good Evening")
} else if (time1 >= 2100 && time1 <= 2359) {
    alert("Good Night")
}




/* =====================================================================
                            CHAPTER 14 - 16
========================================================================*/



// Task (01)


var student_name = []



// Task (02)

var student = {}



// Task (03)

var str = ["Hello World"]
console.log(str)



// Task (04)

var number = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(number)



// Task (05)

var boolean = [true, false]
console.log(boolean)



// Task (06)

var mix = ["Pakistan", 3227, true]
console.log(mix)



// Task (07)

var educaction = ["SSC", "HSC", "BCS", "B.COM", "BBA", "MSC", "M.Phil", "PhD"]
document.write("<b> Qualification </b><br>")
document.write("1)" + educaction[0] + " <br>")
document.write("2)" + educaction[1] + " <br>")
document.write("3)" + educaction[2] + " <br>")
document.write("4)" + educaction[3] + " <br>")
document.write("5)" + educaction[4] + " <br>")
document.write("6)" + educaction[5] + " <br>")
document.write("7)" + educaction[6] + " <br>")
document.write("8)" + educaction[7] + " <br>")





// Task (08)

var student = ["Owais", "Mahnoor", "Sadaf"]

for (var i = 0; i < student.length; i++) {
    var studentMarks = [320, 420, 470]
    for (var j = 0; j < studentMarks.length; j++) {
        var percentage = studentMarks[i] * 100 / 500
    }
    document.write("Score of " + student[i] + " is " + studentMarks[i] + ". Percentage Is " + percentage + "% <br>")
}





//  Task  9


var colors = ["Red", "White", "blue", "grey"]
console.log(colors)

// Section (A)

var add_Color_start = prompt("what color he/she wants to add to the beginning")
colors.unshift(add_Color_start)

// Section (B)

var add_Color_End = prompt("what color he/she wants to add to the End")
colors.push(add_Color_End)

// Section (C)

colors.push("Pink", "Black")
console.log(colors)

// Section (D)


colors.shift()

// Section (E)


colors.pop()

// Section (F)


var del_Color_start = prompt("what color he/she wants to delete to the beginning")
colors.shift(del_Color_start)

// Section (G)


var del_Color_End = prompt("what color he/she wants to delete to the End")
colors.pop(del_Color_End)




// Task (10)

var score = [320, 230, 420, 180]
document.write("Score of Students: " + score)
var ascending = score.sort()
document.write("Ordered Score of students: " + ascending)



// Task (11)

var citiesList = ["Karachi", "Lahore", "Peshawar", "Quetta"]
console.log("Cities list: " + citiesList)
var selectedCities = [citiesList[1] + " and " + citiesList[2]]
console.log("Selected Cities: " + selectedCities)



// Task (12)


var arr = ['This', 'is', 'my', 'cat']
arr.join(" ")


//  Task (13)

var fifo = []
fifo.push("Keyboard")
fifo.push("Mouse")
fifo.push("Joystick")
fifo.push("C.P.U")
fifo.push("Speaker")


//  Task (14)

var fifo_end = []
fifo_end.unshift("Keyboard")
fifo_end.unshift("Mouse")
fifo_end.unshift("Joystick")
fifo_end.unshift("C.P.U")
fifo_end.unshift("Speaker")



//  Task  (15)

var mobile = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"]

document.write("<select> <option>" + mobile[0] + "</option> <option>" + mobile[1] + "</option> <option>" + mobile[2] + "</option> <option>" + mobile[3] + "</option> <option>" + mobile[4] + "</option>  <option>" + mobile [5] + "</option>   </select>  ")


/* =======================================================================
                              CHAPTER # 17-20
======================================================================== */


//  Task  (01)

var multiArrEmpty = [
    [],
    []
]



//  Task (02)

var multiArr = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
]



//  Task (03)

for (var i = 1; i <= 10; i++) {
    document.write(i + " <br>")
}



//  Task (4)

var table = +prompt("Please enter table number")
var length = +prompt("Please enter length of table")

for (var i = 1; i <= length; i++) {
    document.write(table + " x " + i + " = " + table * i + "<br>")
}


//  Task (5)

var fruits = ["apple", "banana", "mango", "orange", "strawberry"]

for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
}

for (var i = 0; i < fruits.length; i++) {
    console.log("Element at index " + i + " is " + fruits[i])
}



//  Task (6)



// Section (A)

document.write(" <h2>a. Counting: </h2>")
for (var i = 1; i <= 15; i++) {
    document.write(i + ",")

}


// Section (B)

document.write(" <h2>b. Reverse Counting: </h2> ")
for (var i = 10; i >= 1; i--) {
    document.write(i + ",")
}


// Section (C)

document.write(" <h2>c. Even</h2>")
for (var i = 0; i <= 20; i = i + 2) {
    document.write(i + ",")
}


// Section (D)

document.write(" <h2>d. odd </h2>")
for (var i = 1; i <= 20; i = i + 2) {
    document.write(i +",")
}


// Section (E)

document.write("<h2>e. Series </h2>")
for (var i = 0; i <= 20; i = i + 2) {
    document.write(i + "K,")
}



//  Task (07)

alert("Welcome to our bakery")
var itemBakery = ["cake", "apple pie", "cookie", "chips", "patties"]
var inputCart = prompt("Welcom! What you want?")
var isFound = false //this is called flag

for (i = 0; i < itemBakery.length; i++) {
    if (inputCart === itemBakery[i]) {
        alert(inputCart + " is available at index " + i + " in our bakery")
        isFound = true
        break
    }
}
if (isFound === false) {
    alert("We are sorry. " + inputCart + " is not availabale")
}



//  Task (8)

var A = [24, 53, 78, 91, 12]

console.log("Array items: " + A)
A = A.sort()
console.log("The largest number is: " + A[A.length - 1])



//  Task  (9)

var b = [24, 53, 78, 91, 12]

console.log("Array items: " + b)
b = b.sort().reverse()
console.log("The smallest number is: " + b[b.length - 1])



//  Task  (10)

document.write("<h2>5 Ranging</h2>")
for (var i = 5; i <= 100; i = i + 5) {
    document.write(i + ",")
}

// /* ==========================================================================================
//                               CHAPTER # 21 - 25 === "STRING METHODS"
// =============================================================================================*/



// Question (01)

var firstName = prompt("Enter Your First Name");
var lastName = prompt("Enter Your Last Name");
var fullName = firstName + " " + lastName
alert("Your Full name is: ' " + fullName + " '");


// Question(02)

var favMobile = prompt('Enter your Favorite mobile phone model');
document.write('My favorite phone is:' + ' ' + favMobile + ' ' + ',' + 'length of string:' + favMobile.length);
 

// Question (03)

var pakistan = "Pakistani"
var letterIndex = pakistan.indexOf('n')
document.write("String: " + pakistan + "<BR> Index of 'n': " + letterIndex);



// Question (04)

var word = "Hello world";
var letterIndex = word.lastIndexOf('l');
document.write("String: " + word + "<BR> Last Index of 'l': " + letterIndex);



// Question (05)

var pak = "Pakistani";
var character = pak.charAt(3);
document.write("String: " + pak + "<BR> Charactor at Index of '3': " + character);



// Question (06)

var firstName = prompt("Enter your first name");
var lastName = prompt("Enter your last name");
var fullName = firstName.concat(' ' + lastName);
alert("Your Full name is: ' " + fullName + " '");



// Question (07)

var city = "Hyderabad";

var replace = city.replace('Hyder', 'Islam');

document.write("City: ", city, "<BR> After replacement: ", replace );


// QUestion (08)

var message = " “Ali and Sami are best friends. They play cricket and football together.” "
message.split("and").join("&")


// Question (09)

var word1 = "472"
document.write("Value: " + word1 + "<BR>" + "Type: " + typeof (word1) + "<BR>" + "Value: ", word1 = +word1, "<BR>" + "Type: " + typeof (word1), )


// Question (10)

var a = "peanuts"
var upper = a.toUpperCase()
document.write("User input: ", a, "<BR>", "Upper case: ", upper)


// Quesiton (11)

var input = prompt("Enter your name");
var firstLetter =  input[0].toUpperCase();
document.write(firstLetter + input.slice(1));


// Quesiton (12)

var num = prompt('Enter Dotted Number')
var result = num.split('.').join("")
document.write("Number: " , num , "<BR> Result: " , result )


// Question (13)

var name = prompt("Enter your name");;
name = name.toLocaleLowerCase()
var check = false

for (i = 0; i < name.length; i++) {
    if (name.slice(i, i + 1).charCodeAt() == 33 || name.slice(i, i + 1).charCodeAt() == 44  || name.slice(i, i + 1).charCodeAt() == 46 || name.slice(i, i + 1).charCodeAt() == 64 ) {
        check = true;
    } else {
        check = false;
    }
}

if (check == true) {
    alert("please enter a correct user name")
} else {
    name
}


// Question (14)

alert("Welcome To ABC Bakery");

var item = ["cake", "apple pie", "cookie", "chips", "patties"]
var inputCart = prompt("Welcome to ABC Bakery! What you want to order sir/ma'am?")
var isFound = false //this is called flag
inputCart = inputCart.toLocaleLowerCase()

for (i = 0; i < item.length; i++) {
    if (inputCart === item[i]) {
        alert(inputCart + " is available at index " + i + " in our bakery")
        isFound = true
        break
    }
}
if (isFound === false) {
    alert("We are sorry. " + inputCart + " is not availabale in our bakery");
}



// Question (15)

var str = prompt();
var flag = 0
var count = 0
var ceck = +str.slice(0, 1)

if (ceck.toString() != "NaN") {
    flag++
} else {
    for (i = 0; i < str.length; i++) {
        var cc = +str.slice(i, i + 1)
        if (cc.toString() == "NaN") {
            count++
        }
    }
}

if (flag == 1 || count == str.length) {
    alert("password does not meet above requirements")
} else {
    console.log("ok")
}


// Question (16)

var university = "University of Karachi";
var uni = university.split("")

for (i = 0; i < uni.length; i++) {
    document.write(uni[i] , "<BR>" );
}


// Question (17)

var userInput = prompt();
var checkLastInput = userInput.slice(userInput.length - 1);
document.write("User input " + userInput +"<BR>" + "Last character of input: " + checkLastInput)


// Question (18)

var b = "The quick brown fox jumps over the lazy dog";
var flag = 0;
var checked = "the "
var textcheck = b.toLocaleLowerCase()

for (i = 0; i < textcheck.length; i++) {
    dd = textcheck.slice(i, (checked.length) + i)

    if (checked == dd) {
        flag++
    }
}

document.write(b + "<BR> there are " + flag + " occurrence(s) of world 'the'")





// /* =====================================================================
//                      CHAPTER 26 - 30 == "MATH METHODS"
// ========================================================================*/


// Question (01)

var user = +prompt("Enter a Positive  Integer Number");
document.write("Number: " + user + "<BR>");
document.write("round off value: " + Math.round(user)+ "<BR>")
document.write("floor value: " + Math.floor(user)+ "<BR>")
document.write("ceil value: " + Math.ceil(user)+ "<BR>")



// Question (02)


var user1 = +prompt("Enter a Negative Floating Numbers");

document.write("Number: " + user1 + "<BR>");
document.write("round off value: " + Math.round(user1) + "<BR>");
document.write("floor value: " + Math.floor(user1) + "<BR>");
document.write("ceil value: " + Math.ceil(user1) + "<BR>");


// Question (03)

var userInput1 = +prompt("Enter a  Absolute value Number");

document.write("The Absolute value of: " + userInput1 + " is " + Math.abs(userInput1))


// Question (04)

var dice = Math.floor(6 * Math.random() + 1);

document.write("Random dice value: " + dice);



// Question (05)

var coin = Math.floor(2 * Math.random() + 1);

if (coin === 2) {
    alert(coin + " Random coin value: Head");
} else if (coin === 1) {
    alert(coin + " Random coin value: Tail");
}


// Question (06)

var random = Math.floor(100 * Math.random() + 1);

document.write("Random number between 1 and 100: " + random);



// Question (07)

var kg = prompt("Enter your weight")
kg = kg.toLowerCase()
var weight = kg.split("k")

Document.write("the weight of user is " + weight[0] + " Kilograms");


// Question (08)

var secretNum = Math.floor(Math.random() * 10);
var numInput = +prompt("Enter a number between 1 and 10");

if (numInput === secretNum) {
    alert("Congratulations!");
} else {
    alert("Please try again");
}



/* =====================================================================
                 CHAPTER 31 - 34 ==> "DATE METHODS"
========================================================================*/



// Question (01)

document.write(new Date());


// Question (02)

var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
var date = new Date()
var currentMonth = date.getMonth()

document.write("Current month: " + month[currentMonth])



// Question (03)

var days = ["Sunday","Monday","Tuesday","wednesday","Thursday","Friday","Saturday" ]
var date = new Date()
var currentday = date.getDay()

document.write("Today is : " + ' ' + days[currentday] + " <BR>")

var three = days[currentday] = days[currentday].slice(0, 3)

document.write("today is in three words: " +' ' + days[currentday])


// // Question (04)

var days = ["Sunday","Monday","Tuesday","wednesday","Thursday","Friday","Saturday" ]
var date = new Date()
var currentday = date.getDay()

if (days[currentday] === "sunday" || days[currentday] === "sataurday") {
    alert("Guys today is " + '"' + days[currentday] +  '"' + "It's fun day")
} else {
    alert("Today is " + '"' + days[currentday] +  '"' + " So please do work")
}


// Question (05)

var date = +prompt("Enter a date");

if (date === 1 && date <= 15) {
    alert("First fifteen days of month")
} else if (date > 15 && date <= 31) {
    alert("Last fifteen days of month")
} else {
    alert("Please enter a correct date")
}


// Question (06)

var myDate = new Date();
var oldDate = new Date(01 / 01 / 70);
var mints = myDate.getFullYear() - oldDate.getFullYear();

document.write("Current Date: " + myDate + "<BR>")
document.write("Elapsed milliseconds since January 1,1970 : " + mints * 365 * 24 * 60 * 60 + "<BR>")
document.write("Elapsed minutes since January 1,1970 : " + mints * 365 * 24 * 60);


// Question (07)

var currentTime = new Date()

currentTime = currentTime.getHours()
if (currentTime <= 12) {
    alert("It's AM")
} else {
    alert("It's PM")
}


// // Question (08)

var laterDate = new Date("12/31/20");

document.write("Later Date: " + laterDate);


// Question (09)

var ramadanDay = new Date("June 18, 2015")
var nowDay = new Date()
var msRamadan = ramadanDay.getTime()
var msNowDay = nowDay.getTime()
var msDiff = msNowDay - msRamadan
var totalDiff = msDiff /(1000 *60 *60 *24)
totalDiff = Math.floor(totalDiff)

document.write(totalDiff + " Days have passed since 1st Ramadan, 2015" )



// Question (10)

var pastDate = new Date("jan 1,2015");
var newDate = new Date("dec 5, 2015");
var days = newDate.getTime() - pastDate.getTime();
var day1 = days / (1000 * 3600 * 24);
var finalTime = day1 * 86400

alert(
    "on the reference date : " + newDate + "\n" + finalTime + " seconds had passed since the beginning of 2015"
)



// Question (11)

var time = new Date();
var oneHour = new Date();
var oldHour = oneHour.setHours(oneHour.getHours() - 1);
var oldhund = new Date(oldHour)

document.write("Curent Date: " + time + "<BR> 1 hour ago, it was " + oldhund)



//Question (12)

var oneYear = new Date();
var oldyear = oneYear.setYear(oneYear.getFullYear() - 100);
var oldhund = new Date(oldyear);

document.write("Curent Date: " + oneYear + "<BR> 100 Year back, it was " + oldhund);



// Question (13)

var currYear = new Date();
var getUserdate = prompt("Enter you date of birth format like this ==> MM/d/yy");
var userDate = new Date(getUserdate);
var diff = currYear - userDate
var age = diff / (24 * 60 * 60 * 1000 * 365);
var bdYear = currYear.getFullYear() - age

document.write("Your age is " + Math.floor(age) + "<BR>" + "Your birthday year is " + Math.floor(bdYear))



// Question (14)

(a)

var name = "Muhammd Owais Ahmed";


// (b)

var date = new Date();
var month = date.getMonth();


// (c)

var unit = 410;


// (d)

var chargesUnit = 16


// (e)

var netAmount = unit * chargesUnit


// // (f)

var dueDateCharge = 500


// (g)

var grossAmount = netAmount + dueDateCharge

document.write("Customer Name " + name + "<BR>")
document.write("Month " + month + "<BR>")
document.write("Number of Units: " + unit + "<BR>")
document.write("Charges per init: " + chargesUnit + "<BR>")
document.write("Net Amount Payable(eithin Due Date): " + netAmount + "<BR>")
document.write("Late payment surcharge: " + dueDateCharge + "<BR>")
document.write("Gross Amount payable(after Due Date): " + grossAmount ) 




// /* =====================================================================
//                    CHAPTER 35 - 38 ==> "FUNCTION"
// ========================================================================*/



// Question (01)


function date() {
    document.write(new Date())
}
date()


//Question (02)

function fullName(firstName, lastName) {
    console.log("Hello !" + firstName + " " + lastName)
}
fullName("Muhammd ", "Owais Ahmed")


//Question (03)

function add(a, b) {
    console.log(a + b)
}
add(2, 6)


//Question (04)

function calculate(num1, num2, operator) {
    switch (operator) {
        case "+":
            return num1 + num2
        case "-":
            return num1 - num2
        case "*":
            return num1 * num2
        case "/":
            return num1 / num2
    }
}



// //Question (05)

function squares(num) {
    return num * num
}


//Question (06)

function factorial(num) {
    if (num == 0)
        return 1;
    else {
        return (num * factorial(num - 1));
    }
}
factorial(5)


// //Question (07)

function counting() {
    var start = +prompt("Enter Counting start number")
    var end = +prompt("Enter Counting end number")
    for (var i = start; i <= end; i++) {
        document.write(i + "<BR>")
    }
}



// // //Question (08)

function calculateHypotenuse(base, perpendicular) {
    function calculateSquare(num) {
        return num * num
    }
    var hypotenuse = calculateSquare(base) + calculateSquare(perpendicular)
    return calculateSquare(hypotenuse)
}



//Question (09)


function areaRectangle(width, height) {
    return width * height
}
areaRectangle(4, 5)



//Question (10)

function reverseText(text) {
    alert(text.split('').reverse().join(''))
  }
  
  function isPalindrome(text) {
    var reverseText = ''
  
    for(var i = text.length - 1; i >= 0; i--) {
        reverseText += text[i]
    }    
    console.log('reverseText--->', reverseText)
  
    if(reverseText === text) {
        alert(text + ' is Palindrome')
    } else {
        alert(text + ' is not Palindrome')
    }
  }
  
  isPalindrome('madam')
  


//Question (11)

var line = "the quick brown fox jumps over the lazy dog"

function upperCase(string) {
    string = string.split(" ")
    var array = []
    for (var i = 0; i < string.length; i++) {
        array.push(string[i].charAt(0).toUpperCase() + string[i].slice(1))
    }
    return array.join(" ")
}
console.log("Line was: " + line)
console.log("After running function: " + upperCase(line))



//Question (12)

function find_longest_word(str) {
    var array1 = str.match(/\w[a-z]{0,}/gi);
    var result = array1[0];

    for (var i = 1; i < array1.length; i++) {
        if (result.length < array1[i].length) {
            result = array1[i];
        }
    }
    return result;
}
console.log(find_longest_word('Web Development Tutorial'));



// Quesition (13)

function Char_Counts(str1) {
    var uchars = {};
    str1.replace(/\S/g, function (l) {
        uchars[l] = (isNaN(uchars[l]) ? 1 : uchars[l] + 1);
    });
    return uchars;
}
console.log(Char_Counts("The quick brown fox jumps over the lazy dog"));

// 
var count = 0
var letter = "JSResourceS.com"
for(var i = 0; i < letter.length ; i++){
     if(letter [i] == "o"){
        count=count+1    
}
}
console.log(count)


//Question (14)

function circum(radius) {
    var circle = 2 * Math.PI * radius;
    alert("The circumference is " + Math.floor(circle))
}
circum(3)

function area(radius) {
    var circle = Math.PI * (radius * radius)
    alert("The area is: " + Math.floor(circle))
}
area(3)



/* =====================================================================================
                                Chapters 38-42
=======================================================================================*/



//  ***** Question 01 ***** 


function power() {
    var value1 = +prompt("Please Enter First Value")
    var value2 = +prompt("Please Enter Second Value")
    var answerValue = value1 ** value2

    console.log(answerValue)
}
power()


//  ***** Question 02 ***** 


// Method (01)

function leapYear(year) {
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}
leapYear(2020)


// Method (02)

var write = +prompt("enter your year")


var dayOfWk = (write);
switch (dayOfWk) {
    case 2016:
        alert("2016 is a leap year");
        break;
    case 2012:
        alert("2012 is also a leap year");
        break;
    case 2020:
        alert("2020 is a leap year!");
        break;
    default:
        alert("Try again ");
}



//  ***** Question 03 ***** 


var s1 = 5;
var s2 = 6;
var s3 = 7;
var s = (s1 + s2 + s3) / 2;
var area = Math.sqrt(s * ((s - s1) * (s - s2) * (s - s3)));
console.log(area);



//  ***** Question 04 *****


var maths = +prompt("Enter your Mark Obtained in Mathematics");
var physics = +prompt("Enter your Mark Obtained in Physics");
var chemistry = +prompt("Enter your Mark Obtained in Chemistry");
var total = maths + physics + chemistry

function Average() {
    return total / 3
}

function percentage() {
    return total / 300 * 100
}

function main() {
    document.write("Your Average Mark Is" + " " + Average() + "<br>")
    document.write("Your Average Percentage Is" + " " + percentage() + " %")

}



//  ***** Question 05 *****


const str = "This is a string";
const char = "r";

function findCharIndex(str, char) {
    for (let [index, val] of [...str].entries()) {
        if (val === char) {
            return index;
        }
    }
}

console.log(findCharIndex(str, char));



//  ***** Question 06 *****


var strings = ["My name is Owais my father name is Shakeel"];

strings = strings.map(function (string) {
    return string.replace(/[aeiou]/g, '');
});

console.log(strings);



//  ***** Question 07 *****


function findOccurrences() {
    var str = "Pleases read this application and give me gratuity";
    var count = 0;
    let haveSeenVowel = false;

    for (const letter of str.toLowerCase()) {
        switch (letter) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                {
                    if (haveSeenVowel) {
                        count++;
                        haveSeenVowel = false;
                    } else {
                        haveSeenVowel = true;
                    }
                    break;
                }
            default:
                haveSeenVowel = false
        }
    }

    return count
}

document.write(findOccurrences())



//  ***** Question 08 *****


var distance = +prompt("Write the distence B/W two cities", "in KM")

var b = distance * 1000;        //for KM to meter
var c = distance * 3280.84;     // for km to feets
var d = distance * 39370.1      //for KM to inches
var e = distance * 100000       //for Km to centimeter
document.write(distance + " KM convert into meter is = " + b + "<br>" +
    distance + " KM convert into feet is = " + c + "<br>" +
    distance + " KM convert into inches is = " + d + "<br>" +
    distance + " KM convert into centimeter is = " + e + "<br>")



//  ***** Question 09 *****


function overTime() {
    var perHour = 12.00
    var totalHours = 40
    // if(){}
    // Question is not clear
}



//   Question 10 

// Question is not clear




// ==================================================================
//                 Chapter 43-48
//                         LINK
// ==================================================================
//  QUESTION___1

function message1(){
    alert("Hello Saylani");
}


//  QUESTION___2

function message(){
    alert("Thanks for purchasing a phone from us")
}


// QUESTION___3

 function del(){
    var text =document.getElementById('hid')
    text.className += 'hidden' 
 }


//  QUESTION___4
 function changeImg(){
    var img = document.getElementById('img');
    img.src = 'img/pic2.jpg'
 }
 function changeBef(){
   var img = document.getElementById('img');
   img.src = 'img/pic.jpg'
}


// QUESTION___5

var button = document.getElementById("click"),
  count = 0;
function incre() {
  count += 1;
  button.innerHTML = " " + count;
}

var button = document.getElementById("click"),
  count = 0;
function decre() {
  count -= 1;
  button.innerHTML = " " + count;
};



/* ===================================================================
                         Chapter 49--52
                             EVENTS
 ====================================================================*/


//  QUESTION___1


 function display() {
    var firstName = document.getElementById("firstName")
    document.write(firstName.value)
    var lastName = document.getElementById("lastName")
    document.write(lastName.value)
    var birthDate = document.getElementById("dateOfBirth")
    document.write(birthDate.value)
    var mobile = document.getElementById("mobile")
    document.write(mobile.value)
    var email = document.getElementById("email")
    document.write(email.value)    
 }


//  QUESTION___2

function readMore(){
    var text =" Whether you want a natural or dramatic look can depend heavily on your eye makeup. For a natural look, stick to mascara, a very light eyeshadow (if any) and a boy brow. Make sure to get a good lengthening and volumizing mascara for extra lash definition. For a dramatic look, the options are endless. You’ll definitely need some liquid eyeliner, the perfect palette and all of the brushes necessary to get started. Try some of the top eye makeup brands like Urban Decay, KVD Vegan Beauty and Too Faced."
    var para = document.getElementById("para")
    para.innerHTML = text
}



//  QUESTION___3
function edit_row(no)
{
    document.getElementById("edit_button"+no).style.display="none";
    document.getElementById("save_button"+no).style.display="block";
       
    var name=document.getElementById("name_row"+no);
    var country=document.getElementById("country_row"+no);
    var age=document.getElementById("age_row"+no);
       
    var name_data=name.innerHTML;
    var country_data=country.innerHTML;
    var age_data=age.innerHTML;
       
    name.innerHTML="<input type='text' id='name_text"+no+"' value='"+name_data+"'>";
    country.innerHTML="<input type='text' id='country_text"+no+"' value='"+country_data+"'>";
    age.innerHTML="<input type='text' id='age_text"+no+"' value='"+age_data+"'>";
   }
   
   function save_row(no)
   {
    var name_val=document.getElementById("name_text"+no).value;
    var country_val=document.getElementById("country_text"+no).value;
    var age_val=document.getElementById("age_text"+no).value;
   
    document.getElementById("name_row"+no).innerHTML=name_val;
    document.getElementById("country_row"+no).innerHTML=country_val;
    document.getElementById("age_row"+no).innerHTML=age_val;
   
    document.getElementById("edit_button"+no).style.display="block";
    document.getElementById("save_button"+no).style.display="none";
   }
   
   function delete_row(no)
   {
    document.getElementById("row"+no+"").outerHTML="";
   }
   
   function add_row()
   {
    var new_name=document.getElementById("new_name").value;
    var new_country=document.getElementById("new_country").value;
    var new_age=document.getElementById("new_age").value;
       
    var table=document.getElementById("data_table");
    var table_len=(table.rows.length)-1;
    var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='name_row"+table_len+"'>"+new_name+"</td><td id='country_row"+table_len+"'>"+new_country+"</td><td id='age_row"+table_len+"'>"+new_age+"</td><td><input type='button' id='edit_button"+table_len+"' value='Edit' class='edit' onclick='edit_row("+table_len+")'> <input type='button' id='save_button"+table_len+"' value='Save' class='save' onclick='save_row("+table_len+")'> <input type='button' value='Delete' class='delete' onclick='delete_row("+table_len+")'></td></tr>";
   
    document.getElementById("new_name").value="";
    document.getElementById("new_country").value="";
    document.getElementById("new_age").value="";
   }
   
// ==================================================================
//                 Chapter 53--57
//                         MODAL
// ==================================================================


//  QUESTION___1

// function showImg(e){
//   var modalImg = document.getElementById("modalImg");
//   modalImg.src = e.src
// }


// ==================================================================
//                 Chapter 58--67
//                         DOM
// ==================================================================


//  QUESTION___1

    //    (i)
var a = document.getElementById("main-content");
console.log(a)

//       (ii)

var b = document.getElementById("main-content")
console.log(b.childNodes)

      // (iii)
  var c =  document.getElementById("main-content").value
  console.log(c)

//        (iv)
    var firstName = document.getElementById("first-name")
    firstName.innerHTML = ""

    // // (v)
    var lastName = document.getElementById("last-name").value
    var Email =  document.getElementById("email")
    console.log(lastName)
    console.log(Email)

        // QUESTION 2
    //  (i)
    var d = document.getElementById("form-content").nodeType;
    console.log(d)

    // (ii)
    var f = document.getElementById("lastName").nodeType[0];
    var g = document.getElementById("lastName").childNode[0];
    console.log(f)
    console.log(g)

    // (iV)
    var textNode = document.firstElementChild("main-content")
    var textNode = document.lastElementChild("main-content")
    console.log(textNode)

    // (V)
    var h = document.getElementById("lastName")
    var pre = h.previousElementSibling;
    var next = h.nextElementSibling;
    console.log(h)
    console.log(pre)
    console.log(next)

    // (vi)
     var i  = document.getElementById("email")
    var parentNode = i.parentNode;
    var nodeType = i.nodeType;
    console.log(i)
    console.log(parentNode)
    console.log(nodeType)

