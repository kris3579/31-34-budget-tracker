import React from 'react';
import PropTypes from 'prop-types';

class CategoryForm extends React.Component {
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
        this.props.categoryCreate(this.state.title);
    };

    render() {
        return (
            <form
                onSubmit={this.handleSubmit}>
                <input
                    type='text'
                    name='title'
                    placeholder="title"
                    value={this.state.title}
                    onChange={this.handleChange}
                />
                <button type='submit'>Create Category</button>
            </form>
        );
    }
}

CategoryForm.propTypes = {
    categoryCreate: PropTypes.func,
};

export default CategoryForm;
