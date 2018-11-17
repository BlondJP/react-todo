import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList/TodoList';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items : [
          {id: 1, category: "courses", name: "pain", content: "Acheter une baguette de pain"},
          {id: 2, category: "courses", name: "beurre", content: "Acheter une motte de beurre"},
          {id: 3, category: "Cadeaux de Noel", name: "Ordi pour Maman", content: "PC + Ecran + Clavier + souris"},
      ]
    };
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  addTodo(item) {
    let newId = this.state.items.length + 1;
    let newItem = {id: newId, category: item.category, name: item.todo, content: item.todo};
    this.setState({items : [...this.state.items, newItem]});
  }

  removeTodo(todoId) {
    let todos = [...this.state.items];
    todos = todos.filter(todo => todo.id !== parseInt(todoId));
    this.setState({items : todos});
  }

  render() {
    return (
      <div className="App">
          <TodoList items={this.state.items} addTodo={this.addTodo} removeTodo={this.removeTodo}/>
      </div>
    );
  }
}

export default App;
