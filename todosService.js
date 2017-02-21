angular.module('myApp').service('todosService', function () {
  this.test = 'hey oh'

  this.todos = []
  this.donezos = []

  this.addTodoToList = function (given) {
    this.todos.push(given)
  }

  this.markTodoComplete = function (idx) {
    // this.todos = ['a', 'b', 'c']
    // this.donezos = []
    // idx = 1
    var completedTodos = this.todos.splice(idx, 1)
    // this.todos = ['a', 'c']
    // completedTodos = ['b']
    var completedTodo = completedTodos[0]
    // completedTodo = 'b'
    this.donezos.push(completedTodo)
    // this.donezos = ['b']
  }

  // return this
})
