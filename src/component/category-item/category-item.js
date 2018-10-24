import React from 'react';
import PropTypes from 'prop-types';
import CategoryUpdateForm from '../category-update-form/category-update-form';

class CategoryItem extends React.Component {
  render() {
    return (
        <li>
            <p>{this.props.currentCategory.title}</p>
            <button onClick={this.props.handleRemoveCategory.bind(null, this.props.currentCategory)}>Delete Category</button>
            <CategoryUpdateForm/>
        </li>
    );
  }
}

CategoryItem.propTypes = {
  currentCategory: PropTypes.object,
  handleRemoveCategory: PropTypes.func,
};

export default CategoryItem;
