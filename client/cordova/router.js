if(Meteor.isCordova){

    Session.setDefault('newClicks', 0);

    Router.route('/', function () {
        this.render('cordovaIndex');
    });





}
