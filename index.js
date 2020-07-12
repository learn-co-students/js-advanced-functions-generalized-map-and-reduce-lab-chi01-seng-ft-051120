function map(array, passedFunction){
  return array.map(item => {return passedFunction(item)})
}

function reduce(array, passedFunction, startingValue=0){
  if (!array.some(isNaN)) {
    return array.reduce(passedFunction, startingValue)
  } else {
  return array.reduce(passedFunction)
  }
} 