/** @format */

import React, { MouseEventHandler } from 'react';
import { todo } from '../types/common';

type UpdateFormProps = {
	updateData: todo;
	changeHolder: Function;
	updateTask: MouseEventHandler<HTMLButtonElement>;
	cancelUpdate: MouseEventHandler<HTMLButtonElement>;
};

const UpdateForm = ({
	updateData,
	changeHolder,
	updateTask,
	cancelUpdate,
}: UpdateFormProps) => {
	return (
		<>
			<div className='row' role='form'>
				<div className='col'>
					<input
						value={updateData && updateData.title}
						onChange={(e) => changeHolder(e)}
						className='form-control form-control-lg'
					/>
				</div>
				<div className='col-auto'>
					<button onClick={updateTask} className='btn btn-lg btn-success mr-20'>
						Update
					</button>
					<button onClick={cancelUpdate} className='btn btn-lg btn-warning'>
						Cancel
					</button>
				</div>
			</div>
			<br />
		</>
	);
};

export default UpdateForm;
