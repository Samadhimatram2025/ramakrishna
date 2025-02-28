<template>
  <div class="min-h-screen bg-gradient-to-b from-saffron-100/80 to-white/80 flex flex-col items-center p-8 pt-36 text-center relative z-10">

  <div class="container mx-auto px-4 py-8">
      <div class="max-w-4xl mx-auto p-6 rounded-lg shadow-lg bg-white bg-opacity-95 border border-amber-700 relative">
        <h1 class="text-3xl font-bold text-center mb-6 text-amber-800">Wisdom Words</h1>
        <p class="text-lg text-center mb-6 text-amber-700">Rearrange the words to form wisdom sayings from great spiritual teachers.</p>
        
        <!-- Game controls -->
        <div class="mb-6 flex flex-col sm:flex-row justify-between gap-4">
          <div>
            <label class="block text-sm font-medium mb-1 text-amber-800">Select Teacher:</label>
            <select 
              class="w-full sm:w-auto p-2 border border-amber-300 rounded-md bg-amber-50 text-amber-900"
              v-model="currentAuthor"
              :disabled="gameActive"
            >
              <option v-for="author in Object.keys(quotesDB)" :key="author" :value="author">{{ author }}</option>
            </select>
          </div>
          
          <div>
            <label class="block text-sm font-medium mb-1 text-amber-800">Difficulty:</label>
            <select 
              class="w-full sm:w-auto p-2 border border-amber-300 rounded-md bg-amber-50 text-amber-900"
              v-model="difficulty"
              :disabled="gameActive"
            >
              <option v-for="level in difficultyLevels" :key="level.name" :value="level">{{ level.name }}</option>
            </select>
          </div>
          
          <div class="flex items-end">
            <button 
              class="w-full sm:w-auto py-2 px-4 bg-amber-700 text-white rounded-md hover:bg-amber-800 transition-colors"
              @click="startGame"
              :disabled="gameActive"
            >
              {{ gameComplete ? "Play Again" : "Start Game" }}
            </button>
          </div>
        </div>
        
        <!-- Timer display -->
        <div v-if="gameActive || gameComplete" class="mb-6 text-center">
          <div class="text-xl font-mono text-amber-900">
            Time: <span :class="{ 'text-green-700 font-bold': gameComplete }">
              {{ timer.toFixed(1) }}s
            </span>
          </div>
          
          <div v-if="gameComplete" class="mt-2 text-green-700 font-bold text-xl">
            Well done! You've arranged the quote correctly!
          </div>
          
          <!-- Incorrect arrangement feedback -->
          <div v-if="showIncorrectFeedback" class="mt-2 text-red-600 font-bold">
            That doesn't seem right. Try rearranging the words.
          </div>
          
          <!-- Show the original quote after completion -->
          <div v-if="gameComplete" class="mt-4 p-4 bg-amber-50 rounded-lg border border-amber-200">
            <p class="italic">"{{ originalQuote }}"</p>
            <p class="mt-2 font-semibold text-amber-800">— {{ currentAuthor }}</p>
          </div>
        </div>
        
        <!-- Game board -->
        <div v-if="gameActive || gameComplete">
          <!-- Arranged words area -->
          <div 
            class="min-h-24 p-4 mb-4 border-2 border-dashed border-amber-300 rounded-lg flex flex-wrap gap-2 bg-white bg-opacity-70"
            :class="{ 'border-red-300 bg-red-50 bg-opacity-30': showIncorrectFeedback }"
            @dragover.prevent
            @drop="(e) => handleDrop(e, arrangedWords.length, 'arranged')"
          >
            <div 
              v-for="(word, index) in arrangedWords" 
              :key="`arranged-${index}`"
              class="p-2 bg-amber-100 rounded cursor-move shadow-sm hover:shadow-md transition-shadow border border-amber-200 text-amber-900"
              draggable="true"
              @dragstart="(e) => handleDragStart(e, index, 'arranged')"
              @dragover.prevent
              @drop="(e) => handleDrop(e, index, 'arranged')"
            >
              {{ word }}
            </div>
            <div v-if="arrangedWords.length === 0" class="text-amber-400 w-full text-center py-2">
              Drag words here to arrange the quote
            </div>
          </div>
          
          <!-- Jumbled words -->
          <div 
            class="p-4 border border-amber-200 rounded-lg flex flex-wrap gap-2 bg-white bg-opacity-70"
            @dragover.prevent
            @drop="(e) => handleDrop(e, jumbledWords.length, 'jumbled')"
          >
            <div 
              v-for="(word, index) in jumbledWords" 
              :key="`jumbled-${index}`"
              class="p-2 bg-amber-50 rounded cursor-move shadow-sm hover:shadow-md transition-shadow border border-amber-100 text-amber-800"
              draggable="true"
              @dragstart="(e) => handleDragStart(e, index, 'jumbled')"
            >
              {{ word }}
            </div>
            <div v-if="jumbledWords.length === 0 && !gameComplete" class="text-amber-400 w-full text-center py-2">
              All words have been arranged
            </div>
          </div>
          
          <!-- Check button when all words are arranged but not confirmed correct -->
          <div v-if="jumbledWords.length === 0 && !gameComplete" class="mt-4 text-center">
            <button 
              class="py-2 px-4 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-colors"
              @click="checkArrangement"
            >
              Check My Answer
            </button>
          </div>
        </div>
        
        <!-- Best times display -->
        <div v-if="Object.keys(bestTimes).length > 0" class="mt-8">
          <h3 class="text-xl font-bold mb-2 text-amber-800">Best Times:</h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div v-for="(time, key) in bestTimes" :key="key" class="p-3 bg-amber-50 rounded border border-amber-200">
              <div class="font-medium text-amber-900">{{ key.split('-')[0] }} ({{ key.split('-')[1] }})</div>
              <div class="text-green-700">{{ time.toFixed(1) }}s</div>
            </div>
          </div>
        </div>
        
        <!-- Om symbol decorative elements -->
        <div class="absolute top-2 right-2 text-3xl text-amber-700 opacity-60">ॐ</div>
        <div class="absolute bottom-2 left-2 text-3xl text-amber-700 opacity-60">ॐ</div>
      </div>
    </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'WisdomWordsGame',
    
    head() {
      return {
        title: 'Wisdom Words Game',
        meta: [
          { hid: 'description', name: 'description', content: 'Arrange wisdom sayings from Sri Ramakrishna, Sri Sarada Devi, and Swami Vivekananda' }
        ]
      };
    },
    
    data() {
      return {
        // Quotes database organized by author
        quotesDB: {
          "Sri Ramakrishna": [
            "Truth is one; only it is called by different names.",
            "The winds of grace are always blowing, but you have to raise the sail.",
            "As many faiths, so many paths.",
            "Different people call on God by different names, but it is one and the same God."
          ],
          "Sri Sarada Devi": [
            "If you want peace, do not find fault with others.",
            "The mind is everything. It is in the mind alone that one feels pure and impure.",
            "Learn to make the whole world your own. No one is a stranger, my child.",
            "As you think, so you become."
          ],
          "Swami Vivekananda": [
            "Arise, awake, and stop not till the goal is reached.",
            "We are what our thoughts have made us.",
            "All power is within you; you can do anything and everything.",
            "The greatest religion is to be true to your own nature."
          ]
        },
        
        // Difficulty levels
        difficultyLevels: [
          { name: "Easy", scrambleMethod: "words", timerBonus: 1.5 },
          { name: "Medium", scrambleMethod: "phrases", timerBonus: 1.0 },
          { name: "Hard", scrambleMethod: "complex", timerBonus: 0.5 }
        ],
        
        // Game state
        difficulty: null,
        currentAuthor: "",
        originalQuote: "",
        jumbledWords: [],
        arrangedWords: [],
        gameActive: false,
        gameComplete: false,
        timer: 0,
        timerInterval: null,
        bestTimes: {},
        showIncorrectFeedback: false, // New property for feedback on incorrect arrangement
        feedbackTimeout: null // Timeout reference for clearing feedback
      };
    },
    
    created() {
      // Set initial values
      this.difficulty = this.difficultyLevels[0];
      this.currentAuthor = Object.keys(this.quotesDB)[0];
    },
    
    beforeDestroy() {
      this.clearTimer();
      this.clearFeedbackTimeout();
    },
    
    methods: {
      // Shuffle an array (Fisher-Yates algorithm)
      shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
      },
      
      // Scramble quote based on difficulty
      scrambleQuote(quote, method) {
        if (method === "words") {
          // Easy: Shuffle individual words
          return this.shuffleArray(quote.split(' '));
        } else if (method === "phrases") {
          // Medium: Create 2-3 word phrases and shuffle those
          const words = quote.split(' ');
          const phrases = [];
          
          for (let i = 0; i < words.length; i += 2) {
            if (i + 1 < words.length) {
              phrases.push(words[i] + ' ' + words[i + 1]);
            } else {
              phrases.push(words[i]);
            }
          }
          
          return this.shuffleArray(phrases);
        } else {
          // Hard: Create irregular groupings and shuffle
          const words = quote.split(' ');
          const phrases = [];
          let currentPhrase = [];
          
          words.forEach((word, index) => {
            currentPhrase.push(word);
            
            // Create irregular groupings based on word length or random chance
            if (currentPhrase.join(' ').length > 8 || Math.random() > 0.7 || index === words.length - 1) {
              phrases.push(currentPhrase.join(' '));
              currentPhrase = [];
            }
          });
          
          return this.shuffleArray(phrases);
        }
      },
      
      // Start a new game
      startGame() {
        // Clear any feedback
        this.clearFeedbackTimeout();
        this.showIncorrectFeedback = false;
        
        // Select a random quote from the current author
        const quotes = this.quotesDB[this.currentAuthor];
        const selectedQuote = quotes[Math.floor(Math.random() * quotes.length)];
        
        this.originalQuote = selectedQuote;
        this.jumbledWords = this.scrambleQuote(selectedQuote, this.difficulty.scrambleMethod);
        this.arrangedWords = [];
        this.gameActive = true;
        this.gameComplete = false;
        this.timer = 0;
        
        this.clearTimer();
        this.timerInterval = setInterval(() => {
          this.timer += 0.1;
        }, 100);
      },
      
      // Handle dragging a word from the list
      handleDragStart(e, index, source) {
        e.dataTransfer.setData('text/plain', JSON.stringify({ index, source }));
      },
      
      // Handle dropping a word
      handleDrop(e, targetIndex, target) {
        const data = JSON.parse(e.dataTransfer.getData('text/plain'));
        const { index: sourceIndex, source } = data;
        
        let updatedJumbled = [...this.jumbledWords];
        let updatedArranged = [...this.arrangedWords];
        
        // Hide any previous incorrect feedback
        this.showIncorrectFeedback = false;
        this.clearFeedbackTimeout();
        
        // Handle different drag sources and targets
        if (source === 'jumbled' && target === 'arranged') {
          // Move from jumbled to arranged
          const [movedItem] = updatedJumbled.splice(sourceIndex, 1);
          
          // Insert at the correct position in arranged
          if (targetIndex === -1 || targetIndex >= updatedArranged.length) {
            updatedArranged.push(movedItem);
          } else {
            updatedArranged.splice(targetIndex, 0, movedItem);
          }
        } else if (source === 'arranged' && target === 'jumbled') {
          // Move from arranged back to jumbled
          const [movedItem] = updatedArranged.splice(sourceIndex, 1);
          updatedJumbled.push(movedItem);
        } else if (source === 'arranged' && target === 'arranged') {
          // Reordering within arranged
          const [movedItem] = updatedArranged.splice(sourceIndex, 1);
          updatedArranged.splice(targetIndex, 0, movedItem);
        }
        
        this.jumbledWords = updatedJumbled;
        this.arrangedWords = updatedArranged;
      },
      
      // Check if the arrangement is correct
      checkArrangement() {
        if (this.jumbledWords.length === 0) {
          const reconstructedQuote = this.arrangedWords.join(' ');
          if (reconstructedQuote === this.originalQuote) {
            this.completeGame();
          } else {
            // Show incorrect feedback
            this.showIncorrectFeedback = true;
            
            // Clear feedback after a delay
            this.clearFeedbackTimeout();
            this.feedbackTimeout = setTimeout(() => {
              this.showIncorrectFeedback = false;
            }, 3000);
          }
        }
      },
      
      // Complete the game
      completeGame() {
        this.gameActive = false;
        this.gameComplete = true;
        this.clearTimer();
        this.showIncorrectFeedback = false;
        this.clearFeedbackTimeout();
        
        // Update best times
        const gameKey = `${this.currentAuthor}-${this.difficulty.name}`;
        const currentBest = this.bestTimes[gameKey] || Infinity;
        this.$set(this.bestTimes, gameKey, Math.min(currentBest, this.timer));
      },
      
      // Clear the timer
      clearTimer() {
        if (this.timerInterval) {
          clearInterval(this.timerInterval);
          this.timerInterval = null;
        }
      },
      
      // Clear feedback timeout
      clearFeedbackTimeout() {
        if (this.feedbackTimeout) {
          clearTimeout(this.feedbackTimeout);
          this.feedbackTimeout = null;
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .min-h-24 {
    min-height: 6rem;
  }
  
  /* Add a subtle Om symbol pattern to the component background */
  .game-container {
    position: relative;
  }
  </style>
