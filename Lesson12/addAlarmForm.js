export default class AddAlarmForm {
    constructor(props) {
        this.songs = props.songs;
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
            <span data-type="songs"></span>
            <button type="submit">Добавить</button>
        `;

        if (this.songs) {
            const $songs = $el.querySelector('[data-type="songs"]');

            $songs.append(this.createSongsList());
        }

        $el.addEventListener('submit', this.addAlarm);

        this._$el = $el;
    }

    createSongsList() {
        const $songsList = document.createElement('select'),
            $options = this.songs.map(this.createSongOption);

        $songsList.name = 'song'
        $songsList.append(...$options);

        return $songsList;
    }

    createSongOption(songObj) {
        const $songOption = document.createElement('option');

        $songOption.value = songObj.src;
        $songOption.innerText = songObj.title;

        return $songOption;
    }

    addAlarm(event) {
        event.preventDefault();

        const {value:alarmTime} = this._$el.elements.time,
            {value:song} = this._$el.elements.song;

        this.onSubmit({
            time: alarmTime,
            song: song
        });
    }
}
