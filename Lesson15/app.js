import {AddTaskForm} from './addTaskForm.js';
import {TaskList} from './taskList.js';
import {Filter} from './filter.js';

class App {
    constructor() {
        this.state = {
            tasks: [
                {
                    id: 1,
                    text: 'Task 1',
                    completed: false
                },
                {
                    id: 2,
                    text: 'Task 2',
                    completed: true
                }
            ]
        }

        this.onCompleteAll = this.onCompleteAll.bind(this);
        this.onAddTask = this.onAddTask.bind(this);
        this.onCompleteTask = this.onCompleteTask.bind(this);
        this.onDeleteTask = this.onDeleteTask.bind(this);
        this.onEditTaskText = this.onEditTaskText.bind(this);

        this.init();
    }

    setState(changesInState) {
        this.state = {
            ...this.state,
            ...changesInState
        };

        this.render();
    }

    init() {
        this._addTaskForm = new AddTaskForm({
            onCompleteAll: this.onCompleteAll,
            onAddTask: this.onAddTask
        });

        this._taskList = new TaskList({
            tasks: this.state.tasks,
            onCompleteTask: this.onCompleteTask,
            onDeleteTask: this.onDeleteTask,
            onEditTaskText: this.onEditTaskText
        });

        this._filter = new Filter({
            filter: location.hash
        });
    }

    onCompleteAll(completed) {
        const newTasks = this.state.tasks.map(task => ({
            ...task,
            completed
        }));

        this.setState({
            tasks: newTasks
        });
    }

    onAddTask(task) {
        console.log('onAddTask', task);
        const newTasks = [
            ...this.state.tasks,
            {
                ...task,
                id: Date.now()
            }
        ];

        this.setState({
            tasks: newTasks
        });
    }

    onCompleteTask(taskId, completed) {
        const task = this.state.tasks.find(task => task.id === taskId);

        if (task) {
            task.completed = completed;

            this.setState({
                tasks: this.state.tasks
            });
        }
    }

    onDeleteTask(taskId) {
        const newTasks = this.state.tasks.filter(task => task.id !== taskId);

        this.setState({
            tasks: newTasks
        });
    }

    onEditTaskText(taskId, text) {
        const task = this.state.tasks.find(task => task.id === taskId);

        if (task) {
            task.text = text;

            this.setState({
                tasks: this.state.tasks
            });
        }

    }

    render() {
        this._taskList.changeProps({tasks: this.state.tasks});
    }
}

const app = new App();
