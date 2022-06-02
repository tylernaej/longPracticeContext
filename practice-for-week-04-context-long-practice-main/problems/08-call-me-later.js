/*
Create a CallCenter class.
The constructor function should take in a name argument and set the name property of a newly instantiated instance to the name argument.
Add two instance methods: a. sayHello() - prints Hello this is ${name} b. callMeLater(delay) - takes in a delay in milliseconds that will call the sayHello() method on the instance after the delay. The context of the sayHello() method when invoked needs to be the CallCenter instance that the method was called on.
You CANNOT use bind, call, or apply for this phase!

Test your implementation by running the test specs in the test/08-call-me-later-spec.js file. Run the specs with the following command:

npm test test/08-call-me-later-spec.js
*/

class CallCenter {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    //console.log(this);
    console.log(`Hello this is ${this.name}`);
  }

  callMeLater(delay) {
	  //we need to use anonymous func for setTimeout to keep the Callcenter context
	  //otherwise, the context is the Timeout obj
    setTimeout(() => {
      this.sayHello();
    }, delay);
  }
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
  module.exports = CallCenter;
} catch {
  module.exports = null;
}
