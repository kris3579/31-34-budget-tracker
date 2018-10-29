export const create = (title, categoryId) => {
  return {
    type: 'EXPENSE_CREATE',
    payload: {
      id: Math.random(),
      title,
      categoryId,
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
