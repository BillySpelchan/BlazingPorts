TTTConsts = {
    "template": ".XO",
    "EMPTY" : 0,
    "SANTA" : 1,
    "X" : 1,
    "KRAMPUS": 2,
    "O": 2,

    // directions
    "HORIZONTAL" : 0,
    "VERTICAL" : 1,
    "RIGHT_DIAGONAL" : 2,
    "LEFT_DIAGONAL" : 3,
    "LINE_OFFSETS" : [1,3,4,2],

    // game states
    "PLAYING" : 0,
    "X_WON" : 1,
    "O_WON" : 2,
    "TIE" : 3,

    // AI Scoring of Tiles
    "TRIALS" : 5,
    "INVALID_MOVE" : -9999999
}

// ********************************************************************

class TTTState {
    constructor(state = TTTConsts.PLAYING) {
        this.state = state;
        this.winX = -1;
        this.winY = -1;
        this.winDir = 0;
    }

    setWinLine(board, x,y,direction){
        this.state = board.getTile(x,y) === TTTConsts.X ? TTTConsts.X_WON : TTTConsts.O_WON;
        this.winX = x;
        this.winY = y;
        this.winDir = direction;
    }
}

// ********************************************************************

class TTTBoard {
    constructor(s=".........") {
        this.board=[0,0,0,0,0,0,0,0,0];
        this.setFromTemplate(s);
        this.gameState = new TTTState();
    }

    checkLine(x,y,direction) {
        let index = x + y * 3;
        let startTile = this.board[index];
        if (startTile === TTTConsts.EMPTY)
            return false;
        let offset = TTTConsts.LINE_OFFSETS[direction];
        return (this.board[index+offset] === startTile) &&
            (this.board[index+offset+offset] === startTile);
    }

    clone(source) {
        for (let i = 0; i < 9; ++i)
            this.board[i] = source.board[i];
    }

    getGameState() {
        this.gameState.state = TTTConsts.PLAYING;
        // potential tie check
        let tie = true;
        for (let i = 0; i < 9; ++i)
            if (this.board[i] === TTTConsts.EMPTY)
                tie = false;
        if (tie)
            this.gameState.state = TTTConsts.TIE;

        // win check
        for(let i = 0; i < 3; ++i) {
            if (this.checkLine(i,0,TTTConsts.VERTICAL))
                this.gameState.setWinLine(this, i,0,TTTConsts.VERTICAL);
            if (this.checkLine(0,i,TTTConsts.HORIZONTAL))
                this.gameState.setWinLine(this, 0,i,TTTConsts.HORIZONTAL);
        }
        if (this.checkLine(0,0,TTTConsts.RIGHT_DIAGONAL))
            this.gameState.setWinLine(this, 0,0,TTTConsts.RIGHT_DIAGONAL);
        if (this.checkLine(2,0,TTTConsts.LEFT_DIAGONAL))
            this.gameState.setWinLine(this, 2,0,TTTConsts.LEFT_DIAGONAL);


        return this.gameState;

    }

    getTemplate() {
        let s = "";
        for (let i = 0; i < 9; ++i)
            s += TTTConsts.template.charAt(this.board[i]);
        return s;
    }

    getTile(x,y) {
        return this.board[x+y*3];
    }
    getTileByIndex(i) {
        return this.board[i];
    }

    setFromTemplate(s) {
        let sUpper = s.toUpperCase();
        for (let i = 0; i < 9; ++i) {
            let tid = TTTConsts.template.indexOf(sUpper.charAt(i));
            if (tid >= 0)
                this.board[i] = tid;
        }
    }

    setTile(x, y, value) {
        let index = x + y * 3;
        if (this.board[index] === TTTConsts.EMPTY) {
            this.board[index] = value;
            return true;
        }
        return false;
    }

    setTileByIndex(i, value) {
        this.board[i] = value;
    }


}

// ********************************************************************

class AIPlayer {
    constructor(playerID) {
        this.playerID = playerID;
    }

    findNextFreeIndex(board, startIndex = 0) {
        let index = -1;
        let nextIndex = startIndex
        do {
            if (board.getTileByIndex(nextIndex) === TTTConsts.EMPTY)
                index = nextIndex;
            nextIndex = (nextIndex+1)%9;
        } while ((index === -1) && (nextIndex !== startIndex));
        return index;
    }

    getNextMove(board, playerToMove= TTTConsts.EMPTY) {
        return this.findNextFreeIndex(board, Math.floor(Math.random() * 9));
    }
}

// ********************************************************************

class RecursivePlayer extends AIPlayer {
    constructor(playerID=TTTConsts.X, maxDepth=9) {
        super(playerID);
        this.testBoard = new TTTBoard();
    }

    scoreTiles(board, curPlayer) {
        let scores = [];

        for (let i = 0; i < 9; ++i) {
            if (board.getTileByIndex(i) === TTTConsts.EMPTY) {
                scores.push(this.scoreTile(board, i, curPlayer));
            } else
                scores.push(TTTConsts.INVALID_MOVE);
        }

        return scores;
    }

    scoreTile(board, index, curPlayer) {
        if (board.getTileByIndex(index) !== TTTConsts.EMPTY) return TTTConsts.INVALID_MOVE;
        this.testBoard.clone(board);
        this.testBoard.setTileByIndex(index, curPlayer);
        let winState = (curPlayer === TTTConsts.X) ? TTTConsts.X_WON : TTTConsts.O_WON;
        let state = this.testBoard.getGameState();
        if (state.state === TTTConsts.PLAYING) {
            // recurse
            let rboard = new TTTBoard();
            rboard.clone(this.testBoard);
            let opponent = (curPlayer === TTTConsts.X) ? TTTConsts.O : TTTConsts.X;
            let scores= this.scoreTiles(rboard, opponent);
            let highIndex = 0;
            for (let i = 1; i < 9; ++i)
            if (scores[highIndex] < scores[i])
                highIndex = i;
            return -scores[highIndex];
        }
        return (state.state === winState) ? 1 : 0;
    }

    getNextMove(board, playerToMove = TTTConsts.EMPTY) {
        let scores = this.scoreTiles(board, playerToMove);
        console.log(scores)
        // return best move
        let highIndex = 0;
        for (let i = 1; i < 9; ++i)
            if (scores[highIndex] < scores[i])
                highIndex = i;
        return highIndex;
    }
}

// ********************************************************************

class MontyPlayer extends AIPlayer {
    constructor(playerID, trials = TTTConsts.TRIALS) {
        super(playerID);
        this.testBoard = new TTTBoard();
        this.trials = trials;
    }

    buildScoreBoard(board, curPlayer) {
        let scores = [];
        for (let i = 0; i < 9; ++i)
            scores.push(this.scoreTile(board, i, curPlayer));
        return scores;
    }

    playMockGame(board, curPlayer) {
        let b = new TTTBoard(board.getTemplate());
        let state = b.getGameState();
        let p = curPlayer;
        while (state.state === TTTConsts.PLAYING) {
            b.setTileByIndex(super.getNextMove(b, p), p);
            p = (p === TTTConsts.X) ? TTTConsts.O : TTTConsts.X;
            state = b.getGameState();
        }
        return state;
    }

    /** give tile a score based on how often often it wins. 0 being neutral,
     * a negative vale being a losing tile, and a positive being a winner.
     * Number of trials based on constants
     * @param board:TTTBoard starting board state
     * @param index:number tile index to check
     * @param curPlayer player currently playing as
     * @return {number}
     */
    scoreTile(board, index, curPlayer) {
        if (board.getTileByIndex(index) !== TTTConsts.EMPTY)
            return -2 * this.trials;
        let winState = (curPlayer === TTTConsts.X) ? TTTConsts.X_WON : TTTConsts.O_WON;
        let loseState = (curPlayer === TTTConsts.X) ? TTTConsts.O_WON : TTTConsts.X_WON;
        let score = 0;
        this.testBoard.clone(board);
        this.testBoard.setTileByIndex(index, curPlayer);
        let opponent = (curPlayer === TTTConsts.X) ? TTTConsts.O : TTTConsts.X;
        for (let i = 0; i < this.trials; ++i) {
            let state = this.playMockGame(this.testBoard, opponent);
            if (state.state === winState) score += 1;
            if (state.state === loseState) score -= 1;
        }
        return score;
    }

    getNextMove(board, playerToMove= TTTConsts.EMPTY) {
        let scores = this.buildScoreBoard(board,playerToMove);
        let index = 0;
        let high = scores[0] + Math.random();
        for (let i = 1; i < 9; ++i) {
            let temp = scores[i] + Math.random();
            if (temp > high) {
                index = i;
                high = temp;
            }
        }

        return index;
    }

}
