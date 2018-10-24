import React from 'react';
import PropTypes from 'prop-types';

class CategoryUpdateForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.state.title = this.props.currentCategory.title || '';
        this.state.updatedCategory = this.props.currentCategory;
    }

    handleChange = (event) => {
        const { value } = event.target;
        this.setState({title: value});
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.state.updatedCategory.title = this.state.title;
        this.props.categoryUpdate(this.state.updatedCategory);
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
    categoryUpdate: PropTypes.func,
    currentCategory: PropTypes.object,
};

export default CategoryUpdateForm;
