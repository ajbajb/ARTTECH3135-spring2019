---
layout: page
title: a bit about loops
---

Whenever we are writing code and we see ourselves writing pretty much the same thing over and over again, we should ask ourselves, "Is there another, shorter way to write this? Is there a code construct that can work for me?"  The answer is probably, yes.  What we need is a _loop_.  I will discuss three different ways we can write a loop. The last, a `for()` loop, being what we discussed in class and is the loop i tend to use most often.

Lets first take a snippet of code that is written without using a loop.
Say, for example, you are drawing multiple vertical lines on your canvas.

``` javascript
function setup() {

  createCanvas(400, 400);
  background(0);

  stroke( 150 );
  line( 5, 0, 5, height );
  line( 10, 0, 10, height );
  line( 15, 0, 15, height );
  line( 20, 0, 20, height );
  line( 25, 0, 25, height );
  line( 30, 0, 30, height );
  line( 35, 0, 35, height );
  line( 40, 0, 40, height );
  line( 45, 0, 45, height );
  line( 50, 0, 50, height );
  line( 55, 0, 55, height );
  line( 60, 0, 60, height );
  line( 65, 0, 65, height );
  line( 70, 0, 70, height );
  line( 75, 0, 75, height );
  line( 80, 0, 80, height );
  line( 85, 0, 85, height );
  line( 90, 0, 90, height );
  line( 95, 0, 95, height );
  line( 100, 0, 100, height );
  line( 105, 0, 105, height );
  line( 110, 0, 110, height );

}
```
I stopped after 21 lines drawn, but what if I wanted to go across the _entire_ canvas?
Thats a lot of lines of code, and it is time consuming to write.  And look at what we are doing- We are basically just writing the _same_ command over and over again.

As an aside, another way to write the above is:

``` javascript
stroke( 150 );

let x = 5;
line( x, 0, x, height );
x = x + 5;
line( x, 0, x, height );
x = x + 5;
line( x, 0, x, height );
x = x + 5;
line( x, 0, x, height );
x = x + 5;
line( x, 0, x, height );
x = x + 5;
line( x, 0, x, height );
x = x + 5;
line( x, 0, x, height );

// etc
```
#### `while`
A clearer and more efficient way to write the above is to use a `while()` loop. A `while` loop tests a condition inside of its parenthesis.  As long as the condition evaluates to true, the loop while continue and the code written inside the `{}` will be repeated. For example:

``` javascript
let x = 5; // our "counter"
while( x < height ) {           // x is currently 5, therefore it is less than the height,
                                // Therefore, 'x < height' evaluates to TRUE
    line( x, 0, x, height );
    x = x + 5;                  // Don't forget to increment the counter!
                                // now go back and evaluate `x < height`
}
```

The loop will continue to run for as long as the condition inside the parenthesis is true.
The second statement in the loop code block adds 5 to the variable x.  This statement is _really_ important, as it increases the value of x, eventually making it greater than height, and therefore, the condition would evaluate to false. If we did not increment the value of x _inside_ the loop then this `while()` loop would run infinitely, since the condition would always evaluate to `true`. __Don't create infinite loops!__

``` javascript
let x = 5; // our "counter"
while ( x < height ) {           // x is currently 5, therefore it is less than the height,
                                // Therefore, 'x < height' evaluates to TRUE
    line( x, 0, x, height );

}

x = x + 5;                      // NO! BAD! INFINITE LOOP! YOUR PROGRAM WILL CRASH  
```

Code outside your loop will never be evaluated while your loop continues.  So, in the above case, `x = x + 5;` will never be reached and therefore your loop will run 4ever!

`while()` loops are really great if you do not know how many times you want your loop to run.  It should continue to run for as long as the condition is met.

#### `do...while`

The key difference between a `while` and a `do...while` is that the statements in the code block come _before_ the condition, so the code in the loop is guruteed to run at least once.  

```javascript
let x = 50;         // our counter

do {

    line( x, 0, x, height );
    x = x + 1;                  // update and increment the counter

} while ( x < 40 );   // condition
```
In the above code, x is already greater than 40, so the condition in the while parenthesis will evaluate to false. Regardless, one line will be drawn since  the block containing that command occurs before the test condition.


### `for()`

You usually need 3 elements for a `while` and `do...while` loop.
1. a counter
2. condition
3. update

The `for` loop combines all three of these elements within the statement declaration, each separated by a `;`.


```javascript
for ( let x = 5; x < width; x += 5 ) {

    line( x, 0, x, height );

}
```

Within the parenthesis of the for loop, there are 3 statements. The first,
`let x = 5;`
we declare a variable that will be our counter.
The second is our condition.
`x < width`
 Like `while`, the loop will run as long as the condition evaluates to true.
 The third statement,
`x += 5`
is our update statement and increments our counter.

The logic of the `for` loop works like this:

1. set the initial value of the counter.
2. test if it meets our condition, `true` or `false`.
3. If `true`, evaluate the statements in the block of code. If `false` don't evaluate and move on
4. After evaluating the block, execute the update portion of the `for` loop, changing the value of our counter.
5. go back to 2. start loop over.

`for` loops are great for iterating over things with a set number, and is usually my choice as a loop mechanism because they are so flexible.


Helpful links
- [MDN for loops and iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)
- [w3 schools](https://www.w3schools.com/js/js_loop_for.asp)
