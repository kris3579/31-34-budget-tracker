import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CategoryUpdateForm from '../category-update-form/category-update-form';
import * as categoryActions from '../../action/category-actions';

class CategoryItem extends React.Component {
  render() {
    // const categoryExpenses = this.props.expenses[this.props.currentCategory.id];
    return (
        <section>
            <p>{this.props.currentCategory.title}</p>
            <button onClick={this.props.categoryRemove.bind(null, this.props.currentCategory)}>
                Delete Category
            </button>
            {/*
            {categoryExpenses.map((currentExpense, i) => <Expense
            currentExpense={this.props.currentExpense}
            key={i}>)}
            */}
             {/* <ExpenseForm
             section={this.props.section}
             expenseCreate={this.props.expenseCreate}
             /> */}
             <CategoryUpdateForm
                 categoryUpdate={this.props.categoryUpdate}
                 currentCategory={this.props.currentCategory}
             />
        </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    categoryRemove: (category) => {
      dispatch(categoryActions.remove(category));
    },
    categoryUpdate: (category) => {
      dispatch(categoryActions.update(category));
    },
  };
};

CategoryItem.propTypes = {
  categoryRemove: PropTypes.func,
  categoryUpdate: PropTypes.func,
  currentCategory: PropTypes.object,
  section: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);
