function callOnTarget(func, obj1, obj2) {
  //we need to use call because the prompt is asking us to return a result
  //call will return the invoked funcs result.
  const an = func.call(obj1,obj2)
  return an
}


/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = callOnTarget;