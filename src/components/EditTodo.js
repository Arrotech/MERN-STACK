import React, { Component } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button'
import '../assets/css/EditTodo.css'

export default class EditTodo extends Component {

    constructor(props) {
        super(props);

        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeResponsible = this.onChangeResponsible.bind(this);
        this.onChangePriority = this.onChangePriority.bind(this);
        this.onChangeCompleted = this.onChangeCompleted.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            title: '',
            description: '',
            responsible: '',
            priority: '',
            completed: false
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/todos/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    title: response.data.title,
                    description: response.data.description,
                    responsible: response.data.responsible,
                    priority: response.data.priority,
                    completed: response.data.completed
                })
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    onChangeTitle(e) {
        this.setState({
            title: e.target.value
        });
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }

    onChangeResponsible(e) {
        this.setState({
            responsible: e.target.value
        });
    }

    onChangePriority(e) {
        this.setState({
            priority: e.target.value
        });
    }

    onChangeCompleted(e) {
        this.setState({
            completed: !this.state.todo_completed
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            title: this.state.title,
            description: this.state.description,
            responsible: this.state.responsible,
            priority: this.state.priority,
            completed: this.state.completed
        };
        axios.post('http://localhost:4000/todos/update/' + this.props.match.params.id, obj)
            .then(res => console.log(res.data));

        this.props.history.push('/');
    }

    render() {
        return (
            <div className="editTodo">
                <h3 align="center">Update Todo</h3>
                <form lassName="editTodo__form" onSubmit={this.onSubmit}>
                    <div className="editTodo__formGroup">
                        <label>Title</label>
                        <input type="text"
                            value={this.state.title}
                            onChange={this.onChangeTitle}
                        />
                    </div>
                    <div className="editTodo__formGroup">
                        <label>Description</label>
                        <input type="text"
                            value={this.state.description}
                            onChange={this.onChangeDescription}
                        />
                    </div>
                    <div className="editTodo__formGroup">
                        <label>Responsible</label>
                        <input
                            type="text"
                            value={this.state.responsible}
                            onChange={this.onChangeResponsible}
                        />
                    </div>
                    <div className="editTodo__radioGroup">
                        <div className="editTodo__radioInput">
                            <input
                                type="radio"
                                name="priorityOptions"
                                id="priorityLow"
                                value="Low"
                                checked={this.state.priority === 'Low'}
                                onChange={this.onChangePriority} />
                            <label>Low</label>
                        </div>
                        <div className="editTodo__radioInput">
                            <input
                                type="radio"
                                name="priorityOptions"
                                id="priorityLow"
                                value="Medium"
                                checked={this.state.priority === 'Medium'}
                                onChange={this.onChangePriority} />
                            <label>Medium</label>
                        </div>
                        <div className="editTodo__radioInput">
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
                    <div className="editTodo__completedRadioInput">
                        <input
                            id="completedCheckbox"
                            type="checkbox"
                            name="completedCheckbox"
                            onChange={this.onChangeCompleted}
                            checked={this.state.completed}
                            value={this.state.completed}
                        />
                        <label htmlFor="completedCheckbox">
                            Completed
                        </label>
                    </div>
                    <Button className="editTodo__button" type="submit">Update Todo</Button>
                </form>
            </div>
        )
    }
}