var selec = document.getElementById('sel');
var goods = document.getElementById('goods');
selec.onchange = function () {
  var good = goods.getElementsByClassName('good');
    for (var i = 0; i < good.length; i++) {
      if (good[i].classList.contains(this.value)) {
        good[i].style.display = 'inline-block';
      } else {
        good[i].style.display = 'none';
    }
  }
}
// var filter_select_el = document.getElementById('filter');
// var items_el = document.getElementById('items');

// filter_select_el.onchange = function() {
//   console.log(this.value);
//   var items = items_el.getElementsByClassName('item');
//   for (var i=0; i<items.length; i++) {
//     if (items[i].classList.contains(this.value)) {
//       items[i].style.display = 'block';
//     } else {
//       items[i].style.display = 'none';
//     }
//   }
// };