import React from 'react';
import PropTypes from 'prop-types';

class CategoryItem extends React.Component {
  render() {
    return (
        <li>
            <p>{this.props.currentCategory.title}</p>
            <button onClick={this.props.handleRemoveCategory.bind(null, this.props.currentCategory)}>Delete Category</button>
        </li>
    );
  }
}

CategoryItem.propTypes = {
  currentCategory: PropTypes.object,
  handleRemoveCategory: PropTypes.func,
};

export default CategoryItem;
