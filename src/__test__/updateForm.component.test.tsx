import React from 'react';
import {  render, screen } from '@testing-library/react';
import Adapter from 'enzyme-adapter-react-15';
import UpdateForm from '../components/UpdateForm';
import { configure  } from "enzyme";

configure({adapter: new Adapter()});
describe('Todo Component Tests', () => {
    const clickMock = jest.fn();
    const todo = { id: 1, title: 'Task 15', status: false }

  test('Renders Update Form component', () => {
    render(<UpdateForm updateData={todo} changeHolder={Function} updateTask={clickMock} cancelUpdate={clickMock }  />);
    const divElement = screen.getByRole('form');
    expect(divElement).toBeInTheDocument();
  });
});
