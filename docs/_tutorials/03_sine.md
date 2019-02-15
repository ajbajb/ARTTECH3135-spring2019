__components to a sine__

1. frequency
2. amplitude
3. shift (an initial start value)



so, something like this:


```javascript
let time = millis(); // or frameCount
let frequency = 0.003;
let amplitude = 10;
let shift = 5;

let sineValue = sin( time * frequency ) * amplitude + shift;
```
