                                            // CHAP#6-9 MATHS EXPRESSION 


//   3/ Write a program that takes input a name from user &
//   greet the user.

var username = prompt("enter your name ");

alert(" hello " + username);
document.write("</br>"); document.write("</br>");


//  1/ Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:


var initialvalue = 10;
var preincrement = ++initialvalue;
var postincrement = preincrement++
var predecriment = --postincrement;
var postdecriment = predecriment--;

document.write(" the value of a =  ", initialvalue); document.write("</br>");
document.write(" the value of ++a is ", preincrement); document.write("</br>");
document.write("now the  value of a is ", preincrement); document.write("</br>");
document.write("the value of a++ is  ", postincrement); document.write("</br>");
document.write(" now the value of a is ", postincrement); document.write("</br>");
document.write(" the value of --a is ", predecriment); document.write("</br>");
document.write("now the value of a is ", predecriment); document.write("</br>");
document.write("  the value of  a-- is ", postdecriment); document.write("</br>");
document.write(" now the value of a is  ", postdecriment); document.write("</br>"); document.write("</br>");


// 2/ What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;



// 5/ Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.




var num = 5;
var tableone = 5 * 1;
var tabletwo = 5 * 2;
var tablethree = 5 * 3;
var tablefour = 5 * 4;
var tablefive = 5 * 5;
var tablesix = 5 * 6;
var tableseven = 5 * 7;
var tableeight = 5 * 8;
var tablenine = 5 * 9;
var tableten = 5 * 10;

document.write(5 + " * 1  = ", tableone); document.write("</br>");
document.write(5 + " * 2 = ", tabletwo); document.write("</br>");
document.write(5 + " * 3 = ", tablethree); document.write("</br>");
document.write(5 + " * 4 = ", tablefour); document.write("</br>");
document.write(5 + " * 5 = ", tablefive); document.write("</br>");
document.write(5 + " * 6 = ", tablesix); document.write("</br>");
document.write(5 + " * 7 = ", tableseven); document.write("</br>");
document.write(5 + " * 8 = ", tableeight); document.write("</br>");
document.write(5 + " * 9 = ", tablenine); document.write("</br>");
document.write(5 + " * 10 = ", tableten); document.write("</br>");




document.write("</br>"); document.write("</br>"); document.write("</br>");


var num = +prompt(" enter a number for table  .");
var tableone = num * 1;
var tabletwo = num * 2;
var tablethree = num * 3;
var tablefour = num * 4;
var tablefive = num * 5;
var tablesix = num * 6;
var tableseven = num * 7;
var tableeight = num * 8;
var tablenine = num * 9;
var tableten = num * 10;

document.write(num + " * 1  = ", tableone); document.write("</br>");
document.write(num + " * 2 = ", tabletwo); document.write("</br>");
document.write(num + " * 3 = ", tablethree); document.write("</br>");
document.write(num + " * 5 = ", tablefive); document.write("</br>");
document.write(num + " * 6 = ", tablesix); document.write("</br>");
document.write(num + " * 7 = ", tableseven); document.write("</br>");
document.write(num + " * 8 = ", tableeight); document.write("</br>");
document.write(num + " * 9 = ", tablenine); document.write("</br>");
document.write(num + " * 10 = ", tableten); document.write("</br>");


document.write("</br>"); document.write("</br>");

//  6./Take
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.

// ALERTS | JAVASCRIPT

// Page 3 of 3
// d) Take obtained marks for remaining 2 subjects



var sub1 = prompt(" enter the name of 1st subject ");
var sub2 = prompt(" enter the name of 2nd subject ");
var sub3 = prompt("enterb the name of 3rd subject ");
var totalmarkssub1 = 100;
var totalmarkssub2 = 100;
var totalmarkssub3 = 100;
var obtainmarkssub1 = +prompt(" enter obtain marks of 1st subject ");
var obtainmarkssub2 = +prompt(" enter obatin marks of 2nd subject ");
var obtainmarkssub3 = +prompt(" enter obtain marks of 3rd subject ");
var percentage1 = (obtainmarkssub1 / totalmarkssub1) * 100;
var percentage2 = (obtainmarkssub2 / totalmarkssub2) * 100;
var percentage3 = (obtainmarkssub3 / totalmarkssub3) * 100;


var totalobtainmarks = obtainmarkssub1 + obtainmarkssub2 + obtainmarkssub3;
var totalmarks = totalmarkssub1 + totalmarkssub2 + totalmarkssub3;
var percentage = (totalobtainmarks / totalmarks) * 100;


document.write(
    "<table border = '2px' >" +

    "<tr>" +

    " <th> " + "subjects" + "</th>" +
    " <td>" + sub1 + "</td>" +
    " <td>" + sub2 + "</td>" +
    " <td>" + sub3 + "</td>" +

    "</tr>" +

    "<tr>" +

    " <th> " + "Totalmarks" + "</th>" +
    " <td>" + totalmarkssub1 + "</td>" +
    " <td>" + totalmarkssub2 + "</td>" +
    " <td>" + totalmarkssub3 + "</td>" +
    " <td>" + totalmarks + "</td>" +

    "</tr>" +

    "<tr>" +

    " <th> " + "Obtainmarks" + "</th>" +
    " <td>" + obtainmarkssub1 + "</td>" +
    " <td>" + obtainmarkssub2 + "</td>" +
    " <td>" + obtainmarkssub3 + "</td>" +
    " <td>" + totalobtainmarks + "</td>" +

    "</tr>" +

    "<tr>" +

    " <th> " + "Percentage" + "</th>" +
    " <td>" + percentage1 + "%" + "</td>" +
    " <td>" + percentage2 + "%" + "</td>" +
    " <td>" + percentage3 + "%" + "</td>" +
    " <td>" + percentage + "%" + "</td>" +

    "</tr>" +


    " </table>"
)
document.write("</br>"); document.write("</br>"); document.write("</br>");



//   End ;
