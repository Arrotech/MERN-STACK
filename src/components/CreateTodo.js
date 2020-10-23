import { Label } from '@material-ui/icons';
import Button from '@material-ui/core/Button';
import React, { Component } from 'react'
import '../assets/css/CreateTodo.css'
import axios from 'axios'

export default class CreateTodo extends Component {

    constructor(props) {
        super(props);

        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeResponsible = this.onChangeResponsible.bind(this);
        this.onChangePriority = this.onChangePriority.bind(this);
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            title: '',
            description: '',
            responsible: '',
            priority: '',
            completed: false
        }
    }

    onChangeTitle(e) {
        this.setState({
            title: e.target.value
        })
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        })
    }

    onChangeResponsible(e) {
        this.setState({
            responsible: e.target.value
        })
    }

    onChangePriority(e) {
        this.setState({
            priority: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        const newTodo = {
            title: this.state.title,
            description: this.state.description,
            responsible: this.state.responsible,
            priority: this.state.priority,
            completed: this.state.completed
        };

        axios.post('http://localhost:4000/todos/add', newTodo)
            .then(res => console.log(res.data))

        this.setState({
            title: '',
            description: '',
            responsible: '',
            priority: '',
            completed: false
        })
    }

    render() {
        return (
            <div className="editTodo">
                <form className="createTodo__form" onSubmit={this.onSubmit}>
                    <div className="createTodo__formGroup">
                        <h3>Create Todo</h3>
                        <label>Title</label>
                        <input type="text" value={this.state.title} onChange={this.onChangeTitle} />
                    </div>
                    <div className="createTodo__formGroup">
                        <label>Description</label>
                        <input type="text" value={this.state.description} onChange={this.onChangeDescription} />
                    </div>
                    <div className="createTodo__formGroup">
                        <label>Responsible</label>
                        <input type="text" value={this.state.responsible} onChange={this.onChangeResponsible} />
                    </div>
                    <div className="createTodo__radioGroup">
                        <div className="createTodo__radioInput">
                            <input
                                type="radio"
                                name="priorityOptions"
                                id="priorityLow"
                                value="Low"
                                checked={this.state.priority === 'Low'}
                                onChange={this.onChangePriority} />
                            <label>Low</label>
                        </div>
                        <div className="createTodo__radioInput">
                            <input
                                type="radio"
                                name="priorityOptions"
                                id="priorityLow"
                                value="Medium"
                                checked={this.state.priority === 'Medium'}
                                onChange={this.onChangePriority} />
                            <label>Medium</label>
                        </div>
                        <div className="createTodo__radioInput">
                            <input
                                type="radio"
                                name="priorityOptions"
                                id="priorityLow"
                                value="High"
                                checked={this.state.priority === 'High'}
                                onChange={this.onChangePriority} />
                            <label>High</label>
                        </div>
                    </div>
                    <Button className="createTodo__button" type="submit">Create Todo</Button>
                </form>
            </div>
        )
    }
}
