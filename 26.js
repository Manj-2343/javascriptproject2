//object destructuring
const band = {
  bandName: "Led Zeppelin",
  famousSong: "stairway to heaven",
};
// traditional way
// const bandName = band.bandName;
// const famousSong = band.famousSong;
// console.log(bandName, famousSong);
// destructing way
// const { bandName, famousSong } = band;
// if we want to change the variable
const { bandName: var1, famousSong: var2 } = band;
// console.log(bandName, famousSong);
console.log(var1, var2);
