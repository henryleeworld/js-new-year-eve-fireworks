const burst_child = {
    fill: {
        '#ffffff': '#ef1cec'
    },
    delay: 'rand(300, 359)',
    duration: 700,
    pathScale: 'rand(0.8, 1)',
    isSwirl: true,
    swirlSize: 'stagger(-2,2)',
    swirlFrequency: 1
};

const burst_option = {
    count: 'rand(15,20)',
    top: '100%',
    children: {
        ...burst_child
    }
};


const burst_1 = new mojs.Burst({
    ...burst_option,
    radius: {
        0: 'rand(150,170)'
    },
    x: -45,
    y: -335
});


const burst_1_2 = new mojs.Burst({
    ...burst_option,
    radius: {
        0: 'rand(150,170)'
    },
    x: -45,
    y: -335,
    children: {
        ...burst_child,
        delay: 'rand(260, 350)',
        pathScale: 'rand(0.7, 0.8)',
        degreeShift: 20
    }
});




const burst_2 = new mojs.Burst({
    ...burst_option,
    radius: {
        0: 'rand(100,150)'
    },
    x: 140,
    y: -315,
    children: {
        ...burst_child,
        fill: {
            '#ffffff': '#d8ff00'
        }
    }
});



const burst_2_2 = new mojs.Burst({
    ...burst_option,
    radius: {
        0: 'rand(100,150)'
    },
    x: 140,
    y: -315,
    children: {
        ...burst_child,
        fill: {
            '#ffffff': '#d8ff00'
        },
        delay: 'rand(260, 350)',
        pathScale: 'rand(0.7, 0.8)',
        degreeShift: 20
    }
});

const burst_tune = new mojs.Burst({
    ...burst_option,
    radius: {
        0: 'rand(100,150)'
    },
    left: 0,
    top: 0,
    x: 0,
    y: 0,
    children: {
        ...burst_child,
        delay: 'rand(0, 50)',
        fill: {
            '#ffffff': '#d8ff00'
        }
    }
});

const burst_tune_2 = new mojs.Burst({
    ...burst_option,
    radius: {
        0: 'rand(100,150)'
    },
    left: 0,
    top: 0,
    children: {
        ...burst_child,
        fill: {
            '#ffffff': '#d8ff00'
        },
        delay: 'rand(10, 150)',
        pathScale: 'rand(0.7, 0.8)',
        degreeShift: 20
    }
});

document.addEventListener('click', function(e) {
    burst_tune.
    generate().
    tune({
        x: e.pageX,
        y: e.pageY
    }).
    replay();
    burst_tune_2.
    generate().
    tune({
        x: e.pageX,
        y: e.pageY
    }).
    replay();
});

const firework_option = {
    shape: 'curve',
    fill: 'none',
    isShowStart: false,
    strokeWidth: {
        3: 0
    },
    stroke: '#ffffff',
    strokeDasharray: '100%',
    strokeDashoffset: {
        '-100%': '100%'
    },
    duration: 1000
};

const firework_1 = new mojs.Shape({
    ...firework_option,
    radius: 170,
    radiusY: 20,
    top: '100%',
    y: -165,
    angle: 75,
    onStart: function() {
        burst_1.replay(0);
        burst_1_2.replay(0);
    }
});



const firework_2 = new mojs.Shape({
    ...firework_option,
    radius: 180,
    radiusY: 50,
    top: '100%',
    x: 50,
    y: -155,
    strokeDashoffset: {
        '100%': '-100%'
    },
    angle: -60,
    delay: 200,
    onStart: function() {
        burst_2.replay(0);
        burst_2_2.replay(0);
    }
});

const underline = new mojs.Shape({
    parent: document.getElementById('title'),
    shape: 'curve',
    strokeLinecap: 'round',
    fill: 'none',
    isShowStart: false,
    strokeWidth: {
        '1em': '5em'
    },
    stroke: '#ffffff',
    strokeDasharray: '200%',
    strokeDashoffset: {
        '200%': '100%'
    },
    radius: 150,
    radiusY: 10,
    y: '1.1em',
    angle: -10,
    duration: 2000,
    delay: 1000
}).
then({
    strokeWidth: {
        '5em': '1em'
    },
    strokeDashoffset: {
        '100%': '-200%'
    },
    duration: 2000,
    delay: 10000
});

const timelineText = new mojs.Timeline({
    repeat: 2018
}).

add(underline).
play();

const timeline = new mojs.Timeline({
    repeat: 2018
}).

add([firework_1, firework_2]).
play();