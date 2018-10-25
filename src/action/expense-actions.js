export const create = (title) => {
  return {
    type: 'EXPENSE_CREATE',
    payload: {
      id: Math.random(),
      title,
      createdOn: new Date(),
    },
  };
};

export const update = (expense) => {
  return {
    type: 'EXPENSE_UPDATE',
    payload: expense,
  };
};

export const remove = (expense) => {
  return {
    type: 'EXPENSE_REMOVE',
    payload: expense,
  };
};
