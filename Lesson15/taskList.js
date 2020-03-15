import {Task} from './task.js';

export class TaskList {
    constructor(props = {}) {
        this.props = props;

        this.init();
        this.render();
    }

    changeProps(changedProps) {
        this.props = {
            ...this.props,
            ...changedProps
        };

        const _tasks = [];

        this.props.tasks.forEach(task => {
            const existedTask = this._tasks.find(oTask => oTask.key === task.id);

            if (existedTask) {
                existedTask.changeProps({task});

                _tasks.push(existedTask);
            } else {
                const newTask = new Task({
                    key: task.id,
                    task,
                    onCompleteTask: this.props.onCompleteTask,
                    onDeleteTask: this.props.onDeleteTask,
                    onEditTaskText: this.props.onEditTaskText
                });

                _tasks.push(newTask);
            }
        });

        this._tasks = _tasks;
        this.render();
    }

    init() {
        this._$list = document.querySelector('.todo-list');
        this._tasks = this.props.tasks.map(task => new Task({
            key: task.id,
            task,
            onCompleteTask: this.props.onCompleteTask,
            onDeleteTask: this.props.onDeleteTask,
            onEditTaskText: this.props.onEditTaskText
        }));
    }

    render() {
        this._$list.innerText = '';
        this._$list.append(...this._tasks.map(task => task.render()));
    }
}
