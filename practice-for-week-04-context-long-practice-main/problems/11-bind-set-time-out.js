function boundFuncTimer(obj, func, delay) {
  
  // const bound = func.bind(obj)
  // setTimeout(bound, delay);

  // setTimeout(func.bind(obj), delay);

  setTimeout(()=>func.bind(obj)(), delay);
}

const bruh = () => {
  return 'brah'
}
console.log(bruh())
/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = boundFuncTimer;