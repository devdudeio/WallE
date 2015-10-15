//shows an upload user image sheet

var callback = function (buttonIndex) {
    if (buttonIndex == 1) {
        //cam
        navigator.camera.getPicture(onSuccess, onFail, {
            quality: 75,
            sourceType: Camera.PictureSourceType.CAMERA,
            mediaType: Camera.MediaType.PICTURE,
            allowEdit: true,
            targetWidth: 320,
            targetHeight: 320,
            encodingType: Camera.EncodingType.PNG,
            popoverOptions: CameraPopoverOptions,
            saveToPhotoAlbum: true,
            destinationType: Camera.DestinationType.DATA_URL,
            correctOrientation: true,
            cameraDirection: Camera.Direction.FRONT
        });

        function onSuccess(imageData) {
            //var image = document.getElementById('last-image');
            //image.src = "data:image/png;base64," + imageData;
            var imagedata = Images.insert("data:image/png;base64," + imageData);
            Meteor.users.update({_id: Meteor.userId()}, {$set: {'profile.image': imagedata._id}});

        }

        function onFail(message) {
            console.log('Failed because: ' + message);
        }
    }

    if (buttonIndex == 2) {
        //album
        navigator.camera.getPicture(onSuccess, onFail, {
            quality: 75,
            sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
            mediaType: Camera.MediaType.PICTURE,
            allowEdit: true,
            targetWidth: 320,
            targetHeight: 320,
            encodingType: Camera.EncodingType.PNG,
            popoverOptions: CameraPopoverOptions,
            saveToPhotoAlbum: false,
            destinationType: Camera.DestinationType.DATA_URL,
            correctOrientation: true,
            cameraDirection: Camera.Direction.FRONT
        });

        function onSuccess(imageData) {
            var image = document.getElementById('last-image');
            image.src = "data:image/png;base64," + imageData;
            var imagedata = Images.insert("data:image/png;base64," + imageData);

        }

        function onFail(message) {
            console.log('Failed because: ' + message);
        }
    }
};
chooseImage = function chooseImageSheet() {
    var options = {
        'androidTheme': window.plugins.actionsheet.ANDROID_THEMES.THEME_HOLO_LIGHT, // default is THEME_TRADITIONAL
        'title': 'Foto hochladen',
        'buttonLabels': ['via Kamera', 'via Fotoalbum'],
        'androidEnableCancelButton': true, // default false
        'addCancelButtonWithLabel': 'Abbrechen'
    };
    window.plugins.actionsheet.show(options, callback);
};
