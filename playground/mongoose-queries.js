const {ObjectID} = require("mongodb");
const {mongoose} = require("./../server/db/mongoose");
const {Todo} = require("./../server/models/todo");

var id = "5a9d6e242ed0db9b99d69ad6a";

if (!ObjectID.isValid(id)) {
    console.log("Id not valid");
}
else {
// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log("Todos", todos);
// });
//
// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log("Todo", todo);
// });

    Todo.findById(id)
        .then((todo) => {
            if (!todo) {
                return console.log("Id not found!");
            }
            console.log("TodoById", todo);
        })
        .catch((err) => {
            console.log(err);
        });
}