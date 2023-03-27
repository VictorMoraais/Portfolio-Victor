function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: -23.561108575436986, lng: -46.656494317159584};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'South Jakarta, INA' // Title Location
    });
}