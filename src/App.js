import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList/TodoList';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items : [
          {id: 1, category: "courses", done: false, content: "Acheter une baguette de pain"},
          {id: 2, category: "courses", done: false, content: "Acheter une motte de beurre"},
          {id: 3, category: "Cadeaux de Noel", done: false, content: "PC + Ecran + Clavier + souris"},
      ]
    };
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.switchDone = this.switchDone.bind(this);
  }

  addTodo(item) {
    let newId = this.state.items.length + 1;
    let newItem = {id: newId, category: item.category, done: false, content: item.todo};
    this.setState({items : [...this.state.items, newItem]});
  }

  removeTodo(todoId) {
    let todos = [...this.state.items];
    todos = todos.filter(todo => todo.id !== parseInt(todoId));
    this.setState({items : todos});
  }

  switchDone(todoId) {
    let todos = [...this.state.items];
    todos.forEach(function (todo) {
      if (todo.id === parseInt(todoId)) {
        todo.done = !todo.done;
      }
    });
    this.setState({items : todos});

  }

  render() {
    return (
      <div className="App">
          <TodoList items={this.state.items} addTodo={this.addTodo} removeTodo={this.removeTodo} switchDone={this.switchDone}/>
      </div>
    );
  }
}

export default App;
