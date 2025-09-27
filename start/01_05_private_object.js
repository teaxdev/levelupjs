// Write your code here
const username = Symbol("username");
const password = Symbol("password");


const user = {[username]: "billybob57", [password]: "pass123", Age: 55};

console.log(user.username)