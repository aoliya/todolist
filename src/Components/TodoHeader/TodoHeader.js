import React, {Component} from 'react';
import './TodoHeader.css';

class TodoHeader extends Component {
    state = {
        search: '',
    }

    //taking only a value of input (of search)
    onSearchInputChange = ({target: {value}}) => {
        //updating state with value
        this.setState({search: value});
        //providing a func onSearch with a help of props from App
        this.props.onSearch(value);
    }

    render() {
        const {search} = this.state;
        return (
            <div className="row py-2">
                <div className="col-6">
                    <h1 className="text-primary">רשימת משימות</h1>
                </div>
                <div className="col-6">
                    <input type="text" className="form-control" placeholder="חיפוש" value={search} onChange={this.onSearchInputChange} />
                </div>
            </div>
        );
    }
}

export default TodoHeader;