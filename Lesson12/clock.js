export class Clock {
    constructor(props) {
        // this = {}

        this.timeOffset = props.timeOffset;
        this._$el = this.createClockElement();
        this.changeTime();
        this.start();

        // return this;
    }

    start() {
        this.changeTime();
        setTimeout(this.start.bind(this), 1000);
    }

    getTimeAsString() {
        return this.currentTime.toLocaleString();
    }

    createClockElement() {
        const $el = document.createElement('div');

        return $el;
    }

    changeTime(newTime = new Date()) {
        const currentTime = new Date(newTime),
            {timeOffset} = this;

        if (timeOffset) {
            currentTime.setHours( currentTime.getHours() + timeOffset );
        }

        this.currentTime = currentTime;
        this.render();
    }

    render() {
        this._$el.innerText = this.getTimeAsString();

        return this._$el;
    }
}
