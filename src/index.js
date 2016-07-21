angular.module('exampleApp', [])
  .controller('defaultCtrl', ($scope) => {

    $scope.data = {};

    $scope.todos = [
      { action: '活动1', complete: false},
      { action: '活动2', complete: false},
      { action: '活动3', complete: false},
      { action: '活动4', complete: true}
    ];

    $scope.buttonNames = ['Red', 'Green', 'Blue'];

    $scope.settings = {
      Rows: 'Red',
      Columns: 'Green'
    };
  });