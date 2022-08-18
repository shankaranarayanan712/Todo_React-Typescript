import React from 'react';
import {  render, screen } from '@testing-library/react';
import Adapter from 'enzyme-adapter-react-15';
import ToDo from '../components/ToDo';
import { configure  } from "enzyme";
configure({adapter: new Adapter()});
describe('Todo Component Tests', () => {
    const clickMock = jest.fn();
    const todoList = [{ id: 1, title: 'Task 15', status: false },{ id: 2, title: 'Task 151', status: true }]

  test('Renders Todo component', () => {
   
    render(<ToDo toDos={[]} markDone={clickMock} setUpdateData={clickMock} deleteTask={clickMock} />);
    const divElement = screen.getByRole('todo');
    expect(divElement).toBeInTheDocument();
  });
  test('Renders the component Input field value', () => {
      const { getAllByRole } =render(<ToDo toDos={todoList} markDone={clickMock} setUpdateData={clickMock} deleteTask={clickMock} />);
      // eslint-disable-next-line testing-library/prefer-screen-queries
      const listItems = getAllByRole('todoContent')
      expect(listItems).toHaveLength(2)
    
  });
    
});
