<script>
export default {
  data() {
    return {
      targetWord: '',
      guesses: Array(6).fill(''),
      currentGuess: '',
      attempt: 0,
      gameOver: false,
      message: '',
      wordList: [
        'peace', 'faith', 'truth', 'bliss', 'grace',
        'unity', 'light', 'divine', 'saint', 'prayer',
        'silence', 'devotion', 'divinity'
      ]
    }
  },
  computed: {
    wordLength() {
      return this.targetWord.length
    }
  },
  mounted() {
    this.targetWord = this.wordList[Math.floor(Math.random() * this.wordList.length)]
    console.log('Target Word:', this.targetWord, 'Length:', this.wordLength)
  },
  methods: {
    submitGuess() {
      if (this.gameOver || this.currentGuess.length !== this.wordLength) {
        console.log('Invalid guess:', this.currentGuess, 'Expected length:', this.wordLength)
        this.message = this.currentGuess.length !== this.wordLength ? `Please enter a ${this.wordLength}-letter word!` : ''
        return
      }

      this.guesses[this.attempt] = this.currentGuess.toLowerCase()
      console.log('Guess submitted:', this.currentGuess, 'Attempt:', this.attempt + 1)
      console.log('Current guesses:', this.guesses)
      this.attempt++

      if (this.currentGuess.toLowerCase() === this.targetWord) {
        this.gameOver = true
        this.message = 'Congratulations! You’ve found the Master’s word!'
      } else if (this.attempt === 6) {
        this.gameOver = true
        this.message = `Game Over! The word was "${this.targetWord}".`
      } else {
        this.message = ''
      }

      this.currentGuess = ''
    },
    getLetterStyle(row, col) {
      const guess = this.guesses[row]
      if (!guess || row >= this.attempt) return 'bg-white border-gray-300'
      const letter = guess[col]
      const targetArray = this.targetWord.split('')

      if (letter === targetArray[col]) return 'bg-green-500 text-white border-green-600'

      const targetCount = targetArray.filter(char => char === letter).length
      const guessArray = guess.split('')
      const greenMatches = guessArray.filter((char, i) => char === letter && char === targetArray[i]).length
      const yellowEligible = targetCount - greenMatches
      const priorYellow = guessArray.slice(0, col).filter(char => char === letter && char !== targetArray[col]).length

      if (targetArray.includes(letter) && priorYellow < yellowEligible) {
        return 'bg-yellow-500 text-white border-yellow-600'
      }

      return 'bg-gray-300 text-gray-800 border-gray-400'
    },
    resetGame() {
      this.targetWord = this.wordList[Math.floor(Math.random() * this.wordList.length)]
      this.guesses = Array(6).fill('')
      this.currentGuess = ''
      this.attempt = 0
      this.gameOver = false
      this.message = ''
      console.log('Game reset - New Target Word:', this.targetWord, 'Length:', this.wordLength)
    }
  }
}
</script>

<template>
  <div class="min-h-screen bg-gradient-to-b from-saffron-100/80 to-white/80 flex flex-col items-center p-8 pt-36 text-center relative z-10">
    <h1 class="text-4xl font-bold text-saffron-900 mb-6">The Master’s Words</h1>
    <p class="text-lg text-gray-600 max-w-2xl mb-4">
      Guess the {{ wordLength }}-letter word inspired by Sri Ramakrishna’s teachings. You have 6 attempts!
    </p>
    <div class="bg-white p-4 rounded-lg shadow-md max-w-2xl mb-12">
      <h3 class="text-xl font-semibold text-saffron-800 mb-2">How to Play</h3>
      <ul class="text-left text-gray-600 list-disc pl-6">
        <li>Type a {{ wordLength }}-letter word and click Enter (or press Enter key).</li>
        <li>Green: Correct letter in the right spot.</li>
        <li>Yellow: Correct letter, wrong spot.</li>
        <li>Gray: Letter not in the word.</li>
        <li>Guess the word within 6 tries!</li>
      </ul>
    </div>

    <div class="mb-16">
      <div v-for="(guess, row) in 6" :key="row" class="flex justify-center gap-2 mb-2">
        <div
          v-for="(col) in wordLength"
          :key="col"
          class="w-14 h-14 flex items-center justify-center text-2xl font-bold uppercase border-2 rounded"
          :class="getLetterStyle(row, col - 1)"
        >
          {{ guesses[row] ? guesses[row][col - 1] || '' : '' }}
        </div>
      </div>
    </div>

    <div v-if="!gameOver" class="mb-16 flex flex-col items-center gap-8">
      <input
        v-model="currentGuess"
        @keyup.enter="submitGuess"
        :maxlength="wordLength"
        :placeholder="'Enter your ' + wordLength + '-letter guess'"
        class="w-72 p-3 border-2 border-saffron-800 rounded text-center text-2xl"
        :disabled="gameOver"
      />
      <button
        @click="submitGuess"
        class="bg-saffron-800 text-white px-8 py-3 rounded-full font-semibold hover:bg-saffron-700 transition-all duration-300"
      >
        Enter
      </button>
    </div>
    <div v-if="message" class="text-2xl text-saffron-800 font-semibold mb-16">
      {{ message }}
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
