import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';

import HomePage from './components/HomePage/HomePage';

// Create a mock Redux store
const mockStore = configureStore([]);
const store = mockStore({
  expenses: [],
  theme: { darkMode: false },
});

test('renders HomePage without errors', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    </Provider>
  );

  // Add assertions to check if the component renders without errors
});

test('adds an expense on form submission', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    </Provider>
  );

  const moneySpentInput = screen.getByLabelText('Money Spent:');
  fireEvent.change(moneySpentInput, { target: { value: '50' } });

  const descriptionInput = screen.getByLabelText('Description:');
  fireEvent.change(descriptionInput, { target: { value: 'Test expense' } });

  const categorySelect = screen.getByLabelText('Category:');
  fireEvent.change(categorySelect, { target: { value: 'Food' } });

  const addExpenseButton = screen.getByText('Add Expense');
  fireEvent.click(addExpenseButton);

  // Add assertions to check if the expense is added
});

test('deletes an expense on button click', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    </Provider>
  );

  const deleteButton = screen.getByText('Delete');
  fireEvent.click(deleteButton);

  // Add assertions to check if the expense is deleted
});

// Add more test cases as needed



// import React from 'react';
// import { render } from '@testing-library/react';
// import Planetext from './components/Planetext';

// test('renders expense tracker without errors', () => {
//   const { getByText } = render(<Planetext />);
  
//   const helloText = getByText('hello word!');
//   expect(helloText).toBeInTheDocument();

//   const countText = getByText('Count: 0');
//   expect(countText).toBeInTheDocument();

//   const button = getByText('test');
//   expect(button).toBeInTheDocument();
// });
