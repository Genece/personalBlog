function greeter(person) {
    return 'hello,' + person.firstName + '' + person.lastName;
}
var user = { firstName: '小明', lastName: '李' };
document.body.innerHTML = greeter(user);
//# sourceMappingURL=greeter.js.map