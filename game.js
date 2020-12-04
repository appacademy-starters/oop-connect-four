export class Game {
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
    }
    getName() {
        return `${this.player1} vs. ${this.player2}`
    }
    
}
