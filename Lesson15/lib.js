export function createElement(tag, props, text) {
    const $el = document.createElement(tag);

    if (text) {
        $el.innerText = text;
    }

    if (props && props.className) {
        for (const prop in props) {
            $el[prop] = props[prop];
        }
    }

    return $el;
};

export class Component {
    constructor(props = {}) {
        this.props = props;
        this.state = {};

        this.init();
        this.render();
    }

    init() {}

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

        this.render();
    }

    render() {}
}

const lib = {
    createElement,
    Component
}

export default lib;
