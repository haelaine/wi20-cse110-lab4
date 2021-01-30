1. Line 11 will print out i because even though i was declared inside the for loop, var variables have no block scope. 

2. Line 12 will print out the discountedPrice because even though finalPrice was declared inside the for loop, var variables have no block scope.

3. Line 13 will print out the finalPrice. Since it was declared within the function, the variable finalPrice within the console.log statement is still within scope since it's within the function.  

4. The function will return the values [50,100,150] because 50, 100, and 150 are the values that we pushed into the discounted array and since discounted was declared within the function, the variable discounted within the return statement is still within scope since it's within the function.

5. Line 11 will result in an error since the variable i within the console statement is out of scope. This is because the console statement is outside the code block with the for loop.

6. Line 12 will result in an error since the variable discountedPrice within the console statement is out of scope. This is because the console statement is outside the code block with the for loop.

7. Line 13 will print out the finalPrice because it was defined within the function but outside the for loop, and since the console statement is within the function, it is within scope. 

8. The function will still return [50,100,150] because 50, 100, and 150 are the values that we pushed into the discounted array and since discounted was declared within the function, the variable discounted within the return statement is still within scope since it's within the function.

9. Line 11 will result in an error since the variable i within the console statement is out of scope. This is because the console statement is outside the code block with the for loop.

10. Line 12 will result in an error since the variable discountedPrice is of type const but within the for loop, the variable keeps getting reassigned to new values. 

11. Line 13 will result in an error since the variable finalPrice is of type const but within the for loop, the variable keeps getting reassigned to new values. 

12. The function return will result in an error because within the function, we keep reassigning values to const type variables.

13.
A. student.name

B. student["Grad Year"]

C. student.greeting()

D. student["Favorite Teaecher"].name

E. student.courseLoad[0]

# check!!! 

14. 
A. 5 because numeric conversions happen in mathematical functions and expressions automatically. 

B. 1 because numeric conversions happen in mathematical functions and expressions automatically. 

C. Null is converted to a 0 and 3+0=3, so the answer is 3. 

D. Null is converted to a 0 and '3' is converted to a 3 because numeric functions are automatic, so the answer is 3.

E. True is converted to 1 and 3+1 = 4, so answer is 4. 

F. False is converted to a 0 and null is 0 so the answer is 0.

G. NaN because undefined is NaN.

H. NaN because undefined is NaN.

15. 
A. True because when JavaScript converts the values to numbers so 2 > 1. 

B. False because JavaScript compares the first characters of each string and '2' > '1'.

C. True because when JavaScript converts the values to numbers so 2 > 1. 

D. False  because there is no type conversion.

E. False because true is converted to 1 and 1 != 2.  

F. Boolean(2) results in true and true === true is true, so overall it is true. 

16. === checks the equality without type conversion while a == converts operands of different types to numbers. 
# check end here 

17. This prints out 'How are you?' because for the first if statement, since we are comparing values of different types, true is converted to 1 and 1 != 2. For the second else-if statement, 2 is true by boolean conversion, so what's in the console.log under is printed out. 

19. The result is [6,8,10]. First, the modifyArray function is called. Then the for loop is entered. Within the for loop, there exists a callback function so the doSomething function is called since that is the callback function placed in the function call modifyArray([1,2,3], doSomething). The doSomething returns the callback function with the parameters num+2 so it goes back to inside the loop and calls function(num+2). Thus, the values become (2+x) from the doSomething function and the function multiplies it by 2.

20. 
var intervalID = window.setInterval(func, 1000);

function func(a, b)
{

 	let d = new Date(); 
    
    let time = d.toLocaleTimeString();
    
    console.log(time);
    
}

21. Output is 1,4,3, and after 1000 milliseconds, 2. 
