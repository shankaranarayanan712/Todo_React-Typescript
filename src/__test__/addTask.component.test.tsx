import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Adapter from 'enzyme-adapter-react-15';
import AddTaskForm from '../components/AddTaskForm';
import { configure } from "enzyme";
import userEvent from "@testing-library/user-event";
configure({adapter: new Adapter()});
describe('Add Task Component Tests', () => {
  const clickMock = jest.fn();

  test('Renders Add Task component', () => {
   
    render(<AddTaskForm newTask="Task 1" setNewTask={clickMock} addTask={ clickMock}/>);
    const divElement = screen.getByRole('addTask');
    expect(divElement).toBeInTheDocument();
  });

  test('Renders the component Input field value', () => {
    render(<AddTaskForm newTask="Task 1" setNewTask={clickMock} addTask={ clickMock}/>);
    const divElement = screen.getByRole('value');
    expect(divElement).toHaveValue("Task 1")
  });

  test('Renders the component with classes', () => {
    render(<AddTaskForm newTask="Task 1" setNewTask={clickMock} addTask={ clickMock}/>);
    const divElement = screen.getByRole('addTask');
    expect(divElement).toHaveClass('row');
  });

  test('Renders the component with classes for button', () => {
    render(<AddTaskForm newTask="Task 1" setNewTask={clickMock} addTask={ clickMock}/>);
    const divElement = screen.getByRole('addBtn');
    expect(divElement).toHaveClass('btn btn-lg btn-primary');
  }); 


});
