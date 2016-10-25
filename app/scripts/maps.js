'use strict';

const key = 'AIzaSyCi154L2uw_QTf_m0GycTQeMxxMxNd_Az4';

let mapCapitolHill, markerCapitolHill, infoWindowCapitolHill, mapSouthLakeUnion, markerSouthLakeUnion, infoWindowSouthLakeUnion;
let capitolHillLocation = {
  lat: 47.620761,
  lng: -122.321283
};
let southLakeUnionLocation = {
  lat: 47.626841,
  lng: -122.342019
};

function initMaps() {
  mapCapitolHill = new google.maps.Map(document.getElementById('map-capitol-hill'), {
    center: capitolHillLocation,
    zoom: 14
  });
  markerCapitolHill = new google.maps.Marker({
    position: capitolHillLocation,
    map: mapCapitolHill,
    title: 'Tacos Chukis Capitol Hill'
  });
  infoWindowCapitolHill = new google.maps.InfoWindow({
    content: '<a style="text-decoration:none; color:black" target="_blank" href="https://www.google.com/maps?q=tacos+chukis&ion=1&espv=2&bav=on.2,or.r_cp.&bvm=bv.136593572,d.cGc&biw=1412&bih=704&dpr=2&um=1&ie=UTF-8&sa=X&ved=0ahUKEwjkiPTp4vLPAhVC5mMKHbuOB1kQ_AUIBigB">' +
    '<h4 style="padding-left:1.5em; color:rgba(28,147,65,1)">TACOS CHUKIS, CAPITOL HILL</h4>' +
    '<p style="text-align:center">219 Broadway E<br/>Seattle, WA 98102</p>' +
    '</a>'
  });
  mapSouthLakeUnion = new google.maps.Map(document.getElementById('map-south-lake-union'), {
    center: southLakeUnionLocation,
    zoom: 14
  });
  markerSouthLakeUnion = new google.maps.Marker({
    position: southLakeUnionLocation,
    map: mapSouthLakeUnion,
    title: 'Tacos Chukis South Lake Union'
  });
  infoWindowSouthLakeUnion = new google.maps.InfoWindow({
    content: '<a style="text-decoration:none; color:black" target="_blank" href="https://www.google.com/maps/place/810+Dexter+Ave+N,+Seattle,+WA+98109/@47.6266892,-122.3441217,17z/data=!3m1!4b1!4m5!3m4!1s0x54901539300997d1:0x5af03f8d7903ccb3!8m2!3d47.6266892!4d-122.341933">' +
    '<h4 style="padding-left:1.5em; color:rgba(28,147,65,1)">TACOS CHUKIS SOUTH, LAKE UNION</h4>' +
    '<p style="text-align:center">810 Dexter Ave N<br/>Seattle, WA 98109</p>' +
    '</a>'
  });
  markerCapitolHill.addListener('click', function() {
    infoWindowCapitolHill.open(mapCapitolHill, markerCapitolHill);
  });
  markerSouthLakeUnion.addListener('click', function() {
    infoWindowSouthLakeUnion.open(mapSouthLakeUnion, markerSouthLakeUnion);
  });
}

$(window).ready(function() {
  initMaps();
});
