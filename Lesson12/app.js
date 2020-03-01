import {Clock} from './clock.js';
import AddAlarmForm from './addAlarmForm.js';
import {Alarm} from './alarm.js';

const $app = document.querySelector('#app');
const kievClock = new Clock({
        timeOffset: 0
    });
const addAlarmForm = new AddAlarmForm({
    onSubmit: addAlarm
});
const alarms = [];

$app.append(
    kievClock.render(),
    addAlarmForm.render()
);


function addAlarm(time) {
    const $alarm = new Alarm({time, onAlarm});

    alarms.push($alarm);

    $app.append($alarm.render());
}

function onAlarm(alarm) {
    alarm.remove();
}
