![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDIR-MATRIX

---
Title: Javascript Practice<br>
Type: Homework<br>
Duration: "3:00 - 4:00"<br>
Creator:<br>
    Original creators: WDI-BLT, WDI-Meeskeeks, WDIR-Panthalassa<br>
    Adapted by: Kristyn Bryan<br>
    Course: WDIR-Matrix<br>
Competencies: Javascript basics, arrays, and conditionals<br>
Prerequisites: Basic Javascript<br>

---

# Homework

![js](http://www.mastergradeit.co.za/files/thumb/289/200)

## Setup
<details><summary>Create a file</summary>
Make a file inside your `homework` folder for w01d04 called `app.js`. 
</details>

<details><summary>Write your Javascript</summary>
Write all of your javascript answers in `app.js`.
</details>

<details><summary>Test your Javascript</summary>
Test your answers in the Chrome Console. 

Note: If you're having trouble with this, you can run your answers in [repl.it](https://repl.it/languages/javascript) which is very much like JSBin. DO NOT do all of your work in repl.it, just test it there. Your work should be in your `app.js` file.
</details>

<details><summary>Write your non-Javascript answers</summary>
Any non-javascript written answers can be made into a comment in your `app.js` file by putting a pound # at the beginning of the line. Or, select the blocks of text and comment them out with this shortcut `command` + `/`.
</details>

## Javascript Basics
<details><summary>Primitive Methods and Properties</summary>

## Conceptual Questions

1. How do we assign a value to a variable? 
2. How do we change the value of a variable? 
3. How do we assign an existing variable to a new variable?
4. How do we use a variable within an expression? 

**Commit 1** <br>
<hr>
&#x1F534; The commit message should read: <br>
"Commit 1 - Answered JS basic conceptual questions"
<hr>

## Exercises

1. Create a variable called `firstVariable`.
  - assign it the value of a string => `"Hello World"`
  - change the value of this variable to a number.
  - store the value of `firstVariable` into a new variable called `secondVariable` 
  - change the value of `secondVariable` to a string. 
  - What is the value of `firstVariable`?

2. Create a variable called `yourName` and set it equal to your name as a string.
  - Write an expression that takes the string "Hello, my name is " and the variable `yourName` so that it returns a new string with them concatenated. 
  *(ex: "Hello, my name is Jean Valjean")*
  
**Commit 2** <br>
<hr>
&#x1F534; The commit message should read: <br>
"Commit 2 - Completed JS basic exercises"
<hr>

</details> 

  
## Javascript Data Types (Primitives) 
<details><summary>JS Data Types</summary>

## Conceptual Questions

1. Name 4 different built in data types (primitives) in Javascript.
2. What is the difference between an integer and a float?
4. How do you create an empty array and store it in a variable?

**Commit 3** <br>
<hr>
&#x1F534; The commit message should read: <br>
"Commit 3 - Answered JS data type questions"
<hr>

## Exercises

1. Given the following array `var a = [1, 10, "Hello", true]`
  - how do you access the 1st element in the array?
  - Change the value of `"Hello"` to `"World"`.
  - Check the value of `a` to make sure it updated the array. 
  
2. Given the following array `class = ["Matrix", "Zoom", "Github", "Github"]`
    - What would you write to access the 3rd element of the array?
    - Change the value of "Github" to "Octocat"
    - Add a new element, "Cloud City" to the array.

3. Create a string that contains quotes and store it in a variable. 

4. What is the result from the expression `"World" * 5`. Why?

**Commit 4** <br>
<hr>
&#x1F534; The commit message should read: <br>
"Commit 4 - Completed JS data type exercises"
<hr>
</details>

## JavaScript - Primitive Methods & Properties
<details><summary>Primitive Methods and Properties</summary>

## Conceptual Questions

1. List at least 5 properties built into a string.
2. List at least 2 method examples built into an array.

**Commit 5** <br>
<hr>
&#x1F534; The commit message should read: <br>
"Commit 5 - Answered JS method & properties questions"
<hr>

## Exercises
### String
1. Given the following string `"The Peculiar Purple Pieman of Porcupine Peak"`
    - How can we check the length of this string?
 
### Array
3. Given the following array `[5,10,500,20]`
    - using the `push` method, add the string `"Egon"` to the end of the array.
    - using a different method, remove the string from the end of the array.
    - using the `unshift` method, add the string `"Bob Marley"` to the beginning of the array
    - using a different method, remove the string from the beginning of the array
    - use the reverse method on this array
    

**Commit 6** <br>
<hr>
&#x1F534; The commit message should read: <br>
"Commit 6 - Completed JS method & properties exercises"
<hr>

</details>
    
## Javascript - operators

<details><summary>Javascript Operators</summary>

- Using the provided variable definitions, replace the blanks with a mathematical or boolean operator that evaluates the expression to true. :wave:

```
  var a = 4;
  var b = 53;
  var c = 57;
  var d = 16;
  var e = 'Kevin';
```

-  a _ b;
-  c _ d;
-  'Name' ___ 'Name';
-  a _ b ___ c;
-  a _ a ___ d;
-  e ___ 'Kevin';
-  48 ___ '48';

...


**Commit 7** <br>
<hr>
&#x1F534; The commit message should read: <br>
"Commit 7 - Completed JS operator exercises"
<hr>
</details>

## Conditionals

### If else
<details><summary>Syntax for `if..else` statements</summary>
    ```
         if (condition) {
                //block of code if condition is true
        } else {
                //block of code if none of the condition(s) is true.
        }
    ```
    </details>
    <details><summary>Complete the `if..else` statement</summary>
    1. Complete the `if..else` statement to alert `little number` if the number is entered is less than **10**.<br> 
    2. If the number entered is more than 10, alert `big number`. <br>

    Note: You can put this in a compiler to check your work:

           ```
            var sizeOfNumber = function () {
            // write your code here
            }

            sizeOfNumber(//enter a number to test here);
            ```
**Commit 8** <br>
<hr>
&#x1F534; The commit message should read: <br>
"Commit 8 - Completed if else exercises"
<hr>

</details>


### If, else if, else
<details><summary>Syntax for `if...else if...else` statements</summary>
```
if (condition) {
    //block of code if condition is true
} else if (condition) {
    //block of code if condition is true
} else {
    //block of code if none of the condition(s) is true.
}
```
</details>

<details><summary>Complete the `if...else if...else` statement</summary>
1. Complete the `if...else if...else` statement to alert `little number` if the number is entered is less than **5**.<br> 
2. If the number is between 5 and 10, alert `middle number`. <br>
3. If the number entered is more than 10, alert `big number`. <br>

- Note: You can put this in a compiler to check your work:

```
var sizeOfNumber = function () {
    // write your code here
}

sizeOfNumber(//enter a number to test here);
```

**Commit 9** <br>
<hr>
&#x1F534; The commit message should read: <br>
"Commit 9 - Completed if else if else else exercises"
<hr>
    
</details>

## When You're Done

<details><summary>Hungry for more?</summary>
- Finish your lab from today!
https://github.com/ga-students/wdi-remote-matrix/blob/master/unit_1/w1d4/student_labs/LAB_pick_a_path.md
</details>

<details><summary>Submission</summary>
 - Inside this folder (w01d04/homework), you should now have a file called `app.js`.
 - You should have been adding and committing along the way, but please type `git status` one last time to make sure that everything is commited. If it's not, please commit. 
 - Push your work to your github repo `git push origin master`
 - Follow the instructions for submitting homework, found in [the wiki](https://github.com/ga-students/wdi-remote-matrix/wiki/Homework-Submission)
</details>
