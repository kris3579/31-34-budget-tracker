import React from 'react';
import PropTypes from 'prop-types';

class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.state.title = '';
    }

    handleChange = (event) => {
        const { value } = event.target;
        this.setState({title: value});
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.expenseCreate(this.state.title);
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    name="title"
                    placeholder="title"
                    value={this.state.title}
                    onChange={this.handleChange}
                />
                <button type="submit">Create Expense</button>
            </form>
        );
    }
}

ExpenseForm.propTypes = {
    currentCategory: PropTypes.object,
    expenseCreate: PropTypes.func,
};

export default ExpenseForm;
