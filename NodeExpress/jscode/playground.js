var counter = (function(initial) {	
  var privateCounter = 0;
  if(initial)
	  privateCounter = initial;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  };   
})(3);

console.log(counter.value()); /* console.logs 0 */
counter.increment();
counter.increment();
console.log(counter.value()); /* console.logs 2 */
counter.decrement();
console.log(counter.value()); /* console.logs 1 */

var a = function(){return 10};
var b = function(){return 20};
var c = function(){return 30};
var test  = {one:a,two:b,three:c};
console.log(test.one());
console.log(test.two());
console.log(test.three());

var testfunc = function(initparam){console.log("init param "+initparam)};
testfunc(12);
testfunc(23);
testfunc(64);

