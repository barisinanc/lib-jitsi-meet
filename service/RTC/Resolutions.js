const Resolutions = {
    '1080': {
        width: 1920,
        height: 1080,
        order: 9
    },
    'fullhd': {
        width: 1920,
        height: 1080,
        order: 9
    },
    '720': {
        width: 1280,
        height: 720,
        order: 8
    },
    'hd': {
        width: 1280,
        height: 720,
        order: 8
    },
    '960': {
        width: 960,
        height: 720,
        order: 7
    },
    '540': {
        width: 960,
        height: 540,
        order: 6
    },
    'qhd': {
        width: 960,
        height: 540,
        order: 6
    },

    // 16:9 resolution first.
    '360': {
        width: 640,
        height: 360,
        order: 5
    },
    '640': {
        width: 640,
        height: 480,
        order: 4
    },
    'vga': {
        width: 640,
        height: 480,
        order: 4
    },

    // 16:9 resolution first.
    '180': {
        width: 320,
        height: 180,
        order: 3
    },
    '320': {
        width: 320,
        height: 240,
        order: 2
    },
    '144': {
        width: 256,
        height: 144,
        order: 1
    },
    'lofi': {
        width: 176,
        height: 144,
        order: 1
    }
};

module.exports = Resolutions;
