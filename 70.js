function myFunc() {
  "use strict";
  console.log(this);
}
myFunc();
// to avoid "this" because this will provide the window object
// to avoid this problem we used the this key word
