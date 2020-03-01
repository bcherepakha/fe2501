export class Alarm {
    constructor(props) {
        this.alarmTime = this.createTime(props.time);
        this.onAlarm = props.onAlarm;
        this.isAlarm = false;
        this.createElement();
        this.check();
    }

    createTime(time) {
        const [hh = 0, mm = 0, ss = 0] = time.split(':'),
            alarmTime = new Date();

        if (alarmTime.toLocaleString() > time) {
            alarmTime.setDate( alarmTime.getDate() + 1);
        }

        alarmTime.setHours(hh);
        alarmTime.setMinutes(mm);
        alarmTime.setSeconds(ss);
        alarmTime.setUTCMilliseconds(0);

        return alarmTime;
    }

    createElement() {
        const $el = document.createElement('div');

        $el.innerText = this.alarmTime.toLocaleString();

        this.$_el = $el;
    }

    render() {
        return this.$_el;
    }

    remove() {
        this.$_el.remove();
    }

    check() {
        if (this.alarmTime.getTime() < Date.now()) {
            console.log('Alarm');
            this.isAlarm = true;
            this.onAlarm(this);
        }

        if (!this.isAlarm) {
            setTimeout(() => this.check(), 1000);
        }
    }
}
