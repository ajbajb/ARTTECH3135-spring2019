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
### `while`
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
The second statement in the loop code block adds 5 to the variable x.  This statement is _really_ important, as it increases the value of x, eventually making it greater than height, and therefore, the condition would evaluate to false so we break out of the loop. If we did not increment the value of x _inside_ the loop then this `while()` loop would run infinitely, since the condition would always evaluate to `true`. __Don't create infinite loops!__

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

### `do...while`

The key difference between a `while` and a `do...while` is that the statements in the code block come _before_ the condition, so the code in the loop is guaranteed to run at least once.  

```javascript
let x = 50;         // our counter

do {

    line( x, 0, x, height );
    x = x + 1;                  // update and increment the counter

} while ( x < 40 );   // condition
```
In the above code, x is already greater than 40, so the condition in the while parenthesis will evaluate to false. Regardless, one line will be drawn since the block containing that command occurs before the test condition in `do` block.


### `for()`

You usually need 3 elements for a `while` and `do...while` loop.
1. a counter
2. a condition
3. an update

The `for` loop combines all three of these elements within the statement declaration, each separated by a `;`.

```
for ( counter; condition; update ) {

    loop code block

}
```
in practice,
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
2. test if the counter meets our condition, `true` or `false`.
3. If `true`, evaluate the statements in the block of code. If `false` don't evaluate and move out of the loop.
4. After evaluating the block, execute the update portion of the `for` loop, changing the value of our counter.
5. go back to 2. start loop over.

`for` loops are great for iterating over things with a set number, and is usually my choice as a loop mechanism because they are so flexible.


Helpful links
- [MDN for loops and iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)
- [w3 schools](https://www.w3schools.com/js/js_loop_for.asp)

Lets look at another example.  

If I wanted to create a circle somewhere on my canvas, I might do something like this:

```javascript
function draw() {

    background( 220 );

    let xPos = 20;
    let yPos = 20;

    // its a red circle
    fill( 255, 0, 0 );
    ellipse( xPos, yPos, 10, 10 );

}
```

![a single red circle]({{ "/assets/images/singleRedCircle.png" | prepend: site.baseurl }}){:height="400px" width="400px"}

and if i wanted to make another circle right next to the one I just drew, I might do something like this:
```javascript
function draw() {

    background( 220 );

    let xPos = 20;
    let yPos = 20;

    // its a red circle
    fill( 255, 0, 0 );
    ellipse( xPos, yPos, 10, 10 );

    xPos = xPos + 10;
    ellipse( xPos, yPos, 10, 10 );

}
```

where I give xPos the value of 20, draw a circle, then add 10 to the value of xPos, then draw another circle using that new (current) value of xPos

![Two red circles]({{ "/assets/images/twoRedCircles.png" | prepend: site.baseurl }}){:height="400px" width="400px"}

Super. so far so good, but what if I wanted to fill the entire _width_ of the canvas with red circles? Do I need to continuously copy and paste the commands to set `xPos` and draw a circle? like:

```javascript
function draw() {

    background( 220 );

    let xPos = 20;
    let yPos = 20;

    // its a red circle
    fill( 255, 0, 0 );
    ellipse( xPos, yPos, 10, 10 );

    // 2nd circle
    xPos = xPos + 10;
    ellipse( xPos, yPos, 10, 10 );

    // 3rd
    xPos = xPos + 10;
    ellipse( xPos, yPos, 10, 10 );

    // 4th
    xPos = xPos + 10;
    ellipse( xPos, yPos, 10, 10 );

    // etc... etc...etc

}
```

and etc, etc, etc until I fill the width of the canvas. This would certainly draw a row of circles, but this is not the best approach. It is time consuming, error prone, and really difficult to go back and augment. A better approach would be to use a `for()` loop.

When creating a `for()` loop, you'll remember there are three parts:
1. the counter
2. condition
3. update
and really, maybe 4 parts:
4. the code block

so, a for() loop looks like:
```
for ( counter, condition, update ) {

    loop code block

}
```

With this `for()` loop we will:
1. set the counter to correspond to the xPos of the circles.
2. the condition is where we would like the counter to stop, in this case when we reach `width`
3. we will update the counter to be how far apart the circles will be drawn, the vertical spacing

So, we have a `for()` loop that looks like:

```javascript
function draw() {

    background( 150 );
    let yPos = 20;

    fill( 255, 0, 0 );
    for ( let xPos = 10; xPos < width; xPos += 10 ) {

        ellipse( xPos, yPos, 10, 10 );

    }

}
```

and you have a row of circles.
![a row of red circles]({{ "/assets/images/rowRedCircles.png" | prepend: site.baseurl }}){:height="400px" width="400px"}

everything that is in the loop code block gets reevaluated each time though the loop, so if we put `random()` in the loop we will get a new random number each loop cycle. For example,

```javascript
function draw() {

    background( 150 );
    randomSeed( 3247 );

    let yPos = 20;

    for( let xPos = 10; xPos < width; xPos += 10 ) {

        fill( random(255), random(255), random(255) );
        ellipse( xPos, yPos, 10, 10 );

    }

}
```

gives us a new color for each circle.
![a row of red circles]({{ "/assets/images/rowRandomColorCircles.png" | prepend: site.baseurl }}){:height="400px" width="400px"}

Great. What about a grid? What if I wanted to fill the entire canvas with circles?  We already have circles repeated in one dimension, the x dimension. We need to continue the pattern into 2 dimensions. This is easily done with a _nested_ for() loop- a for() loop inside of a for() loop, also sometimes referred to as an _embedded_ loop. To illustrate this, I'll quickly use another example:

```javascript
function draw() {

    for ( let i = 0; i < 5; i++ ) {

        console.log( i );

    }

}
```

This will print to the console the values of `i` each time through the loop.

![a row of red circles]({{ "/assets/images/console_i.png" | prepend: site.baseurl }}){:height="180px" width="120px"}

Now, lets put another for() loop _inside_ this loop.

```javascript
function draw() {

    for ( let i = 0; i < 5; i++ ) {

        console.log( i );

        for ( let j = 0; j < 5; j++ ){

            console.log( j );

        }

    }

}
```

and look at the console output:

![a row of red circles]({{ "/assets/images/console_ij.png" | prepend: site.baseurl }}){:height="390px" width="140px"}

We see that for every __one__ cycle of the outer loop (the `i` loop), we go through the entire 5 iterations of the inner loop (the `j` loop).
- Back to our circles-
Think about it this way: one loop will take care of our x positions (columns) and one loop will take care of our y positions (rows).  So, the outer loop happens, say its the "x position" loop, we enter it and encounter the y position loop.  We draw circles for every y position at that x position ( filling in an entire column of circles). We then move on and advance the x position counter filling in the next column of circles.

```javascript
function draw() {

    for ( let xPos = 10; xPos < width; xPos += 10 ) {

        for ( let yPos = 10; yPos < height; yPos += 10 ) {

            fill( random( 255 ), random( 255 ), random( 255 ) );
            ellipse( xPos, yPos, 10, 10);

        }

    }

}
```

![a row of red circles]({{ "/assets/images/gridCircles.png" | prepend: site.baseurl }}){:height="400px" width="400px"}

_warning_
- Make sure the condition in the for() loop will eventually be `false`. Don't do `for ( let xPos = 10; xPos < width; xPos -= 10 )` or `for ( let xPos = 10; xPos < width; xPos += 0 )` because, in this case, `xPos < width` will always be `true` because `xPos` would always be less than width. This will create an __infinite loop!__ BAD!
