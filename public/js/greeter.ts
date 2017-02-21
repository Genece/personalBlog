interface Person {
  firstName:string;
  lastName:string;
}

function greeter(person:Person){
  return 'hello,' + person.firstName + '' + person.lastName ;
}

var user = { firstName:'小明' , lastName:'李' };
document.body.innerHTML = greeter(user);