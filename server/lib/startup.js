Meteor.startup(function() {
    createUsers();
    createItems();

});


var createItems = function() {
    if (Item.find().count() === 0) {

    	var users = Meteor.users.find({}, {fields: {_id: 1}}).fetch();
    	var userIds = _.pluck(users, "_id");

        var stdCallback = function(err, result) {
            if (err) {
                console.log("Error: " + err.message);
            }
        };
        for (var i = 1000 - 1; i >= 0; i--) {
        	var random = _.random(0, userIds.length-1);
            var item = {
                name: "Item " + i,
                description: "Description " + i,
                created: new Date(),
                ownerId: userIds[random]
            };
            Item.insert(item, stdCallback);
        }
    }
};

var createUsers = function() {

    var insertUserCallback = function(err, result) {
        if (err) {
            console.log("Error: " + err.message);
        } else {
            userIds.push(result);
        }
    }
    if (Meteor.users.find().count() === 0) {

        for (var i = 10 - 1; i >= 0; i--) {
            var user = {
                username: "user " + i,
                email: "test" + i + "@test.com",
                password: "@assWord@" + i
            }
            Accounts.createUser(user);
        }
    }
};


