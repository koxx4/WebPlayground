'use strict';

const addTaskForm = document.querySelector('#add-task-form');
const addTaskButton = document.querySelector('#add-task-btn');
const taskList = document.querySelector('.task-list');
let taskIdCounter = 0;
let lastRemovedTask = null;

function handleAddTask(e) {
	e.preventDefault();
	const formData = new FormData(addTaskForm);
	const taskName = formData.get('task-name-input');
	const taskDesc = formData.get('task-desc-input');

	if (!taskName.trim() || !taskDesc.trim()) {
		alert('Byczku wypelnij wszystkie pola');
		return;
	}

	appendNewTask(taskName, taskDesc);
}

function removeTask(e, taskId) {
	e.preventDefault();

	$(this).modal();

	const taskToBeRemoved = $(`.task[data-task-id="${taskId}"]`);

	lastRemovedTask = taskToBeRemoved.detach();
}

function restoreLastRemovedTask(e) {
	e.preventDefault();
	e.stopPropagation();

	if (lastRemovedTask) {
		lastRemovedTask.appendTo(taskList);
		lastRemovedTask = null;
	}
}

function markTaskAsDone(e) {
	e.preventDefault();

	//Zabezpieczenie przed markowaniem zadania jako done/undone
	//gdy chcemy go usunąć
	if (e.target.classList.contains('task-delete-btn')) {
		return;
	}

	const task = e.currentTarget;

	if (task.classList.contains('task-done')) {
		task.querySelector('.task-done-date')?.remove();
	} else {
		task.querySelector('.task-header').insertAdjacentHTML(
			'beforeend',
			`<span><small class="task-done-date">Wykonano ${new Date().toLocaleString(
				'pl-PL'
			)}</small></span>`
		);
	}

	task.classList.toggle('task-done');
}

function appendNewTask(name, description) {
	const newTaskId = ++taskIdCounter;

	taskList.insertAdjacentHTML(
		'afterbegin',
		`
			<div class="task" data-task-id="${newTaskId}">
				<div class="task-header d-flex w-100 justify-content-between">
					<h5 class="mb-1">${name}</h5>
				</div>
				<div class="d-flex justify-content-between">
					<p class="mb-1">${description}</p>
					<div class="task-controls">
						<button class="task-delete-btn btn btn-danger">X</button>
					<div>
				</div>
			</div>
		`
	);

	const taskElement = taskList.querySelector(`[data-task-id="${newTaskId}"]`);

	taskElement.addEventListener('click', e => markTaskAsDone(e));

	$(taskElement)
		.find('.task-delete-btn')
		.click(e => removeTask(e, newTaskId));
}

addTaskForm.addEventListener('submit', handleAddTask);

$('#restore-task-btn').click(e => restoreLastRemovedTask(e));
