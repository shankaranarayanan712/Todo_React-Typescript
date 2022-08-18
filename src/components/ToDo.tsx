/* eslint-disable jsx-a11y/aria-role */
/** @format */

import React from 'react';
import { todo } from '../types/common';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faCircleCheck,
	faPen,
	faTrashCan,
} from '@fortawesome/free-solid-svg-icons';

type ToDoProps = {
	toDos: todo[];
	markDone: Function;
	setUpdateData: Function;
	deleteTask: Function;
};

const ToDo = ({ toDos, markDone, setUpdateData, deleteTask }: ToDoProps) => {
	return (
		<div role='todo'>
			{toDos &&
				toDos
					.sort((a, b) => (a.id < b.id ? 1 : -1))
					.map((task, index) => {
						return (
							<React.Fragment key={task.id}>
								<div className='col taskBg' role='todoContent'>
									<div className={task.status ? 'done' : ''}>
										<span className='taskNumber'>{index + 1}</span>
										<span className='taskText'>{task.title}</span>
									</div>
									<div className='iconsWrap' role='icons'>
										<span title='Verify' onClick={(e) => markDone(task.id)}>
											<FontAwesomeIcon icon={faCircleCheck} size='lg' />
										</span>

										{task.status ? null : (
											<span title='Edit' onClick={() => setUpdateData(task)}>
												<FontAwesomeIcon icon={faPen} size='lg' />
											</span>
										)}

										<span title='Delete' onClick={() => deleteTask(task.id)}>
											<FontAwesomeIcon icon={faTrashCan} size='lg' />
										</span>
									</div>
								</div>
							</React.Fragment>
						);
					})}
		</div>
	);
};

export default ToDo;
