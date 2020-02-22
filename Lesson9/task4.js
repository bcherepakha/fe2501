'use strict';

// What is this?
let obj, method;

obj = {
  go: function() { console.log(this); }
};

obj.go();               // (1) [object Object]

(obj.go)();             // (2) [object Object]

(method = obj.go)();    // (3) undefined

(obj.go || obj.stop)(); // (4) undefined

function g(f) { // f = obj.go
  return f();
}

g( obj.go ); // ?
