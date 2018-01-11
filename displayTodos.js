// todoList Object
var todoList = {
  todos: [],
  displayTodos: function () {
    console.log('My Todos:')
    for (var i = 0; i < this.todos.length; i++) {
      console.log(this.todos[i].todoText)
    }
    // if this.todos.length === 0
    if (this.todos.length === 0) {
      console.log('Your todo list is empty')
    } else {
      console.log('My Todos:')
      for (i = 0; i < this.todos.length; i++) {
        if (this.todos[i].completed === true) {
          console.log('(x)', this.todos[i].todoText)
        } else {
          console.log('( )', this.todos[i].todoText)
        }
      }
    }
  },
  addTodo: function (todoText) {
    this.todos.push({
      todoText: todoText, // first todoText is name of the object, second is the parameter
      completed: false
    })
    this.displayTodos()
  },
  changeTodo: function (position, todoText) {
    // this.todos[position] = newValue
    this.todos[position].todoText = todoText // 'this' points directly at todoText property nstead of full object now
    this.displayTodos()
  },
  deleteTodo: function (position) {
    this.todos.splice(position, 1)
    this.displayTodos()
  },
  toggleCompleted: function (position) {
    var todo = this.todos[position]
    todo.completed = !todo.completed // Flips from false --> true and vice versa
    this.displayTodos()
  },
  toggleAll: function () {
    var totalTodos = this.todos.length
    var completedTodos = 0

  // Get number of completed todos
    for (var i = 0; i < totalTodos; i++) {
      if (this.todos[i].completed === true) {
        completedTodos++
      }
    }
    // If  everything's true, make everything false
    if (completedTodos === totalTodos) {
     // Make everything false
      for (i = 0; i < totalTodos; i++) {
        this.todos[i].completed = false
      }
      // Otherwise, make everything true
    } else {
      for (i = 0; i < totalTodos; i++) {
        this.todos[i].completed = true
      }
    }
    this.displayTodos()
  }
}
todoList.addTodo('first')
todoList.addTodo('second')
todoList.addTodo('third')
todoList.toggleCompleted(0)
todoList.toggleAll()
