export class AddTaskForm {
    constructor(props = {}) {
        const {
            completeAll = false,
            taskText = ''
        } = props;

        this.props = props;

        this.state = {
            completeAll,
            taskText
        }

        this.changeCompleteAll = this.changeCompleteAll.bind(this);
        this.changeTaskText = this.changeTaskText.bind(this);
        this.addTask = this.addTask.bind(this);

        this.init();
        this.render();
    }

    init() {
        this._$form = document.querySelector('.header');
        this._$taskText = this._$form.querySelector('.new-todo');
        this._$completeAll = this._$form.querySelector('.complete-all');

        this._$completeAll.addEventListener('change', this.changeCompleteAll);
        this._$taskText.addEventListener('input', this.changeTaskText);
        this._$form.addEventListener('submit', this.addTask);
    }

    changeCompleteAll() {
        this.setState({
            completeAll: this._$completeAll.checked
        });

        if (this.props.onCompleteAll) {
            this.props.onCompleteAll(this.state.completeAll);
        }
    }

    changeTaskText() {
        this.setState({
            taskText: this._$taskText.value
        });
    }

    addTask(event) {
        event.preventDefault();

        if (this.props.onAddTask) {
            const {completeAll, taskText} = this.state;

            this.props.onAddTask({
                text: taskText,
                completed: completeAll
            });
        }

        this.setState({
            taskText: ''
        });
    }

    setState(changesInState) {
        this.state = {
            ...this.state,
            ...changesInState
        };

        this.render();
    }

    changeProps(changedProps) {
        const {
            completeAll = this.state.completeAll,
            taskText = this.state.taskText
        } = changedProps;

        this.props = {
            ...this.props,
            ...changedProps
        };

        this.setState({
            completeAll,
            taskText
        });
    }

    render() {
        const {completeAll, taskText} = this.state;

        this._$taskText.value = taskText;
        this._$completeAll.checked = completeAll;
    }
}
