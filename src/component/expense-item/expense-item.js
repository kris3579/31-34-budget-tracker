import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as expenseActions from '../../action/expense-actions';

class ExpenseItem extends React.Component {
  render() {
    return (
        <div>
            {console.log(this.props.currentExpense.title)}
            <p>{this.props.currentExpense.title}</p>
        </div>
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
    expenseRemove: (expense) => {
      dispatch(expenseActions.remove(expense));
    },
    expenseUpdate: (expense) => {
      dispatch(expenseActions.update(expense));
    },
  };
};

ExpenseItem.propTypes = {
  expenseRemove: PropTypes.func,
  expenseUpdate: PropTypes.func,
  currentExpense: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseItem);
