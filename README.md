levhitate
=========

Levhitate (as in levitation) an element increasing and decreasing his paddings using and the standard jQuery animate functions.

```
// Standard 20px range in 2 seconds cycles
$('a').levhitate(); 

// Overwrites range and speed
$('a').levhitate({range:40, speed:1000}) 

// Current cycle will continue until it ends, and an animation to initial state will run.
$('a').levhitate({stop:true}) 
```

Only works well in block elements, best used to animate levhita's logo on his homepage.
