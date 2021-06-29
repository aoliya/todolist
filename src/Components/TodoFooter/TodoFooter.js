import React, {Component} from 'react';

class TodoFooter extends Component {
    state = {
        todoText: '',
    };

    onChangeInputTodoList = ({target: {value}}) => {
       //updating the state with a new value from input
        this.setState({todoText: value});
    };

    onSubmitForm = (e) => {
        e.preventDefault();
        const {todoText} = this.state;
        //using onAddItem from App (onAddItem = addToTodoList)
        this.props.onAddItem(todoText);
        //updating value of todoText to empty (after submit so the input form will be empty)
        //here no need callback cos we updating only one obj in state
        this.setState({todoText: ''});
    }

    render() {
        const {todoText} = this.state;
        return (
            <form className="input-group my-2" onSubmit={this.onSubmitForm}>
                <input type="text" className="form-control" placeholder="הקלד את המשימה" value={todoText}
                       onChange={this.onChangeInputTodoList}/>
                <button className="btn btn-outline-primary" type="submit">הוסף</button>
            </form>
        );
    }
}

export default TodoFooter;