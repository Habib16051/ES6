let Display = (something) => {
  console.log(something);
};

let HigherOrderFun = (Name, Class, CallBackFun) => {
  const Details = `My name is ${Name} and I read in class ${Class}`;
  CallBackFun(Details);
};
HigherOrderFun("Habib", "20", Display);
