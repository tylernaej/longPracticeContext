function allTheArgs(func, ...args) {//rest to accept multiple args: [arg1],[arg2],[arg3]
  console.log(args);
  console.log(func);
  return func.bind(null, ...args);//spread to comma seperated args
}
//we need to use  bind because we don't want to invoke the func immediately
//APPLY can only takes in 2 args(CONTEXT,ARRAY)
//BIND take in any numbers of args
/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = allTheArgs;
