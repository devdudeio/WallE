Template.browserIndex.helpers({
    images: function () {
        return Images.find();
    }
});

Template.browserIndex.events({
    'click [data-id]': function (e) {
        Images.remove({_id: $(e.target).data('id')});
    }
});

Template.browserIndex.rendered = function () {


    Deps.autorun(function() {
        Images.find().observeChanges({
            added: function(id, doc) {
                console.log(doc);
                $(function () {
                    var wall = new freewall("#container");
                    wall.fitWidth();
                });
            }
        });
    });

};
