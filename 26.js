//object destructuring
const band = {
  bandName: "Led Zeppelin",
  famousSong: "stairway to heaven",
  year: 1968,
  anotherFamousSong: "kashmir",
};
// traditional way
// const bandName = band.bandName;
// const famousSong = band.famousSong;
// console.log(bandName, famousSong);
// destructing way
const { bandName, famousSong, ...restProps } = band;
// if we want to change the variable
// const { bandName: var1, famousSong: var2 } = band;

console.log(bandName, famousSong, restProps);
// console.log(var1, var2);
