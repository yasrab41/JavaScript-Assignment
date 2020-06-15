//***********CHAPTER 1************** 
// //Task-1
// alert("Welcome To our website","javascript Alert");

// // Task-2
// alert("Error! Please enter a valid passsword.");

// //Task-3
// alert("Welcome to JS Land... \nHappy Coding!");

// //Task-4
// alert("Welcome to JS Land..");
// alert("Happy Coding! \nPrevent this page from creating additional dialogs.");

// //Task-5
// alert("Hello..I can run JS through my web browser's console");

// // Task-6 and 7 are in index.html page



// *****************CHAPTER 2***********

//Task-1
// var username;

// //Task-2
// var myName="Yasrab Memon";

// //Task-3
// var message;
// message="Hello World";
// alert(message);

// //Task-4
// var name="Jhone Doe";
// var age="15 years old";
// var cert="Certified Mobile Application Development";
// alert(name);
// alert(age);
// alert(cert);

// //Task-5
// var pizzaAlert="PIZZA \nPIZZ \nPIZ \nPI \nP";
// alert(pizzaAlert);


// //Task-6
// var email="yasrab7memon@gmail.com";
// alert("My email address is "+ email);

// //Task-7
// var book="A smarter way to learn JavaScript";
// alert("I am tryiing to learn from the book "+book);

// //Task-8
// var msg="Yah! I can write HTML content through JavaScript";
// document.write(msg);

// document.write("<br>");

// //Task-9
// var design="▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
// alert(design);
// document.write(design);




// *****************CHAPTER 3***********

//Task-1
// var age ;
// age = 21;
// alert("I am "+ age +" years old");

// //Task-2
// var count=0;
// count=count+14;
// alert("You have visited this site "+ count +" times");

// //Task-3
// var birthYear=1998;
// document.write("My birth Year is "+birthYear);
// document.write("<br>");
// document.write("Data type of my declared variable is "+typeof(birthYear));

// document.write("<br><br>")

// //Task-5
// var visitors_name="John Doe";
// var product="T-shirt";
// var quantity="5";
// document.write('\"<b>John Doe</b> ordered ' + "<b>" +quantity+' '+product+'</b>(s) on XYZ Clothing store');

// *****************CHAPTER 4***********
//Task-1
// var var1 ,var2 ,var3;

// //Task-2
// //legal
// var name1;
// var name_1;
// var ali_mughal;
// var yasrabMemon;
// var $yasrab;

// //Task-3
// //illegal
// // var 1name;
// // var a&b;
// // var name-1;
// // var %name;
// // var name 1;


// //Task-4
// document.write("<h1>Rules for naming JS variables</h1><br>");
// document.write("Variable names can only contain letter, numbers, dollar signs and underscores. For example <b>$my_1stVariable</b><br>");
// document.write("Variables must begin with a letter, $ and _. For example: <b> $name, _name or name.</b><br>");
// document.write("Variable names are case sensitive.<br>");
// document.write("Variable names should not be JS keywords.<br>");




// *****************CHAPTER 5***********
//Task-1
// var num1=+prompt("Enter first number");
// var num2=+prompt("Enter second number");
// var sum=num1+num2;
// document.write("Sum of "+num1+ " and "+num2+ " is "+sum+ "<br>");


// //Task-2
// var num1=+prompt("Enter first number");
// var num2=+prompt("Enter second number");
// var subtraction=num1-num2;
// document.write("Subtraction of "+num1+ " and "+num2+ " is "+subtraction+ "<br>");

// var num1=+prompt("Enter first number");
// var num2=+prompt("Enter second number");
// var multiplication=num1*num2;
// document.write("Multiplication of "+num1+ " and "+num2+ " is "+multiplication+ "<br>");

// var num1=+prompt("Enter first number");
// var num2=+prompt("Enter second number");
// var division=num1/num2;
// document.write("Division of "+num1+ " and "+num2+ " is "+division+ "<br>");

// var num1=+prompt("Enter first number");
// var num2=+prompt("Enter second number");
// var modulus=num1%num2;
// document.write("Modulus of "+num1+ " and "+num2+ " is "+modulus+ "<br><br><br>");


// //Task-3
// var a;
// document.write("Value after variable declaration is: "+a+"<br>");
// var a=5;
// document.write("Initial value: "+a+"<br>");
// ++a;
// document.write("Value after increment is: "+a+"<br>");
// a=a+7;
// document.write("Value after addition is: "+a+"<br>");
// --a;
// document.write("Value after decrement is: "+a+"<br>");
// a=a%3;
// document.write("The remainder is: "+a+"<br>");


// document.write("<br><br><br>");

// //Task-4
// var ticket_cost=600;
// var buy=5;
// document.write("Total cost to buy "+buy+ " tickets to a movie is "+ (ticket_cost*buy)+ "PKR");


// document.write("<br><br><br>");

// //Task-5
// var n=+prompt("Enter a number for Table");
// var c=0;
// for(var i=1; i<=10; i++){
//     c=i*n
//     document.write(n+'x'+i+'='+c+"<br>");
// }



// document.write("<br><br><br>");


// //Task-6
// var cel=25;
// var f=(cel*9/5)+32;
// document.write(cel+"<sup>o</sup>C is " + f + "<sup>o</sup>F <br>");
// f=70;
// cel=(f-32)*5/9;
// document.write(f+"<sup>o</sup>F is " + cel + "<sup>o</sup>C <br>")


// document.write("<br><br><br>");


//Task-7
// var item1=650;
// var item2=100;
// var q_item1=3;
// var q_item2=7;
// var shipping_charges=100;
// var total=(item1*q_item1)+(item2*q_item2)+shipping_charges;

// document.write("<h1>Shopping Cart</h1>");
// document.write("Price of item 1 is "+ item1 +"<br>");
// document.write("Quantity of item 1 is "+ q_item1 +"<br>");
// document.write("Price of item 2 is "+ item2 +"<br>");
// document.write("Quantity of item 2 is "+ q_item2 +"<br>");
// document.write("Shipping Charges "+ shipping_charges +"<br><br>");
// document.write("The total cost of your order is "+total+"<br>");


//Task-8
// document.write("<h1>Marks Sheet</h1><br><br>");
// var total_marks=980;
// var marks_obtained=804;
// var pert=(marks_obtained*100)/total_marks;

// document.write("Total marks: "+total_marks+"<br>");
// document.write("Marks obtained: "+marks_obtained+"<br>");
// document.write("Percentage: "+pert+"%<br>");


//Task-9
// var us_dollar=10;
// var saudi_riyal=25;
// var dollar_to_rupees=104.80*us_dollar;
// var riyal_to_rupees=28*saudi_riyal;

// document.write("<h1>Currency in PKR</h1>")
// document.write("Total curreny in PKR: "+ (dollar_to_rupees+riyal_to_rupees));


//Task-10
// var num=4;
// // num=num+5;
// // num=num*10;
// // num=num/2;
// num=(((num+5)*5)/2);
// document.write("Answer is: "+num+"<br>");


//Task-11
// var c_year1=2020;
// var b_year1=1998;

// var c_year2=2020;
// var b_year2=2009;

// document.write("Current Year: "+c_year1+"<br>");
// document.write("Birth Year: "+b_year1+"<br>");
// document.write("Pireh, Your Age is: "+(c_year1-b_year1)+"<br><br>");

// document.write("Current Year: "+c_year2+"<br>");
// document.write("Birth Year: "+b_year2+"<br>");
// document.write("Hadiya, Your Age is: "+(c_year2-b_year2)+"<br>");



//Task-12
// var radius=20;
// var pi=3.142;
// var circumference=2*radius*pi;
// var area=pi*(radius*radius);

// document.write("<h1>The Geometrizer</h1><br>")
// document.write("Radius of a circle: "+radius+"<br>");
// document.write("The circumference: "+circumference+"<br>");
// document.write("The area is: "+area+"<br>");


//task-13
// var snack="Chocolate chip";
// var cur_age=15;
// var est_max_age=65;
// var amount=3;
// var lifetime=(est_max_age-cur_age)*amount;

// document.write("<h1>The Lifetime Supply Calculator</h1><br>")
// document.write("Favourite Snack: "+snack+"<br>");
// document.write("Current age: "+cur_age+"<br>");
// document.write("Estimated Maximum Age: "+est_max_age+"<br>");
// document.write("Amount of snacks per day: "+amount+"<br>");
// document.write("You will need "+lifetime+" to last you until the ripe old age of "+est_max_age+"<br>");




// *****************CHAPTER 6***********

//Task-1
