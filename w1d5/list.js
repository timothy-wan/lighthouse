var list = [];
var customSort = function(list) {
  list.sort(function(a, b) {
    return a - b;
  });
  return list;
}
module.exports = {
  addToList: function(num) {
    list.push(num);
  },
  returnList: function() {
    var result = customSort(list);
    return result;
  },
  showList: function() {
    console.log(list);
  }
}