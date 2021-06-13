import {SNAKE_SPEED, update as updateSnake, draw as drawSnake, getSnakeHead, snakeIntersection} from './snake.js'
import {update as updateFood, draw as drawFood } from './food.js'
import {outsideGrid} from './grid.js'

let lastRenderTime = 0; 
let gameOver = false;
const gameBorad = document.getElementById('game-board');

function main(currentTime) {

    if(gameOver) {
        if (confirm('You Loose. Press Ok to restart.')) {
            window.location = '/';
        }
        return;
    }

    const secondsSinceLastRender = (currentTime - lastRenderTime)/1000;
    window.requestAnimationFrame(main);
    if(secondsSinceLastRender < 1/SNAKE_SPEED) {
        return;
    }

    lastRenderTime = currentTime;

    draw();
    update();

    checkDeath();
}
window.requestAnimationFrame(main);

function update() {
    updateSnake();
    updateFood();
}

function draw() {
    gameBorad.innerHTML = '';
    drawSnake(gameBorad);
    drawFood(gameBorad);
}


function checkDeath () {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
}
