// commonJS, every file is module (by default)
//Modules- encapsulated code (only share minimum)


const names = require('./4-names')
const sayHi = require('./5-nameFunction')
const data = require('./6-alternative-module')
console.log(data)

sayHi('Tahmid');
sayHi(names.Name1);
sayHi(names.Name2);
sayHi(data.singlePerson.name)

//from 7-mind-grenade
require('./7-mind-grenade') 
//if we have a function executed on a module, if we require it on other module, the function will run autometically


