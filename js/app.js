// Enemies our player must avoid
/*var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images

    this.sprite = 'images/enemy-bug.png';
};*/
class Enemy{
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.dt = Math.floor(Math.random() * 2 + 1) 
        this.sprite = 'images/enemy-bug.png';
    }
}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Player{

    constructor(x,y){
        this.x = x;
        this.y = y;
        this.sprite = 'images/char-boy.png';
        //this.lives = 3;
        //this.points = 0;
    }

    update(){

    }

    render(){
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }

    handleInput(input) {
        switch (input) {
            case 'left':
                if (this.x > 0) {
                    this.x -= 100;
                }
                break;
            case 'right':
                if (this.x < 399) {
                    this.x += 100;
                }
                break;
            case 'up':
                if (this.y > 0) {
                    this.y -= 85;
                }
                break;
            case 'down':
                if (this.y < 399) {
                    this.y += 85;
                }
                break;
        }
        this.render();
    }
}


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
const enemy1 = new Enemy(-100, 60);
const enemy2 = new Enemy(-100, 145);
const enemy3 = new Enemy(-100, 230);
const enemy4 = new Enemy(-290, 60)
const enemy5 = new Enemy(-290, 145)
const enemy6 = new Enemy(-280, 230)
const allEnemies = [enemy1, enemy2, enemy3, enemy4, enemy5, enemy6];

const player = new Player(200, 400);


document.addEventListener("DOMContentLoaded", function(event) {
    player.render();
});

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});