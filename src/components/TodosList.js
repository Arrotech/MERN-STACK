import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import '../assets/css/TodosList.css'

const Todo = props => (
    <tr>
        <td>{props.todo.title}</td>
        <td>{props.todo.description}</td>
        <td>{props.todo.responsible}</td>
        <td>{props.todo.priority}</td>
        <td>
            <Link className="todoList__links" to={"/edit/" + props.todo._id}>Edit</Link>
        </td>
    </tr>
)

export default class TodosList extends Component {
    constructor(props) {
        super(props);
        this.state = { todos: [] };
    }
    componentDidMount() {
        axios.get('http://localhost:4000/todos/')
            .then(response => {
                this.setState({ todos: response.data.todos })
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    todoList() {
        return this.state.todos.map(function (currentTodo, i) {
            return <Todo todo={currentTodo} key={i} />
        })
    }
    render() {
        return (
            <div className="todoslist">
                <h3>Todos List</h3>
                <table className="todoslist__table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Responsible</th>
                            <th>Priority</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.todoList()}
                    </tbody>
                </table>
            </div>
        );
    }
}