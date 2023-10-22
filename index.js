function recursif(number) {
  debugger;

  let newnumber = number - 1;
  console.log(newnumber);
  if (number > 0) {
    
    recursif(newnumber);
  }
}

recursif(10);
