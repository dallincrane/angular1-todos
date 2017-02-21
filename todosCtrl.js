angular.module('myApp').controller('todosCtrl', function ($scope, todosService) {
  $scope.test = todosService.test

  $scope.todos = todosService.todos
  $scope.donezos = todosService.donezos

  $scope.addTodo = function () {
    todosService.addTodoToList($scope.newTodo)
    $scope.newTodo = ''
  }

  $scope.markComplete = function (idx) {
    todosService.markTodoComplete(idx)
  }
})
