// components/OmTetris.vue

<template>
  <div class="game-container">
    <div class="game-info">
      <div class="score">Score: {{ score }}</div>
      <div class="level">Level: {{ level }}</div>
      <button class="start-button" @click="toggleGame">{{ isPlaying ? 'Pause' : 'Start' }}</button>
    </div>
    <div class="game-board" ref="gameBoard" tabindex="0" @keydown.prevent="handleKeyDown">
      <div v-for="(row, y) in displayBoard" :key="`row-${y}`" class="row">
        <div 
          v-for="(cell, x) in row" 
          :key="`cell-${x}-${y}`" 
          class="cell"
          :class="{ 'filled': cell !== 0, [`om-${cell}`]: cell !== 0 }"
        >
          <span v-if="cell !== 0" class="om-symbol">ॐ</span>
        </div>
      </div>
    </div>
    <div class="game-controls">
      <button @click="moveLeftSingle">←</button>
      <button @click="rotateSingle">↻</button>
      <button @click="moveRightSingle">→</button>
      <button @click="moveDown">↓</button>
    </div>
    <div v-if="gameOver" class="game-over">
      <h2>Game Over</h2>
      <p>Your score: {{ score }}</p>
      <button @click="resetGame">Play Again</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';

// Board dimensions
const ROWS = 20;
const COLS = 10;

// Game state
const board = ref(Array(ROWS).fill().map(() => Array(COLS).fill(0)));
const activePiece = ref(null);
const activePiecePosition = ref({ x: 0, y: 0 });
const score = ref(0);
const level = ref(1);
const isPlaying = ref(false);
const gameOver = ref(false);
const gameInterval = ref(null);
const gameBoard = ref(null);

// Control flags to prevent double processing
const isMoving = ref(false);
const isRotating = ref(false);

// OM piece configurations - will use numbers 1-4 to represent different rotations
const omPieces = [
  // Single OM piece with different rotations (1-4)
  [
    [1, 0],
    [0, 0]
  ]
];

// Game speed based on level
const speed = computed(() => Math.max(100, 800 - (level.value - 1) * 50));

// Computed board that includes the active piece
const displayBoard = computed(() => {
  // Create a deep copy of the current board
  const display = JSON.parse(JSON.stringify(board.value));
  
  // If there's an active piece, add it to the display
  if (activePiece.value) {
    for (let y = 0; y < activePiece.value.length; y++) {
      for (let x = 0; x < activePiece.value[y].length; x++) {
        if (activePiece.value[y][x] !== 0) {
          const boardY = activePiecePosition.value.y + y;
          const boardX = activePiecePosition.value.x + x;
          
          // Only draw if within bounds
          if (boardY >= 0 && boardY < ROWS && boardX >= 0 && boardX < COLS) {
            display[boardY][boardX] = activePiece.value[y][x];
          }
        }
      }
    }
  }
  
  return display;
});

// Initialize game
onMounted(() => {
  gameBoard.value?.focus();
  
  // Handle keyboard events at the document level
  window.addEventListener('keydown', handleKeyDown);
  
  // Start with a piece ready
  spawnNewPiece();
});

onUnmounted(() => {
  clearInterval(gameInterval.value);
  window.removeEventListener('keydown', handleKeyDown);
});

// Generate a random OM piece
const generateRandomPiece = () => {
  // Get the base piece
  const piece = JSON.parse(JSON.stringify(omPieces[0]));
  
  // Randomly assign one of the 4 orientations to the OM symbol
  const randomOrientation = Math.floor(Math.random() * 4) + 1;
  
  // Find the cell with the OM symbol and update its orientation
  for (let y = 0; y < piece.length; y++) {
    for (let x = 0; x < piece[y].length; x++) {
      if (piece[y][x] !== 0) {
        piece[y][x] = randomOrientation;
        break;
      }
    }
  }
  
  return piece;
};

// Spawn a new piece at the top of the board
const spawnNewPiece = () => {
  activePiece.value = generateRandomPiece();
  activePiecePosition.value = {
    x: Math.floor(COLS / 2) - 1,
    y: 0
  };
  
  // Check if the new piece can be placed
  if (!isValidMove(activePiece.value, activePiecePosition.value)) {
    gameOver.value = true;
    isPlaying.value = false;
    clearInterval(gameInterval.value);
  }
};

// Check if the piece's move is valid
const isValidMove = (piece, position) => {
  for (let y = 0; y < piece.length; y++) {
    for (let x = 0; x < piece[y].length; x++) {
      if (piece[y][x] !== 0) {
        const newX = position.x + x;
        const newY = position.y + y;
        
        // Check boundaries
        if (newX < 0 || newX >= COLS || newY < 0 || newY >= ROWS) {
          return false;
        }
        
        // Check collision with other pieces
        if (board.value[newY][newX] !== 0) {
          return false;
        }
      }
    }
  }
  return true;
};

// Place the piece on the board
const placePiece = () => {
  for (let y = 0; y < activePiece.value.length; y++) {
    for (let x = 0; x < activePiece.value[y].length; x++) {
      if (activePiece.value[y][x] !== 0) {
        board.value[activePiecePosition.value.y + y][activePiecePosition.value.x + x] = activePiece.value[y][x];
      }
    }
  }
  checkLines();
  spawnNewPiece();
};

// Move the piece down
const moveDown = () => {
  if (!isPlaying.value || gameOver.value) return;
  
  const newPosition = {
    x: activePiecePosition.value.x,
    y: activePiecePosition.value.y + 1
  };
  
  if (isValidMove(activePiece.value, newPosition)) {
    activePiecePosition.value = newPosition;
  } else {
    placePiece();
  }
};

// Move the piece left - with debounce
const moveLeftSingle = () => {
  if (!isPlaying.value || gameOver.value || isMoving.value) return;
  isMoving.value = true;
  
  const newPosition = {
    x: activePiecePosition.value.x - 1,
    y: activePiecePosition.value.y
  };
  
  if (isValidMove(activePiece.value, newPosition)) {
    activePiecePosition.value = newPosition;
  }
  
  // Reset the moving flag after a short delay
  setTimeout(() => {
    isMoving.value = false;
  }, 100);
};

// Move the piece right - with debounce
const moveRightSingle = () => {
  if (!isPlaying.value || gameOver.value || isMoving.value) return;
  isMoving.value = true;
  
  const newPosition = {
    x: activePiecePosition.value.x + 1,
    y: activePiecePosition.value.y
  };
  
  if (isValidMove(activePiece.value, newPosition)) {
    activePiecePosition.value = newPosition;
  }
  
  // Reset the moving flag after a short delay
  setTimeout(() => {
    isMoving.value = false;
  }, 100);
};

// Rotate the piece - with debounce
const rotateSingle = () => {
  if (!isPlaying.value || gameOver.value || isRotating.value) return;
  isRotating.value = true;
  
  // Create a deep copy of the active piece
  const rotatedPiece = JSON.parse(JSON.stringify(activePiece.value));
  
  // Find the OM symbol in the piece
  for (let y = 0; y < rotatedPiece.length; y++) {
    for (let x = 0; x < rotatedPiece[y].length; x++) {
      if (rotatedPiece[y][x] !== 0) {
        // Cycle through orientations 1->2->3->4->1
        rotatedPiece[y][x] = (rotatedPiece[y][x] % 4) + 1;
        break;
      }
    }
  }
  
  if (isValidMove(rotatedPiece, activePiecePosition.value)) {
    activePiece.value = rotatedPiece;
  }
  
  // Reset the rotating flag after a short delay
  setTimeout(() => {
    isRotating.value = false;
  }, 100);
};

// Check for completed lines
const checkLines = () => {
  let linesCleared = 0;
  
  for (let y = ROWS - 1; y >= 0; y--) {
    // Check if the row has all cells filled (any non-zero value)
    let isComplete = board.value[y].every(cell => cell !== 0);
    
    // Now check if all cells in the row are in the correct orientation (value 1)
    let isCorrectOrientation = board.value[y].every(cell => cell === 1);
    
    if (isComplete && isCorrectOrientation) {
      // Clear the line
      board.value.splice(y, 1);
      board.value.unshift(Array(COLS).fill(0));
      linesCleared++;
      y++; // Check the same row again as rows shift down
    }
  }
  
  if (linesCleared > 0) {
    // Update score - more points for clearing multiple lines at once
    const points = [100, 300, 500, 800];
    score.value += points[Math.min(linesCleared, 4) - 1] * level.value;
    
    // Level up every 10 lines
    if (Math.floor(score.value / 1000) > level.value - 1) {
      level.value = Math.floor(score.value / 1000) + 1;
      // Update game speed
      if (isPlaying.value) {
        clearInterval(gameInterval.value);
        startGameLoop();
      }
    }
  }
};

// Handle keyboard controls
const handleKeyDown = (event) => {
  if (gameOver.value) return;
  
  // Prevent default to avoid browser scrolling with arrow keys
  event.preventDefault();
  
  switch (event.key) {
    case 'ArrowLeft':
      moveLeftSingle();
      break;
    case 'ArrowRight':
      moveRightSingle();
      break;
    case 'ArrowDown':
      moveDown();
      break;
    case 'ArrowUp':
      rotateSingle();
      break;
    case ' ': // Space bar
      toggleGame();
      break;
  }
};

// Start the game loop
const startGameLoop = () => {
  gameInterval.value = setInterval(moveDown, speed.value);
};

// Toggle game play/pause
const toggleGame = () => {
  if (gameOver.value) {
    resetGame();
    return;
  }
  
  isPlaying.value = !isPlaying.value;
  
  if (isPlaying.value) {
    if (!activePiece.value) {
      spawnNewPiece();
    }
    startGameLoop();
    gameBoard.value?.focus();
  } else {
    clearInterval(gameInterval.value);
  }
};

// Reset the game
const resetGame = () => {
  board.value = Array(ROWS).fill().map(() => Array(COLS).fill(0));
  score.value = 0;
  level.value = 1;
  gameOver.value = false;
  activePiece.value = null;
  clearInterval(gameInterval.value);
  spawnNewPiece();
  isPlaying.value = true;
  startGameLoop();
  gameBoard.value?.focus();
};
</script>

<style scoped>
.game-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Arial', sans-serif;
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  margin-top: 100px;
}

.game-info {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
}

.score, .level {
  font-size: 1.2rem;
  font-weight: bold;
}

.start-button {
  padding: 5px 15px;
  background-color: #ff9900;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.game-board {
  border: 2px solid #333;
  background-color: #f8f3e6;
  width: 300px;
  height: 600px;
  display: flex;
  flex-direction: column;
  outline: none;
}

.row {
  display: flex;
  height: 30px;
}

.cell {
  width: 30px;
  height: 30px;
  border: 1px solid #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
}

.filled {
  background-color: #ffd700;
  color: #800000;
}

.om-symbol {
  display: block;
  font-size: 24px;
  line-height: 1;
}

/* Different rotation styles */
.om-1 .om-symbol {
  transform: rotate(0deg);
  display: inline-block;
}

.om-2 .om-symbol {
  transform: rotate(90deg);
  display: inline-block;
}

.om-3 .om-symbol {
  transform: rotate(180deg);
  display: inline-block;
}

.om-4 .om-symbol {
  transform: rotate(270deg);
  display: inline-block;
}

.game-controls {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
}

.game-controls button {
  width: 50px;
  height: 50px;
  font-size: 24px;
  background-color: #f9a825;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: white;
}

.game-over {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  z-index: 10;
}

.game-over button {
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #ff9900;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
