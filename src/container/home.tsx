/** @format */

import { useState } from 'react';
import AddTaskForm from '../components/AddTaskForm';
import UpdateForm from '../components/UpdateForm';
import ToDo from '../components/ToDo';
import React from 'react';
import { todo } from '../types/common';

function Home() {
	//////////////////////////
	const [toDo, setToDo] = useState<Array<todo>>([
		{ id: 1, title: 'Task 1', status: false },
		{ id: 2, title: 'Task 2', status: false },
	]);

	// Temp State
	/////////////
	const [newTask, setNewTask] = useState<string>('');
	const [updateData, setUpdateData] = useState<todo | null>();

	// Add task
	///////////
	const addTask = () => {
		if (newTask) {
			let num = toDo.length + 1;
			setToDo([...toDo, { id: num, title: newTask, status: false }]);

			setNewTask('');
		}
	};

	// Delete task
	//////////////
	const deleteTask = (id: number) => {
		setToDo(toDo.filter((task) => task.id !== id));
	};

	// Mark task as done or completed
	/////////////////////////////////
	const markDone = (id: number) => {
		setToDo(
			toDo.map((task) =>
				task.id === id ? { ...task, status: !task.status } : task
			)
		);
	};

	// Cancel update
	////////////////
	const cancelUpdate = () => {
		setUpdateData(null);
	};

	// Change task for update
	/////////////////////////
	const changeHolder = (e: any) => {
		setUpdateData({ ...updateData, title: e.target.value } as todo);
	};

	// Update task
	//////////////
	const updateTask = () => {
		let removeOldRecord = [...toDo].filter(
			(task) => task.id !== updateData?.id
		);
		setToDo([...removeOldRecord, updateData as todo]);

		setUpdateData(null);
	};

	return (
		<div className='container App'>
			<br />
			<br />
			<h2>To Do List</h2>
			<br />
			<br />

			{updateData && updateData ? (
				<UpdateForm
					updateData={updateData}
					changeHolder={changeHolder}
					updateTask={updateTask}
					cancelUpdate={cancelUpdate}
				/>
			) : (
				<AddTaskForm
					newTask={newTask}
					setNewTask={setNewTask}
					addTask={addTask}
				/>
			)}

			{toDo && toDo.length ? '' : 'No Tasks...'}

			<ToDo
				toDos={toDo}
				markDone={markDone}
				setUpdateData={setUpdateData}
				deleteTask={deleteTask}
			/>
		</div>
	);
}

export default Home;
