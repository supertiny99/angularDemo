angular.module('exampleApp', [])
  .controller('defaultCtrl', ($scope) => {


    $scope.todos = [
      { action: '活动1', complete: false},
      { action: '活动2', complete: false},
      { action: '活动3', complete: false},
      { action: '活动4', complete: true}
    ];

    $scope.buttonNames = ['Red', 'Green', 'Blue'];

    $scope.data = {
      rowColor: 'Blue',
      columnColor: 'Green',
    };

    $scope.handleEvent = (e) => {
      console.log('Event Type:' + e.type);
      $scope.data.columnColor = e.type == 'mouseover' ? 'Green' : 'Blue';
    };

  });