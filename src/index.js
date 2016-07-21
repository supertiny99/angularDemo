angular.module('exampleApp', [])
  .controller('defaultCtrl', ($scope, $location) => {

    $scope.message = '轻击我！'
  }).directive('tap', () => {
    return (scope, elem, attrs) => {
      elem.on('touchstart touchend', () => {
        scope.$apply(attrs['tap']);
      });
    }
  });