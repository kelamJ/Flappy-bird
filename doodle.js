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
        this.image.src
    }
}