// Add your functions here

function map(array, callBack) {
  let result = [];
  for(let i = 0; i < array.length; i++) {
    result.push(callBack(array[i]))
  }
  return result;
}

function reduce(array, callBack, startingPoint=0) {
  for(let i = 0; i < array.length; i++) {
    let placeholder;
    if(typeof array[i]  === 'number') {
      placeholder = startingPoint;
    } else {
      placeholder = -1;
    }
    startingPoint = callBack(array[i],placeholder)
  }
  return startingPoint;
}
