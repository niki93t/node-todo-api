const {ObjectID} = require("mongodb");
const {mongoose} = require("./../server/db/mongoose");
const {Todo} = require("./../server/models/todo");

// Todo.remove({}).then((results) => {
//     console.log(results)
// });

// Todo.findOneAndRemove({_id: "5a9d7ecddbc249f3d407c19b"}).then((todo) => {
//     console.log(todo);
// });

Todo.findByIdAndRemove("5a9d7ecddbc249f3d407c19b").then((todo) => {
    console.log(todo);
});