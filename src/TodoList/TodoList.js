import React, { Component } from 'react';

class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = {todo: '', category: 'courses'};
    
        this.handleChangeTodo = this.handleChangeTodo.bind(this);
        this.handleChangeCategory = this.handleChangeCategory.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
      }

    handleChangeTodo(event) {
        this.setState({todo: event.target.value})
        console.log('en cours de redaction : '+event.target.value)
    }

    handleChangeCategory(event) {
        this.setState({category: event.target.value})
        console.log('en cours de redaction category : '+event.target.value)
    }
    
    handleSubmit(event) {
        event.preventDefault();
        console.log(this.props)
        this.props.addTodo({todo: this.state.todo, category: this.state.category});
    }

    handleDelete(event) {
        event.preventDefault();
        this.props.removeTodo(event.target.id);
    }

    render() {
        let items = this.props.items.map((item) =>
            <div className="item" key={item.id}>
                <li >{item.category} - {item.content}</li>
                <button id={item.id} onClick={this.handleDelete.bind()}>Supprimer</button>
            </div>
        );
        return (
            <div className="todos">
                <h3>Ajouter une Todo</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Category:
                        <input type="text" name="category" value="courses" onChange={this.handleChangeCategory} /><br />
                    </label>
                    <label>
                        New Todo:
                        <input type="text" name="todo" onChange={this.handleChangeTodo} />
                    </label>
                    <input type="submit" value="Add" />
                </form>
                <ul>
                    { items }
                </ul>
            </div>
          );
    }
}

export default TodoList;