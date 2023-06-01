export const addExpense = (expense) => {
    return {
      type: 'ADD_EXPENSE',
      payload: expense,
    };
  };
  
  export const deleteExpense = (index) => {
    return {
      type: 'DELETE_EXPENSE',
      payload: index,
    };
  };
  
  export const activatePremium = () => {
    return {
      type: 'ACTIVATE_PREMIUM',
    };
  };


export const clearExpenses = () => {
    return {
      type: 'CLEAR_EXPENSES',
    };
  };
  
  