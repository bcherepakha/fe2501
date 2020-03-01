export default class AddAlarmForm {
    constructor(props) {
        this.addAlarm = this.addAlarm.bind(this);
        this.onSubmit = props.onSubmit;
        this.createForm();
    }

    render() {
        return this._$el;
    }

    createForm() {
        const $el = document.createElement('form'),
            d = new Date();

        $el.innerHTML = `
            <label>
                Будильник на время:
                <input type="text" name="time" value="${d.toLocaleTimeString()}">
            </label>
            <button type="submit">Добавить</button>
        `;

        $el.addEventListener('submit', this.addAlarm);

        this._$el = $el;
    }

    addAlarm(event) {
        event.preventDefault();

        const {value:alarmTime} = this._$el.elements.time;

        this.onSubmit(alarmTime);
    }
}
