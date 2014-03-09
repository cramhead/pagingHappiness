Router.configure({
    layoutTemplate: 'layout',
    notFoundTemplate: 'notFound',
    loadingTemplate: 'loading'
});


Router.map(function() {
    this.route('home', {
        path: '/',
        template: 'items',
        before: function() {
         
                Meteor.subscribe('Item', function() {
                    var from = new Date();
                    console.log("older then " + from);
                    //  return Item.find();
                    return Item.find({created: {$lte: from}}, {sort: {created: -1}, limit: 20});
                   
                });
          

        }
    });

});
