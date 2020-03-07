import {Clock} from './clock.js';
import AddAlarmForm from './addAlarmForm.js';
import {Alarm} from './alarm.js';

const $app = document.querySelector('#app'),
    kievClock = new Clock({
        timeOffset: 0
    }),
    addAlarmForm = new AddAlarmForm({
        onSubmit: addAlarm,
        songs: Alarm.SONGS
    }),
    alarms = [],
    state = {};

$app.append(
    kievClock.render(),
    addAlarmForm.render()
);

function addAlarm(props) {
    const $alarm = new Alarm({
            time: props.time,
            song: props.song,
            onAlarm,
            beforeAlarm,
            onCancel: onAlarm,
            onPause: onAlarm
        }),
        hasEqualAlarm = alarms.some(function(alarm1) {
            return Alarm.isEqual(alarm1, $alarm);
        });

    if (hasEqualAlarm) {
        console.log('Alarm already exist');

        return ;
    }

    alarms.push($alarm);

    $app.append($alarm.render());
}

function onAlarm(alarm) {
    state.currentAlarm = null;
}

function beforeAlarm(alarm) {
    if (state.currentAlarm) {
        alarm.cancel();

        return false;
    }

    state.currentAlarm = alarm;
}
