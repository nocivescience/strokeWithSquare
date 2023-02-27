console.clear();
//Config
const DRAW_SIZE = 18;
const DENSITY = 1;
const LAYERS = 5;
const COLORS = [
    [1,.655,0.231],
    [1,.365,0.114],
    [.898,.078,0.392],
    [.424,.5,.114],
];
const GAMMA = 1.8;
const CLEAR_COLOR = [0,0,0,.1];
const SCROLL_TIME = 20;
const ROTATE_MIN = 0.5;
const ROTATE_MAX = 4.2;
const SIZE_MIN = 0.025;
const SIZE_MAX = 0.05;
const OFFSET_JITTER = 0.025;
const CAMERA_DISTANCE = 2.8;
const CAMERA_FOV = .7;
const CAMERA_NEAR = 1;
const CAMERA_FAR = 100;
const ASPECT_RATIO=window.innerWidth/window.innerHeight;
const COUNT_Y = Math.floor(50,DENSITY);
const COUNT_X = Math.floor(COUNT_Y*ASPECT_RATIO);
const COUNT_Z = Math.floor(LAYERS);
const COUNT_TOTAL = COUNT_X*COUNT_Y*COUNT_Z;
const BOUND_HEIGHT = 2;
const BOUND_WIDTH = COUNT_X/COUNT_Y*BOUND_HEIGHT;
const BOUND_DEPTH = COUNT_Z/COUNT_Y*BOUND_HEIGHT;
const TAU = Math.PI*2;
const random = (min,max) => Math.random()*(max-min)+min;
const interpolate = (a,b,mix) => (b-a)*mix+a;
const regl = createREGL();