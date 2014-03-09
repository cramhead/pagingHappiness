// Meteor.publish("Item", function(){
// 	return Item.find();
// });

Meteor.smartPublish("Item", function(filters, skip, limit) {
        var filters = filters || {};

        // if (filters['categoryIds'].indexOf("all") > notFound) {
        //     var categoryIds = User.getUserCategoryIds(this.userId);
        //     if (categoryIds && categoryIds.length > 0) {
        //         filters.categoryIds = categoryIds
        //     }
        // }

        this.addDependency("item", "ownerId", function(item) {
            return Meteor.users.find(item.ownerId);
        });
        //var predicate = Collectible.buildPredicate(filters);
        return Item.find();
    });
