const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const scoreDisplay = document.getElementById('score');

let snake = [{ x: 200, y: 200 }];
let direction = { x: 0, y: 0 };
let food = { x: 100, y: 100 };
let score = 0;

function drawSnake() {
    ctx.fillStyle = 'green';
    snake.forEach(segment => ctx.fillRect(segment.x, segment.y, 10, 10));
}

function drawFood() {
    ctx.fillStyle = 'red';
    ctx.fillRect(food.x, food.y, 10, 10);
}

function update() {
    const head = { x: snake[0].x + direction.x * 10, y: snake[0].y + direction.y * 10 };
    snake.unshift(head);
    if (head.x === food.x && head.y === food.y) {
        score += 10;
        scoreDisplay.textContent = `Score: ${score}`;
        placeFood();
    } else {
        snake.pop();
    }
    if (head.x < 0 || head.x >= canvas.width || head.y < 0 || head.y >= canvas.height || snakeCollision(head)) {
        resetGame();
    }
}

function snakeCollision(head) {
    return snake.slice(1).some(segment => segment.x === head.x && segment.y === head.y);
}

function placeFood() {
    food.x = Math.floor(Math.random() * canvas.width / 10) * 10;
    food.y = Math.floor(Math.random() * canvas.height / 10) * 10;
}

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawSnake();
    drawFood();
    update();
}

function resetGame() {
    snake = [{ x: 200, y: 200 }];
    direction = { x: 0, y: 0 };
    score = 0;
    scoreDisplay.textContent = 'Score: 0';
    placeFood();
}

setInterval(gameLoop, 100);

document.getElementById('startBtn').addEventListener('click', () => direction = { x: 1, y: 0 });
document.getElementById('pauseBtn').addEventListener('click', () => direction = { x: 0, y: 0 });
document.getElementById('resetBtn').addEventListener('click', resetGame);

// Basic AI logic (placeholder)
function aiMove() {
    // Simple AI logic to move towards the food
    if (food.x > snake[0].x) direction = { x: 1, y: 0 };
    else if (food.x < snake[0].x) direction = { x: -1, y: 0 };
    else if (food.y > snake[0].y) direction = { x: 0, y: 1 };
    else if (food.y < snake[0].y) direction = { x: 0, y: -1 };
}

setInterval(aiMove, 200);