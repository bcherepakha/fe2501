import {Component} from './lib.js';

export class Filter extends Component {
    static defaultProps = {
        defaultFilter: '#/all'
    }

    constructor(props = {}) {
        const compiledProps = Object.assign({}, Filter.defaultProps, props);

        super(compiledProps);

        const {filter} = compiledProps;

        this.state.filter = filter;
    }

    init() {
        super.init();

        this._$filters = document.querySelectorAll('.filters a');
        this._$counter = document.querySelector('.todo-count strong');

        console.log(this);
    }
}
