const map = new maplibregl.Map({
    container: 'map',
    style: 'https://api.maptiler.com/maps/streets/style.json?key=mpnADjSiHTlXEGw9kUg5',

    center: coordinates,
    zoom: 12
  });
  
  map.dragRotate.disable();
  map.keyboard.disable();
  map.touchZoomRotate.disableRotation();
  
  const popup = new maplibregl.Popup({
    offset: 25,
    closeOnClick: true,
    closeButton: true
  }).setHTML(`<h4>${listingTitle}</h4><p>Exact location will be provided after booking.</p>`);
  
  const marker = new maplibregl.Marker({
    color: "black",
    draggable: true
  })
    .setLngLat(coordinates)
    .setPopup(popup)
    .addTo(map);
  
  marker.getPopup().addTo(map); // opens popup by default
  