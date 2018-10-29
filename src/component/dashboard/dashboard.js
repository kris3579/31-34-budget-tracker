import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as categoryActions from '../../action/category-actions';
import CategoryForm from '../category-form/category-form';
import CategoryItem from '../category-item/category-item';

class Dashboard extends React.Component {
  render() {
    console.log(this.props);
    return (
        <div>
            <CategoryForm categoryCreate={this.props.categoryCreate}/>\
            { this.props.categories.map((currentCategory, i) => <CategoryItem
                currentCategory={currentCategory} key={i}/>)}
        </div>
    );
  }
}

Dashboard.propTypes = {
  categoryCreate: PropTypes.func,
  categories: PropTypes.array,
};

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    categoryCreate: (title) => {
      dispatch(categoryActions.create(title));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
