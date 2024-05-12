                                    // CHAP#5  MATHS EXPRESSIONS;


//    1/ Write a program that take two numbers & add them in a new variable. Show the result in your browser.               

var firstnum = 3;
var secondnum = 7;
var sum = (firstnum + secondnum);

document.write(" sum of 3 & 7 is ", sum);
document.write("</br>");


// 2/ Repeat task1 for subtraction, multiplication, division &
// modulus.

var firstnum = 3;
var secondnum = 7;
var sub = (firstnum - secondnum);

document.write(" sub of 3 & 7 is ", sub);
document.write("</br>");

var firstnum = 3;
var secondnum = 7;
var product = (firstnum * secondnum);

document.write(" product of 3 & 7 is ", product);
document.write("</br>");

var firstnum = 3;
var secondnum = 7;
var divide = (firstnum / secondnum);

document.write(" division of 3 & 7 is ", divide);
document.write("</br>");


var firstnum = 3;
var secondnum = 7;
var modulus = (firstnum % secondnum);

document.write(" modulus of 3 & 7 is ", modulus);
document.write("</br>");


// 3/ Do the following using JS Mathematic Expressions

var value;
value = " value after variable declaration is undefine ";
document.write(value);
document.write("</br>");

var initialvalue = 6;
document.write("initial value ; ", initialvalue);
document.write("</br>");

// increment

var newvalue = 7;
var add = initialvalue + newvalue;
document.write(" value after addition is ; ", add);
document.write("</br>");

//  decrement
var decrement = 12;


var modulus = 3;
modulus = decrement % modulus;

document.write(" output : the reminder is : ", modulus);
document.write("</br>");


// 4/ Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// tickets

var movieticket = 600;
var ticketbuy = 5;
var totalcost = movieticket * ticketbuy;

document.write(" total cost to buy 5 tickets to movie is ", totalcost + " PKR ");
document.write("</br>");
document.write("</br>"); document.write("</br>");

//  5/ Write a script to display multiplication table of any
// number in your browser.


var table = 9;

var num1 = 1;
var multiply1 = table * num1;

var num2 = 2;
var multiply2 = table * num2;

var num3 = 3;
var multiply3 = table * num3;

var num4 = 4;
var multiply4 = table * num4;

var num5 = 5;
var multiply5 = table * num5;

var num6 = 6;
var multiply6 = table * num6;

var num7 = 7;
var multiply7 = table * num7;

var num8 = 8;
var multiply8 = table * num8;

var num9 = 9;
var multiply9 = table * num9;

var num10 = 10;
var multiply10 = table * num10;

document.write(" Table of 9 is , ");
document.write("</br>");


document.write(" 9 x 1 = ", multiply1);
document.write("</br>");

document.write(" 9 x 2 = ", multiply2);
document.write("</br>");

document.write(" 9 x 3 = ", multiply3);
document.write("</br>");

document.write(" 9 x 4 = ", multiply4);
document.write("</br>");

document.write(" 9 x 5 = ", multiply5);
document.write("</br>");

document.write(" 9 x 6 = ", multiply6);
document.write("</br>");

document.write(" 9 x 7 = ", multiply7);
document.write("</br>");

document.write(" 9 x 8 = ", multiply8);
document.write("</br>");

document.write(" 9 x 9 = ", multiply9);
document.write("</br>");

document.write(" 9 x 10 = ", multiply10);
document.write("</br>");document.write("</br>");


// 6/ The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.


var Celsius = 90 ;
var Celsiusconvert = ( Celsius  * 5/9 ) + 32  ;


 document.write ("40c is =  "  , Celsiusconvert + "f");
 document.write("</br>");

 var Fahrenheit = 30 ;
 Fahrenheitconverter = (Fahrenheit - 32 ) * 5/9 ;
  document.write ( "60f is = " , Fahrenheitconverter  + "c ") ;
  document.write("</br>");
  document.write("</br>");


//   7/ Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables
 

var item1 = 650 ;
var item2 = 100 ;
var orderquantity1 = 3 ;
var orderquantity2 = 7 ;
var shippingcharges =  100 ;
var price1 = item1 * orderquantity1 ;
var price2 = item2 * orderquantity2 ;
var totalcost = price1 + price2 + shippingcharges ;

document.write (" Total cost of your oder is  " ,  totalcost) ;

document.write("</br>");
document.write("</br>");


// 8/ Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser

var totalmarks = 980 ;
var marksobtain = 804 ;
var percentage = (marksobtain / totalmarks) * 100 ;

document.write ( " you got  " ,  percentage + "%" ) ;
document.write("</br>");
document.write("</br>");


// 9/ Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.


var usdollar = 10 ;
var saudiariyal = 25 ; 
var usdollartopkr = 104.80 ;
var saudiariyaltopkr = 28 ;

var totalcurrency = (usdollar * usdollartopkr ) + ( saudiariyal * saudiariyaltopkr ) ;

document.write ( "total currency of pkr is  "  , totalcurrency ) ;
document.write("</br>");
document.write("</br>");

// 10/ Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression


var number = 10 ;
var result = ((( number + 5 ) * 10 ) / 2 ) ;
document.write ( " Result , " , result ) ;

document.write("</br>");
document.write("</br>");


// 11/ The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.


var currentyear = 2024 ;
var birthyear = 2003 ;
var age1 = currentyear - birthyear ;
var age2 = age1 - 1 ;

document.write ( "  ther are either  " , age1 + "  years old  or  "  , age2  +  "  years old " ) ;

document.write("</br>");
document.write("</br>");

// 12/ The Geometrizer: Calculate properties of a circle.

var radius = 20 ;
var circumference =   2 * 3.142  * radius ;
var areaofcircle =  3.142 * Math.pow ( radius, 2 ) ;
 document.write ( "radius : " , radius ) ; 
 document.write("</br>");
 document.write("</br>");
 
 document.write ( " circumference of circle : "  ,  circumference) ;
 
document.write("</br>");
document.write("</br>");

 document.write ("area of circle is : " , areaofcircle );



document.write("</br>");
document.write("</br>");

 
// 13/  the lifetime supply calculator 

totalsnackeatforrestofyourlife
var favsnack = "chocolate " ;
var currentage = 18 ;
var maximumage = 60 ;
var snackperday = 2 ;

var totalage = maximumage - currentage ;
var totalsnackeatforrestofyourlife = snackperday * totalage ;

document.write ( " you will need " , totalsnackeatforrestofyourlife  + " chololates to last you until the ripe old age of  " , maximumage  ) ;



document.write("</br>");
document.write("</br>");
  

                    //  END ;











