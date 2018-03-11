const {ObjectID} = require("mongodb");
const jwt = require("jsonwebtoken");

const {Todo} = require("./../../models/todo");
const {User} = require("./../../models/user");

const userOneId = new ObjectID();
const userTwoId = new ObjectID();
const users = [{
    _id: userOneId,
    email: "test@example.com",
    password: "userOnePassword",
    tokens: [{
        access: "auth",
        token: jwt.sign({_id: userOneId, access: "auth"}, "abc123").toString()
    }]
}, {
    _id: userTwoId,
    email: "test2@example.com",
    password: "userTwoPassword"
}];

const todos = [{
    _id: new ObjectID(),
    text: "First todo"
}, {
    _id: new ObjectID(),
    text: "Second todo",
    completed: true,
    completedAt: 12345
}];

const populateUsers = (done) => {
    User.remove({})
        .then(() => {
            var userOne = new User(users[0]).save();
            var userTwo = new User(users[1]).save();

            return Promise.all([userOne, userTwo]);
        })
        .then(() => done());
};

const populateTodos = (done) => {
    Todo.remove({})
        .then(() => {
            return Todo.insertMany(todos);
        })
        .then(() => done());
};

module.exports = {
    users,
    todos,
    populateUsers,
    populateTodos
};