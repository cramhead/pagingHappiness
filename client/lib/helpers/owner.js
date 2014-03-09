Handlebars.registerHelper('Owner', function(ownerId) {
    var user = Meteor.users.findOne({
        _id: ownerId
    });
    return user;
});