(function() {
  angular.module('Example', ['ngMaterial', 'fdzPaginatorModule'])
    .controller('ExampleController', function($scope) {
      let ctrl = this;
      ctrl.collapsed = false;
      ctrl.options = {
        sortObject: {
          selected: 'Relevance',
          options: ['Relevance']
        },
        pageObject : {
          options : [10, 20, 50],
          totalHits: 100,
          size: 20,
          page: 7
        }
      };

      ctrl.onUpdate = function(event, data){
        console.log(event);
        console.log(JSON.stringify(data));

      }
    })
})();
