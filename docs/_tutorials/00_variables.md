---
layout: page
title: a bit about variables
---

Remember when I said variables can store _any_ value?  Well, they can also store colors.

We talked about how you create a variable by using the keyword `var`.  The you create a name for the variable (such as 'x'), and then assigning a _value_ to `x`. like::
```javascript
var x = 200;
```
where `x` is the name of the variable with the value 200 assigned to it.

Also valid would be to create the variable and then assign it later.
```javascript
var x;
x = 200;
```
We can now use `x` as it were the number 200.

```javascript
console.log( x ) // prints 200 to the console

var y; // declare a variable

y = x + 120;

console.log( y ); // prints 320 to the console
```

variables can also be _reassigned_

```javascript
console.log( x ); // prints 200

x = 5;

console.log( x ); // prints 5  x's previous value is overwritten

y = x + 120;

console.log( y ); // y is now 125

x = x + 20;

console.log ( x ); // prints 25. x has the value of 25
```

You might be thinking "uhh, thats weird, why not write, x + 20 = x?" and "whaa, how can x equal itself plus 20?"  The reason for this is because the `=` symbol doesn't mean 'equals', but is closer in meaning to "gets the value of". So, this statement `x = x + 20` would translate to: 'x gets the value of x plus twenty', or 'x gets assigned the value of whats currently stored as x plus twenty'. `=` is not about equality but about assignment. `=` is the assignment operator and will _assign the value of what is on the right-hand side to what is on the left-hand side_.  To test for equality we use `===`, or three equal signs.

```javascript
console.log(x === 25) // true!

console.log( x === y ) // nope!, false   
```

So back to color, we talked about coloring our shapes like this:

```javascript
fill( 200, 0, 100 );
rect( 30, 30, 100, 100 );
```

where `fill()` takes three values, or _parameters_, based on RGB color values to make a color.  But you can also do:

```javascript
fill( color( 200, 0, 100) );
rect( 30, 30, 100, 100 );
```

where we create an p5 _color object_ and pass that color object to `fill()`.  Looks like more typing, right? Whats the use?  We can store that color object in a variable.

```javascript
var myColor = color( 200, 0, 100 );

fill( myColor );
rect( 30, 30, 100, 100 );
```
and now we have a _stored color_ in a variable that we can use throughout our program.

For example, say I was trying to render Instruction #1 which makes use of four colors.  I could do something like:

```javascript
function setup() {

    createCanvas( 400, 400 );

    var color1 = color( 200, 0, 100 );  // define a color
    var color2 = color( 100, 20, 230 );  // define another color
    var color3 = color( 200, 200, 100 );  // and another
    var color4 = color( 200, 200, 10 );  // ditto

    // With color number 1, randomly place 10 dots on the page.
    fill( color1 );
    ellipse( random( width ), random( height ), 4, 4 );
    ellipse( random( width ), random( height ), 4, 4 );
    ellipse( random( width ), random( height ), 4, 4 );
    ellipse( random( width ), random( height ), 4, 4 );
    ellipse( random( width ), random( height ), 4, 4 );
    ellipse( random( width ), random( height ), 4, 4 );
    ellipse( random( width ), random( height ), 4, 4 );
    ellipse( random( width ), random( height ), 4, 4 );
    ellipse( random( width ), random( height ), 4, 4 );
    ellipse( random( width ), random( height ), 4, 4 );

}
```
something like that.

If you know about `for()` loops, you can use that to simplify your code.  We will talk about `for()` loops next class, but try it out:

```javascript
function setup() {

    createCanvas( 400, 400 );

    var color1 = color( 200, 0, 100 );  // define a color
    var color2 = color( 100, 20, 230 );  // define another color
    var color3 = color( 200, 200, 100 );  // and another
    var color4 = color( 200, 200, 10 );  // ditto

    // With color number 1, randomly place 10 dots on the page.
    fill( color1 );
    for( let i = 0; i < 10; i++ ) {

        // code in here gets executed 10 times!
        ellipse( random( width ), random( height ), 4, 4 );

    }

}
```
