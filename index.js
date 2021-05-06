// require method 
const circle = require('./circle');

circle.circleArea(5);
circle.circleCircumference(5); 

console.log("********");

// object destructing method
const { circleArea, circleCircumference } = require('./circle'); 
 
circleArea(5); 
circleCircumference(5);