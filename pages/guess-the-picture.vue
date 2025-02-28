<script>
export default {
  data() {
    return {
      imageOptions: [
        { id: 1, name: 'Sri Ramakrishna', src: '/spiritual-1.jpg' },
        { id: 2, name: 'Holy Mother', src: '' },
        { id: 3, name: 'Swami Vivekananda', src: '' },
        { id: 4, name: 'Meditation', src: '' },
        { id: 5, name: 'Temple Altar', src: '' },
        { id: 6, name: 'Prayer', src: '' },
        { id: 7, name: 'Sunrise', src: '' },
        { id: 8, name: 'Lotus', src: '' },
        { id: 9, name: 'Om Symbol', src: '' },
        { id: 10, name: 'Yoga Pose', src: '' }
      ],
      currentImage: { id: 1, name: 'Sri Ramakrishna', src: '/spiritual-1.jpg' },
      revealedSquares: [],
      gameOver: false,
      startTime: null,
      timeTaken: 0,
      intervalId: null,
      feedbackMessage: ''
    }
  },
  mounted() {
    this.startGame()
  },
  beforeUnmount() {
    clearInterval(this.intervalId)
  },
  computed: {
    gridSize() {
      return 10
    },
    totalSquares() {
      return this.gridSize * this.gridSize
    }
  },
  methods: {
    startGame() {
      this.currentImage = this.imageOptions[0]
      this.revealedSquares = []
      this.gameOver = false
      this.startTime = Date.now()
      this.timeTaken = 0
      this.feedbackMessage = ''
      clearInterval(this.intervalId)

      this.intervalId = setInterval(() => {
        if (!this.gameOver && this.revealedSquares.length < this.totalSquares) {
          this.revealSquare()
        }
        this.timeTaken = Math.floor((Date.now() - this.startTime) / 1000)
      }, 1000)

      setInterval(() => {
        if (!this.gameOver && this.revealedSquares.length < this.totalSquares) {
          this.revealSquare()
        }
      }, 5000)
    },
    revealSquare() {
      if (this.revealedSquares.length >= this.totalSquares) return

      let newSquare
      do {
        newSquare = {
          x: Math.floor(Math.random() * this.gridSize),
          y: Math.floor(Math.random() * this.gridSize)
        }
      } while (this.revealedSquares.some(s => s.x === newSquare.x && s.y === newSquare.y))

      this.revealedSquares.push(newSquare)
      console.log('Revealed:', this.revealedSquares.length, 'of', this.totalSquares)
    },
    guess(id) {
      if (this.gameOver) return

      this.timeTaken = Math.floor((Date.now() - this.startTime) / 1000)
      if (id === this.currentImage.id) {
        this.gameOver = true
        clearInterval(this.intervalId)
        this.feedbackMessage = `Correct! You identified "${this.currentImage.name}" in ${this.timeTaken} seconds!`
      } else {
        this.feedbackMessage = 'Incorrect, try again!'
        setTimeout(() => {
          if (!this.gameOver) this.feedbackMessage = ''
        }, 2000)
      }
    },
    resetGame() {
      this.startGame()
    }
  }
}
</script>

<template>
  <div class="min-h-screen bg-gradient-to-b from-saffron-100/80 to-white/80 flex flex-col items-center p-8 pt-36 text-center relative z-10">
    <h1 class="text-4xl font-bold text-saffron-900 mb-6">Guess the Picture</h1>
    <p class="text-lg text-gray-600 max-w-2xl mb-4">
      Identify the spiritual image as it reveals itself every 5 seconds. How quickly can you guess?
    </p>

    <div v-if="currentImage" class="relative w-96 h-96 mb-8">
      <img
        :src="currentImage.src"
        alt="Guess the Picture"
        class="w-full h-full object-cover rounded-lg shadow-md"
      />
      <div class="absolute inset-0 grid grid-cols-10 grid-rows-10">
        <template v-for="y in gridSize" :key="y">
          <div
            v-for="x in gridSize"
            :key="`${x}-${y}`"
            class="w-full h-full bg-gray-800"
            :class="{ 'opacity-0': revealedSquares.some(s => s.x === x - 1 && s.y === y - 1) }"
          ></div>
        </template>
      </div>
    </div>

    <p class="text-xl text-saffron-800 mb-6">
      Time: {{ timeTaken }} seconds
    </p>

    <p v-if="feedbackMessage" class="text-xl text-saffron-800 font-semibold mb-6">
      {{ feedbackMessage }}
    </p>

    <div v-if="!gameOver" class="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12 max-w-4xl">
      <button
        v-for="option in imageOptions"
        :key="option.id"
        @click="guess(option.id)"
        class="bg-saffron-200 text-saffron-800 px-4 py-2 rounded-lg font-semibold hover:bg-saffron-300 transition-all duration-300"
      >
        {{ option.name }}
      </button>
    </div>

    <div class="space-x-4">
      <button
        v-if="gameOver"
        @click="resetGame"
        class="bg-saffron-800 text-white px-6 py-3 rounded-full font-semibold hover:bg-saffron-700 transition-all duration-300"
      >
        Play Again
      </button>
      <NuxtLink
        to="/games"
        class="bg-saffron-800 text-white px-6 py-3 rounded-full font-semibold hover:bg-saffron-700 transition-all duration-300"
      >
        Back to Games
      </NuxtLink>
    </div>
  </div>
</template>
