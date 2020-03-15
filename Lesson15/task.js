import {createElement} from './lib.js';

export class Task {
    constructor(props = {}) {
        const {task = {}} = props,
            {
                completed = false,
                text = 'unknown task',
                id = null
            } = task;

        this.props = props;

        this.key = props.key;

        this.state = {
            id,
            text,
            completed,
            editable: false
        };

        this.changeCompletion = this.changeCompletion.bind(this);
        this.destroyTask = this.destroyTask.bind(this);
        this.editTaskToggle = this.editTaskToggle.bind(this);
        this.changeTaskText = this.changeTaskText.bind(this);

        this.init();
    }

    init() {
        this.createTaskElement();
    }

    createTaskElement() {
        const {text, completed} = this.state,
            viewEl = createElement('div', {className: 'view'}),
            formEl = createElement('form'),
            taskEl = createElement('li', null, ''),
            toggleEl = createElement('input', {className: 'toggle', type: 'checkbox'}),
            taskTextEl = createElement('span', null, text),
            destroyEl = createElement('button', {className: 'destroy'}),
            editEl = createElement('input', {className: 'edit', value: text}),
            changeBtn = createElement('button', {className: 'visually-hidden', type: 'submit'}, 'Изменить');

        toggleEl.checked = completed;
        viewEl.append(toggleEl, taskTextEl, destroyEl);
        formEl.append(editEl, changeBtn);
        taskEl.append(viewEl, formEl);

        toggleEl.addEventListener('change', this.changeCompletion);
        destroyEl.addEventListener('click', this.destroyTask);
        taskTextEl.addEventListener('click', this.editTaskToggle);
        formEl.addEventListener('submit', this.changeTaskText);

        this._$el = taskEl;
        this._$toggle = toggleEl;
        this._$taskText = taskTextEl;
        this._$edit = editEl;
    }

    render() {
        const {text, completed, editable} = this.state;

        this._$toggle.checked = completed;
        this._$taskText.innerText = text;
        this._$edit.value = text;

        if (editable) {
            this._$el.classList.add('editing');
        } else {
            this._$el.classList.remove('editing');
        }

        return this._$el;
    }

    setState(changesInState) {
        this.state = {
            ...this.state,
            ...changesInState
        };

        this.render();
    }

    changeProps(changedProps) {
        this.props = {
            ...this.props,
            ...changedProps
        };

        if (changedProps.task) {
            const {task = {}} = this.props,
                {
                    completed = this.state.completed,
                    text = this.state.text,
                    id = this.state.id
                } = task;

            this.setState({
                completed,
                text,
                id
            });
        }

    }

    changeCompletion() {
        if (this.props.onCompleteTask) {
            this.props.onCompleteTask(this.state.id, this._$toggle.checked);
        }
    }

    destroyTask() {
        if (this.props.onDeleteTask) {
            this.props.onDeleteTask(this.state.id);
        }
    }

    editTaskToggle() {
        this.setState({
            editable: true
        });
    }

    changeTaskText(event) {
        event.preventDefault();

        const {value} = this._$edit;

        this.setState({
            editable: false
        });

        if (this.props.onEditTaskText) {
            this.props.onEditTaskText(this.state.id, value);
        }
    }
}
