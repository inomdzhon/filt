var filters = {
  color: false,
  size: false,
};
var elemsFilter = document.querySelectorAll('.js-filter'); // <-- https://learn.javascript.ru/searching-elements-dom
var elemGoods = document.querySelector('.js-goods');
var elemsGoodsItem = elemGoods.querySelectorAll('.js-goods-item');

elemsFilter.forEach(function(elemFilter) { // <-- https://learn.javascript.ru/array-iteration#foreach
  elemFilter.addEventListener('change', onFilterChanged); // <-- https://learn.javascript.ru/introduction-browser-events#addeventlistener-%D0%B8-removeeventlistener
});

function onFilterChanged(event) { // <-- https://learn.javascript.ru/obtaining-event-object
  var elemFilter = event.target;
  var type = elemFilter.dataset.type; // <-- https://learn.javascript.ru/attributes-and-custom-properties#%D1%81%D0%B2%D0%BE%D0%B9%D1%81%D1%82%D0%B2%D0%BE-dataset-data-%D0%B0%D1%82%D1%80%D0%B8%D0%B1%D1%83%D1%82%D1%8B
  var value = elemFilter.value;

  filters[type] = value === 'all' ? false : value;

  filterGoods();
}

function filterGoods() {
  elemsGoodsItem.forEach(function(elemGoodItem) {
    var isValidItem = Object.keys(filters) // <-- https://learn.javascript.ru/array-methods#object-keys-obj
      .every(function(filterKey) { // <-- Метод *.every https://learn.javascript.ru/array-iteration#every-some
        var filterValue = filters[filterKey];

        if (!filterValue) { // или по-другому filterValue === false
          return true;
        }

        var goodItemValue = elemGoodItem.dataset[filterKey].split(','); // <-- https://learn.javascript.ru/array-methods#%D0%BC%D0%B5%D1%82%D0%BE%D0%B4-split

        return goodItemValue.some(function(value) { // <-- Метод *.some https://learn.javascript.ru/array-iteration#every-some
          return filterValue === value;
        });
      });

    if (isValidItem) {
      elemGoodItem.classList.remove('good_state_hide'); // <-- https://learn.javascript.ru/attributes-and-custom-properties#%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D1%8B-%D0%B2-%D0%B2%D0%B8%D0%B4%D0%B5-%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D0%B0-classlist
    } else {
      elemGoodItem.classList.add('good_state_hide');
    }
  });
}
