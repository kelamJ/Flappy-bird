const canvas = document.getElementById('game-canavs');
let platFormGap = 0;
let score = 0;
let highScore = 0;

class Doodler {
    constructor() {
        this.context = canvas.getContext("2d");
        this.x = canvas.width /2;
        this.y = canvas.height - 200;
        this.image = new Image();
        this.image.src = 'assets/doodler-right.png'
        this.prevY = this.y;
        this.width = 50;
        this.height = 50;
        this.vx = 0;
        this.vy = 0;
        this.gravity = 0.03;
        this.jumpStrength = -2.5;
    }

    // function wich updates the position of the doodler
    updatePosition() {
        this.prevY = this.y;
        this.x += this.vx;
        this.y += this.vy;
        if(this.vy > 3.5) {
            this.vy = 3.5;
        } else {
            this.vy += this.gravity;
        }

        this.checkForWrapDoodler();
    }

    //function which checks wheter our doodler is outside the canvas horizontally f.e
    // doodler leaves the canvas to the left he will enter back into it on the right and vice versa
    checkForWrapDoodler() {
        // TODO
    }

    checkCollisionWithPlatforms() {
        // TODO
    }

    jump() {
        // TODO
    }

    moveRight() {
        this.vx += 4;
        this.image.src = 'assets/doodler-right.png'
    }

    moveLeft() {
        this.vx += 4;
        this.image.src = 'assets/doodler-left.png'
    }


    draw() {
        this.content.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
}

class Platform {
    // constructor for the class platform x for the horizontal
    // and y for the vertical position
    constructor(x, y ) {
        this.context = canvas.getContext("2d");
        this.image = new Image();
        this.image.src = 'assets/background.png';
        this.x = x;
        this.y = y;
        this.width = 100;
        this.height = 20;
    }

    updatePosition() {
        // TODO
    }

    draw() {
        this.context.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
}

let platForms = [];
const doodler = new Doodler();

// helper function to get us a random number in between two numbers we need
// to position the platform later on
function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// to display the end menu we saw previously
function showEndMenu() {
    // TODO
}

function hideEndMenu() {
    // TODO
}

// this is a fucntion which adds us all the listeners we need to be able to play 
// doodle jump
function addListeners() {
    document.addEventListener('keydown', function(event) {
        if(event.code === "ArrowLeft") {
            doodler.moveLeft();
        } else {
            doodler.moveRight();
        }
    });

    document.addEventListener('keyup', function(event) {
        if(event.code === "ArrowLeft" || event.code === "ArrowRight") {
            doodler.vx = 0;
        }
    });

    document.getElementById("retry").addEventListener('click', function() {
        hideEndMenu();
        resetGame();
        // start loop here
    }); 
}

// this is a fucntion which will create us the platforms for the begining
// the platformgap here will be needed so the platforms dont stack on top
// of each other and to position them vertically
function createPlatforms() {
    platFormGap = Math.round(canvas.height / platFormCount);

    for(let i = 0; i < platFormCount; i++) {
        // now we will add here a do while loop
        // it is needed so we create the platfomrs always to the left and right and not in the middle,
        //which is important in the begining of the game
        let xpos = 0;
        do {
            xpos = randomInteger(25, canvas.width - 25 - 100);
        } while (
            xpos > canvas.width / 2 - 100 * 1.5 &&
            xpos < canvas.width / 2 + 100 / 2
        )
        let y = (canvas.height / 1.5) - i * platFormGap;
        platForms.push(new Platform(xpos, y));
    }
}

// we push as first platform a platform exactly there where the doodler
// is so we can then strat the gamle when we move left or right
function setup() {
    platForms.push(new Platform(doodler.x, (doodler.y + 20)));
    createPlatforms(6);
}


function resetGame() {
    //TODO
}

function loop() {
    doodler.context
}