export class Alarm {
    static isEqual(alarm1, alarm2) {
        return alarm1.alarmTime.getTime() === alarm2.alarmTime.getTime();
    }

    static SONGS = [
        {
            src: '/Lesson12/songs/Mellen_Gi.mp3',
            type: 'audio/mpeg',
            title: 'Song 1'
        },
        {
            src: '/Lesson12/songs/music.mp3',
            type: 'audio/mpeg',
            title: 'Song 2'
        },
        {
            src: '/Lesson12/songs/The_Lonely_Shepherd.mp3',
            type: 'audio/mpeg',
            title: 'Song 3'
        }
    ]

    constructor(props) {
        this.alarmTime = this.createTime(props.time);
        this.song = Alarm.SONGS.find((songObj) => songObj.src === props.song) || Alarm.SONGS[0];
        this.onAlarm = props.onAlarm;
        this._times = 0;

        if (props.beforeAlarm) {
            this.beforeAlarm = props.beforeAlarm;
        }

        if (props.onCancel) {
            this.onCancel = props.onCancel;
        }

        if (props.onPause) {
            this.onPauseHandler = props.onPause;
        }

        this.isAlarm = false;
        this.createElement();
        this.check();
    }

    createTime(time) {
        const [hh = 0, mm = 0, ss = 0] = time.split(':'),
            alarmTime = new Date();

        if (alarmTime.toLocaleTimeString() >= time) {
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

        $el.append(
            this.createTimeString(),
            this.createAudio(),
            this.createControls()
        );

        this.$_el = $el;
    }

    createTimeString() {
        const $el = document.createElement('span');

        $el.innerText = this.alarmTime.toLocaleString();

        this._$time = $el;

        return this._$time;
    }

    createAudio() {
        const $source = document.createElement('source'),
            $audioContainer = document.createElement('span');

        $source.src = this.song.src;
        $source.type = this.song.type;

        this._$audio = document.createElement('audio');
        this._$audio.controls = false;
        this._$audio.append($source);

        $audioContainer.innerText = this.song.title;
        $audioContainer.append( this._$audio );
        $audioContainer.style.margin = '0 0 0 12px';

        this._$audio.addEventListener('pause', this.onPause.bind(this));
        this._$audio.addEventListener('loadeddata', this.onLoadMeta.bind(this));

        return $audioContainer;
    }

    onLoadMeta() {
        this._$audio.currentTime = Math.round( this._$audio.duration - 10);
    }

    checkEvent(eventName) {
        const _self = this;

        return function () {
            console.log(eventName, _self._$audio.duration);
        }
    }

    createControls() {
        const $controls = document.createElement('span'),
            $pause = document.createElement('button'),
            $cancel = document.createElement('button');

        $pause.innerText = 'Pause';
        $cancel.innerText = 'Cancel';

        $controls.append($pause, $cancel);
        $controls.style.margin = '0 0 0 12px';
        $pause.style.marginRight = '12px';
        $pause.hidden = true;

        $pause.addEventListener('click', this.pause.bind(this));
        $cancel.addEventListener('click', this.cancel.bind(this));

        this._$pause = $pause;

        return $controls;
    }

    canAlarm() {
        return !this.isAlarm;
    }

    render() {
        return this.$_el;
    }

    remove() {
        this.$_el.remove();
    }

    startAlarm() {
        console.dir(this._$audio);

        if (this.beforeAlarm) {
            this.beforeAlarm(this);
        }

        if (!this.canAlarm()) {
            this.cancel();
            return ;
        }

        this.isAlarm = true;

        this._$pause.hidden = false;

        this._$audio.play();
    }

    check() {
        if (this.alarmTime.getTime() < Date.now()) {
            this.startAlarm();
        }

        if (!this.isAlarm) {
            setTimeout(() => this.check(), 1000);
        }
    }

    pause() {
        const newTime = new Date( Date.now() + 10000 );

        this._times++;
        this.alarmTime = newTime;
        this._$time.innerText = this.alarmTime.toLocaleString();
        this.isAlarm = false;

        this._$audio.pause();
        this._$audio.currentTime = 0;

        if (this._times === 5) {
            return this.cancel();
        }

        this.check();

        if (this.onPauseHandler) {
            this.onPauseHandler(this);
        }
    }

    cancel() {
        this.isAlarm = true;
        this.remove();

        if (this.onCancel) {
            this.onCancel(this);
        }
    }

    onPause(event) {
        if (this.isAlarm) {
            this.onAlarm(this);
        }
    }
}

// function C(props) {
//     // this = {}

//     // return this;
// }

// C.prototype.createTime = function(time) {};
// C.prototype.createElement = function() {}
// C.isEqual = function(c1, c2) {};

// const c = new C();

// console.log( c.__proto__ === C.prototype);
// console.log( c.createElement );
// console.log( c.createTime );
// console.log( c.isEqual ); // undefined
// console.log( C.isEqual );
