1. Line 11 will print out i because even though i was declared inside the for loop, var variables have no block scope. 

2. Line 12 will print out the discountedPrice because even though finalPrice was declared inside the for loop, var variables have no block scope.

3. Line 13 will print out the finalPrice. Since it was declared within the function, the variable finalPrice within the console.log statement is still within scope since it's within the function.  

4. The function will return the values [50,100,150] because 50, 100, and 150 are the values that we pushed into the discounted array and since discounted was declared within the function, the variable discounted within the return statement is still within scope since it's within the function.

