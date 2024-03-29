import {getInputDirection} from './input.js'


export const SNAKE_SPEED = 2; 
let newSetments = 0;

const snakeBody = [
    {x: 11, y:11},
];

export const update = () => {
    addSegments();
    const inputDirection = getInputDirection()
    for(let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i+1] = {...snakeBody[i]}
    }
    snakeBody[0].x += inputDirection.x; 
    snakeBody[0].y += inputDirection.y; 
}

export const draw = (gameBorad) => {
    snakeBody.forEach((segment) => {
        const snakeEl = document.createElement('div');
        snakeEl.style.gridRowStart = segment.y;
        snakeEl.style.gridColumnStart = segment.x;
        snakeEl.classList.add('snake');
        gameBorad.appendChild(snakeEl);
    });
}

export const expandSnake = (amount) => {
    newSetments += amount;
}

export const onSnake = (position, {ignoreHead = false} = {}) => {
    return snakeBody.some((segment, index) => {
        if(ignoreHead && index === 0) return false;
        return equalPosition(segment, position);
    })
}

const equalPosition = (a, b) =>  {
    return (a.x === b.x && a.y === b.y);
}

const addSegments = () => {
    for (let i = 0; i < newSetments; i++) {
        snakeBody.push({...snakeBody[snakeBody.length - 1]})
    }
    newSetments = 0;
}

export const getSnakeHead = () => {
    return snakeBody[0];
}

export const snakeIntersection = () => {
    return onSnake(snakeBody[0], {ignoreHead: true})
}