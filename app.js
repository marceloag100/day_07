var app = new Vue({
  el: '#app',
  data: {
    playerChoice: 'people',
    computerChoice: 'robot',
    winner: null,
    playerWin: false,
    wins: 0,
    loses: 0,
    rps: [
      'rock',
      'paper',
      'scissors'
    ],
    winState: {
      'rock': 'scissors',
      'paper': 'rock',
      'scissors': 'paper'
    },
    emojirep: {
      'rock': '🤜',
      'paper': '👋',
      'scissors': '✌️',
      'robot': '🤖',
      'people': '👫'
    }
  },
  methods: {
    setChoice: async function (option) {
      this.playerChoice = option
      await this.computerChoices()
      await this.whowins(this.playerChoice, this.computerChoice)
    },
    computerChoices: function () {
      var choices = this.rps
      this.computerChoice = choices[Math.floor(Math.random() * choices.length)]
    },
    whowins: function (player, computer) {
      if (player === computer) {
        this.winner = 'Draw'
      } else if (computer === this.winState[player]) {
        this.winner = 'Player'
        this.wins++
        // this.playerWin = true
      } else {
        this.winner = 'Computer'
        this.loses++
      }
    }
  }
})
