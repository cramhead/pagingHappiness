Pagemaster.template("items", {
    helpers: {
        item: function() {
            return Item.find();
        }
    }
});

Template.items.item = function(){
	return Item.find();
}
