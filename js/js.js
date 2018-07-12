// var goods = document.querySelectorAll('.good');
var goods = [
  {
   'id' : '1',
   'color' : 'white',
   'size' : '44'
  },
  {
    'id' : '2',
    'color' : 'black',
    'size' : '44'
  },
  {
    'id' : '3',
    'color' : 'brown',
    'size' : '43'
  }
]
function getFilteredByColor(array, color) {
    return array.filter(function (item) {
    return item.color === color;
  });
}