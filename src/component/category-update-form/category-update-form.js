import React from 'react';
import PropTypes from 'prop-types';

const emptyState = {
    title: '',
};

class CategoryUpdateForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.category || emptyState;
    }

    handleChange = (event) => {
        const { value } = event.target;
        this.setState({title: value});
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onComplete(this.state);
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
                <button type="submit">Update Category</button>
            </form>
        );
    }
}

CategoryUpdateForm.propTypes = {
    category: PropTypes.object,
    onComplete: PropTypes.func,
};

export default CategoryUpdateForm;
