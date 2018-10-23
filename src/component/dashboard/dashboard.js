import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as categoryActions from '../../action/category-actions';
import CategoryForm from '../category-form/category-form';
import CategoryItem from '../category-item/category-item';

class Dashboard extends React.Component {
    handleRemoveCategory = (categoryToRemove) => {
        this.setState((previousState) => {
            return (
                this.props.categories: previousState.props.categories.filter(currentCategory => currentCategory.id !== categoryToRemove.id)
            )
        })
    };

  render() {
    console.log(this.props);
    return (
            <div>
                <CategoryForm onComplete={this.props.categoryCreate}/>
                <ul>
                    { this.props.categories.map(currentCategory => <CategoryItem
                        currentCategory={currentCategory}
                        handleRemoveCategory={this.handleRemoveCategory}
                    />)}  {/*eslint-disable-line*/}
                </ul>
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
    categories: state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    categoryCreate: (category) => {
      dispatch(categoryActions.create(category));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);