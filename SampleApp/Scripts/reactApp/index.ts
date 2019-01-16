import Models = require("./models")

const c: Models.Car =
{
    id: 3,
    make: "hello",
    model: "hi"

};

Models.hi();

console.log(c.make);