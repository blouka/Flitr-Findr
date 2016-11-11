// this is our libary card to use mapbox
mapboxgl.accessToken = 'pk.eyJ1IjoiYmxvdWthIiwiYSI6ImNpdmRtYzN1ZDAwMzMydHFreHIxdnRtbjgifQ.h5Yl5H02vzpuNbccu0w8kQ'

var map = new mapboxgl.Map(
{
  // container id specified in the HTML
  container: 'map',
  // style URL
  style: 'mapbox://styles/mapbox/light-v9',
  // initial position in [long, lat] format
  center: [0.005353, 51.501597],
  // initial zoom
  zoom: 10
})