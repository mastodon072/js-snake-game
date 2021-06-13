import {onSnake, expandSnake} from './snake.js'
import {randomGridPosition} from './grid.js'

let food = getRandomFoodPosition()
const EXPANSION_RATE = 3;

export const update = () => {
    if(onSnake(food)) {
        expandSnake(EXPANSION_RATE);
        food = getRandomFoodPosition();
    }
}

export const draw = (gameBorad) => {
    const foodEl = document.createElement('div');
    foodEl.style.gridRowStart = food.y;
    foodEl.style.gridColumnStart = food.x;
    foodEl.classList.add('food');
    gameBorad.appendChild(foodEl);
}

function getRandomFoodPosition() {
    let newFoodPositon;
    while(newFoodPositon == null || onSnake(newFoodPositon)) {
        newFoodPositon = randomGridPosition();
    }
    return newFoodPositon;
}