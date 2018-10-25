import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CategoryUpdateForm from '../category-update-form/category-update-form';
import ExpenseItem from '../expense-item/expense-item';
import ExpenseForm from '../expense-form/expense-form';
import * as categoryActions from '../../action/category-actions';
import * as expenseActions from '../../action/expense-actions';

class CategoryItem extends React.Component {
  render() {
    // const categoryExpenses = this.props.expenses[this.props.currentCategory.id];
    return (
        <section>
            <p>{this.props.currentCategory.title}</p>
            <button onClick={this.props.categoryRemove.bind(null, this.props.currentCategory)}>
                Delete Category
            </button>
            {console.log(this.props.currentCategory.expenses)}
            {this.props.currentCategory.expenses.map((currentExpense, i) => <ExpenseItem
                currentExpense={currentExpense}
                key={i}
            />)}
            <ExpenseForm
                currentCategory={this.props.currentCategory}
                expenseCreate={this.props.expenseCreate}
            />
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
    expenseCreate: (title) => {
      dispatch(expenseActions.create(title));
    },
  };
};

CategoryItem.propTypes = {
  categoryRemove: PropTypes.func,
  categoryUpdate: PropTypes.func,
  currentCategory: PropTypes.object,
  expenseCreate: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);
