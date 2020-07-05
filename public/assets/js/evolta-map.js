/*==============================================================*/
// DigisailorMap  JS
/*==============================================================*/
(function($) {
    "use strict"; // Start of use strict
    var marker;

    window.initMap = function() {
        var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: {lat: 8.788779, lng: 78.1359641}
        });

        marker = new google.maps.Marker({
        map: map,
        draggable: true,
        animation: google.maps.Animation.DROP,
        position: {lat: 8.788779, lng: 78.1359641}
        });
        marker.addListener('click', toggleBounce);
    }

    function toggleBounce() {
        if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
        } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
        }
    }
}(jQuery)); // End of use strict