(function() {
  angular.module('Example', ['ngMaterial', 'fdzPaginatorModule'])
    .controller('ExampleController', function($scope) {
      let ctrl=this;
      ctrl.collapsed=true;

      ctrl.sortSselection=['Relevance', 'Date', 'A-Z'];
      ctrl.pageSelection=[10, 20, 50];
      ctrl.options={
        sortObject: {
          selected: 'Relevance',
          options: ['Relevance']
        },
        pageObject: {
          options: [10, 20, 50],
          totalHits: 100,
          size: 20,
          page: 1
        }
      };

      ctrl.onUpdate=function(event, data) {
        console.log(event);
        console.log(JSON.stringify(data));

      };

      ctrl.exists=function(item, list) {
        return list.indexOf(item) > -1;
      };

      ctrl.toggle=function(item, list) {
        var idx=list.indexOf(item);
        if (idx > -1) {
          list.splice(idx, 1);
        } else {
          list.push(item);
        }
      };
    });
})();
