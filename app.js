                                                        //Chapter MATH EXPRESSIONS - 01

// var a = 50;

// document.write(
//     "Result:<br>",
//     "The Vaule of variable a is: ", a, "<br>",
//     "........................", "<br> <br>",

//     "The value of ++a is: ", ++a, "<br>",
//     "Now the value of a is: ", a, "<br> <br> <br>",

//     "The valeue of a++ is: ", a++, "<br>",
//     "Now the value of a is: ", a, "<br> <br> <br>",
    
//     "The value of --a is: ", --a, "<br>",
//     "Now the value of a is: ", a, "<br> <br> <br>",

//     "The valeue of a-- is: ", a--, "<br>",
//     "Now the value of a is: ", a,
// );

                                                        //Chapter MATH EXPRESSIONS - 02

// var a = 2, b = 1;
// var result = --a - --b + ++b + b--

// document.write(
//     "The value of a is: ", a, "<br>",
//     "The value of b is: ", b, "<br> <br>",

//     "The Value of --a is: 1", "<br>",
//     "The value of --b is: 0", "<br>",
//     "The Value of ++b is: 1", "<br>",
//     "The value of b-- is: 1", "<br>",

//     "The result of --a - --b + ++b + b-- is: ", result
// )

                                                        //Chapter MATH EXPRESSIONS - 03

// var userInput = prompt("Write your name");

// alert("Welcome" + " " + userInput);

                                                        //Chapter MATH EXPRESSIONS - 05
// var tableNum = prompt("Type you Multiiplication Number")

// document.write("Multiplication Table of  number: " + tableNum + "<br>",
// tableNum, " X 1 = ", 1*tableNum, "<br>",
// tableNum, " X 1 = ", 2*tableNum, "<br>",
// tableNum, " X 1 = ", 3*tableNum, "<br>",
// tableNum, " X 1 = ", 4*tableNum, "<br>",
// tableNum, " X 1 = ", 5*tableNum, "<br>",
// tableNum, " X 1 = ", 6*tableNum, "<br>",
// tableNum, " X 1 = ", 7*tableNum, "<br>",
// tableNum, " X 1 = ", 8*tableNum, "<br>",
// tableNum, " X 1 = ", 9*tableNum, "<br>",
// tableNum, " X 1 = ", 10*tableNum, "<br>",
                
// )



                                                        //Chapter MATH EXPRESSIONS - 06

// document.write("<h1>Subject Total Marks Obtained Marks Percentage</h1>")

//Subject Name Input
// var subjectName1 = prompt("Subject1", "English")
// var subjectName2 = prompt("Subject2", "Urdu")
// var subjectName3 = prompt("Subject3", "Math")

// //Subject Total Marks
// var totalMarksSubject1 = +prompt("Total Marks" + " " + subjectName1, 120)
// var totalMarksSubject2 = +prompt("Total Marks" + " " + subjectName2, 120)
// var totalMarksSubject3 = +prompt("Total Marks" + " " + subjectName3, 100)

// //Subject Obtained Marks
// var obtainedMarksSubject1 = +prompt("Obtained Marks" + " " + subjectName1)
// var obtainedMarksSubject2 = +prompt("Obtained Marks" + " " + subjectName2)
// var obtainedMarksSubject3 = +prompt("Obtained Marks" + " " + subjectName3)

// document.write("<table>")

// document.write("<thead>")
// document.write("<td>")
// document.write("<b>Subjects</b>")
// document.write("</td>")
// document.write("<td>")
// document.write("<b>Total Marks</b>")
// document.write("</td>")
// document.write("<td>")
// document.write("<b>Obtained Marks</b>")
// document.write("</td>")
// document.write("<td>")
// document.write("<b>Percentage</b>")
// document.write("</td>")
// document.write("<thead>")

// document.write("<tr>")
// document.write("<td>")
// document.write("<b>" + subjectName1 + "</b>")
// document.write("</td>")
// document.write("<td>")
// document.write(totalMarksSubject1)
// document.write("</td>")
// document.write("<td>")
// document.write(obtainedMarksSubject1)
// document.write("</td>")
// document.write("<td>")
// document.write(((obtainedMarksSubject1/totalMarksSubject1) * 100).toFixed(2) + "&#x25;")
// document.write("</td>")
// document.write("<tr>")

// document.write("<tr>")
// document.write("<td>")
// document.write("<b>" + subjectName2 + "</b>")
// document.write("</td>")
// document.write("<td>")
// document.write(totalMarksSubject2)
// document.write("</td>")
// document.write("<td>")
// document.write(obtainedMarksSubject2)
// document.write("</td>")
// document.write("<td>")
// document.write(((obtainedMarksSubject2/totalMarksSubject2) * 100).toFixed(2) + "&#x25;")
// document.write("</td>")
// document.write("<tr>")

// document.write("<tr>")
// document.write("<td>")
// document.write("<b>" + subjectName3 + "</b>")
// document.write("</td>")
// document.write("<td>")
// document.write(totalMarksSubject3)
// document.write("</td>")
// document.write("<td>")
// document.write(obtainedMarksSubject3)
// document.write("</td>")
// document.write("<td>")
// document.write(((obtainedMarksSubject3/totalMarksSubject3) * 100).toFixed(2) + "&#x25;")
// document.write("</td>")
// document.write("<tr>")

// document.write("<tr>")
// document.write("<td>")
// document.write()
// document.write("</td>")
// document.write("<td>")
// document.write("<b>" + (totalMarksSubject1 + totalMarksSubject2 + totalMarksSubject3) + "</b>")
// document.write("</td>")
// document.write("<td>")
// document.write("<b>" + (obtainedMarksSubject1 + obtainedMarksSubject2 + obtainedMarksSubject3) + "</b>")
// document.write("</td>")
// document.write("<td>")
// document.write("<b>" + (((obtainedMarksSubject1 + obtainedMarksSubject2 + obtainedMarksSubject3) / (totalMarksSubject1 + totalMarksSubject2 + totalMarksSubject3)) * 100).toFixed(2) + "&#x25;" + "</b>")
// document.write("</td>")
// document.write("<tr>")


// document.write("</table>")

                                                        //Chapter USER INPUT & CONDITIONAL STATEMENT - 01

// var userInputCityName = prompt("Write your City Name")

// if (userInputCityName === "Karachi") {
//     alert("Welcome to city of lights")
// }


                                                        //Chapter USER INPUT & CONDITIONAL STATEMENT - 02

// var userInputGender = prompt("Write your Gender", "Male");
// if (userInputGender === "Male") {
//     alert("Good Morning Sir")
// }
// if (userInputGender === "Female") {
//     alert("Good Morning Ma’am")
// }


                                                        //Chapter USER INPUT & CONDITIONAL STATEMENT - 03

// var trafficSignal = prompt("Traffic Signal Light Color");

// if (trafficSignal === "Red") {
//     alert("Must Stop")
// }
// else if (trafficSignal === "Yellow") {
//     alert("Ready to move")
// }
// else if (trafficSignal === "Green") {
//     alert("Move now")
// }


                                                        //Chapter USER INPUT & CONDITIONAL STATEMENT - 04

// var carFuel = prompt("How much fuel remaining in your car?")

// if (carFuel < 0.25) {
//     alert("Please refill the fuel in your car")
// };


                                                        //Chapter USER INPUT & CONDITIONAL STATEMENT - 05

// var a = 4;
//     if (++a === 5){
//     alert("given condition for variable a is true");
// }

// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }

// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }

// if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }

// if("car" < "cat"){
// alert("car is smaller than cat");
// }

                                                        //Chapter USER INPUT & CONDITIONAL STATEMENT - 06

// document.write("<h1>Marks Sheet</h1>")


// //Subject Total Marks
// var totalMarksSubject1 = +prompt("Total Marks" + " " + "Subject 01", 120)
// var totalMarksSubject2 = +prompt("Total Marks" + " " + "Subject 02", 120)
// var totalMarksSubject3 = +prompt("Total Marks" + " " + "Subject 03", 100)

// //Subject Obtained Marks
// var obtainedMarksSubject1 = +prompt("Obtained Marks" + " " + "Subject 01")
// var obtainedMarksSubject2 = +prompt("Obtained Marks" + " " + "Subject 02")
// var obtainedMarksSubject3 = +prompt("Obtained Marks" + " " + "Subject 03")

// var Percentage = ((obtainedMarksSubject1 + obtainedMarksSubject2 + obtainedMarksSubject3)/(totalMarksSubject1 + totalMarksSubject2 + totalMarksSubject3) * 100).toFixed(2);

// if (Percentage >= 80) {
//     var grade = "A-one", remarks = "Excellent";
// } else if (Percentage >= 70 && Percentage <= 79) {
//     var grade = "A", remarks = "Good";
// } else if (Percentage >= 60 && Percentage <= 69) {
//     var grade = "B", remarks = "You need to improve";
// } else {
//     var grade = "Fail", remarks = "Sorry";
// }

// document.write("Total Marks : " + (totalMarksSubject1 + totalMarksSubject2 + totalMarksSubject3) + "<br>");
// document.write("Marks Obtained : " + (obtainedMarksSubject1 + obtainedMarksSubject2 + obtainedMarksSubject3) + "<br>");
// document.write("Percentage : " + Percentage + "&#x25;" + "<br>");
// document.write("Grade : " + grade + "<br>");
// document.write("Remarks : " + remarks);


                                                        //Chapter USER INPUT & CONDITIONAL STATEMENT - 07

// var randomNum = 5;
//                                                         //Condition "a"
// var userGuess = +prompt("Guess the Number")

// if (randomNum === userGuess) {
//     document.write("Bingo! Correct answer")
// }
//                                                         //Condition "b"
// if(userGuess === ++randomNum) {
//     document.write("Close enough to the correct answer")
// }

                                                        //Chapter USER INPUT & CONDITIONAL STATEMENT - 08

// var dividableNumberCheck = +prompt("Type number to check");

// if (dividableNumberCheck % 3 === 0 ) {
//     document.write("Number " + dividableNumberCheck + " is dividable by 3")
// }


                                                        //Chapter USER INPUT & CONDITIONAL STATEMENT - 09

// var checkNumberParity = +prompt("Type number to check its parity");

// if (checkNumberParity % 2 === 0) {
//     document.write("Number parity is Even")
// } else {
//     document.write("Number parity is Odd")
// }

                                                        //Chapter USER INPUT & CONDITIONAL STATEMENT - 10

// var checkTemp = +prompt("Type temperature")

// if(checkTemp >= 40) {
//     document.write("It is too hot outside")
// } else if (checkTemp >= 30 && checkTemp <= 39) {
//     document.write("The Weather today is Normal")
// } else if (checkTemp >= 20 && checkTemp <= 29) {
//     document.write("Today's Weather is cool")
// } else if (checkTemp >= 10 && checkTemp <= 19) {
//     document.write("OMG! Today’s weather is so Cool")
// }


                                                        //Chapter USER INPUT & CONDITIONAL STATEMENT - 11

// var firstNum = +prompt("Type First Number");
// var operator = prompt("Type Operation");
// var secondNum = +prompt("Type Second Number");

// var result;

// if(operator == "+") {
//     result = firstNum + secondNum;
// } else if (operator == "-") {
//     result = firstNum - secondNum;
// } else if (operator == "/") {
//     result = firstNum / secondNum;
// } else if (operator == "*") {
//     result = firstNum * secondNum;
// } else if (operator == "%") {
//     result = firstNum % secondNum;
// };

// console.log(result);

                                                        //Chapter IF...ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS - 1

// var userInput = prompt("Type value")

// if (userInput >= "A" && userInput <= "Z") {
//     document.write(userInput + " is a uppercase character")
// } else if (userInput >= "a" && userInput <= "z") {
//     document.write(userInput + " is a lowercase character")
// } else {
//     document.write(userInput + " is a number")
// }


                                                        //Chapter IF...ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS - 2

// var intInput1 = prompt("Type Integer 1");
// var intInput2 = prompt("Type Integer 2");

// if(intInput1 === intInput2 ) {
//     document.write("Both Integers are Equal")
// } else if ( intInput1 > intInput2) {
//     document.write("First Integer " + intInput1 + " Integar is greater than Second Integer " + intInput2) 
// } else {
//     document.write("Second Integer " + intInput2 + " Integar is greater than First Integer " + intInput1) 
// }


                                                        //Chapter IF...ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS - 3

// var inputVal = +prompt("Type Value");

// if(inputVal < 0 ) {
//     document.write("Value is Negative")
// } else if ( inputVal > 0) {
//     document.write("Value is Positive")
// } else {
//     document.write("Value is Zero") 
// }


                                                        //Chapter IF...ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS - 4

// var inputString = prompt("Type a String");

// if (inputString === "a" || inputString === "e" || inputString === "i" || inputString === "o" || inputString === "u") {
//     document.write("True")
// } else (
//     document.write("false")
// )


                                                        //Chapter IF...ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS - 5

// var userPassword = "abc123";

// var inputPassword = prompt("Type your Password");

// if (inputPassword === "") {
//     document.write("Please enter your password")
// } else if (userPassword !== inputPassword) {
//     document.write("Incorrect Password")
// } else if (userPassword === inputPassword) {
//     document.write("Correct! The password you entered matches the original password")
// }



                                                        //Chapter IF...ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS - 6

// var greeting;
// var hour = 13;
// if (hour < 18) {
//     greeting = "Good day";
// } else { 
//     greeting = "Good evening";
// }

// console.log(greeting);


                                                        //Chapter IF...ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS - 7

// var userInputTime = prompt("Please enter time");

// if (userInputTime >= "0000" && userInputTime < "1200") {
//     document.write("Good Morning")
// } else if (userInputTime >= "1200" && userInputTime < "1700") {
//     document.write("Good Afternoon")
// } else if (userInputTime >= "1700" && userInputTime < "2100") {
//     document.write("Good Evening")
// } else if (userInputTime >= "2100" && userInputTime < "2359") {
//     document.write("Good Night")
// }