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